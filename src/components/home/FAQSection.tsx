"use client";

import { useState } from "react";

export default function FAQSection() {
    const faqs = [
        {
            question: "What is the cost of your service?",
            answer: "The cost of our service varies depending on the specific project requirements, materials available, and depth of research needed. Each project is unique, and we tailor our pricing to reflect the complexity and scope of the work involved. The starting price for each project is $3000.\n\nFor a detailed quote, please contact me with the specifics of your project, and I'll be happy to provide a customized estimate.",
        },
        {
            question: "How much time will my project take?",
            answer: "Each project requires a minimum of 2 months to complete. This time allows us to thoroughly research, plan, and create high-quality content tailored to your needs. The third month is dedicated to editing and preparing the final draft to ensure it meets our rigorous standards.\n\nYou&apos;d be surprised how time can fly when you&apos;re writing a book—that&apos;s how the saying goes, right? Rest assured, we work diligently to deliver exceptional results within this timeframe.",
        },
        {
            question: "How does the process work?",
            answer: "**Here&apos;s a breakdown of the process:**\n\n**Step 1: Book your Discovery Call**\nIn this 15 to 30-minute call, we chat about your copywriting needs and decide if we’re a good fit for each other. I send you a proposal outlining my copywriting recommendations.\n\n**Step 2: Sign your contract + Pay your Invoice**\nAre we a perfect match? Yippie! You sign your contract and pay 50% of your invoice. I get to work on a small test project — usually one blog post or a small email sequence.\n\n**Step 3: Sit back and relax as I get to work ✍**\nThis is the part where you rejoice — because writing has officially been scraped off your plate and added to mine. Now sit back and relax (or focus on other work tasks) while I get busy making your copy dreams come true.\n\n**Step 4: Surprise! You&apos;ve got a draft from Yours truly 🤓**\nOnce I finish working my copywriting magic, I’ll email your project in a Google Doc, along with an invoice for the remaining 50% of your balance. You get one round of revisions if something doesn’t sound quite right.\n\n**Step 5: Decide if you want to book more work**\nThat’s a wrap! After our test project is complete, we’ll evaluate the process, work out any kinks, and decide if we want to continue working together.",
        },
        {
            question: "What do you need from me while you're working?",
            answer: "Not a lot—but we DO need you to be available for questions via Email or Slack or Telegram *if * they come up.\n(Definitely don&apos;t book your call when you&apos;re traveling, attending a conference, working an event, taking time off for kid&apos;s school parties, etc.)",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex flex-col md:flex-row gap-8 mb-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-[36px] font-bold text-[#333]">
                            Popular <span className="text-[#ee9d2b]">FAQs</span>
                        </h2>
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-gray-600 text-lg">
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
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-start w-full text-left focus:outline-none"
            >
                <h3 className="text-xl font-bold text-gray-800 pr-8">{question}</h3>
                <span className={`transform transition-transform duration-300 text-[#ee9d2b] font-bold text-2xl ${isOpen ? "rotate-180" : ""}`}>
                    v
                </span>
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="text-gray-600 text-lg whitespace-pre-wrap leading-relaxed">
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
