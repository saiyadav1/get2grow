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
  Share2,
  Sparkles,
  FileText,
  AlertCircle,
  TrendingUp,
  Tag,
  ArrowUpRight,
  Zap,
  Layers,
  HelpCircle,
  BarChart3,
  CheckCircle2
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
    "difference",
    "what-is-seo",
    "seo-pros-cons",
    "what-are-google-ads",
    "ads-pros-cons",
    "side-by-side",
    "cost-effectiveness",
    "speed-comparison",
    "lead-quality",
    "when-choose-seo",
    "when-choose-ads",
    "use-together",
    "practical-strategy",
    "mistakes-avoid",
    "business-matrix",
    "decision-framework",
    "verdict",
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
      const offset = 100;
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

  // Decision Framework Interactive Quiz State
  const [answers, setAnswers] = useState<{ [key: string]: boolean | null }>({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null
  });

  const handleQuizAnswer = (qKey: string, val: boolean) => {
    setAnswers((prev) => ({ ...prev, [qKey]: val }));
  };

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
    { id: "difference", text: "SEO vs Google Ads: The Difference" },
    { id: "what-is-seo", text: "What Is SEO?" },
    { id: "seo-pros-cons", text: "SEO Advantages & Limits" },
    { id: "what-are-google-ads", text: "What Are Google Ads?" },
    { id: "ads-pros-cons", text: "Google Ads Advantages & Limits" },
    { id: "side-by-side", text: "Side-by-Side Comparison" },
    { id: "cost-effectiveness", text: "Cost-Effectiveness & Value" },
    { id: "speed-comparison", text: "Which Delivers Results Faster?" },
    { id: "lead-quality", text: "Which Generates Better Leads?" },
    { id: "when-choose-seo", text: "When to Choose SEO" },
    { id: "when-choose-ads", text: "When to Choose Google Ads" },
    { id: "use-together", text: "Using SEO & Ads Together" },
    { id: "practical-strategy", text: "6-Step Unified Strategy" },
    { id: "mistakes-avoid", text: "Common Mistakes to Avoid" },
    { id: "business-matrix", text: "Strategy by Business Type" },
    { id: "decision-framework", text: "5-Question Decision Framework" },
    { id: "verdict", text: "Final Verdict & CTA" },
    { id: "faq", text: "Frequently Asked Questions" }
  ];

  // FAQ Content Array
  const faqs = [
    {
      q: "Is SEO better than Google Ads?",
      a: "SEO isn't automatically better than Google Ads. SEO is generally more suited to building long-term organic visibility, while Google Ads can provide faster access to paid search traffic. The better option depends on your budget, competition, customer acquisition economics and timeline. Many businesses benefit from combining SEO and Google Ads rather than treating them as competing channels."
    },
    {
      q: "Which is cheaper, SEO or Google Ads?",
      a: "Neither is universally cheaper. Google Ads requires an advertising budget and typically charges advertisers based on clicks or other campaign interactions. SEO doesn't have a direct cost per organic click, but effective SEO requires investment in strategy, content, technical improvements and authority. The right comparison is total acquisition cost versus qualified leads, customers and revenue."
    },
    {
      q: "How long does SEO take compared with Google Ads?",
      a: "Google Ads can start generating visibility much faster than SEO. SEO typically requires more time because search engines need to discover, crawl, index and evaluate pages, while competitive rankings may require sustained content and authority-building work. Google notes that changes in Search can take anywhere from hours to several months to show their impact."
    },
    {
      q: "Should small businesses use SEO or Google Ads?",
      a: "Small businesses can benefit from either strategy, depending on their goals. Google Ads can be useful when a business needs leads quickly or operates in a high-intent local market. SEO can help build sustainable visibility over time. A practical approach is often to use paid search for immediate demand while gradually building organic rankings and content."
    },
    {
      q: "Can SEO and Google Ads work together?",
      a: "Yes. SEO and Google Ads can complement each other. PPC can provide fast keyword and conversion data, while SEO can build organic visibility around valuable search topics. Businesses can also use paid campaigns to test messaging, promote important offers and capture searches while their organic strategy develops. The key is to measure both channels against business outcomes rather than traffic alone."
    }
  ];

  // SEO Tags
  const seoTags = [
    "SEO vs Google Ads",
    "SEO",
    "Google Ads",
    "PPC",
    "Digital Marketing",
    "Search Engine Marketing",
    "SEO Strategy",
    "Google Ads Strategy",
    "Lead Generation",
    "Online Marketing"
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white font-sans selection:bg-primary selection:text-black">
      {/* Sticky Progress Bar */}
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
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300">SEO vs Google Ads</span>
          </nav>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              Channel Comparison
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Calendar size={14} className="text-primary" /> September 2026
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Clock size={14} className="text-primary" /> 13 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] max-w-5xl mb-6">
            SEO vs Google Ads: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 font-black">
              Which Is Better for Your Business?
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            SEO vs Google Ads: discover the real differences in cost, speed, leads and ROI. Learn which strategy makes sense for your business today.
          </p>
        </div>
      </header>

      {/* Main Grid Content */}
      <div className="container mx-auto px-6 max-w-7xl py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Sticky Table of Contents */}
          <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 custom-scrollbar">
            <div className="border border-white/5 rounded-2xl bg-[#121216]/60 p-6 backdrop-blur-md">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                <FileText size={14} className="text-primary" /> Table of Contents
              </h3>
              <ul className="space-y-2.5">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left text-[11px] font-bold uppercase tracking-wider transition-all block w-full border-l-2 pl-3 py-1 hover:text-white ${
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
            
            {/* Featured Hero Image */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.02)] bg-[#121216]">
              <Image
                src="/assets/blog/seo-vs-google-ads-featured.jpg"
                alt="SEO vs Google Ads comparison showing organic search and paid advertising strategies"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <p>
                Imagine you have a great website, a strong service and an offer your customers genuinely need. But when someone searches Google for that service, they don&apos;t find you.
              </p>
              
              <div className="p-6 border-l-4 border-primary bg-white/5 rounded-r-2xl my-6">
                <p className="font-bold text-white text-lg italic">
                  Should you invest in SEO or Google Ads?
                </p>
              </div>

              <p>
                It&apos;s an important decision because both channels can put your business in front of people who are actively searching. But they work in very different ways.
              </p>
              <p>
                SEO helps you build visibility in Google&apos;s organic search results. Google Ads lets you pay for advertising placements and reach relevant searchers much faster.
              </p>
              <p>
                The honest answer is: <strong>it depends on your business, goals, budget, competition and timeline</strong>. And in many cases, the smartest strategy isn&apos;t choosing one—it&apos;s using SEO and Google Ads together.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* Difference Section */}
            <section id="difference" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                SEO vs Google Ads: What&apos;s the Difference?
              </h2>
              <div className="p-5 border border-primary/20 bg-primary/5 rounded-2xl">
                <p className="text-base font-bold text-white mb-1">The Simplest Difference:</p>
                <p className="text-sm text-gray-300">
                  <strong className="text-primary">SEO earns search visibility.</strong> <strong className="text-green-400">Google Ads buys search visibility.</strong>
                </p>
              </div>

              <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#121216]/60">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-3.5 font-bold uppercase text-white">Factor</th>
                      <th className="p-3.5 font-bold uppercase text-primary">SEO</th>
                      <th className="p-3.5 font-bold uppercase text-green-400">Google Ads</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-400">
                    <tr><td className="p-3 font-semibold text-white">Traffic type</td><td className="p-3">Organic</td><td className="p-3">Paid</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Direct cost per click</td><td className="p-3">No direct CPC</td><td className="p-3">Yes (PPC model)</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Speed</td><td className="p-3">Usually slower (compounding)</td><td className="p-3 text-green-400 font-semibold">Immediate visibility</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Long-term value</td><td className="p-3 text-primary font-semibold">High potential asset</td><td className="p-3">Depends on continued spend</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Control</td><td className="p-3">Moderate</td><td className="p-3">High control</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Traffic when budget stops</td><td className="p-3 text-primary font-semibold">Continues ranking</td><td className="p-3">Stops immediately</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* What Is SEO? */}
            <section id="what-is-seo" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Is SEO?
              </h2>
              <p>
                SEO stands for Search Engine Optimization. If you&apos;re looking to build sustainable organic visibility, professional <Link href="/blog/seo-services-in-hyderabad" className="text-primary hover:underline font-bold">SEO services</Link> can help create a structured strategy around technical SEO, content, keywords and authority.
              </p>
              <p>
                According to the <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google SEO Starter Guide</a>, search engines prioritize unique, well-organized and people-first content.
              </p>

              {/* Image 2 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                <Image
                  src="/assets/blog/seo-strategy-organic-rankings-analysis.jpg"
                  alt="SEO strategy and organic Google search rankings analysis"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            <section id="seo-pros-cons" className="scroll-mt-28 space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">SEO Advantages & Limitations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl space-y-1.5">
                  <span className="font-bold text-primary block uppercase tracking-wider">Advantages:</span>
                  <p>• Long-term organic compounding visibility</p>
                  <p>• Builds hundreds of entry points for searches</p>
                  <p>• Reduces dependence on rising ad costs</p>
                  <p>• Continues generating traffic after publish</p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl space-y-1.5">
                  <span className="font-bold text-gray-400 block uppercase tracking-wider">Limitations:</span>
                  <p>• Takes weeks or months to build traction</p>
                  <p>• High competition in lucrative niches</p>
                  <p>• Requires continuous content and technical upkeep</p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* What Are Google Ads? */}
            <section id="what-are-google-ads" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Are Google Ads?
              </h2>
              <p>
                Google Ads is Google&apos;s paid advertising platform. Businesses that need faster visibility can consider professional <Link href="/blog/google-ads-agency-hyderabad" className="text-primary hover:underline font-bold">Google Ads management</Link> with conversion tracking and ongoing campaign optimization.
              </p>

              {/* Image 3 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                <Image
                  src="/assets/blog/google-ads-campaign-management-ppc-analysis.jpg"
                  alt="Google Ads campaign management and PPC performance analysis"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            <section id="ads-pros-cons" className="scroll-mt-28 space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">Google Ads Advantages & Limitations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl space-y-1.5">
                  <span className="font-bold text-green-400 block uppercase tracking-wider">Advantages:</span>
                  <p>• Rapid visibility and instant lead opportunities</p>
                  <p>• Precise keyword, geo, and demographic targeting</p>
                  <p>• Rapid experimentation with ad copy & offers</p>
                  <p>• Captures immediate high-intent emergency searches</p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl space-y-1.5">
                  <span className="font-bold text-gray-400 block uppercase tracking-wider">Limitations:</span>
                  <p>• You pay for every click</p>
                  <p>• High competition drives up cost-per-click</p>
                  <p>• Traffic stops the moment ad budget runs out</p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Side-by-Side Comparison */}
            <section id="side-by-side" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                SEO vs Google Ads: Side-by-Side Comparison
              </h2>
              <p>
                Read the comprehensive <a href="https://ahrefs.com/blog/seo-vs-ppc/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Ahrefs SEO vs PPC Guide</a> to examine data-driven search trends.
              </p>

              {/* Image 4 Placement: Directly above Side-by-Side table */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                <Image
                  src="/assets/blog/seo-vs-google-ads-organic-paid-comparison.jpg"
                  alt="SEO vs Google Ads comparison between organic and paid search"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#121216]/60">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-3.5 font-bold uppercase text-white">Business Factor</th>
                      <th className="p-3.5 font-bold uppercase text-primary">SEO</th>
                      <th className="p-3.5 font-bold uppercase text-green-400">Google Ads</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-400">
                    <tr><td className="p-3 font-semibold text-white">Initial speed</td><td className="p-3">Slow to moderate</td><td className="p-3 text-green-400 font-semibold">Fast</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Long-term potential</td><td className="p-3 text-primary font-semibold">Excellent</td><td className="p-3">Moderate</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Immediate leads</td><td className="p-3">Limited initially</td><td className="p-3 text-green-400 font-semibold">Strong potential</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Budget control</td><td className="p-3">Indirect</td><td className="p-3">Direct</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Cost per click</td><td className="p-3">No direct CPC</td><td className="p-3">Yes</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Testing speed</td><td className="p-3">Moderate</td><td className="p-3 text-green-400 font-semibold">Fast</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Sustainable traffic</td><td className="p-3 text-primary font-semibold">Potentially years</td><td className="p-3">Requires ongoing spend</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Best for new offers</td><td className="p-3">Limited</td><td className="p-3 text-green-400 font-semibold">Excellent</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Best for evergreen demand</td><td className="p-3 text-primary font-semibold">Excellent</td><td className="p-3">Excellent</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Conversion optimization</td><td className="p-3">Important</td><td className="p-3 text-red-400 font-semibold">Critical</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Cost-Effectiveness, Speed & Lead Quality */}
            <section id="cost-effectiveness" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                SEO vs Google Ads: Which Is More Cost-Effective?
              </h2>
              <p className="text-sm text-gray-400">
                Business A spends ₹50k on SEO and gets 30 leads. Business B spends ₹50k on Google Ads and gets 40 leads. But Business A continues receiving organic leads month after month without paying per click. Measure <strong>Customer Acquisition Cost + Customer Value + Revenue</strong>, not simply initial clicks.
              </p>
            </section>

            <section id="speed-comparison" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Which Gives Results Faster?
              </h2>
              <div className="p-5 border border-white/10 bg-[#121216]/60 rounded-2xl text-sm">
                <p className="font-bold text-white mb-1">Think of it like this:</p>
                <p className="text-gray-300">
                  <strong className="text-green-400">Google Ads = Accelerator.</strong> <strong className="text-primary">SEO = Engine.</strong> The accelerator gets you moving quickly; the engine sustains the journey.
                </p>
              </div>
            </section>

            <section id="lead-quality" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Which Generates Better Leads?
              </h2>
              <p className="text-sm text-gray-400">
                Lead quality depends on search intent and your <Link href="/blog/how-to-get-more-leads-for-my-business" className="text-primary hover:underline font-bold">conversion optimization</Link> system. A campaign producing 200 clicks and 30 qualified leads beats 1,000 broad clicks and 5 low-intent leads.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* Using SEO & Ads Together */}
            <section id="use-together" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Should You Use SEO and Google Ads Together?
              </h2>
              <p>
                Ahrefs&apos; analysis of 2.3 million keywords found that 37.9% of advertised websites already ranked in Google&apos;s top 10 organically. Using both creates total search dominance.
              </p>

              {/* Image 5 Placement: Before Should You Use Together */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                <Image
                  src="/assets/blog/seo-and-google-ads-integrated-search-strategy.jpg"
                  alt="SEO and Google Ads integrated search marketing strategy"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl text-xs space-y-2 text-gray-300">
                <p>• <strong>Month 1:</strong> Launch Google Ads for immediate enquiries while starting SEO foundational audit.</p>
                <p>• <strong>Month 3:</strong> Identify the most profitable paid keywords and prioritize them in your SEO content cluster.</p>
                <p>• <strong>Month 6:</strong> Organic rankings take off; shift PPC budget to high-intent commercial keywords.</p>
                <p>• <strong>Month 12:</strong> Compound multi-channel dominance with organic + paid search equity.</p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Interactive Decision Framework */}
            <section id="decision-framework" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                A Simple 5-Question Decision Framework
              </h2>
              <p className="text-xs text-gray-400">Answer these 5 quick questions to see which search strategy fits your current stage:</p>

              <div className="space-y-3">
                {[
                  { key: "q1", text: "1. Do I need leads & customers immediately this month?", rec: "Google Ads recommended for speed." },
                  { key: "q2", text: "2. Do customers regularly search for my services on Google?", rec: "Invest in long-term SEO." },
                  { key: "q3", text: "3. Is my customer lifetime value high enough to support paid CPC?", rec: "Google Ads will have profitable unit economics." },
                  { key: "q4", text: "4. Can our business wait 3–6 months to compound organic rankings?", rec: "SEO becomes extremely attractive." },
                  { key: "q5", text: "5. Can our business afford to build both channels together?", rec: "A unified SEO + Google Ads system is the strongest play." }
                ].map((item) => (
                  <div key={item.key} className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-white">{item.text}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleQuizAnswer(item.key, true)}
                        className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                          answers[item.key] === true
                            ? "bg-primary text-black"
                            : "bg-white/5 hover:bg-white/10 text-gray-300"
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(item.key, false)}
                        className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                          answers[item.key] === false
                            ? "bg-red-500/20 text-red-300 border border-red-500/30"
                            : "bg-white/5 hover:bg-white/10 text-gray-300"
                        }`}
                      >
                        No
                      </button>
                    </div>
                    {answers[item.key] === true && (
                      <p className="text-xs text-primary font-semibold mt-1">✓ {item.rec}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Verdict & CTA */}
            <section id="verdict" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Final Verdict: SEO vs Google Ads
              </h2>
              <div className="p-6 border-l-4 border-primary bg-white/5 rounded-r-2xl my-6">
                <p className="text-base font-bold text-white mb-1">The Winner:</p>
                <p className="text-gray-300 italic text-sm">
                  <strong>Use Google Ads for speed. Use SEO for sustainable growth. Use both when the economics make sense.</strong>
                </p>
              </div>
              <p>
                For complete campaign integration, explore our full suite of <Link href="/blog/digital-marketing-services" className="text-primary hover:underline font-bold">digital marketing services</Link>.
              </p>

              {/* End-of-Article CTA */}
              <div className="p-8 border border-primary/20 bg-gradient-to-br from-primary/10 to-green-500/5 rounded-3xl text-center space-y-6 my-8">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white">
                  Ready to Turn Google Searches Into Customers?
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
                  You don&apos;t need to guess whether SEO or Google Ads is right for your business. G2G Media House can help you evaluate your search demand, competition, and growth targets.
                </p>
                <div>
                  <Link
                    href="/contact-form"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    Book Your Free Strategy Call <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* FAQs */}
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
                        className={`text-primary transition-transform duration-300 shrink-0 ${
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

          </article>

          {/* Right Column */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="border border-white/5 rounded-2xl bg-[#121216]/60 p-6 backdrop-blur-md">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                <Share2 size={14} className="text-primary" /> Share Guide
              </h4>
              <button
                onClick={copyToClipboard}
                className="w-full py-3 border border-white/5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Link2 size={14} /> {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>

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
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mt-1">Search Strategy Specialists</p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-normal">
                Helping brands orchestrate unified organic SEO and paid Google Ads search strategies for maximum ROI.
              </p>
            </div>

            <div className="border border-white/5 rounded-2xl bg-[#121216]/60 p-6 backdrop-blur-md space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <Tag size={14} className="text-primary" /> Focus Tags
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {seoTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-semibold text-gray-400 hover:text-white hover:border-primary/30 transition-all"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-white/5 rounded-2xl bg-[#121216]/60 p-6 backdrop-blur-md space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <BookOpen size={14} className="text-primary" /> Resource Links
              </h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <a
                    href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Google SEO Starter Guide <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Google Search Essentials <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://ahrefs.com/blog/seo-vs-ppc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Ahrefs SEO vs PPC Guide <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100" />
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
