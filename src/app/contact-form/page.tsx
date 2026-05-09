"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ContactFormPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-12 font-sans selection:bg-primary/30">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">

        {/* Back button & Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-6 text-sm uppercase tracking-widest font-bold">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Connect</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Book a slot on our calendar below so we can discuss your project in detail.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/[0.02] border border-white/5 rounded-3xl p-2 h-[600px] sm:h-[700px] flex flex-col relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-center p-4 border-b border-white/5 mb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold tracking-tight">Pick a Time Slot</h2>
              </div>
            </div>

            <div className="flex-1 w-full rounded-2xl overflow-hidden bg-white">
              <iframe
                src="https://cal.com/tashatheo/30min"
                className="w-full h-full border-none"
                title="Cal.com Booking"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
