"use client";

import Link from "next/link";
import StatsChips from "./StatsChips";

export default function Hero() {
    return (
        <section className="relative pt-[160px] pb-[80px] bg-white text-center px-4 overflow-hidden">
            {/* Full Background SVG Layer */}
            <div 
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ 
                    backgroundImage: `url('/assets/hero_bg_grid_line.svg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    <div className="mb-6">
                        <h1 className="text-[40px] md:text-[66px] leading-[1.1] font-bold text-[#333]">
                            We help <span className="text-highlight">entrepreneurs</span> build
                            profitable personal brands through{" "}
                            <span className="text-highlight">short-form content</span>
                        </h1>
                    </div>

                    <p className="max-w-3xl mx-auto text-[18px] md:text-[20px] text-gray-600 mb-2">
                        End-to-end direct response marketing that turns prospects into customers.
                    </p>
                    <p className="max-w-3xl mx-auto text-[18px] md:text-[20px] text-gray-600 mb-8">
                        We deliver measurable ROI through data-driven campaigns that scale your business.
                    </p>

                    <div className="mb-16">
                        <Link
                            href="https://cal.com/metro-media-house/discovery"
                            target="_blank"
                            className="inline-block px-8 py-4 bg-primary text-white text-[18px] font-medium rounded hover:bg-[#2d7bc2] transition-colors"
                        >
                            Book a Free Discovery Call
                        </Link>
                    </div>

                    <StatsChips />
                </div>
            </div>
        </section>
    );
}