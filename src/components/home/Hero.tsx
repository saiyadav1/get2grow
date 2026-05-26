"use client";

import Link from "next/link";
import { useState } from "react";

export default function Hero() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative pt-[10px] pb-[10px] px-4 overflow-hidden min-h-[100vh]">
            {/* Animated background gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
            
            {/* Grid Background with edge fade */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: `
                    repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 60px),
                    repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 60px)
                `,
                backgroundSize: '60px 60px',
                maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
            }}></div>
            <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-8 px-4 lg:px-8 pt-16 md:pt-20 lg:pt-24">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left flex flex-col justify-center pr-0">
                    <div className="mb-8 md:mb-12">
                        <h1 className="text-[36px] sm:text-[42px] md:text-[56px] lg:text-[64px] leading-[1.1] font-black text-white tracking-tight text-center lg:text-left">
                            <span className="inline-block align-baseline mr-2 md:mr-3 text-primary opacity-90 w-[28px] h-[28px] md:w-[42px] md:h-[42px]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18L0 10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H10V18H0Z" />
                                </svg>
                            </span>
                            <span className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">More Leads. More Sales.</span>{" "}
                            <span className="relative inline-block">
                                More Growth.
                                <div className="absolute -right-6 -top-1 md:-right-10 md:-top-3 select-none pointer-events-none text-primary opacity-90 w-[28px] h-[28px] md:w-[42px] md:h-[42px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                        <path d="M9.983 6v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                                    </svg>
                                </div>
                            </span>
                        </h1>
                    </div>

                    <p className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left text-[15px] md:text-[17px] text-gray-300 mb-10 md:mb-14 leading-relaxed font-light tracking-wide">
                        G2G Media House helps businesses grow through content, paid ads, branding, and social media strategies built to generate attention, leads, and revenue.
                    </p>

                    <div className="relative flex justify-center lg:justify-start">
                        <Link
                            href="/contact-form"
                            className="group inline-flex items-center px-7 md:px-9 py-3.5 md:py-4 bg-primary text-[#121212] text-[15px] md:text-[16px] font-bold rounded-xl hover:rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.35)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:bg-white hover:scale-105"
                        >
                            Book A Free Strategy Call
                            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>

                </div>

                {/* Right Content - Video Player */}
                <div className="flex-1 w-full lg:w-auto relative">
                    <div className="relative group">
                        {/* Background gradient elements */}
                        <div className="absolute -top-24 -right-24 w-52 h-52 bg-primary/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-primary/8 rounded-full blur-3xl"></div>
                        
                        {/* Outer glow border - enhanced */}
                        <div className="absolute -inset-2 bg-gradient-to-br from-primary/50 via-primary/20 to-transparent rounded-[32px] blur-3xl opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
                        
                        {/* Video container with premium design */}
                        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-black shadow-2xl border border-primary/40 backdrop-blur-sm group-hover:border-primary/80 transition-all duration-700"
                             style={{
                                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(34,197,94,0.08) 0%, transparent 50%)'
                             }}>
                            {/* Inner border accent */}
                            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none"></div>
                            
                            {/* Video wrapper with overlay */}
                            <div className="relative overflow-hidden">
                                <video
                                    src="https://res.cloudinary.com/di6ic3zth/video/upload/q_auto/f_auto/v1779811160/Theodore_video_1_todoce.mp4"
                                    controls
                                    className="w-full h-auto object-cover"
                                    style={{ minHeight: '500px' }}
                                    poster="https://res.cloudinary.com/di6ic3zth/video/upload/q_auto/f_auto/v1779811160/Theodore_video_1_todoce.jpg"
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                />
                                
                                {/* Premium overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity duration-700"></div>
                                
                                {/* Vignette effect - enhanced */}
                                <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
                                    boxShadow: 'inset 0 0 80px rgba(0,0,0,0.5)'
                                }}></div>
                            </div>
                            
                            {/* Premium corner elements - refined */}
                            <div className="absolute top-0 left-0 w-14 h-14 border-t-2.5 border-l-2.5 border-primary opacity-50 rounded-br-3xl pointer-events-none transition-all duration-700 group-hover:opacity-100 group-hover:w-20 group-hover:h-20 group-hover:border-t-[3px] group-hover:border-l-[3px]"></div>
                            <div className="absolute top-0 right-0 w-14 h-14 border-t-2.5 border-r-2.5 border-primary opacity-50 rounded-bl-3xl pointer-events-none transition-all duration-700 group-hover:opacity-100 group-hover:w-20 group-hover:h-20 group-hover:border-t-[3px] group-hover:border-r-[3px]"></div>
                            <div className="absolute bottom-0 left-0 w-14 h-14 border-b-2.5 border-l-2.5 border-primary opacity-50 rounded-tr-3xl pointer-events-none transition-all duration-700 group-hover:opacity-100 group-hover:w-20 group-hover:h-20 group-hover:border-b-[3px] group-hover:border-l-[3px]"></div>
                            <div className="absolute bottom-0 right-0 w-14 h-14 border-b-2.5 border-r-2.5 border-primary opacity-50 rounded-tl-3xl pointer-events-none transition-all duration-700 group-hover:opacity-100 group-hover:w-20 group-hover:h-20 group-hover:border-b-[3px] group-hover:border-r-[3px]"></div>
                            
                            {/* Center shine effect - premium */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none rounded-3xl"
                                 style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)'
                                 }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}