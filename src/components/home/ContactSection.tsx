"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        first_name: "",
        second_name: "",
        email: "",
        service: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.target as HTMLFormElement;
        const data = new FormData(form);

        try {
            const response = await fetch("https://api.staticforms.xyz/submit", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ first_name: "", second_name: "", email: "", service: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact-section" className="sm:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Info */}
                    <div className="lg:w-1/2">
                        <h2 className="text-[36px] font-bold text-[#333] mb-4">📬 Contact Us</h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Have a project in mind or just want to say hello? Fill out the form,
                            and we’ll get back to you as soon as possible.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary flex-shrink-0">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Address:</h3>
                                    <p className="text-gray-600">123 Creative Avenue, New Delhi, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary flex-shrink-0">
                                    <FaPhoneAlt size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Phone:</h3>
                                    <p className="text-gray-600">+91 99948097037</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary flex-shrink-0">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Email:</h3>
                                    <p className="text-gray-600">natasha@therightghostwriters.com</p>
                                    <p className="text-gray-600">raghuyadav9948@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:w-1/2">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Hidden Fields for StaticForms */}
                                <input type="hidden" name="accessKey" value="sf_0bdcd5achi8a6ljne75d0h4f" />
                                <input type="hidden" name="subject" value="New Contact Form Submission!" />
                                <input type="hidden" name="replyTo" value="@" />

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            value={formData.first_name}
                                            onChange={handleChange}
                                            placeholder="John"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            name="second_name"
                                            value={formData.second_name}
                                            onChange={handleChange}
                                            placeholder="Doe"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20 outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">I&apos;m looking for *</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20 outline-none transition-all bg-white"
                                    >
                                        <option value="">-- Choose a service --</option>
                                        <option value="Paid Advertising">Paid Advertising</option>
                                        <option value="Email Marketing">Email Marketing</option>
                                        <option value="Analytics & Tracking">Analytics & Tracking</option>
                                        <option value="Strategy & Consulting">Strategy & Consulting</option>
                                        <option value="Web Design">Web Design</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="WhatsApp API">WhatsApp API</option>
                                        <option value="Video Editing">Video Editing</option>
                                        <option value="Conversion Optimization">Conversion Optimization</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "submitting" || status === "success"}
                                    className="w-full py-4 bg-[#3898ec] text-white font-bold rounded-lg hover:bg-[#2d7bc2] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                                </button>

                                {status === "success" && (
                                    <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center font-medium">
                                        ✅ Message sent successfully!
                                    </div>
                                )}
                                {status === "error" && (
                                    <div className="p-4 bg-red-50 text-red-700 rounded-lg text-center font-medium">
                                        ❌ Failed to send message. Try again later.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
