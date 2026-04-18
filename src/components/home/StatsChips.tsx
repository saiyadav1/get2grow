"use client";

function DecagramBadge({ color, children }: { color: string; children: React.ReactNode }) {
    return (
        <div className="relative inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 shrink-0">
            {/* Decagram (Scalloped) SVG background */}
            <svg
                viewBox="0 0 24 24"
                className="absolute inset-0 w-full h-full"
                fill={color}
            >
                <path d="M12,2L14.9,4.6L18.6,4.1L19.7,7.6L23,9.5L21.5,13L22.9,16.5L19.5,18.5L18.4,22L14.7,21.5L12,24L9.3,21.5L5.6,22L4.5,18.5L1.1,16.5L2.5,13L1,9.5L4.3,7.6L5.4,4.1L9.1,4.6L12,2Z" />
            </svg>
            {/* Inner symbol */}
            <div className="relative z-10 flex items-center justify-center text-[#111] md:scale-110">
                {children}
            </div>
        </div>
    );
}

export default function StatsChips() {
    return (
        <section className="bg-transparent px-6 lg:px-12 pb-10 w-full">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
                    {/* Stat 1 — Views */}
                    <div className="flex flex-col items-center md:items-start gap-4 flex-1 text-center md:text-left">
                        <DecagramBadge color="#bcf5ad">
                            {/* Eye icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17A5 5 0 1 1 12 7A5 5 0 0 1 12 17ZM12 9A3 3 0 1 0 12 15A3 3 0 0 0 12 9Z" />
                            </svg>
                        </DecagramBadge>
                        <div>
                            <p className="text-white font-semibold text-[17px] sm:text-[18px] md:text-[20px] leading-[1.3]">
                                500M+ views<br className="hidden md:block" /> generated
                            </p>
                        </div>
                    </div>

                    {/* Stat 2 — Years */}
                    <div className="flex flex-col items-center md:items-start gap-4 flex-1 text-center md:text-left">
                        <DecagramBadge color="#b2b5f5">
                            {/* Verified Star icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2ZM12 20A8 8 0 1 1 20 12A8 8 0 0 1 12 20Z" />
                                <path d="M12 16.15l4.02 2.45-1.07-4.57 3.55-3.04-4.66-.4L12 6.35 10.15 10.6l-4.66.4 3.55 3.04-1.07 4.57z" />
                            </svg>
                        </DecagramBadge>
                        <div>
                            <p className="text-white font-semibold text-[17px] sm:text-[18px] md:text-[20px] leading-[1.3]">
                                3 Years of Building<br className="hidden md:block" /> Brands
                            </p>
                        </div>
                    </div>

                    {/* Stat 3 — Videos */}
                    <div className="flex flex-col items-center md:items-start gap-4 flex-1 text-center md:text-left">
                        <DecagramBadge color="#fbf386">
                            {/* Video camera icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17 10.5V7A1 1 0 0 0 16 6H4A1 1 0 0 0 3 7V17A1 1 0 0 0 4 18H16A1 1 0 0 0 17 17V13.5L21 17.5V6.5L17 10.5Z" />
                            </svg>
                        </DecagramBadge>
                        <div>
                            <p className="text-white font-semibold text-[17px] sm:text-[18px] md:text-[20px] leading-[1.3]">
                                6000+ Videos Created
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
