"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesSection() {
    const services = [
        {
            title: "Paid Advertising",
            description: "High-converting Facebook, Google, and YouTube ads that generate immediate leads and sales.",
            image: "/assets/advertising.jpg",
            items: ["Campaign Setup & Optimization", "Creative Development", "Audience Research", "Performance Tracking"],
        },
        {
            title: "Email Marketing",
            description: "Automated email sequences that nurture leads and drive consistent revenue growth.",
            image: "/assets/emailmarketing.jpg",
            items: ["List Building", "Sequence Creation", "A/B Testing", "Deliverability Optimization"],
        },
        {
            title: "Analytics & Tracking",
            description: "Comprehensive data analysis to make informed decisions and scale what works.",
            image: "/assets/analytics&tracking.jpg",
            items: ["Conversion Tracking", "ROI Analysis", "Custom Dashboards", "Performance Reports"],
        },
        {
            title: "Strategy & Consulting",
            description: "Expert guidance to develop winning marketing strategies for sustainable growth.",
            image: "/assets/strategy&consultant.png",
            items: ["Market Analysis", "Competitor Research", "Growth Planning", "Team Training"],
        },
        {
            title: "Web Design",
            description: "Creating visually stunning and user-friendly websites that captivate your audience.",
            image: "/assets/webdesign.jpg",
            items: ["Custom Website Development", "Responsive Design", "UI/UX Design", "Website Redesign"],
        },
        {
            title: "Web Development",
            description: "Building powerful, secure, and scalable websites that are the foundation of your online presence.",
            image: "/assets/webdevelopment.jpg",
            items: ["Custom Web Application", "E-commerce Solutions", "CMS", "API Integration"],
        },
        {
            title: "WhatsApp API",
            description: "Seamlessly integrate WhatsApp into your business workflow to enhance communication.",
            image: "/assets/webapi.png",
            items: ["Two-Way Messaging", "Automated Notifications", "Customer Support", "Secure API Solutions"],
        },
        {
            title: "Video Editing",
            description: "Transform your raw footage into polished, captivating videos that engage your audience.",
            image: "/assets/video-editing.png",
            items: ["Professional Production", "Creative Transitions", "Visual Effects", "Optimized Formats"],
        },
        {
            title: "Conversion Optimization",
            description: "Landing pages and funnels engineered to maximize your conversion rates and ROI.",
            image: "/assets/conversionoptimization.png",
            items: ["Landing Page Design", "Funnel Architecture", "Split Testing", "UX Optimization"],
        },
    ];

    return (
        <section id="services" className="py-24 overflow-hidden">
            <div className="container mx-auto px-6 text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-[40px] md:text-[60px] font-black text-white uppercase tracking-tighter mb-6 leading-tight">
                        End-to-End Marketing <span className="text-primary">Solutions</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-[18px] md:text-[20px] text-gray-300 font-medium">
                        From strategy to execution, we handle every aspect of your growth to ensure maximum ROI.
                    </p>
                </motion.div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            // This triggers the "one by one" visibility as you scroll
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index % 3 * 0.1 }}
                            className="group bg-black/40 rounded-3xl border border-white/5 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="p-8">
                                <h3 className="text-[26px] font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 mb-8 text-[16px] leading-relaxed font-medium">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 border-t border-white/10 pt-6">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-center text-[14px] text-gray-300 font-semibold">
                                            <div className="mr-3 h-1.5 w-1.5 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}