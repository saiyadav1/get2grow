"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
        <section id="section_problems" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-30" />
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header Section */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-black text-white leading-[1.1] uppercase tracking-tighter mb-8">
                            Built on <span className="text-primary italic">Performance</span>,<br className="hidden md:block"/> Not Promises
                        </h2>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl"
                    >
                        <p className="text-gray-300 text-[18px] md:text-[20px] leading-relaxed mb-8">
                            We're not just another marketing agency. We're direct response
                            specialists who understand that every dollar you invest should
                            generate measurable returns. Our team combines decades of experience
                            with cutting-edge technology to deliver campaigns that actually move
                            the needle.
                        </p>
                        
                        <div className="space-y-4">
                            {features.map((item, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                                    className="flex items-center text-gray-300 text-[16px] md:text-[18px] font-medium"
                                >
                                    <div className="w-6 h-6 mr-4 bg-primary/20 rounded-full flex items-center justify-center shrink-0 border border-primary/30">
                                        <span className="text-primary text-[10px] font-black">✓</span>
                                    </div>
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Team Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {team.map((member, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="group relative bg-[#0a0a0a] p-8 lg:p-10 rounded-[2rem] border border-white/5 overflow-hidden transition-all hover:bg-black hover:border-primary/30"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-24 h-24 mb-8 rounded-[1.5rem] bg-white/5 rotate-3 group-hover:rotate-0 border border-white/10 group-hover:border-primary/40 flex items-center justify-center transition-all duration-500 shadow-[0_0_30px_rgba(238,157,43,0)] group-hover:shadow-[0_0_30px_rgba(238,157,43,0.15)]">
                                    {member.icon.includes('.svg') ? (
                                        <Image
                                            src={member.icon}
                                            alt={member.role}
                                            width={48}
                                            height={48}
                                            className="w-12 h-12 transition-transform duration-500 group-hover:scale-110 drop-shadow-md filter invert opacity-80"
                                        />
                                    ) : (
                                        <Image
                                            src={member.icon}
                                            alt={member.role}
                                            width={48}
                                            height={48}
                                            className="w-12 h-12 transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                                        />
                                    )}
                                </div>
                                
                                <h3 className="text-[24px] font-bold text-white mb-2">{member.role}</h3>
                                <p className="text-primary font-semibold text-[13px] mb-4 uppercase tracking-widest">{member.experience}</p>
                                
                                <div className="w-12 h-1 bg-white/10 group-hover:bg-primary/50 transition-colors duration-500 rounded-full mb-4"/>
                                
                                <p className="text-gray-400 text-[16px] leading-relaxed">{member.focus}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
