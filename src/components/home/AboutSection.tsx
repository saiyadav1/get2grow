"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, TrendingUp, Award, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const features = [
    "Attract attention",
    "Build trust",
    "Generate leads",
    "Increase sales",
  ];

  const reasons = [
    {
      title: "Strategy First",
      description: "Every piece of content has a purpose.",
      icon: Target,
    },
    {
      title: "Built For Growth",
      description: "We focus on leads, sales, and long-term scaling.",
      icon: TrendingUp,
    },
    {
      title: "Premium Positioning",
      description: "We make your brand look credible and valuable.",
      icon: Award,
    },
    {
      title: "Done-For-You",
      description: "We handle strategy, content, ads, and execution.",
      icon: CheckCircle,
    },
  ];

  return (
    <section
      id="section_problems"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-30" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-black text-white leading-[1.1] uppercase tracking-tighter mb-4 md:mb-8">
              Content that <span className="text-primary italic">converts.</span>{" "}
              <br className="hidden md:block" />
              Strategy that <span className="text-primary italic">sells.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl"
          >
            <p className="text-gray-300 text-[18px] md:text-[20px] leading-relaxed mb-8">
              Get To Grow Media House is a digital marketing agency focused on
              one thing: Helping businesses grow faster.
            </p>

            <p className="text-gray-300 text-[18px] md:text-[20px] leading-relaxed mb-8">
              We create direct-response marketing systems that:
            </p>

            <div className="space-y-4 mb-8">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center text-gray-300 text-[16px] md:text-[18px] font-medium"
                >
                  <div className="w-6 h-6 mr-4 bg-primary/20 rounded-full flex items-center justify-center shrink-0 border border-primary/30">
                    <span className="text-primary text-[10px] font-black">
                      ✓
                    </span>
                  </div>
                  {item}
                </motion.div>
              ))}
            </div>

            <p className="text-gray-300 text-[18px] md:text-[20px] leading-relaxed">
              From social media and paid ads to branding and content creation,
              everything we do is designed to move people to take action.
            </p>
          </motion.div>
        </div>

        {/* Why G2G Cards */}
        <div className="text-center mb-10">
          <h3 className="text-primary font-bold tracking-widest uppercase text-sm">Why G2G</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-[#0a0a0a] p-6 lg:p-8 rounded-[2rem] border border-white/5 overflow-hidden transition-all hover:bg-black hover:border-primary/30 flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 mb-6 rounded-[1.5rem] bg-white/5 rotate-3 group-hover:rotate-0 border border-white/10 group-hover:border-primary/40 flex items-center justify-center transition-all duration-500 shadow-[0_0_30px_rgba(34,197,94,0)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                  <reason.icon className="w-10 h-10 text-primary opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </div>

                <h3 className="text-[20px] font-bold text-white mb-4">
                  {reason.title}
                </h3>

                <div className="w-12 h-1 bg-white/10 group-hover:bg-primary/50 transition-colors duration-500 rounded-full mb-4" />

                <p className="text-gray-400 text-[15px] leading-relaxed flex-1">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
