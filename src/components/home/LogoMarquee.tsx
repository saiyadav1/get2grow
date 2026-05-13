import Image from "next/image";

export default function LogoMarquee() {
    const logos = [
        { src: "/assets/brands/lucid.png", alt: "Lucid" },
        { src: "/assets/brands/phx.png", alt: "PHX" },
        { src: "/assets/brands/gataca.jpeg", alt: "Gataca" },
        { src: "/assets/brands/kims.jpeg", alt: "Kims" },
        { src: "/assets/brands/property.jpeg", alt: "Property" },
        { src: "/assets/brands/rani.png", alt: "Rani" },
        { src: "/assets/brands/sarvejana.jpeg", alt: "Sarvejana" },
        { src: "/assets/brands/the_next_round.jpeg", alt: "The Next Round" },
    ];

    return (
        <section className="py-20 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-[20px] font-medium text-white">
                    Trusted by the industry leaders
                </h2>
            </div>

            <div className="relative flex overflow-hidden">
                <div className="flex animate-scroll whitespace-nowrap">
                    {/* First set of logos */}
                    <div className="flex items-center gap-16 mx-8">
                        {logos.map((logo, index) => (
                            <div key={`logo-1-${index}`} className="relative w-[140px] h-[60px] flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Duplicate set for seamless scrolling */}
                    <div className="flex items-center gap-16 mx-8">
                        {logos.map((logo, index) => (
                            <div key={`logo-2-${index}`} className="relative w-[140px] h-[60px] flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
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
