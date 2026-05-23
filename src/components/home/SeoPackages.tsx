"use client";

import { motion } from "framer-motion";
import { Search, BarChart2, Compass, FileText, Star, Link2, Cpu, Sliders, TrendingUp } from "lucide-react";
import Link from "next/link";

/* ─────────────────────────── DATA ─────────────────────────── */
const seoPackages = [
  {
    id: "seo-starter",
    title: "G2G STARTER",
    subtitle: "Startups & Personal Brands",
    keywords: "30 Keywords",
    price: "Rs. 30,000/month",
    features: [
      { text: "Keyword Research", icon: Search },
      { text: "Competitor Analysis", icon: BarChart2 },
      { text: "On-Page SEO", icon: Compass },
      { text: "Monthly Reporting", icon: FileText },
    ],
    highlight: false,
    pillColor: "bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:border-white/30 shadow-[0_4px_12px_rgba(0,0,0,0.5)]",
  },
  {
    id: "seo-growth",
    title: "G2G GROWTH",
    subtitle: "Businesses Focused on Scaling",
    keywords: "50 Keywords",
    price: "Rs. 50,000/month",
    features: [
      { text: "Everything in Starter +", icon: Star },
      { text: "Off-Page SEO", icon: Compass },
      { text: "Link Building", icon: Link2 },
      { text: "Technical SEO", icon: Cpu },
    ],
    highlight: true,
    pillColor: "bg-[#22c55e] text-black font-black hover:bg-[#1eb052] shadow-[0_0_25px_rgba(34,197,94,0.45)] hover:scale-[1.02]",
  },
  {
    id: "seo-authority",
    title: "G2G AUTHORITY",
    subtitle: "High-Growth Brands & Founders",
    keywords: "100 Keywords",
    price: "Rs. 1L/month",
    features: [
      { text: "Full SEO Management", icon: Sliders },
      { text: "Advanced Link Building", icon: Link2 },
      { text: "Technical Optimization", icon: Cpu },
    ],
    highlight: false,
    pillColor: "bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:border-white/30 shadow-[0_4px_12px_rgba(0,0,0,0.5)]",
  },
];

/* ──────────────────────── COMPONENT ──────────────────────── */
export default function SeoPackages() {
  return (
    <section id="SeoPackages" className="py-24 md:py-32 relative overflow-hidden bg-black border-t border-white/5">
      {/* Background neon glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-primary text-xs font-black uppercase tracking-[0.3em] font-sans">Search Optimization</span>
            <span className="w-8 h-[2px] bg-primary"></span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[38px] md:text-[56px] font-black text-white leading-[1.1] tracking-tight uppercase"
          >
            SEO <span className="text-primary italic">Packages</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto font-medium"
          >
            Choose the search plan designed to capture buyers, dominate your niche, and scale organic traffic.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {seoPackages.map((pkg, idx) => (
            <SeoPackageCard key={pkg.id} pkg={pkg} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── CARD ──────────────────────── */
type SeoPkg = typeof seoPackages[number];

function SeoPackageCard({ pkg, index }: { pkg: SeoPkg; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`relative flex flex-col rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 overflow-hidden group
        ${pkg.highlight
          ? "border-2 border-[#22c55e] bg-gradient-to-b from-[#0a1a0f]/90 to-black/90 shadow-[0_0_50px_rgba(34,197,94,0.12)]"
          : "border border-white/10 bg-[#070709]/80 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5"
        }`}
    >
      {/* Decorative Star/Badge for growth */}
      {pkg.highlight && (
        <div className="absolute top-5 right-5 flex items-center justify-center bg-[#22c55e]/15 border border-[#22c55e]/30 px-3 py-1 rounded-full text-xs font-black tracking-widest text-[#22c55e]">
          <Star className="w-3.5 h-3.5 fill-[#22c55e] mr-1.5 shrink-0" />
          POPULAR
        </div>
      )}

      {/* Title & Subtitle */}
      <div className="mb-6">
        <h3 className="text-white font-extrabold text-2xl tracking-wide">
          {pkg.title}
        </h3>
        <p className="text-gray-400 text-sm font-semibold mt-1">
          {pkg.subtitle}
        </p>
      </div>

      {/* Keywords Highlight Banner */}
      <div className="mb-8 p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-[#22c55e]" />
          <span className="text-3xl font-black text-white tracking-tight">
            {pkg.keywords}
          </span>
        </div>
        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1.5">
          Targeted Keywords
        </span>
      </div>

      {/* Features List */}
      <div className="flex-1">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Includes:</h4>
        <ul className="space-y-4">
          {pkg.features.map((feat, fi) => {
            const Icon = feat.icon;
            return (
              <li key={fi} className="flex items-center gap-3 text-base text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#22c55e]" />
                </div>
                <span className="font-semibold text-[15px]">{feat.text}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Contact Button without price */}
      <div className="mt-10">
        <Link href={`/contact-form?service=SEO&package=${pkg.id}`} className="block w-full">
          <motion.div
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-full text-center text-base font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${pkg.pillColor}`}
          >
            Contact Us
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
