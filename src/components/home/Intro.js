"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Intro() {
    const containerRef = useRef(null);

    // Track scroll progress as the section enters the viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["0 1", "0.5 0.5"] // start when top of section meets bottom of viewport, end when center meets center
    });

    // Move left card from left (-100px) to center (0px)
    const leftCardX = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    // Move right card from right (100px) to center (0px)
    const rightCardX = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (
        <section ref={containerRef} className="relative py-16 md:py-32 px-4 md:px-8 overflow-hidden bg-transparent min-h-[50vh]">
            {/* Grid Background with edge fade matching Hero section */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={{
                backgroundImage: `
                    repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, transparent 1px, transparent 60px),
                    repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, transparent 1px, transparent 60px)
                `,
                backgroundSize: '60px 60px',
                maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
            }}></div>

            <div className="max-w-[1400px] mx-auto relative z-10 px-2 lg:px-6">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

                    {/* Card 1 - Left Tilted */}
                    <motion.div style={{ x: leftCardX }} className="relative w-full lg:flex-1 max-w-[420px] lg:max-w-[320px] group perspective">
                        {/* Floating Decorations */}
                        <div className="hidden lg:block absolute -top-24 left-[55%] transition-transform duration-500 group-hover:-translate-y-2 z-0">
                            {/* Purple Scalloped Badge */}
                            <div className="relative w-16 h-16 flex items-center justify-center z-10">
                                <svg viewBox="0 0 24 24" className="w-[60px] h-[60px] text-[#b2b5f5] absolute inset-0" fill="currentColor">
                                    <path d="M12,2L14.9,4.6L18.6,4.1L19.7,7.6L23,9.5L21.5,13L22.9,16.5L19.5,18.5L18.4,22L14.7,21.5L12,24L9.3,21.5L5.6,22L4.5,18.5L1.1,16.5L2.5,13L1,9.5L4.3,7.6L5.4,4.1L9.1,4.6L12,2Z" />
                                </svg>
                                {/* Clapping hands icon (simplified SVG) */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                                    <path d="M10 13V4a1 1 0 0 1 2 0v8M14 13V5.5a1 1 0 0 1 2 0v7.5M18 13V7.5a1 1 0 0 1 2 0V15a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-3a1 1 0 0 1 2 0v2M6 13v-1a1 1 0 0 1 2 0v2" />
                                    <path d="M21 8.5L18 7" />
                                    <path d="M3 12.5L6 11" />
                                </svg>
                            </div>

                            {/* Hand-drawn Loop Arrow */}
                            <svg className="absolute -top-16 -left-32 w-32 h-32 text-[#b9f0a0] opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M10 90 C 20 60, 40 20, 60 40 C 80 60, 50 60, 60 90" strokeLinecap="round" />
                                <path d="M50 85 L60 90 L65 80" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Card Content */}
                        <div className="bg-[#111116] border border-white/[0.06] rounded-2xl p-8 lg:p-10 shadow-2xl lg:-rotate-[6deg] transition-transform duration-500 hover:rotate-0 hover:z-20 h-full flex flex-col justify-between relative z-10">
                            <p className="text-gray-100 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.65] lg:leading-[1.7]">
                                Metro Media House helped me grow to <span className="text-[#fbb74d] font-semibold">50K in just 2 months</span> with constant support, strategy, and dedication. Their consistency made all the difference
                            </p>
                            <div className="mt-10 md:mt-12">
                                <p className="text-white font-bold text-[15px]">Zeel Mehta Jain</p>
                                <p className="text-gray-400 text-[13px] mt-0.5">AI Entrepreneur</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 - Center Straight */}
                    <div className="relative w-full lg:flex-1 max-w-[420px] lg:max-w-[320px] lg:mt-16 group perspective z-20">
                        <div className="bg-[#111116] border border-white/[0.06] rounded-2xl p-8 lg:p-10 shadow-2xl transition-transform duration-500 hover:-translate-y-2 h-full flex flex-col justify-between">
                            <p className="text-gray-100 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.65] lg:leading-[1.7]">
                                <span className="text-[#b2b5f5] font-semibold">By far the best video editing team we have ever worked with</span> - quick, communicative, and diligent with the highest quality videos. Will be using again and have recommended to many friends!
                            </p>
                            <div className="mt-10 md:mt-12">
                                <p className="text-white font-bold text-[15px]">Tristan Barrett</p>
                                <p className="text-gray-400 text-[13px] mt-0.5">Creative Director @ SpaceGod Studios</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Right Tilted */}
                    <motion.div style={{ x: rightCardX }} className="relative w-full lg:flex-1 max-w-[420px] lg:max-w-[320px] group perspective">
                        {/* Floating Decorations */}
                        <div className="hidden lg:block absolute -top-20 left-[25%] transition-transform duration-500 group-hover:-translate-y-2 z-0">
                            {/* Green Circle Badge */}
                            <div className="relative w-[50px] h-[50px] bg-[#bcf5ad] rounded-full flex items-center justify-center z-10">
                                {/* Smiley face */}
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                    <line x1="9" y1="9" x2="9.01" y2="9" />
                                    <line x1="15" y1="9" x2="15.01" y2="9" />
                                </svg>
                            </div>

                            {/* Hand-drawn Loop Arrow */}
                            <svg className="absolute -top-16 -right-24 w-28 h-28 text-[#b9f0a0] opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M80 20 C 50 5, 30 30, 60 50 C 90 70, 70 80, 50 60" strokeLinecap="round" />
                                <path d="M60 55 L50 60 L45 50" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Card Content */}
                        <div className="bg-[#111116] border border-white/[0.06] rounded-2xl p-8 lg:p-10 shadow-2xl lg:rotate-[6deg] transition-transform duration-500 hover:rotate-0 hover:z-20 h-full flex flex-col justify-between relative z-10">
                            <p className="text-gray-100 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.65] lg:leading-[1.7]">
                                Very receptive to feedback, quick to adapt, and genuinely collaborative. <span className="text-[#fbb74d] font-semibold">Their editing always captures the tone and story we're trying to tell, and they deliver with care and attention to detail.</span>
                            </p>
                            <div className="mt-10 md:mt-12">
                                <p className="text-white font-bold text-[15px]">Liah Yoo</p>
                                <p className="text-gray-400 text-[13px] mt-0.5">Founder, KraveBeauty</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
