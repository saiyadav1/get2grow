import Image from "next/image";

export default function LogoMarquee() {
    // Creating a distinct list of logos based on the HTML structure
    // The HTML uses 'studio_logo.avif' repeatedly
    const logos = Array(8).fill("/assets/studio_logo.avif");

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-[20px] font-medium text-gray-900">
                    Trusted by the industry leaders
                </h2>
            </div>

            <div className="relative flex overflow-hidden group">
                <div className="flex animate-scroll whitespace-nowrap">
                    {/* First set of logos */}
                    <div className="flex items-center gap-16 mx-8">
                        {logos.map((src, index) => (
                            <div key={`logo-1-${index}`} className="relative w-[150px] h-[60px] flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image
                                    src={src}
                                    alt="Client Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Duplicate set for seamless scrolling */}
                    <div className="flex items-center gap-16 mx-8">
                        {logos.map((src, index) => (
                            <div key={`logo-2-${index}`} className="relative w-[150px] h-[60px] flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
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
