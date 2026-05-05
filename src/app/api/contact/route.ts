import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, service, message, bookingUid } = body;

    const apiKey = process.env.g2g_contact_form;

    if (!apiKey) {
      console.error("Cal.com API key not found in environment variables.");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    if (!bookingUid) {
      console.warn("No booking UID provided. Storing data might fail if not linked to a booking.");
      // We could potentially create a new booking or lead here if Cal.com supported it,
      // but without a booking UID from the iframe, we can't update the specific meeting.
      // We will still return success to the user so the UI can proceed.
      return NextResponse.json({ success: true, warning: "No booking UID provided" });
    }

    // Prepare the updated description with the contact form details
    const updatedDescription = `
Project Details Provided:
-------------------------
Name: ${name}
Service Interested In: ${service}
Message: ${message}
    `.trim();

    // Update the booking in Cal.com using their API
    const response = await fetch(`https://api.cal.com//v2/bookings/${bookingUid}?apiKey=${apiKey}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: updatedDescription
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Failed to update Cal.com booking:", data);
      return NextResponse.json({ error: "Failed to store data in Cal.com" }, { status: response.status });
    }

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("Error in contact form API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
