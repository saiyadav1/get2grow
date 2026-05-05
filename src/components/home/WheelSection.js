"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function WheelSection() {
    const containerRef = useRef(null);

    // Track scroll over a very tall container to allow sequential scroll-jacking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // We have 7 nodes + 1 button. We map scrollYProgress [0...1] into discrete appearance windows.
    // Node 1: LinkedIn Posts
    const n1Opacity = useTransform(scrollYProgress, [0.0, 0.1], [0, 1]);
    const n1Scale = useTransform(scrollYProgress, [0.0, 0.1], [0.8, 1]);

    // Node 2: Instagram Reels
    const n2Opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
    const n2Scale = useTransform(scrollYProgress, [0.1, 0.2], [0.8, 1]);

    // Node 3: Youtube Shorts
    const n3Opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
    const n3Scale = useTransform(scrollYProgress, [0.2, 0.3], [0.8, 1]);

    // Node 4: Instagram Carousels
    const n4Opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
    const n4Scale = useTransform(scrollYProgress, [0.3, 0.4], [0.8, 1]);

    // Node 5: TikTok Videos
    const n5Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
    const n5Scale = useTransform(scrollYProgress, [0.4, 0.5], [0.8, 1]);

    // Node 6: LinkedIn Carousels
    const n6Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
    const n6Scale = useTransform(scrollYProgress, [0.5, 0.6], [0.8, 1]);

    // Node 7: Youtube Long form
    const n7Opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
    const n7Scale = useTransform(scrollYProgress, [0.6, 0.7], [0.8, 1]);

    // Button Bottom
    const btnOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
    const btnY = useTransform(scrollYProgress, [0.8, 0.9], [40, 0]);

    // Continuous Wheel Rotation
    const wheelRotation = useTransform(scrollYProgress, [0, 1], [0, 180]); // Rotates 180deg over full scroll

    return (
        <section className="bg-[#000000] relative">
            
            {/* Top Header Text Box (Normal Scroll Flow) */}
            <div className="w-full pt-16 md:pt-32 pb-10 px-4 md:px-12 z-20 relative">
                <div className="max-w-[700px] md:ml-10">
                    <h2 className="text-[36px] md:text-[56px] font-bold text-white tracking-tight leading-[1.1]">
                        High Level{' '}
                        <span className="text-primary relative inline-block">
                            Repurposing
                            {/* Hand-drawn Green arcs */}
                            <svg className="absolute -top-3 -right-6 w-12 h-12 text-primary opacity-90 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                <path d="M10 90 Q 20 60 50 10" />
                                <path d="M40 90 Q 60 60 80 20" />
                                <path d="M80 80 Q 90 60 95 30" />
                            </svg>
                        </span>
                    </h2>
                    <p className="mt-4 md:mt-6 text-gray-200 text-[15px] md:text-[18px] leading-relaxed max-w-[600px] font-medium">
                        We build bulletproof content flywheels for personal brands to grow on multiple platforms with high volume of content
                    </p>
                </div>
            </div>

            {/* Sticky Scrolling Wheel Container */}
            <div ref={containerRef} className="relative h-[300vh] md:h-[400vh]">
                <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4">

                    {/* Center Visuals: Rotating Wheel and Nodes */}
                    <div className="relative w-full max-w-[320px] h-[380px] sm:max-w-[400px] sm:h-[450px] md:max-w-[800px] md:h-[500px] pointer-events-none mt-[-5vh]">
                        
                        {/* Center Wireframe (Rotated by scroll) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] pointer-events-none flex items-center justify-center">
                            <motion.svg 
                                style={{ rotate: wheelRotation }}
                                viewBox="0 0 400 400" 
                                className="absolute inset-0 w-full h-full"
                            >
                                <defs>
                                    <linearGradient id="rainbowCycle" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#4facfe" />
                                        <stop offset="25%" stopColor="#d4fc79" />
                                        <stop offset="50%" stopColor="#fa709a" />
                                        <stop offset="75%" stopColor="#0ba360" />
                                        <stop offset="100%" stopColor="#4facfe" />
                                    </linearGradient>
                                </defs>
                                
                                {/* Generate Nested Polygons */}
                                {Array.from({ length: 15 }).map((_, i) => {
                                    const scale = 1.0 - (i * 0.035);
                                    const rotate = i * -1.5;
                                    return (
                                        <polygon
                                            key={i}
                                            points="200,30 347,115 347,285 200,370 53,285 53,115"
                                            fill="none"
                                            stroke="url(#rainbowCycle)"
                                            strokeWidth="1.5"
                                            style={{
                                                transform: `rotate(${rotate}deg) scale(${scale})`,
                                                transformOrigin: "200px 200px",
                                                opacity: 1 - (i * 0.05),
                                                strokeLinejoin: "round",
                                                transition: 'all 0.3s ease'
                                            }}
                                        />
                                    );
                                })}
                            </motion.svg>

                            {/* Static Center Text (unaffected by rotation) */}
                            <div className="relative text-center flex flex-col justify-center z-10" style={{fontFamily: 'Inter, sans-serif'}}>
                                <h3 className="font-bold text-[20px] sm:text-[28px] md:text-[34px] leading-tight text-white drop-shadow-lg">Content</h3>
                                <h3 className="font-bold text-[20px] sm:text-[28px] md:text-[34px] leading-tight text-white drop-shadow-lg">Flywheel</h3>
                            </div>
                        </div>

                        {/* Node 1: LinkedIn Posts (Top Center) */}
                        <motion.div
                            style={{ opacity: n1Opacity, scale: n1Scale }}
                            className="absolute left-1/2 -top-[2%] md:-top-[5%] -translate-x-1/2 flex items-center gap-2 md:gap-3 bg-black/40 backdrop-blur-md px-2 py-1.5 md:px-3 md:py-2 rounded-lg border border-white/5 shadow-2xl"
                        >
                            <FaLinkedin className="text-[#0a66c2] text-[24px] md:text-[36px] bg-white rounded-[2px]" />
                            <div className="text-white text-[11px] sm:text-[13px] md:text-[16px] font-semibold leading-tight">LinkedIn<br />Posts</div>
                        </motion.div>

                        {/* Node 2: Instagram Reels (Top Right) */}
                        <motion.div
                            style={{ opacity: n2Opacity, scale: n2Scale }}
                            className="absolute right-[0%] sm:right-[5%] md:right-[15%] top-[10%] flex items-center gap-2 md:gap-3 bg-black/40 backdrop-blur-md px-2 py-1.5 md:px-3 md:py-2 rounded-lg border border-white/5 shadow-2xl"
                        >
                            <div className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-[6px] flex items-center justify-center text-white">
                                <FaInstagram className="text-[16px] md:text-[24px]" />
                            </div>
                            <div className="text-white text-[11px] sm:text-[13px] md:text-[16px] font-semibold leading-tight">Instagram<br />reels</div>
                        </motion.div>

                        {/* Node 3: Youtube Shorts (Right Center) */}
                        <motion.div
                            style={{ opacity: n3Opacity, scale: n3Scale }}
                            className="absolute -right-[5%] sm:-right-[0%] top-[45%] -translate-y-1/2 flex items-center gap-2 md:gap-3 bg-black/40 backdrop-blur-md px-2 py-1.5 md:px-3 md:py-2 rounded-lg border border-white/5 shadow-2xl"
                        >
                            <div className="text-[#ff0000] bg-white rounded-full w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px] flex items-center justify-center">
                                <FaYoutube className="text-[28px] md:text-[40px] translate-y-[0px]" />
                            </div>
                            <div className="text-white text-[11px] sm:text-[13px] md:text-[16px] font-semibold leading-tight">Youtube<br />Shorts</div>
                        </motion.div>

                        {/* Node 4: Instagram Carousels (Bottom Right) */}
                        <motion.div
                            style={{ opacity: n4Opacity, scale: n4Scale }}
                            className="absolute right-[0%] sm:right-[5%] md:right-[15%] bottom-[5%] flex items-center gap-2 md:gap-3 bg-black/40 backdrop-blur-md px-2 py-1.5 md:px-3 md:py-2 rounded-lg border border-white/5 shadow-2xl"
                        >
                            <div className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-[6px] flex items-center justify-center text-white">
                                <FaInstagram className="text-[16px] md:text-[24px]" />
                            </div>
                            <div className="text-white text-[11px] sm:text-[13px] md:text-[16px] font-semibold leading-tight">Instagram<br />Carousels</div>
                        </motion.div>

                        {/* Node 5: TikTok Videos (Bottom Left) */}
                        <motion.div
                            style={{ opacity: n5Opacity, scale: n5Scale }}
                            className="absolute left-[0%] sm:left-[5%] md:left-[15%] bottom-[5%] flex items-center gap-2 md:gap-3 bg-black/40 backdrop-blur-md px-2 py-1.5 md:px-3 md:py-2 rounded-lg border border-white/5 shadow-2xl"
                        >
                            <div className="bg-black border border-white/20 rounded-[6px] p-[3px] sm:p-[4px] md:p-[6px] flex items-center justify-center">
                                <FaTiktok className="text-[16px] sm:text-[20px] md:text-[24px] text-white" style={{ filter: 'drop-shadow(1px 1px 0px #ff0050) drop-shadow(-1px -1px 0px #00f2fe)' }} />
                            </div>
                            <div className="text-white text-[11px] sm:text-[13px] md:text-[16px] font-semibold leading-tight">TikTok<br />Videos</div>
                        </motion.div>

                        {/* Node 6: LinkedIn Carousels (Left Center) */}
                        <motion.div
                            style={{ opacity: n6Opacity, scale: n6Scale }}
                            className="absolute -left-[5%] sm:-left-[0%] top-[45%] -translate-y-1/2 flex items-center gap-2 md:gap-3 bg-black/40 backdrop-blur-md px-2 py-1.5 md:px-3 md:py-2 rounded-lg border border-white/5 shadow-2xl"
                        >
                            <div className="text-white text-[11px] sm:text-[13px] md:text-[16px] font-semibold leading-tight text-right">LinkedIn<br />Carousels</div>
                            <FaLinkedin className="text-[#0a66c2] text-[24px] md:text-[36px] bg-white rounded-[2px]" />
                        </motion.div>

                        {/* Node 7: Youtube Long form (Top Left) */}
                        <motion.div
                            style={{ opacity: n7Opacity, scale: n7Scale }}
                            className="absolute left-[0%] sm:left-[5%] md:left-[15%] top-[10%] flex items-center gap-2 md:gap-3 bg-black/40 backdrop-blur-md px-2 py-1.5 md:px-3 md:py-2 rounded-lg border border-white/5 shadow-2xl"
                        >
                            <div className="text-white text-[11px] sm:text-[13px] md:text-[16px] font-semibold leading-tight text-right">Youtube<br />Long form</div>
                            <div className="text-[#ff0000] bg-white rounded-full w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px] flex items-center justify-center">
                                <FaYoutube className="text-[28px] md:text-[40px]" />
                            </div>
                        </motion.div>

                    </div>

                    {/* Final Call to Action Button pinned inside the sticky window */}
                    <motion.div 
                        className="absolute bottom-[8vh] w-full flex justify-center z-20 pointer-events-auto mt-auto"
                        style={{ opacity: btnOpacity, y: btnY }}
                    >
                        <Link
                            href="/contact-form"
                            className="px-6 py-3 md:px-8 md:py-4 bg-primary text-brand-black text-[15px] md:text-[18px] font-bold rounded-lg shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:bg-white hover:text-black hover:scale-105 transition-all block"
                        >
                            Book a Discovery Call
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
