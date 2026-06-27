import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, service, message, bookingUid, type, businessName, phone, email } = body;

    const apiKey = process.env.g2g_contact_form;

    if (!apiKey) {
      console.error("Cal.com API key not found in environment variables.");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Handle Growth Audit form submissions
    if (type === "growth_audit") {
      // Log the growth audit submission (you can integrate with email service, CRM, etc.)
      console.log("Growth Audit Submission:", {
        name,
        businessName,
        phone,
        email,
        timestamp: new Date().toISOString(),
      });

      // TODO: Integrate with your email service (SendGrid, Mailgun, etc.) or CRM
      // Example: Send confirmation email to user and notification email to team

      return NextResponse.json({
        success: true,
        message: "Growth audit request received. We'll contact you soon!",
      });
    }

    // Handle regular contact form submissions
    if (!bookingUid) {
      console.warn("No booking UID provided. Storing data might fail if not linked to a booking.");
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
