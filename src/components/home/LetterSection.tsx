"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LetterSection() {
    return (
        <section className="py-24 bg-[#FAFAFA] overflow-hidden">
            <div className="container mx-auto px-6 max-w-3xl">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-[42px] md:text-[64px] font-black text-brand-black tracking-tighter uppercase leading-none">
                            We get it.
                        </h2>
                        {/* Inline SVG for Blue Check (No external image) */}
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="md:w-14 md:h-14">
                            <path d="M10.5 14.5L9 13L8 14L10.5 16.5L15.5 11.5L14.5 10.5L10.5 14.5Z" fill="#3898EC"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" fill="#3898EC"/>
                        </svg>
                    </div>

                    <div className="space-y-8 text-[18px] md:text-[22px] leading-[1.6] text-gray-700 font-medium">
                        <p>That&apos;s why we help entrepreneurs become known in their industry.</p>
                        
                        <p>
                            This isn&apos;t about fame — it&apos;s about 
                            <span className="relative inline-block mx-2">
                                <strong className="relative z-10 text-brand-black">making business easier.</strong>
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/30 -z-0"></span>
                            </span>
                        </p>

                        <p>
                            By building your personal brand the right way, we turn your 
                            <strong className="text-brand-black border-b-2 border-primary mx-1">knowledge</strong> 
                            into influence. More people know you. More people trust you. More people choose you.
                        </p>

                        <div className="py-6 border-l-4 border-primary pl-8 my-10 italic text-[24px] md:text-[28px] text-brand-black font-serif tracking-tight">
                            "Simple fact: Known businesses grow faster. Trust makes sales easier. Relationships build empires."
                        </div>

                        <p className="text-brand-black font-bold uppercase tracking-tight text-[20px] md:text-[24px]">
                            The path is clear. <span className="text-primary">Your industry is waiting.</span> <br />
                            Time to become known.
                        </p>
                    </div>
                </motion.div>

                {/* Founder Signature Area */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 pt-10 border-t border-gray-200"
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                        {/* Profile Image with fallback */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-transparent rounded-full blur opacity-40"></div>
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-brand-black flex items-center justify-center">
                                {/* Replace "/saksham.jpg" with your local path when ready */}
                                <Image
                                    src="/saksham.jpg" 
                                    alt="Saksham Gaur"
                                    fill
                                    className="object-cover"
                                    onError={(e) => (e.currentTarget.style.display = 'none')}
                                />
                                <span className="text-white font-black text-2xl">SG</span>
                            </div>
                        </div>

                        {/* Social Verification Badge */}
                        <a
                            href="https://www.instagram.com/whysaksham"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-5 px-8 py-4 bg-white hover:bg-brand-black hover:text-white rounded-2xl transition-all duration-500 shadow-xl shadow-black/5 group border border-gray-100"
                        >
                            <div className="w-8 h-8 text-brand-black group-hover:text-primary transition-colors">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </div>
                            <div className="border-l border-gray-200 group-hover:border-white/20 pl-5">
                                <div className="font-black text-lg leading-none mb-1">162k Followers</div>
                                <div className="text-xs uppercase tracking-[0.2em] opacity-60">Saksham Gaur</div>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}