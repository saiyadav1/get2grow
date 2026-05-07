"use client";

import { motion } from "framer-motion";
import { Share2, Target, Sparkles, Video, UserCircle, Layout } from "lucide-react";

export default function ServicesSection() {
    const services = [
        {
            title: "Social Media Marketing",
            description: "We manage your content so your brand stays visible, relevant, and trusted.",
            icon: Share2,
            items: ["Content strategy", "Reels & graphics", "Captions & copywriting", "Monthly posting", "Engagement strategy"],
        },
        {
            title: "Paid Advertising",
            description: "We run conversion-focused ad campaigns that bring qualified leads and sales.",
            icon: Target,
            items: ["Meta Ads", "Google Ads", "Retargeting", "Ad creatives", "Conversion tracking", "Campaign optimization"],
        },
        {
            title: "Branding",
            description: "We position your business to look premium, trustworthy, and memorable.",
            icon: Sparkles,
            items: ["Brand messaging", "Positioning", "Visual direction", "Tone of voice", "Brand strategy"],
        },
        {
            title: "Content Creation",
            description: "We create content designed to stop attention and drive action.",
            icon: Video,
            items: ["Short-form videos", "Reels editing", "Hooks & scripts", "UGC content", "Promotional content"],
        },
        {
            title: "Personal Branding",
            description: "We help founders and experts build authority online.",
            icon: UserCircle,
            items: ["LinkedIn content", "Ghostwriting", "Thought leadership", "Personal brand strategy"],
        },
        {
            title: "Website & Funnels",
            description: "We build websites and landing pages designed to convert traffic into customers.",
            icon: Layout,
            items: ["Landing pages", "Sales funnels", "Website copy", "Conversion optimization"],
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
                            <div className="relative h-56 w-full overflow-hidden flex items-center justify-center bg-[#1a1a24]/50 border-b border-white/5">
                                {/* Decorative background glow */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="w-32 h-32 bg-primary/20 rounded-full blur-[50px]" />
                                </div>
                                {/* Icon container */}
                                <div className="relative z-10 w-20 h-20 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500">
                                    <service.icon className="w-10 h-10 text-gray-300 group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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