'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import { Share2, Target, Sparkles, Video, UserCircle, Layout } from 'lucide-react';
import Link from 'next/link';

const servicesData = [
    {
        id: "social-media",
        title: "Social Media Marketing",
        description: "We manage your content so your brand stays visible, relevant, and trusted.",
        features: ["Content strategy", "Reels & graphics", "Captions & copywriting", "Monthly posting", "Engagement strategy"],
        icon: Share2,
    },
    {
        id: "paid-ads",
        title: "Paid Advertising",
        description: "We run conversion-focused ad campaigns that bring qualified leads and sales.",
        features: ["Meta Ads", "Google Ads", "Retargeting", "Ad creatives", "Conversion tracking", "Campaign optimization"],
        icon: Target,
    },
    {
        id: "branding",
        title: "Branding",
        description: "We position your business to look premium, trustworthy, and memorable.",
        features: ["Brand messaging", "Positioning", "Visual direction", "Tone of voice", "Brand strategy"],
        icon: Sparkles,
    },
    {
        id: "content-creation",
        title: "Content Creation",
        description: "We create content designed to stop attention and drive action.",
        features: ["Short-form videos", "Reels editing", "Hooks & scripts", "UGC content", "Promotional content"],
        icon: Video,
    },
    {
        id: "personal-branding",
        title: "Personal Branding",
        description: "We help founders and experts build authority online.",
        features: ["LinkedIn content", "Ghostwriting", "Thought leadership", "Personal brand strategy"],
        icon: UserCircle,
    },
    {
        id: "website-funnels",
        title: "Website & Funnels",
        description: "We build websites and landing pages designed to convert traffic into customers.",
        features: ["Landing pages", "Sales funnels", "Website copy", "Conversion optimization"],
        icon: Layout,
    }
];

