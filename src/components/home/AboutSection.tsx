"use client";

import Image from "next/image";

export default function AboutSection() {
    const features = [
        "Data-driven decisions over gut feelings",
        "Transparent reporting and communication",
        "Focus on ROI and measurable results",
        "Continuous testing and optimization",
        "Long-term partnership approach",
    ];

    const team = [
        {
            role: "Strategy Director",
            experience: "10+ years in direct response",
            focus: "Campaign architecture & optimization",
            icon: "/assets/strategicdirector.svg",
        },
        {
            role: "Creative Lead",
            experience: "8+ years in conversion design",
            focus: "High-converting ad creatives",
            icon: "/assets/creativeLead.svg",
        },
        {
            role: "Analytics Expert",
            experience: "12+ years in data analysis",
            focus: "Performance tracking & insights",
            icon: "/assets/analyticsexpert.svg",
        },
    ];

    return (
        <section id="section_problems" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-[36px] md:text-[48px] font-bold text-[#333] leading-tight">
                            Built on <span className="text-[#ee9d2b]">Performance</span>, Not
                            Promises
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-600 text-lg mb-6">
                            We're not just another marketing agency. We're direct response
                            specialists who understand that every dollar you invest should
                            generate measurable returns. Our team combines decades of experience
                            with cutting-edge technology to deliver campaigns that actually move
                            the needle.
                        </p>
                        <ul className="space-y-3">
                            {features.map((item, i) => (
                                <li key={i} className="flex items-start text-gray-700">
                                    <span className="mr-3 text-[#ee9d2b] font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Team Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
                            <div className="w-20 h-20 mx-auto mb-6 bg-[#fffbf4] rounded-full flex items-center justify-center">
                                <Image
                                    src={member.icon}
                                    alt={member.role}
                                    width={40}
                                    height={40}
                                    className="w-10 h-10"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{member.role}</h3>
                            <p className="text-[#ee9d2b] font-medium mb-1">{member.experience}</p>
                            <p className="text-gray-500 text-sm">{member.focus}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
