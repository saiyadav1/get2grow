import Image from "next/image";

export default function LogoMarquee() {
    // The HTML uses 'studio_logo.avif' repeatedly
    const logos = Array(8).fill("/assets/studio_logo.avif");

    return (
        <section className="py-6 md:py-10 overflow-hidden relative bg-gradient-to-b from-white/[0.04] to-transparent border-t border-white/[0.05]">
            <div className="container mx-auto px-16 mb-10 md:mb-14 text-center flex relative z-10">
                <h2 className="relative text-[24px] sm:text-[32px] md:text-[44px] font-bold text-white flex flex-wrap items-center justify-center gap-x-2 md:gap-x-3 tracking-tight">
                    <span>Trusted by</span>
                    <span className="relative text-primary drop-shadow-lg">
                        Industry Leaders

                        {/* Sparkle SVG - positioned specifically for desktop */}
                        <svg
                            className="hidden md:block absolute -top-5 -right-10 w-[42px] h-[42px] text-primary"
                            viewBox="0 0 40 40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {/* Ray 1: Top stroke upwards */}
                            <path d="M12 20 Q14 12 18 4" />
                            {/* Ray 2: Middle stroke stretching top-right */}
                            <path d="M18 24 L34 10" />
                            {/* Ray 3: Bottom stroke curving right horizontally */}
                            <path d="M18 29 C25 32 30 30 35 30" />
                        </svg>
                    </span>
                </h2>
            </div>

            <div className="relative flex overflow-hidden group max-w-[1440px] mx-auto w-full">
                {/* Edge Fades mapped directly to CSS theme variable native background */}
                <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

                <div className="flex animate-scroll whitespace-nowrap">
                    {/* First set of logos */}
                    <div className="flex items-center gap-12 md:gap-20 px-6 md:px-10">
                        {logos.map((src, index) => (
                            <div key={`logo-1-${index}`} className="relative w-[120px] h-[40px] md:w-[160px] md:h-[50px] flex-shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image
                                    src={src}
                                    alt="Client Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Duplicate set for seamless scrolling - must match identical gaps and padding */}
                    <div className="flex items-center gap-12 md:gap-20 px-6 md:px-10">
                        {logos.map((src, index) => (
                            <div key={`logo-2-${index}`} className="relative w-[120px] h-[40px] md:w-[160px] md:h-[50px] flex-shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image
                                    src={src}
                                    alt="Client Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
