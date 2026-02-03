"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#section_problems" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#section_testimonials" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 font-sans ${
        scrolled 
          ? "bg-white py-3 shadow-md" 
          : "bg-white py-5" // Changed to solid white to prevent initial overlap
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Brand Identity */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-11 w-11 flex items-center justify-center rounded-xl bg-primary shadow-lg transition-all duration-300 group-hover:scale-110">
            <Image
              src="/assets/g2g_logo.png"
              alt="Get 2 Grow Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <p className="font-bold text-xl tracking-tight text-brand-black uppercase">
            Get To <span className="text-primary">Grow</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-[13px] font-bold uppercase tracking-widest text-brand-black/70 hover:text-brand-black transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact-section"
            className="px-8 py-3 bg-brand-black text-primary text-[11px] font-bold uppercase tracking-widest rounded-full shadow-lg hover:bg-primary hover:text-brand-black transition-all duration-300 inline-block"
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
            <span className={`h-0.5 bg-brand-black transition-all duration-300 ${isOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'}`} />
            <span className={`h-0.5 bg-brand-black transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`} />
            <span className={`h-0.5 bg-brand-black transition-all duration-300 ${isOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-6'}`} />
          </div>
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY FIX --- */}
      <div 
        className={`lg:hidden fixed inset-0 top-[70px] h-[calc(100vh-70px)] bg-white z-[105] transition-all duration-500 ease-in-out px-8 py-12 border-t border-gray-100 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-4xl font-bold text-brand-black uppercase tracking-tighter"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <Link
              href="#contact-section"
              className="block w-full text-center py-5 bg-primary text-brand-black font-bold uppercase tracking-widest rounded-2xl shadow-lg"
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