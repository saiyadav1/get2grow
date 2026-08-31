"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Calendar,
  ChevronDown,
  Check,
  Link2,
  Bookmark,
  Share2,
  Sparkles,
  FileText,
  AlertCircle,
  TrendingUp,
  BrainCircuit,
  ShieldCheck,
  UserCheck,
  Layers,
  ArrowUpRight
} from "lucide-react";

export default function BlogContent() {
  // Reading Progress Bar
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Table of Contents Scroll Tracking
  const [activeSection, setActiveSection] = useState("intro");
  const sectionIds = [
    "intro",
    "why-need",
    "do",
    "choose",
    "services",
    "cost",
    "mistakes",
    "why-conversion",
    "checklist",
    "worth-it",
    "growth",
    "key-takeaways",
    "faq"
  ];

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-20% 0px -60% 0px" }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Checklist Interactive State
  const [checklistItems, setChecklistItems] = useState([
    { id: "c1", text: "How will you understand our business goals?", checked: false },
    { id: "c2", text: "What will you track as a conversion?", checked: false },
    { id: "c3", text: "How often will campaigns be optimised?", checked: false },
    { id: "c4", text: "What reports will we receive?", checked: false },
    { id: "c5", text: "Will we have access to our Google Ads account?", checked: false },
    { id: "c6", text: "How do you handle negative keywords?", checked: false },
    { id: "c7", text: "Will you review our landing pages?", checked: false },
    { id: "c8", text: "How do you measure lead quality?", checked: false },
    { id: "c9", text: "What happens if performance is below expectations?", checked: false },
    { id: "c10", text: "Who will manage our account?", checked: false }
  ]);

  const toggleChecklistItem = (id: string) => {
    setChecklistItems(
      checklistItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const progressPercentage = Math.round(
    (checklistItems.filter((i) => i.checked).length / checklistItems.length) * 100
  );

  // Share Copy Link State
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Table of Contents Menu Data
  const tocItems = [
    { id: "intro", text: "Introduction" },
    { id: "why-need", text: "Why Businesses Need Management" },
    { id: "do", text: "What Does an Agency Do?" },
    { id: "choose", text: "How to Choose an Agency" },
    { id: "services", text: "Core Services to Expect" },
    { id: "cost", text: "Management Costs" },
    { id: "mistakes", text: "Common Mistakes to Avoid" },
    { id: "why-conversion", text: "Why Conversion Tracking Matters" },
    { id: "checklist", text: "Questions to Ask Checklist" },
    { id: "worth-it", text: "Is It Worth Hiring?" },
    { id: "growth", text: "Growth-Focused Approach" },
    { id: "key-takeaways", text: "Key Takeaways" },
    { id: "faq", text: "FAQ" }
  ];

  // FAQ Content Array
  const faqs = [
    {
      q: "How do I choose the best Google Ads agency in Hyderabad?",
      a: "Choose an agency based on strategy, transparency, conversion tracking, reporting, and relevant experience—not price alone. Ask how the agency will understand your goals, manage your campaigns, measure leads, and optimise performance. You should also understand who owns the Google Ads account and whether you will have access to your campaign data."
    },
    {
      q: "How much does a Google Ads agency charge in Hyderabad?",
      a: "Google Ads management costs in Hyderabad vary depending on campaign complexity, advertising budget, number of campaigns, industry competition, and the services included. Some agencies charge a fixed monthly fee, while others charge a percentage of advertising spend. Compare the overall value and potential results rather than choosing only based on the lowest fee."
    },
    {
      q: "What does a Google Ads agency do?",
      a: "A Google Ads agency helps businesses plan, launch, manage, and optimise paid advertising campaigns. Services may include keyword research, campaign setup, ad copywriting, conversion tracking, remarketing, budget management, search term analysis, landing page recommendations, reporting, and ongoing campaign optimisation."
    },
    {
      q: "Is hiring a Google Ads agency worth it?",
      a: "Hiring a Google Ads agency can be worthwhile when the agency provides specialist knowledge, structured campaign management, accurate conversion tracking, and regular optimisation. The best agencies focus on meaningful business outcomes rather than clicks alone. Results also depend on your offer, competition, website experience, sales process, and advertising budget."
    },
    {
      q: "How long does it take to see results from Google Ads?",
      a: "Google Ads can begin generating traffic quickly after campaigns are approved, but meaningful performance optimisation takes time and sufficient data. Results depend on factors such as competition, search demand, budget, conversion tracking, landing page quality, and your sales process. Regular analysis and testing are important for improving campaign efficiency."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white font-sans selection:bg-primary selection:text-black">
      {/* Sticky Progress Bar at the top of the viewport */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-[150]">
        <div
          className="h-full bg-gradient-to-r from-primary to-green-400 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar />

      {/* Header Area */}
      <header className="relative pt-24 pb-16 overflow-hidden border-b border-white/5 bg-[#0e0e14]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300">Google Ads Agency Hyderabad</span>
          </nav>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              Google Ads
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Calendar size={14} className="text-primary" /> August 31, 2026
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Clock size={14} className="text-primary" /> 11 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] max-w-5xl mb-6">
            Google Ads Agency Hyderabad: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 font-black">How to Choose</span> the Right Partner for Growth
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Looking for a Google Ads agency in Hyderabad? Learn how expert PPC management can help you generate qualified leads, sales, and measurable growth.
          </p>
        </div>
      </header>

      {/* Main Grid Content */}
      <div className="container mx-auto px-6 max-w-7xl py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Sticky Table of Contents */}
          <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-28 self-start">
            <div className="border border-white/5 rounded-2xl bg-[#121216]/60 p-6 backdrop-blur-md">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                <FileText size={14} className="text-primary" /> Table of Contents
              </h3>
              <ul className="space-y-4">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left text-[11px] font-bold uppercase tracking-wider transition-all block w-full border-l-2 pl-4 py-1 hover:text-white ${
                        activeSection === item.id
                          ? "border-primary text-primary"
                          : "border-white/5 text-gray-500 hover:border-white/20"
                      }`}
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Middle Column: Detailed Post Content */}
          <article className="lg:col-span-6 text-gray-300 leading-relaxed text-sm sm:text-base font-medium space-y-12 animate-fade-in">
            
            {/* Featured Image */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
              <Image
                src="/assets/blog/google-ads-agency-hyderabad-featured.jpg"
                alt="Google Ads agency in Hyderabad managing PPC campaigns and conversion tracking"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <p>
                Running Google Ads looks simple from the outside.
              </p>
              <p>
                Choose a few keywords. Write an ad. Set a budget. Wait for leads.
              </p>
              <p>
                But most businesses discover the truth after spending money: <strong>getting clicks is easy. Getting profitable results is much harder.</strong>
              </p>
              <p>
                A poorly managed campaign can burn through your advertising budget without producing enough quality leads or sales. The problem may not even be Google Ads itself. It could be the wrong keywords, weak targeting, poor ad messaging, broken conversion tracking, or a landing page that fails to persuade visitors.
              </p>
              <p>
                That is why choosing the right <Link href="/" className="text-primary hover:underline font-bold">paid advertising services</Link> and finding the right Google Ads agency in Hyderabad matters.
              </p>
              <p>
                A good agency does not simply switch campaigns on and collect a management fee. It should understand your business, your customers, your goals, and the numbers that actually matter.
              </p>
              <p>
                This guide will help you understand what a Google Ads agency does, what to look for before hiring one, and how to choose a partner that can support long-term business growth.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* Why Businesses Need Management */}
            <section id="why-need" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Why Businesses in Hyderabad Need Professional Google Ads Management
              </h2>
              <p>
                Hyderabad is home to a growing mix of startups, technology companies, ecommerce brands, local businesses, professional service providers, and established enterprises.
              </p>
              <p>
                That growth also means more competition.
              </p>
              <p>
                When potential customers search Google for products or services you offer, several competitors may be targeting the same audience. Without a clear advertising strategy, your business can easily lose visibility or spend too much trying to compete.
              </p>
              <p>
                Professional Google Ads management helps bring structure to that process.
              </p>
              <p className="font-bold text-white">A well-managed campaign can help you:</p>
              <ul className="space-y-2 text-gray-400 pl-4">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Reach people actively searching for your products or services</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Target high-intent keywords</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Improve the quality of incoming leads</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Reduce wasted advertising spend</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Track which campaigns generate enquiries or sales</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Test and improve campaign performance over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Scale campaigns when profitable opportunities appear</span>
                </li>
              </ul>
              
              <div className="p-6 border-l-4 border-primary bg-white/5 rounded-r-2xl my-6">
                <p className="font-bold text-white mb-2">Important:</p>
                <p className="text-gray-300 italic">
                  Google Ads is not just about buying traffic. The real goal is to turn relevant search demand into measurable business outcomes.
                </p>
              </div>

              <p>
                Google's own guidance emphasises ad relevance, strong assets, and continuous optimisation for responsive search campaigns. Google also recommends using multiple responsive search ads and monitoring ad quality signals to improve campaign effectiveness.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* What Does an Agency Do? */}
            <section id="do" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Does a Google Ads Agency Actually Do?
              </h2>
              <p>
                A professional agency should manage the entire advertising process rather than focusing on a single task.
              </p>
              <p>
                Depending on your goals, that can include several important areas:
              </p>

              <div className="space-y-6 pl-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">1. Understanding Your Business Goals</h3>
                  <p className="text-gray-400">
                    The first question should not be: <em>"What is your monthly ad budget?"</em> A better question is: <strong>"What does success look like for your business?"</strong>
                  </p>
                  <p className="text-gray-400 mt-2">
                    For example, success could mean:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-500 pl-4 mt-2">
                    <li>• More qualified phone calls</li>
                    <li>• More website enquiries</li>
                    <li>• More ecommerce purchases</li>
                    <li>• More demo bookings</li>
                    <li>• Lower cost per qualified lead</li>
                    <li>• Higher return on advertising spend</li>
                  </ul>
                  <p className="text-gray-400 mt-2">
                    Your campaign strategy should be built around the result you actually want.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">2. Keyword and Search Intent Research</h3>
                  <p className="text-gray-400">
                    Not every keyword is valuable. Consider the difference between someone searching:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-500 pl-4 my-2">
                    <li>• <em>"digital marketing"</em> (informational)</li>
                    <li>• <em>"Google Ads services"</em> (investigational)</li>
                    <li>• <em>"hire Google Ads agency in Hyderabad"</em> (transactional / high-intent)</li>
                  </ul>
                  <p className="text-gray-400">
                    These searches represent very different levels of buying intent. A good PPC strategy considers commercial intent, search volume, competition, customer location, cost potential, business relevance, and conversion potential.
                  </p>
                  <p className="text-gray-400 mt-2">
                    The goal is not simply to find the most searched keywords, but to find the keywords most likely to attract the right customer.
                  </p>
                </div>
              </div>

              {/* Image 2 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-8">
                <Image
                  src="/assets/blog/digital-marketer-researching-google-ads-keywords.jpg"
                  alt="Digital marketer researching Google Ads keywords on laptop in Hyderabad office"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-6 pl-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">3. Campaign Structure and Targeting</h3>
                  <p className="text-gray-400">
                    Campaign structure affects how much control you have over your advertising. A well-organised account makes it easier to monitor performance, test messaging, control budgets, improve relevance, and identify wasted spend.
                  </p>
                  <p className="text-gray-400 mt-2">
                    The agency should make deliberate decisions about targeting rather than relying entirely on automated settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">4. Ad Copywriting</h3>
                  <p className="text-gray-400">
                    Good ads answer a customer's question quickly. They should communicate:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-500 pl-4 mt-2">
                    <li>• What you offer</li>
                    <li>• Why it matters</li>
                    <li>• What makes your offer relevant</li>
                    <li>• What the customer should do next</li>
                  </ul>
                  <p className="text-gray-400 mt-2">
                    Google's responsive search ads allow advertisers to provide multiple headlines and descriptions, which can be tested in different combinations. The platform guidance also stresses relevance and clear messaging.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">5. Conversion Tracking</h3>
                  <p className="text-gray-400">
                    This is one of the most important parts of Google Ads management. Without proper conversion tracking, you may know how many clicks you received but not whether those clicks created business value.
                  </p>
                  <p className="text-gray-400 mt-2">
                    A campaign should ideally track relevant actions such as form submissions, phone calls, purchases, demo requests, appointment bookings, and other important lead actions.
                  </p>
                  <div className="p-4 border-l border-primary/30 bg-primary/5 rounded-r-xl mt-3 text-xs text-gray-300">
                    <strong>Pro Tip:</strong> Never judge an advertising campaign only by impressions or clicks. A campaign with fewer clicks may generate better business results than one with high traffic but poor lead quality.
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* How to Choose the Right Google Ads Agency */}
            <section id="choose" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How to Choose the Right Google Ads Agency in Hyderabad
              </h2>
              <p>
                Choosing an agency should not be based only on who appears first in Google. Nor should you choose solely because one company promises the cheapest management fee.
              </p>
              <p>
                Use the following structured process instead:
              </p>

              <div className="space-y-6 pl-4">
                <div>
                  <h3 className="text-base font-bold text-white mb-1">1. Start With Your Own Business Goals</h3>
                  <p className="text-gray-400 text-sm">
                    Before contacting any agency, define what you want to achieve. Ask yourself:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-gray-500 pl-4 mt-2">
                    <li>• Do I need leads or sales?</li>
                    <li>• What type of customer am I trying to attract?</li>
                    <li>• Which services or products have the highest value?</li>
                    <li>• What is an acceptable cost per lead?</li>
                    <li>• What happens after a lead arrives?</li>
                  </ul>
                  <p className="text-gray-400 text-sm mt-2">
                    This last question is especially important. If your sales team does not respond quickly to enquiries, or your website creates confusion, increasing ad traffic may not solve the underlying problem. A strong agency should understand the complete customer journey.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-1">2. Look for Evidence of Strategic Thinking</h3>
                  <p className="text-gray-400 text-sm">
                    Be cautious when every agency conversation begins and ends with: <em>"How much budget do you have?"</em>
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Budget matters, but strategy matters too. Ask how the agency would approach keyword research, competitor research, campaign structure, negative keywords, conversion tracking, landing page optimisation, reporting, and scaling successful campaigns.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Industry experience can also be valuable because advertising strategies differ across ecommerce, local services, B2B lead generation, SaaS, healthcare, and other sectors.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-1">3. Ask About Reporting and Transparency</h3>
                  <p className="text-gray-400 text-sm">
                    You should understand what is happening with your advertising money. A good report should help answer:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-gray-500 pl-4 mt-2">
                    <li>• How much did we spend?</li>
                    <li>• What results did we generate?</li>
                    <li>• Which campaigns performed best?</li>
                    <li>• What needs improvement?</li>
                    <li>• What actions are planned next?</li>
                  </ul>
                  <p className="text-gray-400 text-sm mt-2">
                    Avoid reports filled only with complicated charts and vanity metrics. You should be able to understand whether the campaign is moving closer to your business goals.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-1">4. Check Who Owns the Google Ads Account</h3>
                  <p className="text-gray-400 text-sm">
                    This is a question many businesses forget to ask. Clarify:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-gray-500 pl-4 mt-2">
                    <li>• Who owns the account?</li>
                    <li>• Who owns the campaign data?</li>
                    <li>• Who controls billing?</li>
                    <li>• Will you have access to the account?</li>
                  </ul>
                  <p className="text-gray-400 text-sm mt-2">
                    Transparency creates trust. Your business should not feel locked out of the advertising system it is paying for.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-1">5. Ask About Their Optimisation Process</h3>
                  <p className="text-gray-400 text-sm">
                    Google Ads is not a "set it and forget it" channel. Ongoing PPC management can involve monitoring campaigns, refining targeting, improving ads, reviewing search behaviour, and testing ways to improve performance.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Ask the agency: <em>"What do you actually optimise every month?"</em> Look for specific answers, such as: search term analysis, negative keyword additions, bid and budget adjustments, ad copy testing, conversion data analysis, audience refinement, landing page recommendations, and campaign restructuring.
                  </p>
                </div>
              </div>

              {/* Table of "7 Things to Look for Before Hiring a PPC Agency" */}
              <div className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-[#121216]/60 backdrop-blur-md">
                <div className="p-5 border-b border-white/10 bg-white/5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    7 Things to Look for Before Hiring a PPC Agency
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-white/5 text-gray-400 bg-white/[0.02]">
                        <th className="p-4 font-bold uppercase tracking-wider">What to Look For</th>
                        <th className="p-4 font-bold uppercase tracking-wider">Why It Matters</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-gray-300">
                      <tr>
                        <td className="p-4 font-bold">Clear business strategy</td>
                        <td className="p-4">Prevents campaigns from becoming random experiments</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">Conversion tracking expertise</td>
                        <td className="p-4">Shows what actually produces leads or sales</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">Transparent reporting</td>
                        <td className="p-4">Helps you understand performance</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">Relevant experience</td>
                        <td className="p-4">Can reduce the learning curve</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">Strong communication</td>
                        <td className="p-4">Keeps expectations realistic</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">Testing and optimisation</td>
                        <td className="p-4">Helps campaigns improve over time</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">Account transparency</td>
                        <td className="p-4">Gives you confidence and control</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Image 4 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-8">
                <Image
                  src="/assets/blog/business-meeting-discussing-google-ads-campaign-strategy.jpg"
                  alt="Business meeting discussing Google Ads campaign strategy with agency team, reviewing PPC performance reports and analytics data"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            <hr className="border-white/5" />

            {/* What Services Should a Google Ads Agency Provide? */}
            <section id="services" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Services Should a Google Ads Agency Provide?
              </h2>
              <p>
                A full-service <Link href="/blog/google-ads-agency-hyderabad" className="text-primary hover:underline font-bold">Google Ads management</Link> agency in Hyderabad may provide some or all of the following:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-white/5 bg-[#121216]/40">
                  <h3 className="text-base font-bold text-white mb-2">Google Search Ads</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    These ads target people searching for relevant products or services. They are particularly useful when your customers already have clear buying intent.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-[#121216]/40">
                  <h3 className="text-base font-bold text-white mb-2">Display Advertising</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Display campaigns can help businesses increase awareness or reach relevant audiences across websites and other placements.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-[#121216]/40">
                  <h3 className="text-base font-bold text-white mb-2">Remarketing</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Remarketing helps you reconnect with people who have already interacted with your website or brand, keeping you top of mind.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-[#121216]/40">
                  <h3 className="text-base font-bold text-white mb-2">Ecommerce Advertising</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Ecommerce campaigns may require a different strategy because the focus is often on product visibility, purchases, revenue, and return on ad spend.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-[#121216]/40 mt-6">
                <h3 className="text-base font-bold text-white mb-2">Landing Page Recommendations & Conversion Tracking</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Sometimes the ad is doing its job; the problem is the page after the click. A professional agency should be able to identify obvious conversion barriers and recommend landing page improvements alongside setup of accurate tracking to verify returns.
                </p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* How Much Does Google Ads Cost? */}
            <section id="cost" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How Much Does Google Ads Management Cost in Hyderabad?
              </h2>
              <p>
                There is no single standard price. Management costs may depend on monthly advertising budget, number of campaigns, campaign complexity, industry competition, required reporting, tracking requirements, creative requirements, and ecommerce versus lead generation.
              </p>
              <p>
                Some agencies charge a fixed monthly fee, while others charge a percentage of advertising spend.
              </p>
              <p>
                The cheapest option is not always the most affordable in the long run. Imagine two agencies:
              </p>
              <ul className="space-y-3 pl-4">
                <li>
                  <strong className="text-white">Agency A:</strong> Charges less but wastes a large percentage of your budget due to poor setup and monitoring.
                </li>
                <li>
                  <strong className="text-white">Agency B:</strong> Charges more but improves lead quality, reduces wasted spend, and boosts conversion performance.
                </li>
              </ul>
              <p>
                The management fee alone does not tell you which option creates better value.
              </p>
              
              <div className="p-6 border border-white/10 bg-white/5 rounded-3xl">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Expert Tip:</p>
                <p className="text-sm text-gray-300 italic">
                  Evaluate total return, not just agency fees. A higher management fee can be easily offset by dramatic reductions in wasted ad spend and improvements in conversion rates.
                </p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Common Google Ads Mistakes */}
            <section id="mistakes" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Common Google Ads Mistakes Businesses Should Avoid
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Mistake 1: Choosing Keywords Based Only on Search Volume</h3>
                  <p className="text-gray-400">
                    High search volume does not automatically mean high conversion potential. Always consider customer intent. Focus on keywords that attract users ready to take action.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Mistake 2: Tracking Clicks Instead of Business Results</h3>
                  <p className="text-gray-400">
                    Clicks are useful data, but clicks do not pay salaries. Focus on outcomes such as qualified leads, sales, revenue, or other meaningful business actions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Mistake 3: Ignoring Negative Keywords</h3>
                  <p className="text-gray-400">
                    Negative keywords can help prevent irrelevant searches from triggering your ads, saving your budget for interested buyers. Regular search-term analysis is critical for controlling wasted spend.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Mistake 4: Sending Every Visitor to the Homepage (Ignoring Landing Page Optimisation)</h3>
                  <p className="text-gray-400">
                    A homepage often tries to serve several audiences and lacks a specific call to action. A focused campaign performs much better when visitors land on a dedicated, high-converting landing page designed around the specific offer they searched for.
                  </p>
                  
                  {/* Image 5 Placement (Under Subsection Ignoring Landing Page Optimisation) */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                    <Image
                      src="/assets/blog/marketer-analysing-landing-page-conversion-performance.jpg"
                      alt="Marketer analysing landing page and conversion performance on multiple screens"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Mistake 5: Expecting Instant Perfection</h3>
                  <p className="text-gray-400">
                    Campaigns usually require learning and optimisation. The right approach is not to make random changes every day. It is to gather meaningful data, identify opportunities, test improvements, and measure the results over time.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Why Conversion Tracking Matters More Than Just Clicks */}
            <section id="why-conversion" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Why Conversion Tracking Matters More Than Just Clicks
              </h2>
              <p>
                Suppose Campaign A receives 1,000 clicks and produces five poor-quality enquiries. Campaign B receives 400 clicks and produces 20 qualified enquiries. Which campaign is better?
              </p>
              <p>
                The answer is obvious once you measure the right outcome.
              </p>
              <p>
                That is why conversion tracking should be part of the conversation before significant advertising spend begins. A good Google Ads agency should help connect campaign activity to meaningful performance data.
              </p>
              <p>
                This may include tracking:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 pl-4">
                <li>• Lead form submissions</li>
                <li>• Phone enquiries</li>
                <li>• Purchases</li>
                <li>• Demo requests</li>
                <li>• Appointment bookings</li>
              </ul>
              <p>
                The more accurately you understand outcomes, the better your optimisation decisions can become.
              </p>

              {/* Image 3 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-8">
                <Image
                  src="/assets/blog/analysing-conversion-data-lead-performance.jpg"
                  alt="Analysing conversion data and lead performance in Google Ads dashboard within a professional Hyderabad office environment"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Checklist */}
            <section id="checklist" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Questions to Ask Before Hiring a Google Ads Agency
              </h2>
              <p>
                Use this checklist during your agency conversations. These questions help you move beyond impressive sales presentations:
              </p>

              {/* Interactive Checklist UI */}
              <div className="border border-white/10 rounded-2xl bg-[#121216]/60 p-6 sm:p-8 backdrop-blur-md space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                    Agency Selection Checklist
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex-grow h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-green-400 transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono font-bold text-primary whitespace-nowrap">
                      {progressPercentage}% Checked
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {checklistItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => toggleChecklistItem(item.id)}
                      className="w-full flex items-start gap-4 p-3 rounded-xl hover:bg-white/[0.02] text-left transition-all border border-transparent hover:border-white/5"
                    >
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center mt-0.5 flex-shrink-0 transition-all ${
                          item.checked
                            ? "bg-primary border-primary text-black"
                            : "border-white/20 text-transparent"
                        }`}
                      >
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className={`text-xs sm:text-sm font-medium transition-all ${
                        item.checked ? "text-gray-500 line-through" : "text-gray-300"
                      }`}>
                        {item.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Is Hiring a Google Ads Agency Worth It? */}
            <section id="worth-it" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Is Hiring a Google Ads Agency Worth It?
              </h2>
              <p>
                It can be, but only when the agency provides genuine value.
              </p>
              <p>
                The right partner can save time, improve campaign discipline, bring specialist knowledge, and provide an outside perspective on your advertising strategy. But hiring an agency does not guarantee success by itself.
              </p>
              <p>
                The strongest results usually come from cooperation between the business and the agency.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
                <div className="p-5 border border-white/5 rounded-2xl bg-white/[0.01]">
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Your Business Provides:</h3>
                  <ul className="space-y-2 text-xs text-gray-400">
                    <li>• Industry knowledge</li>
                    <li>• Customer insights</li>
                    <li>• Sales feedback</li>
                    <li>• Product expertise</li>
                  </ul>
                </div>
                <div className="p-5 border border-white/5 rounded-2xl bg-white/[0.01]">
                  <h3 className="text-sm font-bold text-[#22c55e] uppercase tracking-wider mb-3">The Agency Provides:</h3>
                  <ul className="space-y-2 text-xs text-gray-400">
                    <li>• Advertising expertise</li>
                    <li>• Campaign management</li>
                    <li>• Testing</li>
                    <li>• Optimisation</li>
                    <li>• Performance analysis</li>
                  </ul>
                </div>
              </div>
              <p>
                When both sides communicate well, campaigns have a much better chance of improving.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* What a Growth-Focused Agency Should Do Differently */}
            <section id="growth" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What a Growth-Focused Agency Should Do Differently
              </h2>
              <p>
                At <strong>G2G Media House</strong>, the broader goal of paid advertising should be business growth—not simply more dashboard activity.
              </p>
              <p>
                That means looking beyond surface-level metrics and asking better questions:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 pl-4">
                <li>• Are we attracting the right audience?</li>
                <li>• Are enquiries qualified?</li>
                <li>• Are campaigns aligned with the offer?</li>
                <li>• Is conversion tracking accurate?</li>
                <li>• Can the landing experience be improved?</li>
                <li>• Are we learning from the data?</li>
              </ul>
              <p>
                G2G Media House positions its paid advertising services around Google Ads, retargeting, conversion tracking, campaign optimisation, and generating qualified leads and sales as part of a wider growth strategy.
              </p>
              <p>
                To support long-term growth, integrating Google Ads with other strategies like <Link href="/blog/social-media-marketing-agency-hyderabad" className="text-primary hover:underline font-bold">social media marketing services</Link> and ongoing <Link href="/blog/best-digital-marketing-agency-hyderabad" className="text-primary hover:underline font-bold">SEO services</Link> helps build a comprehensive digital marketing machine.
              </p>
              <p className="font-bold text-white">
                The goal is simple: spend advertising money more intelligently and make performance easier to understand.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* Key Takeaways */}
            <section id="key-takeaways" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Key Takeaways
              </h2>
              <p>
                If you are looking for a Google Ads agency in Hyderabad, remember these points:
              </p>
              <ul className="space-y-2 text-gray-400 pl-4">
                <li className="flex items-start gap-2">➢ Do not choose an agency based only on price.</li>
                <li className="flex items-start gap-2">➢ Start with clear business goals.</li>
                <li className="flex items-start gap-2">➢ Ask how conversions will be tracked.</li>
                <li className="flex items-start gap-2">➢ Look for transparent reporting.</li>
                <li className="flex items-start gap-2">➢ Check the agency's optimisation process.</li>
                <li className="flex items-start gap-2">➢ Focus on qualified leads and sales, not vanity metrics.</li>
                <li className="flex items-start gap-2">➢ Make sure you understand account ownership and access.</li>
                <li className="flex items-start gap-2">➢ Treat Google Ads as an ongoing optimisation process.</li>
              </ul>
            </section>

            <hr className="border-white/5" />

            {/* FAQ Accordions */}
            <section id="faq" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                Frequently Asked Questions
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-white/5 rounded-2xl overflow-hidden bg-[#121216]/40 transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex justify-between items-center hover:bg-white/5 transition-all"
                    >
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-primary transition-transform duration-300 flex-shrink-0 ${
                          openFaqIndex === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openFaqIndex === idx ? "max-h-[500px] border-t border-white/5" : "max-h-0"
                      }`}
                    >
                      <div className="p-5 text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion & CTA Section */}
            <section className="pt-10 border-t border-white/5 space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tight text-white">
                Final Thoughts
              </h3>
              <p>
                The right Google Ads agency in Hyderabad should feel less like a vendor and more like a performance-focused partner. You should understand what the agency is doing, why it is doing it, and how success is being measured.
              </p>
              <p>
                Before you sign a contract, ask questions. Look at the strategy. Understand the reporting. And most importantly, focus on whether the agency understands the difference between generating traffic and generating business.
              </p>
              <p>
                A good Google Ads campaign can create valuable opportunities. But the best results usually come from combining smart targeting, relevant messaging, accurate tracking, strong landing experiences, and consistent optimisation.
              </p>
              <p>
                If you are ready to build a more focused paid advertising strategy, start with a clear understanding of where your business is today—and where you want your next customer to come from.
              </p>

              {/* Final CTA Box */}
              <div className="p-8 border border-primary/20 bg-gradient-to-br from-primary/10 to-green-500/5 rounded-3xl text-center space-y-6">
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white">
                  Ready to Grow Your Business?
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
                  Ready to build Google Ads campaigns that focus on qualified leads and measurable growth? Speak with G2G Media House and explore the right strategy for your business.
                </p>
                <div>
                  <Link
                    href="/contact-form"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    Book a Free Strategy Call <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </section>

          </article>

          {/* Right Column: Social Share & Info Panel */}
          <aside className="lg:col-span-3 space-y-8">
            {/* Share Post Box */}
            <div className="border border-white/5 rounded-2xl bg-[#121216]/60 p-6 backdrop-blur-md">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                <Share2 size={14} className="text-primary" /> Share Guide
              </h4>
              <div className="flex gap-3">
                <button
                  onClick={copyToClipboard}
                  className="flex-1 py-3 border border-white/5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Link2 size={14} /> {copied ? "Copied!" : "Copy Link"}
                </button>
              </div>
            </div>

            {/* Author Box */}
            <div className="border border-white/5 rounded-2xl bg-[#121216]/60 p-6 backdrop-blur-md text-center space-y-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto border-2 border-primary">
                <Image
                  src="/assets/g2g_logo.png"
                  alt="G2G Growth Team Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-tight text-white">G2G Growth Team</h4>
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mt-1">Agency Specialists</p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-normal">
                Helping businesses navigate and dominate the local digital advertising landscape through expert campaigns.
              </p>
            </div>

            {/* External Resource Recommendations */}
            <div className="border border-white/5 rounded-2xl bg-[#121216]/60 p-6 backdrop-blur-md space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <BookOpen size={14} className="text-primary" /> Authoritative Resources
              </h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <a
                    href="https://support.google.com/google-ads/answer/6154846"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Google Ads Best Practices <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.google.com/google-ads/answer/9023476"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Responsive Search Ads Guide <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://searchengineland.com/how-to-choose-a-ppc-agency-388568"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    How to Choose a PPC Agency <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.semrush.com/blog/ppc-management/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    PPC Management Guide <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.semrush.com/kb/advertising-toolkit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Semrush Advertising Toolkit <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </div>

      <Footer />
    </div>
  );
}
