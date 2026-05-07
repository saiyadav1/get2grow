"use client";

import Link from "next/link";

export default function Hero1() {
    const profiles = [
        { name: "Liah", followers: "247K+ Followers", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=500" },
        { name: "Daniel Del Carmen", followers: "25K+ Followers", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500" },
        { name: "Sarah Jenkins", followers: "120K+ Followers", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=500" },
        { name: "Michael Chen", followers: "89K+ Followers", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500" },
        { name: "Elena Rodriguez", followers: "450K+ Followers", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400&h=500" },
        { name: "Marcus Johnson", followers: "75K+ Followers", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500" },
    ];

    return (
        <section className="relative pt-[10px] pb-[10px] px-4 overflow-hidden min-h-[100vh]">
            {/* Grid Background with edge fade */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: `
                    repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, transparent 1px, transparent 60px),
                    repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, transparent 1px, transparent 60px)
                `,
                backgroundSize: '60px 60px',
                maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
            }}></div>
            <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-8 px-4 lg:px-8">
                {/* Left Content */}
                <div className="flex-1 text-left flex flex-col justify-center pr-0">
                    <div className="mb-8 md:mb-10">
                        <h1 className="text-[32px] sm:text-[36px] md:text-[52px] leading-[1.15] font-bold text-white tracking-tight">
                            <span className="inline-block align-top mr-1 md:mr-2 mt-1 md:mt-2 text-primary opacity-80 w-[24px] h-[24px] md:w-[36px] md:h-[36px]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18L0 10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H10V18H0Z" />
                                </svg>
                            </span>
                            More Leads. More Sales.{" "}
                            <span className="relative inline-block">
                                {/* Entrepreneurs */}
                                {/* Decorative sparks */}
                                More Growth.
                                {/* Closing Quote */}
                                <div className="absolute -right-8 -top-4 md:-right-12 md:-top-6 hidden sm:block select-none pointer-events-none text-primary opacity-80 w-[24px] h-[24px] md:w-[36px] md:h-[36px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                        <path d="M9.983 6v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                                    </svg>
                                </div>
                                {/* Spark */}
                                {/* <div className="absolute -right-[40px] -top-[35px] md:-right-[60px] md:-top-[45px] hidden sm:block select-none pointer-events-none opacity-80">
                                    <svg width="35" height="35" viewBox="0 0 100 100" className="stroke-primary fill-none transform rotate-12 md:w-[45px] md:h-[45px]" style={{ strokeWidth: 5, strokeLinecap: "round" }}>
                                        <path d="M 25 80 Q 20 50 25 20 M 50 85 Q 50 50 60 15 M 75 80 Q 80 50 95 30" />
                                    </svg>
                                </div> */}
                            </span>
                        </h1>
                    </div>

                    <p className="max-w-lg text-[14px] md:text-[18px] text-gray-400 mb-8 md:mb-12 leading-relaxed font-light">
                        G2G Media House helps businesses grow through content, paid ads, branding, and social media strategies built to generate attention, leads, and revenue.
                    </p>

                    <div className="relative inline-block mb-10 w-fit">
                        <Link
                            href="/contact-form"
                            className="inline-block px-5 py-3 md:px-7 md:py-3.5 bg-primary text-[#121212] text-[15px] md:text-[16px] font-bold rounded-lg hover:bg-white transition-colors shadow-[0_0_20px_rgba(34,197,94,0.25)]"
                        >
                            Book A Free Strategy Call
                        </Link>

                        {/* Free text with arrow */}
                        {/* <div className="absolute -right-16 -bottom-6 md:-right-28 md:-bottom-6 transform -rotate-12 flex-col items-center pointer-events-none hidden sm:flex">
                            <span className="text-[#a4d4b4] text-xl md:text-2xl -mb-3 ml-4" style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', cursive" }}>It's Free</span>
                            <svg width="45" height="45" viewBox="0 0 100 100" className="stroke-[#a4d4b4] fill-none md:w-[60px] md:h-[60px]" style={{ strokeWidth: 2, strokeLinecap: "round" }}>
                                <path d="M 70 30 Q 80 80 30 50 M 40 40 L 25 50 L 35 60" />
                            </svg>
                        </div> */}
                    </div>

                </div>

                {/* Right Content - Carousel */}
                <div className="flex-1 w-full lg:w-auto h-[50vh] md:h-[620px] max-h-[50vh] md:max-h-none overflow-hidden relative mt-6 md:mt-8 lg:mt-0">
                    {/* Gradient masks for smooth fade at top and bottom */}
                    <div className="absolute inset-0 pointer-events-none z-10" style={{
                        background: 'linear-gradient(to bottom, var(--background) 0%, transparent 18%, transparent 82%, var(--background) 100%)'
                    }}></div>

                    <div className="flex gap-3 md:gap-5 h-full relative justify-center md:justify-end pr-0 md:pr-4">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-3 md:gap-5 animate-scroll-vertical w-[45%] sm:w-[48%] md:w-[300px] xl:w-[400px]" style={{ animationDelay: '-8s' }}>
                            {[...profiles, ...profiles].map((profile, i) => (
                                <div
                                    key={`col1-${i}`}
                                    className={`relative rounded-2xl md:rounded-3xl overflow-hidden shrink-0 border border-white/5 bg-[#1a1a24] group ${i % 2 === 0
                                        ? 'h-[200px] md:h-[480px] xl:h-[450px]'
                                        : 'h-[150px] md:h-[480px] xl:h-[450px]'
                                        }`}
                                >
                                    <img src={profile.image} alt={profile.name} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-5">
                                        <div className="flex items-center gap-1 md:gap-2 mb-0.5 relative z-10">
                                            <div className="w-4 h-4 md:w-5 md:h-5 shrink-0 rounded-[4px] md:rounded-[6px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center p-[2px] md:p-[3px]">
                                                <div className="w-full h-full border-white border-[1px] md:border-[1.5px] rounded-[3px] md:rounded-[5px] relative">
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 md:w-1.5 md:h-1.5 border-white border-[1px] md:border-[1.5px] rounded-full"></div>
                                                </div>
                                            </div>
                                            <p className="text-white font-semibold text-[11px] md:text-[15px] truncate drop-shadow-md">{profile.name}</p>
                                        </div>
                                        <p className="text-gray-300 text-[10px] md:text-[13px] font-medium">{profile.followers}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Column 2 — offset downward for masonry stagger */}
                        <div className="flex flex-col gap-3 md:gap-5 animate-scroll-vertical-reverse w-[45%] sm:w-[48%] md:w-[300px] xl:w-[400px] mt-10 md:mt-16" style={{ animationDelay: '-14s' }}>
                            {[...profiles].reverse().concat([...profiles].reverse()).map((profile, i) => (
                                <div
                                    key={`col2-${i}`}
                                    className={`relative rounded-2xl md:rounded-3xl overflow-hidden shrink-0 border border-white/5 bg-[#1a1a24] group ${i % 2 === 0
                                        ? 'h-[150px] md:h-[480px] xl:h-[450px]'
                                        : 'h-[200px] md:h-[480px] xl:h-[450px]'
                                        }`}
                                >
                                    <img src={profile.image} alt={profile.name} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-5">
                                        <div className="flex items-center gap-1 md:gap-2 mb-0.5 relative z-10">
                                            <div className="w-4 h-4 md:w-5 md:h-5 shrink-0 rounded-[4px] md:rounded-[6px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center p-[2px] md:p-[3px]">
                                                <div className="w-full h-full border-white border-[1px] md:border-[1.5px] rounded-[3px] md:rounded-[5px] relative">
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 md:w-1.5 md:h-1.5 border-white border-[1px] md:border-[1.5px] rounded-full"></div>
                                                </div>
                                            </div>
                                            <p className="text-white font-semibold text-[11px] md:text-[15px] truncate drop-shadow-md">{profile.name}</p>
                                        </div>
                                        <p className="text-gray-300 text-[10px] md:text-[13px] font-medium">{profile.followers}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}