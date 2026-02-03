import Image from "next/image";

export default function StatsChips() {
    const stats = [
        {
            icon: "https://cdn.prod.website-files.com/6778043699a2f913f47628dd/677807a2e987e9a0507a0b03_01-hero-chip-icon.svg",
            text: "250M+ Views Generated",
        },
        {
            icon: "https://cdn.prod.website-files.com/6778043699a2f913f47628dd/677807a1feb4b282d6826709_02-hero-chip-icon.svg",
            text: "4+ Years of Building Personal Brands",
        },
        {
            icon: "https://cdn.prod.website-files.com/6778043699a2f913f47628dd/677807a27886ae7a23996336_03-hero-chip-icon.svg",
            text: "5000+ Videos Created",
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full border border-gray-100 shadow-sm"
                >
                    <Image
                        src={stat.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="w-6 h-6"
                    />
                    <span className="text-[16px] md:text-[18px] font-medium text-gray-800">
                        {stat.text}
                    </span>
                </div>
            ))}
        </div>
    );
}
