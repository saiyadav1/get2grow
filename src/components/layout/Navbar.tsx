"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#section_problems" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#section_testimonials" },
  ];

  return (
    <nav className="w-full py-4 transition-all duration-300 font-sans sticky top-0 z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-4 mb-8 group">
          <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-white/10 group-hover:border-primary transition-colors">
            <Image
              src="/assets/g2g_logo.png"
              alt="Get 2 Grow Logo"
              fill
              className="object-cover p-2"
            />
          </div>
          <span className="font-black text-white text-2xl uppercase tracking-tighter">
            Get<span className="text-primary">2</span>Grow
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[13px] font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact-form"
            className="px-8 py-3 bg-primary text-brand-black text-[11px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:-translate-y-0.5 transition-all duration-300 inline-block"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 relative z-[110]" // Higher Z to stay on top
        >
          <div className="flex flex-col gap-1.5 items-end">
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'}`} />
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`} />
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-6'}`} />
          </div>
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY FIX --- */}
      <div
        className={`lg:hidden fixed inset-0 top-[70px] h-[calc(100vh-70px)] bg-black z-[105] transition-all duration-500 ease-in-out px-8 py-12 border-t border-gray-100 origin-top ${isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-4 opacity-0 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-4xl font-bold text-white uppercase tracking-tighter"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <Link
              href="/contact-form"
              className="block w-full text-center py-5 bg-primary text-brand-black font-bold uppercase tracking-widest rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:bg-white hover:text-black transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}