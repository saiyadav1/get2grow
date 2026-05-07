"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket, Settings, TrendingUp } from "lucide-react";

export default function OurProcess() {
  const steps = [
    {
      id: "01",
      title: "Understand",
      description: "Understand your business and goals.",
      icon: Target,
    },
    {
      id: "02",
      title: "Strategize",
      description: "Build a custom growth strategy.",
      icon: Lightbulb,
    },
    {
      id: "03",
      title: "Create",
      description: "Create content and campaigns.",
      icon: Rocket,
    },
    {
      id: "04",
      title: "Execute",
      description: "Launch and optimize.",
      icon: Settings,
    },
    {
      id: "05",
      title: "Scale",
      description: "Scale what performs.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Our Process
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-black text-white leading-[1.1] uppercase tracking-tighter"
          >
            How We <span className="text-primary italic">Grow</span> You
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className="relative flex flex-col md:flex-row items-start md:items-center w-full">
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-black border-2 border-primary -translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                  >
                    <step.icon className="w-5 h-5 text-primary" />
                  </motion.div>

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 flex pl-20 md:pl-0 ${isEven ? "md:justify-end md:pr-20" : "md:justify-start md:pl-20 md:ml-auto"}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                      className="bg-[#111111] border border-white/5 p-8 rounded-3xl w-full max-w-md relative group hover:border-primary/30 transition-colors duration-500 hover:bg-[#151515]"
                    >
                      <div className="absolute -top-6 right-6 md:right-8 text-[64px] font-black text-white/5 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none select-none">
                        {step.id}
                      </div>
                      
                      <h4 className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
                        Step {index + 1}
                      </h4>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-[16px]">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
