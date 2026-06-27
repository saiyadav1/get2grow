"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-brand-black text-white pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Top Section: Branding & Big CTA */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20">
                    <div className="max-w-xl">
                        <Link href="/" className="flex items-center gap-4 mb-8 group">
                            <div className="relative w-12 h-12 overflow-hidden rounded-xl transition-colors">
                                <Image
                                    src="/assets/g2g_logo.png"
                                    alt="Get 2 Grow Logo"
                                    fill
                                    sizes="48px"
                                    className="object-cover"
                                />
                            </div>
                            <span className="font-black text-2xl uppercase tracking-tighter">
                                Get<span className="text-primary">2</span>Grow
                            </span>
                        </Link>
                        <h2 className="text-[32px] md:text-[40px] font-black leading-[1.1] uppercase tracking-tighter">
                            Premium branding.
                            <br />
                            Performance driven marketing.
                            <br />
                            <span className="text-primary">Scalable growth system.</span>
                        </h2>
                        <p className="mt-6 text-lg md:text-xl text-gray-400 font-medium">
                            That&apos;s G2G Media for you,
                            <br />
                            where you &quot;Get2Grow&quot;
                        </p>
                    </div>

                    <Link
                        href="/contact-form"
                        className="bg-primary text-brand-black font-bold uppercase tracking-widest px-10 py-5 rounded-full hover:bg-white transition-all duration-500 shadow-xl shadow-primary/10 active:scale-95"
                    >
                        Start Your Growth
                    </Link>
                </div>

                <hr className="border-white/5 mb-16" />

                {/* Middle Section: Navigation & Contact */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">

                    {/* Column 1: Explore */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">Explore</h4>
                        <ul className="space-y-4 font-medium">
                            <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="#section_testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
                            <li><Link href="#OurPackages" className="hover:text-primary transition-colors">Our Packages</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Agency */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">Agency</h4>
                        <ul className="space-y-4 font-medium">
                            <li><Link href="#section_problems" className="hover:text-primary transition-colors">About Us</Link></li>
                            {/* <li><Link href="#process" className="hover:text-primary transition-colors">Our Process</Link></li> */}
                            <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">Connect</h4>
                        <a
                            href="mailto:natasha@g2gmediahouse.com"
                            className="text-xl font-bold hover:text-primary transition-all break-words block mb-2"
                        >
                            natasha@g2gmediahouse.com
                        </a>
                        <p className="text-gray-500 text-sm">Based in Hyderabad, India.</p>
                    </div>

                    {/* Column 4: Location */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">Location</h4>
                        <a
                            href="https://www.google.com/maps/search/Aziz%20Towers/@17.3996355,78.48141308,17z?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold hover:text-primary transition-colors block mb-4"
                        >
                            Aziz Towers, Hyderguda, Hyderabad, India
                        </a>
                        <iframe
                            src="https://maps.google.com/maps?q=Aziz%20Towers,%20Hyderguda,%20Hyderabad,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="120"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            className="rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-300 border border-white/10"
                        ></iframe>
                    </div>

                    {/* Column 5: Socials */}
                    <div className="col-span-2 lg:col-span-1 flex lg:justify-end items-start">
                        <div className="flex gap-4">
                            {[
                                { icon: <FaYoutube />, link: "#" },
                                { icon: <FaInstagram />, link: "https://www.instagram.com/g2gmediahouse?utm_source=qr&igsh=b2xyY3ltaTE0d3J4" },
                                { icon: <FaLinkedin />, link: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-brand-black hover:border-primary transition-all duration-500"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Legal */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[11px] font-bold uppercase tracking-widest text-gray-600">
                    <div className="mb-4 md:mb-0">
                        © 2026 Get 2 Grow Agency. All rights reserved.
                    </div>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}