const angles = [-90, -30, 30, 90, 150, 210];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Premium Smooth Scroll Engine
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const circlePathLength = useTransform(smoothProgress, [0, 1], [0, 5 / 6]);

    const [activeIndex, setActiveIndex] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Intentional snappy threshold for index switching
        const step = 1 / 6;
        const index = Math.min(5, Math.floor(latest / step));
        setActiveIndex(index);
    });

    const radius = 220;

    const contentVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.3 }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section id="services" className="relative w-full text-white bg-[#1a1a1a]">
            {/* Background Noise global for the section */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
            ></div>

            {/* Mobile View */}
            <div className="lg:hidden flex flex-col gap-6 w-full px-5 py-24 relative z-10">
                <div className="mb-10">
                    <p className="text-sm font-medium text-[#22c55e] uppercase tracking-[0.2em] mb-4 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-[#22c55e]"></span>
                        Our Expertise
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-[#f9f8f6] tracking-tight">What we<br />actually do.</h2>
                </div>
                {servicesData.map((service) => (
                    <div key={service.id} className="bg-[#1f1f1f] rounded-2xl p-6 sm:p-8 border border-white/5 relative overflow-hidden shadow-2xl">
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#22c55e]/20 blur-3xl rounded-full pointer-events-none"></div>

                        <service.icon className="w-10 h-10 text-[#22c55e] mb-5" />
                        <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide">{service.title}</h3>
                        <p className="text-gray-400 mb-6 text-base leading-relaxed">{service.description}</p>
                        <ul className="space-y-4 mb-8">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
                                    <svg className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Desktop View (Scroll-Driven Radial Wheel) */}
            <div ref={containerRef} className="hidden lg:block h-[600vh] relative z-10">
                <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

                    <div className="container mx-auto max-w-7xl flex w-full relative z-10 px-8">

                        {/* Left Column - Radial Wheel */}
                        <div className="w-1/2 flex items-center justify-center relative">
                            <motion.div
                                className="w-[500px] h-[500px] relative flex items-center justify-center"
                                animate={{ rotate: activeIndex * 30 }}
                                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                                style={{ willChange: "transform" }}
                            >
                                {/* Center Core */}
                                <motion.div
                                    className="absolute w-32 h-32 rounded-full border border-white/10 bg-black/60 backdrop-blur-2xl flex flex-col items-center justify-center gap-0 z-30 shadow-[0_0_50px_rgba(34,197,94,0.15)]"
                                    animate={{ rotate: activeIndex * -30 }} // counter-rotate
                                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                                >
                                    <div className="absolute inset-0 rounded-full border border-[#22c55e]/40 animate-[spin_8s_linear_infinite]"></div>
                                    <div className="absolute inset-2 rounded-full border border-[#22c55e]/20 border-dashed animate-[spin_12s_linear_infinite_reverse]"></div>
                                    <span className="text-[9px] font-bold text-[#22c55e] uppercase tracking-[0.3em] mt-1">Phase</span>
                                    <span className="text-5xl font-light text-white tracking-tighter">0{activeIndex + 1}</span>
                                </motion.div>

                                {/* Radial Lines SVG */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                                    {servicesData.map((_, i) => {
                                        const angleRad = (angles[i] * Math.PI) / 180;
                                        const x = 250 + Math.cos(angleRad) * radius;
                                        const y = 250 + Math.sin(angleRad) * radius;
                                        const isActive = i === activeIndex;
                                        const isRevealed = i <= activeIndex;
                                        return (
                                            <motion.line
                                                key={`line-${i}`}
                                                x1="250" y1="250" x2={x} y2={y}
                                                stroke={isActive ? "#22c55e" : "#ffffff"}
                                                strokeWidth={isActive ? "2" : "1"}
                                                strokeDasharray={isActive ? "none" : "4 6"}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isRevealed ? (isActive ? 0.8 : 0.08) : 0 }}
                                                transition={{ duration: 0.5, delay: isActive ? 0 : 0.2 }}
                                                filter={isActive ? "drop-shadow(0 0 6px rgba(34,197,94,0.6))" : "none"}
                                            />
                                        )
                                    })}
                                </svg>

                                {/* Concentric Circles Outline */}
                                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                                    <circle cx="250" cy="250" r={radius} fill="none" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" strokeDasharray="4 8" />
                                    <circle cx="250" cy="250" r={radius - 24} fill="none" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
                                    <circle cx="250" cy="250" r={radius - 48} fill="none" stroke="#ffffff" strokeOpacity="0.02" strokeWidth="1" strokeDasharray="2 4" />
                                    
                                    <motion.circle
                                        cx="250" cy="250" r={radius}
                                        fill="none" stroke="#22c55e" strokeWidth="2"
                                        strokeLinecap="round"
                                        style={{ pathLength: circlePathLength }}
                                        filter="drop-shadow(0 0 8px rgba(34,197,94,0.5))"
                                    />
                                </svg>

                                {/* Central Glow Expanding based on active index */}
                                <motion.div
                                    className="absolute bg-[#22c55e]/20 rounded-full blur-[50px] pointer-events-none mix-blend-screen"
                                    animate={{
                                        width: 140 + (activeIndex * 40),
                                        height: 140 + (activeIndex * 40),
                                        opacity: 0.4 + (activeIndex * 0.1)
                                    }}
                                    transition={{ type: "spring", bounce: 0.2 }}
                                ></motion.div>

                                {/* Nodes */}
                                {servicesData.map((service, i) => {
                                    const angleRad = (angles[i] * Math.PI) / 180;
                                    const x = Math.cos(angleRad) * radius;
                                    const y = Math.sin(angleRad) * radius;

                                    const isActive = i === activeIndex;
                                    const isRevealed = i <= activeIndex;

                                    return (
                                        <motion.div
                                            key={service.id}
                                            initial={false}
                                            animate={{
                                                opacity: isRevealed ? 1 : 0,
                                                scale: isRevealed ? (isActive ? 1.2 : 1) : 0.5,
                                                rotate: activeIndex * -30, // counter rotate so icons stay upright
                                                x,
                                                y,
                                            }}
                                            transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
                                            style={{ willChange: "transform, opacity" }}
                                            className={`absolute w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-xl transition-all duration-500 ${isActive 
                                                ? 'bg-[#22c55e] border border-[#22c55e]/50 z-20 shadow-[0_0_30px_rgba(34,197,94,0.6)]' 
                                                : 'bg-black/60 border border-white/10 z-10 shadow-xl hover:border-white/30'}`}
                                        >
                                            <service.icon className={`w-7 h-7 transition-colors duration-500 ${isActive ? 'text-[#1a1a1a]' : 'text-gray-400'}`} />
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        </div>

                        {/* Right Column - Dynamic Content */}
                        <div className="w-1/2 flex items-center pl-10 xl:pl-20">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    //variants={contentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="max-w-lg"
                                >
                                    <motion.div variants={childVariants} className="flex items-center gap-4 mb-8">
                                        <span className="w-12 h-[1px] bg-[#22c55e]"></span>
                                        <span className="text-sm font-medium text-[#22c55e] uppercase tracking-[0.2em]">0{activeIndex + 1} / Expertise</span>
                                    </motion.div>
                                    <motion.h3 variants={childVariants} className="text-5xl xl:text-6xl font-semibold mb-6 text-[#f9f8f6] tracking-tight">{servicesData[activeIndex].title}</motion.h3>
                                    <motion.p variants={childVariants} className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                                        {servicesData[activeIndex].description}
                                    </motion.p>
                                    <motion.ul className="space-y-5 mb-12">
                                        {servicesData[activeIndex].features.map((feature, idx) => (
                                            <motion.li variants={childVariants} key={idx} className="flex items-start gap-4 text-gray-300 text-lg">
                                                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#22c55e]/10 flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                    <motion.div variants={childVariants} className="inline-block">
                                        <Link href="/contact-form" className="inline-block">
                                            <motion.div
                                                role="button"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                animate={{ boxShadow: ['0px 0px 0px rgba(34, 197, 94,0)', '0px 0px 20px rgba(34, 197, 94,0.4)', '0px 0px 0px rgba(34, 197, 94,0)'] }}
                                                // We use object form transition to avoid type conflict with staggerChildren array
                                                transition={{ repeat: Infinity, duration: 2.5 }}
                                                className="px-8 py-4 bg-white text-black rounded-full font-medium"
                                            >
                                                Learn More
                                            </motion.div>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}