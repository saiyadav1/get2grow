"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

/* ─────────────────────────── DATA ─────────────────────────── */
const packages = [
  {
    id: "core",
    label: "G2G CORE",
    labelColor: "#d4f26b",   // lime-yellow accent (matches screenshot)
    tagline: "You create. We produce.",
    description:
      "You already have the footage. We turn it into polished, platform-ready content your brand can publish with confidence.",
    features: [
      "Starting at 20 short-form videos per month",
      "5 carousels per month",
      "Custom editing style for your brand",
      "Thumbnails, captions, and design assets",
      "Platform-native formatting",
      "Dedicated team: editors, creatives, project manager, designer",
      "Bi-weekly check-ins",
      "Monthly performance report",
    ],
    cta: "Apply",
    ctaStyle: "outline" as const,
    highlight: false,
  },
  {
    id: "os",
    label: "G2G OS",
    labelColor: "#f5c842",   // amber accent
    tagline: "Your entire content operation. Run by us.",
    description:
      "You show up. We handle everything else — strategy, scripting, creative direction, editing, and distribution. A full content department embedded in your workflow.",
    features: [
      "Everything in Core",
      "Repeatable pre-production system",
      "Content strategy",
      "Creative direction",
      "Scripting",
      "Shoot direction",
      "Multi-platform distribution",
    ],
    cta: "Apply",
    ctaStyle: "outline" as const,
    highlight: true,
  },
  {
    id: "studio",
    label: "G2G STUDIO",
    labelColor: "#c4b5fd",   // violet accent
    tagline: "Full-scale production for brands operating at volume.",
    description:
      "Your scope. Our infrastructure. For brands that need scale without sacrificing quality. We build a dedicated production system around your requirements.",
    features: [
      "Everything in OS",
      "Upwards of 100 curated videos a month",
      "Dedicated clipping team",
      "Best for enterprise projects",
    ],
    cta: "Let's Talk",
    ctaStyle: "solid" as const,
    highlight: false,
  },
];

/* ──────────────────────── COMPONENT ──────────────────────── */
export default function OurPackages() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-black">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[38px] md:text-[52px] font-black text-white leading-[1.1] tracking-tight"
          >
            Three ways to{" "}
            <span className="text-primary italic">work with us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-gray-400 text-base max-w-lg"
          >
            Every engagement starts with a 3-month commitment.{" "}
            <span className="text-white font-medium">
              We take on 2–3 new clients per quarter.
            </span>
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── CARD ──────────────────────── */
type Pkg = (typeof packages)[number];

function PackageCard({ pkg, index }: { pkg: Pkg; index: number }) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className={`relative flex flex-col rounded-2xl border p-7 group transition-colors duration-500
        ${pkg.highlight
          ? "border-primary/40 bg-[#0d1a0f] hover:border-primary/70"
          : "border-white/8 bg-[#0e0e0e] hover:border-white/20"
        }`}
    >
      {/* Tilted label badge */}
      <div className="mb-6">
        <span
          className="inline-block px-4 py-1.5 text-sm font-black tracking-widest uppercase rounded border-2 border-black rotate-[-2deg] shadow-md"
          style={{ backgroundColor: pkg.labelColor, color: "#111" }}
        >
          {pkg.label}
        </span>
      </div>

      {/* Tagline */}
      <h3 className="text-white font-bold text-xl leading-snug mb-3">
        {pkg.tagline}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-base leading-relaxed mb-6">
        {pkg.description}
      </p>

      {/* Divider */}
      <div className="h-px w-full bg-white/8 mb-6" />

      {/* Feature list */}
      <ul className="space-y-3 flex-1">
        {pkg.features.map((feat, fi) => (
          <li key={fi} className="flex items-start gap-3 text-base text-gray-300">
            <CheckCircle2
              className="w-4 h-4 mt-0.5 shrink-0"
              style={{ color: pkg.labelColor }}
            />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8">
        {pkg.ctaStyle === "solid" ? (
          <button
            onClick={() => router.push("/contact-form")}
            className="w-full py-3 rounded-xl text-base font-bold tracking-wide transition-all duration-300
              bg-primary text-black hover:bg-primary/90 hover:scale-[1.02] active:scale-100"
          >
            {pkg.cta}
          </button>
        ) : (
          <button
            onClick={() => router.push("/contact-form")}
            className="w-full py-3 rounded-xl text-base font-bold tracking-wide transition-all duration-300
              border border-white/20 text-white hover:border-primary hover:text-primary hover:scale-[1.02] active:scale-100"
          >
            {pkg.cta}
          </button>
        )}
      </div>

      {/* Highlight glow */}
      {pkg.highlight && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-primary/20 shadow-[0_0_40px_rgba(34,197,94,0.08)]" />
      )}
    </motion.div>
  );
}