"use client";

import { useState } from "react";

export default function FAQSection() {
    const faqs = [
        {
            question: "How fast can I see results?",
            answer: "Paid ads can generate results quickly. Organic growth typically builds within 60–90 days.",
        },
        {
            question: "Do you customize packages?",
            answer: "Yes. Every strategy is tailored to your goals.",
        },
        {
            question: "Do you create content?",
            answer: "Yes. We handle strategy, scripting, editing, and posting.",
        },
        {
            question: "What platforms do you work on?",
            answer: "Instagram, Facebook, LinkedIn, YouTube, TikTok, and Google.",
        },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex flex-col md:flex-row gap-8 mb-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-[36px] font-bold text-white">
                            Popular <span className="text-primary">FAQs</span>
                        </h2>
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-gray-300 text-lg">
                            Have question? We got answers. Here are the most frequently asked questions.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#0a0a0a] rounded-xl p-6 md:p-8 shadow-sm border border-white/5 hover:border-primary/30 transition-colors">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-start w-full text-left focus:outline-none"
            >
                <h3 className="text-xl font-bold text-white pr-8 group-hover:text-primary transition-colors">{question}</h3>
                <span className={`transform transition-transform duration-300 text-primary font-bold text-2xl flex items-center justify-center ${isOpen ? "rotate-180" : ""}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="text-gray-400 text-lg whitespace-pre-wrap leading-relaxed">
                        {answer.split('\n\n').map((block, i) => (
                            <p key={i} className="mb-4 last:mb-0">
                                {block.split('**').map((part, j) =>
                                    j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                                )}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
