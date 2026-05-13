"use client";

import { motion } from "framer-motion";

const messages = [
  { from: "them", name: "Samantha", text: "Who wrote this 🥺", time: "7:28 PM" },
  { from: "us", text: "Natasha, she just started handling the account", time: "7:32 PM", ticks: true },
  { from: "them", name: "Samantha", text: "Who is Natasha?", time: "7:32 PM" },
  { from: "us", text: "Our social media manager", time: "7:33 PM", ticks: true },
  { from: "them", name: "Samantha", text: "Love it ❤️", time: "7:33 PM" },
];

export default function UserSs() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">
            Celebrity Feedback
          </span>
          <h2 className="text-[36px] md:text-[56px] lg:text-[64px] font-black text-white uppercase tracking-tighter leading-[1.1]">
            Even the <span className="text-primary italic">Stars</span> Notice
          </h2>
          <p className="mt-4 text-gray-400 text-[17px] max-w-2xl mx-auto leading-relaxed">
            When Bollywood actress <span className="text-white font-semibold">Samantha</span> saw our
            content for <span className="text-primary font-semibold">Gataca</span> on Instagram,
            she had just one thing to say.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — context card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            {/* Gataca context */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Gataca</p>
                  <p className="text-gray-400 text-sm">Instagram Growth Campaign</p>
                </div>
              </div>
              <p className="text-gray-300 text-[15px] leading-relaxed">
                We managed <span className="text-white font-semibold">Gataca's</span> Instagram account — scripting, designing, and publishing high-converting content that resonated with audiences at the highest level.
              </p>

              {/* Stats row */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: "Platform", value: "Instagram" },
                  { label: "Service", value: "Social Media" },
                  { label: "Result", value: "Celebrity 👀" },
                ].map((s, i) => (
                  <div key={i} className="text-center bg-white/5 rounded-2xl p-3 border border-white/5">
                    <p className="text-primary font-bold text-sm">{s.value}</p>
                    <p className="text-gray-500 text-[11px] mt-1 uppercase tracking-widest">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote pull */}
            <div className="relative bg-primary/10 border border-primary/25 rounded-3xl p-8">
              <svg className="w-10 h-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-white text-[22px] md:text-[26px] font-bold leading-snug italic">
                "Love it ❤️"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/40 flex items-center justify-center font-black text-black text-sm">
                  S
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Samantha</p>
                  <p className="text-primary text-[11px] uppercase tracking-widest font-bold">Bollywood Actress</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — phone chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center"
          >
            {/* Phone frame */}
            <div className="relative w-full max-w-[340px] mx-auto">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-[3rem] scale-95 pointer-events-none" />

              <div className="relative bg-[#111] rounded-[2.8rem] border border-white/10 shadow-2xl overflow-hidden">
                {/* Top notch bar */}
                <div className="bg-[#0a0a0a] px-6 pt-5 pb-3 flex items-center gap-3 border-b border-white/5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/40 flex items-center justify-center font-black text-black text-sm shadow-lg">
                    S
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold leading-none">Samantha @ Himank</p>
                    <p className="text-green-400 text-[10px] mt-0.5">online</p>
                  </div>
                  {/* Icons */}
                  <div className="ml-auto flex gap-3 text-white/40">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="bg-[#0d1117] px-4 py-5 space-y-3 min-h-[380px]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, rgba(238,157,43,0.04) 0%, transparent 50%),
                                      radial-gradient(circle at 80% 20%, rgba(238,157,43,0.03) 0%, transparent 50%)`
                  }}
                >
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                      className={`flex ${msg.from === "us" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[75%] rounded-2xl px-4 py-2.5 shadow-sm ${
                          msg.from === "us"
                            ? "bg-primary text-black rounded-br-sm"
                            : "bg-[#1f2937] text-white rounded-bl-sm border border-white/5"
                        }`}
                      >
                        {msg.from === "them" && msg.name && (
                          <p className="text-primary text-[10px] font-bold mb-1 uppercase tracking-wider">{msg.name}</p>
                        )}
                        <p className={`text-[13px] font-medium leading-snug ${msg.from === "us" ? "text-black" : "text-white"}`}>
                          {msg.text}
                        </p>
                        <div className={`flex items-center justify-end gap-1 mt-1 ${msg.from === "us" ? "text-black/50" : "text-white/30"}`}>
                          <span className="text-[10px]">{msg.time}</span>
                          {msg.ticks && (
                            <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 11.293 1.854 8.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                            </svg>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Input bar */}
                <div className="bg-[#0a0a0a] px-4 py-3 flex items-center gap-3 border-t border-white/5">
                  <div className="flex-1 bg-[#1f2937] rounded-full px-4 py-2 text-white/20 text-sm border border-white/5">
                    Type a message…
                  </div>
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Instagram post badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-[2px] rounded-2xl shadow-xl"
              >
                <div className="bg-[#111] rounded-[14px] px-4 py-3 flex items-center gap-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <div>
                    <p className="text-white text-[11px] font-bold">Gataca Instagram</p>
                    <p className="text-white/40 text-[10px]">Content that impressed a star</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
