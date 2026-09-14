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
  CheckCircle2,
  XCircle,
  HelpCircle,
  Search,
  Target,
  BarChart3,
  Layers,
  MapPin,
  ShieldCheck,
  Zap,
  Users,
  Building2,
  Award
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
    "why-seo-matters",
    "what-seo-companies-do",
    "how-to-choose",
    "seo-costs",
    "timeline-results",
    "agency-vs-freelancer",
    "common-mistakes",
    "g2g-approach",
    "hiring-checklist",
    "different-strategy",
    "conclusion",
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

  // Interactive Checklist State
  const [checklist, setChecklist] = useState([
    { id: "c1", category: "Strategy", text: "Did the agency understand my business model and goals?", checked: false },
    { id: "c2", category: "Strategy", text: "Did they identify my target audience and commercial searches?", checked: false },
    { id: "c3", category: "Strategy", text: "Did they analyze competitors and explain search intent?", checked: false },
    { id: "c4", category: "Strategy", text: "Did they provide a realistic 90-day roadmap?", checked: false },
    { id: "c5", category: "Technical SEO", text: "Will they conduct a deep technical audit & monitor indexing?", checked: false },
    { id: "c6", category: "Technical SEO", text: "Will they optimize Core Web Vitals, speed, and mobile UX?", checked: false },
    { id: "c7", category: "Content", text: "Is content based on customer needs and search intent?", checked: false },
    { id: "c8", category: "Content", text: "Will content be 100% original, helpful, and people-first?", checked: false },
    { id: "c9", category: "Authority", text: "Is link building relevant, transparent, and quality-driven?", checked: false },
    { id: "c10", category: "Reporting", text: "Will I receive monthly reports tracking organic leads & revenue?", checked: false },
    { id: "c11", category: "Trust", text: "Is the contract clear, with documented deliverables?", checked: false },
    { id: "c12", category: "Trust", text: "Can I speak directly to the strategists managing my campaign?", checked: false }
  ]);

  const toggleChecklistItem = (id: string) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
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
    { id: "why-seo-matters", text: "Why Your Business Needs SEO" },
    { id: "what-seo-companies-do", text: "What an SEO Company Does" },
    { id: "how-to-choose", text: "How to Choose the Best Agency" },
    { id: "seo-costs", text: "How Much Does SEO Cost?" },
    { id: "timeline-results", text: "Timeline for SEO Results" },
    { id: "agency-vs-freelancer", text: "Agency vs Freelancer" },
    { id: "common-mistakes", text: "Common SEO Mistakes" },
    { id: "g2g-approach", text: "Why G2G Takes a Growth Approach" },
    { id: "hiring-checklist", text: "Practical SEO Hiring Checklist" },
    { id: "different-strategy", text: "What Makes Good Strategy Different" },
    { id: "conclusion", text: "Final Thoughts & Recommendation" },
    { id: "faq", text: "Frequently Asked Questions" }
  ];

  // FAQ Content Array
  const faqs = [
    {
      q: "How much does SEO cost in Hyderabad?",
      a: "SEO pricing in Hyderabad varies based on the website, industry competition, target keywords, content requirements, technical work and business goals. A small local business may need a simpler campaign than a national ecommerce company. Instead of comparing agencies only by monthly price, compare the actual deliverables, strategy, reporting, technical work and expected business outcomes."
    },
    {
      q: "How long does SEO take to show results?",
      a: "SEO timelines vary from business to business. Factors such as competition, website authority, technical health, content quality and implementation speed can affect results. Some improvements may appear relatively quickly, while competitive keywords can require significantly more time. The best approach is to measure progress through organic visibility, traffic, qualified enquiries and conversions rather than expecting instant rankings."
    },
    {
      q: "What services does an SEO company provide?",
      a: "A professional SEO company may provide keyword research, competitor analysis, technical SEO, on-page optimization, content strategy, local SEO, link building, website optimization and performance reporting. The exact mix should depend on your business. A good agency should first understand your website and objectives before recommending specific SEO activities."
    },
    {
      q: "Is hiring an SEO agency worth it for a small business?",
      a: "It can be worthwhile when SEO is capable of reaching customers who are actively searching for the business's products or services. Small businesses should focus on relevant, commercially valuable searches rather than trying to compete for every high-volume keyword. Local SEO, service pages, helpful content, technical improvements and conversion optimization can be especially useful."
    },
    {
      q: "How do I choose the best SEO company in Hyderabad?",
      a: "Start by checking whether the agency understands your business, target audience and competitors. Ask for its SEO process, keyword strategy, technical audit approach, content plan, link-building methods and reporting system. Be cautious of guaranteed rankings or vague promises. The best SEO company for your business is the one that can clearly connect its work to your specific growth goals."
    }
  ];

  // SEO Tags
  const seoTags = [
    "SEO Company in Hyderabad",
    "SEO Services Hyderabad",
    "SEO Agency Hyderabad",
    "Digital Marketing Hyderabad",
    "Local SEO",
    "Technical SEO",
    "Search Engine Optimization",
    "Google Rankings",
    "Organic Traffic",
    "Lead Generation"
  ];

  // Schema Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "SEO Company in Hyderabad: How to Choose the Right SEO Partner for Your Business",
        "description": "Looking for an SEO company in Hyderabad? Get tailored SEO strategies, technical optimization, content and link building designed to grow traffic and leads.",
        "image": "https://g2gmediahouse.com/assets/blog/seo-company-in-hyderabad-featured.jpg",
        "author": {
          "@type": "Organization",
          "name": "G2G Growth Team",
          "url": "https://g2gmediahouse.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "G2G Media House",
          "logo": {
            "@type": "ImageObject",
            "url": "https://g2gmediahouse.com/assets/g2g_logo.png"
          }
        },
        "datePublished": "2026-09-14T00:00:00.000Z",
        "dateModified": "2026-09-14T00:00:00.000Z",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://g2gmediahouse.com/blog/seo-company-in-hyderabad"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white font-sans selection:bg-primary selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
            <span className="text-gray-300">SEO Company in Hyderabad</span>
          </nav>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              SEO Strategy Guide
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Calendar size={14} className="text-primary" /> September 2026
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Clock size={14} className="text-primary" /> 14 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.08] max-w-5xl mb-6">
            SEO Company in Hyderabad: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 font-black">
              How to Choose the Right SEO Partner for Your Business
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Looking for an SEO company in Hyderabad? Get tailored SEO strategies, technical optimization, content and link building designed to grow traffic and leads.
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
              <ul className="space-y-3">
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
                src="/assets/blog/seo-company-in-hyderabad-featured.jpg"
                alt="SEO company in Hyderabad discussing search engine optimization strategy with a business owner"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <p className="text-lg text-white font-medium">
                Your customers are already searching for what you sell.
              </p>
              <p>
                The bigger question is: <strong>can they find you when they search on Google?</strong>
              </p>
              <p>
                For a Hyderabad business, showing up when someone searches for your service can mean the difference between a website that quietly sits online and one that consistently brings enquiries.
              </p>
              <p>
                But choosing an SEO company in Hyderabad is not as simple as searching Google, opening the first few websites and picking the agency with the biggest promises.
              </p>
              <p>
                Some agencies focus heavily on rankings. Others sell fixed packages. Some talk about backlinks. Others focus on content, technical SEO or local visibility.
              </p>
              
              <div className="p-6 border-l-4 border-primary bg-white/5 rounded-r-2xl my-6">
                <p className="font-bold text-white text-base mb-1">The Critical Strategic Question:</p>
                <p className="text-gray-300 text-base sm:text-lg font-semibold italic">
                  Can the agency build an SEO strategy that supports your actual business goals?
                </p>
              </div>

              <p>
                If you want more qualified traffic, enquiries, calls and customers—not just a report filled with ranking positions—this guide will help you choose the right SEO partner.
              </p>
              <p>
                Explore our full range of <Link href="/blog/seo-services-in-hyderabad" className="text-primary hover:underline font-bold">SEO services in Hyderabad</Link> designed to create sustainable visibility and tangible pipeline growth.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* Why Your Business Needs SEO in Hyderabad */}
            <section id="why-seo-matters" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Why Your Business Needs SEO in Hyderabad
              </h2>
              <p>
                Hyderabad has a highly competitive digital market.
              </p>
              <p>
                Whether you operate a local service business, startup, ecommerce company, professional practice or B2B brand, your potential customers are likely comparing options online before planning.
              </p>
              
              <div className="p-6 border border-white/10 rounded-2xl bg-[#121216]/60">
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">
                  Imagine someone searches:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <Search size={14} className="text-primary shrink-0" />
                    <span>“digital marketing agency Hyderabad”</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Search size={14} className="text-primary shrink-0" />
                    <span>“best interior designers Hyderabad”</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Search size={14} className="text-primary shrink-0" />
                    <span>“dentist near me”</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Search size={14} className="text-primary shrink-0" />
                    <span>“lawyer in Hyderabad”</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Search size={14} className="text-primary shrink-0" />
                    <span>“SEO company in Hyderabad”</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Search size={14} className="text-primary shrink-0" />
                    <span>“best real estate company Hyderabad”</span>
                  </li>
                </ul>
              </div>

              <p>
                If your competitors appear while your business doesn&apos;t, you may lose the customer before they ever visit your website.
              </p>
              <p>
                That is where SEO becomes valuable. SEO helps your website become easier for search engines to discover, understand and connect with relevant searches.
              </p>
              <p>
                But good SEO isn&apos;t simply about putting keywords on pages. It is about understanding:
              </p>
              <ul className="space-y-2 text-gray-300 pl-4 border-l-2 border-primary/40">
                <li>➢ <strong>What does your customer want?</strong></li>
                <li>➢ <strong>What are they searching for?</strong></li>
                <li>➢ <strong>What does Google expect to see?</strong></li>
                <li>➢ <strong>What would make them trust your business?</strong></li>
                <li>➢ <strong>What will turn a visitor into a lead?</strong></li>
              </ul>
              <p className="font-bold text-white">
                That is the difference between SEO activity and an SEO strategy.
              </p>
            </section>

            {/* Image 2 Placement */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
              <Image
                src="/assets/blog/seo-company-in-hyderabad-rankings-traffic.jpg"
                alt="SEO company in Hyderabad analyzing search rankings and organic traffic"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <hr className="border-white/5" />

            {/* What Does an SEO Company Actually Do? */}
            <section id="what-seo-companies-do" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Does an SEO Company Actually Do?
              </h2>
              <p>
                A professional SEO company works on several parts of your website and online presence. The exact process varies according to the business, competition and goals.
              </p>
              <p>
                However, a strong SEO campaign commonly includes the following core pillars:
              </p>

              <div className="space-y-8">
                {/* 1. Keyword Research */}
                <div className="p-6 border border-white/5 rounded-2xl bg-[#121216]/60 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">01</span>
                    <h3 className="text-lg font-bold text-white">1. Keyword Research</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Keyword research identifies the phrases your potential customers use when searching for your products or services.
                  </p>
                  <p className="text-sm text-gray-300 font-semibold">
                    For example, a Hyderabad business may target a combination of:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400 pl-2">
                    <li>• Hyderabad-based keywords</li>
                    <li>• Service-specific keywords</li>
                    <li>• Problem-based searches</li>
                    <li>• Commercial keywords</li>
                    <li>• Long-tail searches</li>
                    <li>• Local searches</li>
                  </ul>
                  <p className="text-sm text-gray-400">
                    The goal isn&apos;t to chase every high-volume keyword. A keyword with 10,000 searches isn&apos;t automatically better than one with 500 searches. If the 500-search keyword brings people who are ready to buy, it may generate considerably more business.
                  </p>
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-primary block mb-1">Pro Tip</span>
                    <p className="text-xs text-gray-300">
                      Prioritize keywords based on relevance, intent, competition and commercial value—not search volume alone. Reference the official <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google&apos;s SEO Starter Guide</a> for core ranking fundamentals.
                    </p>
                  </div>
                </div>

                {/* Image 3 Placement */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                  <Image
                    src="/assets/blog/seo-company-in-hyderabad-strategy-development.jpg"
                    alt="SEO experts developing a digital marketing strategy in Hyderabad"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* 2. Competitor Research */}
                <div className="p-6 border border-white/5 rounded-2xl bg-[#121216]/60 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">02</span>
                    <h3 className="text-lg font-bold text-white">2. Competitor Research</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Your SEO strategy shouldn&apos;t exist in a vacuum. A good agency studies the businesses already competing for your target searches.
                  </p>
                  <p className="text-sm text-gray-300 font-semibold">This can reveal:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400 pl-2">
                    <li>• Which pages attract search traffic</li>
                    <li>• What topics competitors cover</li>
                    <li>• Which keywords they target</li>
                    <li>• How their websites are structured</li>
                    <li>• What content gaps exist</li>
                    <li>• Where they earn backlinks</li>
                    <li>• Which services they emphasize</li>
                    <li>• What opportunities your business can exploit</li>
                  </ul>
                  <p className="text-xs text-gray-300 italic border-t border-white/5 pt-3">
                    The objective isn&apos;t to copy competitors. It is to understand the search landscape and identify opportunities to create something better.
                  </p>
                </div>

                {/* 3. On-Page SEO */}
                <div className="p-6 border border-white/5 rounded-2xl bg-[#121216]/60 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">03</span>
                    <h3 className="text-lg font-bold text-white">3. On-Page SEO</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    On-page SEO improves the pages visitors actually see. It can include:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-300">
                    <span className="p-2 bg-white/5 rounded-lg">• Title tags</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Meta descriptions</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Headings</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Keyword targeting</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Internal links</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Content structure</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Image optimization</span>
                    <span className="p-2 bg-white/5 rounded-lg">• URLs</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Search intent</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Calls to action</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Content improvements</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    A beautifully designed website can still underperform if its pages aren&apos;t structured clearly for users and search engines.
                  </p>
                </div>

                {/* 4. Technical SEO */}
                <div className="p-6 border border-white/5 rounded-2xl bg-[#121216]/60 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">04</span>
                    <h3 className="text-lg font-bold text-white">4. Technical SEO</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Technical SEO deals with the infrastructure behind your website. Depending on the site, this may include:
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-400 pl-2">
                    <li>• Crawlability</li>
                    <li>• Indexation</li>
                    <li>• Canonical URLs</li>
                    <li>• XML sitemaps</li>
                    <li>• Redirects</li>
                    <li>• Mobile usability</li>
                    <li>• Site speed</li>
                    <li>• Core Web Vitals</li>
                    <li>• Broken links</li>
                    <li>• Duplicate content</li>
                    <li>• JavaScript issues</li>
                    <li>• Structured data</li>
                  </ul>
                  <p className="text-sm text-gray-400">
                    Technical SEO is particularly important when a website has many pages, an ecommerce catalogue, complex navigation or a recent redesign.
                  </p>
                  <p className="text-xs text-gray-300">
                    Review <a href="https://developers.google.com/search" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google Search documentation</a> for technical best practices on accessible, secure, fast, and multi-device usability.
                  </p>
                </div>

                {/* 5. Content Strategy */}
                <div className="p-6 border border-white/5 rounded-2xl bg-[#121216]/60 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">05</span>
                    <h3 className="text-lg font-bold text-white">5. Content Strategy</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Content is one of the biggest opportunities in SEO. But publishing dozens of generic blog posts isn&apos;t a strategy.
                  </p>
                  <p className="text-sm text-gray-400">
                    Your content should answer real customer questions and support your commercial pages. For example, instead of writing random articles about digital marketing, a Hyderabad agency could create content around:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-gray-400 pl-2">
                    <li>• SEO services</li>
                    <li>• Local SEO</li>
                    <li>• Google Business Profile</li>
                    <li>• SEO pricing</li>
                    <li>• SEO strategy</li>
                    <li>• Lead generation</li>
                    <li>• Content marketing</li>
                    <li>• Technical SEO</li>
                    <li>• Website conversion</li>
                    <li>• Digital marketing strategies</li>
                  </ul>
                  <p className="text-sm text-gray-300">
                    The strongest content answers the reader&apos;s question and naturally moves them toward the next step. Consult <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google&apos;s people-first content guidance</a> to prioritize helpful, reliable content.
                  </p>
                </div>

                {/* 6. Local SEO */}
                <div className="p-6 border border-white/5 rounded-2xl bg-[#121216]/60 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">06</span>
                    <h3 className="text-lg font-bold text-white">6. Local SEO: Especially Important for Hyderabad Businesses</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    If your business serves Hyderabad customers, local SEO deserves special attention. Local SEO can involve optimizing:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-gray-400 pl-2">
                    <li>• Google Business Profile</li>
                    <li>• Location pages</li>
                    <li>• Business information (NAP)</li>
                    <li>• Local citations</li>
                    <li>• Reviews & ratings</li>
                    <li>• Local content</li>
                    <li>• Location-based keywords</li>
                    <li>• Relevant local links</li>
                  </ul>
                  <p className="text-sm text-gray-400">
                    For example, a business may want visibility for searches containing high-growth hubs such as:
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {["Banjara Hills", "Jubilee Hills", "Madhapur", "Gachibowli", "Kondapur", "Hitech City", "Secunderabad", "Kukatpally"].map((area, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-primary font-medium">
                        📍 {area}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 italic">
                    However, location pages should only be created when they provide genuine value. Creating dozens of nearly identical city or neighbourhood pages simply to target keywords can create a poor user experience.
                  </p>
                </div>

                {/* Image 4 Placement */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                  <Image
                    src="/assets/blog/seo-company-in-hyderabad-local-seo.jpg"
                    alt="local SEO strategy for businesses in Hyderabad"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* 7. Link Building */}
                <div className="p-6 border border-white/5 rounded-2xl bg-[#121216]/60 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">07</span>
                    <h3 className="text-lg font-bold text-white">7. Link Building</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Backlinks can help search engines understand the authority and reputation of a website. But quality matters.
                  </p>
                  <p className="text-sm text-gray-400">
                    A strong link-building strategy focuses on earning relevant, credible mentions rather than buying large numbers of questionable links. Potential approaches include:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-gray-400 pl-2">
                    <li>• Digital PR</li>
                    <li>• Industry publications</li>
                    <li>• Relevant business directories</li>
                    <li>• Strategic partnerships</li>
                    <li>• Expert contributions</li>
                    <li>• Original research</li>
                    <li>• Useful resources</li>
                    <li>• Link-worthy content</li>
                  </ul>
                  <div className="p-4 bg-white/5 border-l-2 border-primary rounded-r-xl">
                    <p className="text-xs text-gray-400">The question shouldn&apos;t be: <em>“How many backlinks will I get?”</em></p>
                    <p className="text-xs font-bold text-white mt-1">A better question is: <em>“Where will these links come from, and why would Google and users consider them valuable?”</em></p>
                  </div>
                </div>

                {/* 8. Reporting and Measurement */}
                <div className="p-6 border border-white/5 rounded-2xl bg-[#121216]/60 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">08</span>
                    <h3 className="text-lg font-bold text-white">8. Reporting and Measurement</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    SEO without measurement becomes guesswork. Your agency should be able to explain what is happening and why. Useful metrics can include:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-300">
                    <span className="p-2 bg-white/5 rounded-lg">• Organic traffic</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Search impressions</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Clicks</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Keyword visibility</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Landing page stats</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Organic leads</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Conversion rate</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Phone enquiries</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Form submissions</span>
                    <span className="p-2 bg-white/5 rounded-lg">• Tracked revenue</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Rankings still matter. But rankings are a means to an end. If a keyword moves from position 50 to position 5 but generates no relevant traffic or enquiries, the business impact may be limited.
                  </p>
                </div>
              </div>
            </section>

            {/* Image 5 Placement */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
              <Image
                src="/assets/blog/seo-company-in-hyderabad-expert-consultation.jpg"
                alt="business owner consulting an SEO expert in Hyderabad"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <hr className="border-white/5" />

            {/* How to Choose the Best SEO Company in Hyderabad */}
            <section id="how-to-choose" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How to Choose the Best SEO Company in Hyderabad
              </h2>
              <p>
                Choosing an agency becomes easier when you know what to look for:
              </p>

              <div className="space-y-6">
                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-primary font-bold">1.</span> Look Beyond “Guaranteed Rankings”
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Be cautious of agencies promising: <em>“Guaranteed #1 ranking.”</em> No legitimate agency controls Google&apos;s ranking systems. A professional SEO company should discuss strategy, opportunities, competition, implementation and measurement rather than making unrealistic guarantees.
                  </p>
                </div>

                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-primary font-bold">2.</span> Ask for the Actual Strategy
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Don&apos;t settle for: <em>“We will do on-page, off-page and backlinks.”</em>
                  </p>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Ask them directly:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 pl-2">
                    <li>• Which keywords will you target?</li>
                    <li>• Why those keywords?</li>
                    <li>• Which pages will be optimized?</li>
                    <li>• What technical issues will you address?</li>
                    <li>• What content will you create?</li>
                    <li>• How will you build authority?</li>
                    <li>• How will leads be tracked?</li>
                    <li>• What happens during the first 90 days?</li>
                  </ul>
                  <p className="text-xs text-primary font-semibold pt-2">
                    The quality of the answers tells you a lot about the agency.
                  </p>
                </div>

                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-primary font-bold">3.</span> Check Whether They Understand Your Business
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    SEO is not one-size-fits-all. A local restaurant, SaaS company, law firm and ecommerce store need completely different strategies.
                  </p>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Your SEO partner should ask questions about:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-400">
                    <span>• Your customers</span>
                    <span>• Products or services</span>
                    <span>• Sales process</span>
                    <span>• Locations</span>
                    <span>• Average customer value</span>
                    <span>• Competitors</span>
                    <span>• Existing traffic</span>
                    <span>• Current website</span>
                    <span>• Business goals</span>
                  </div>
                  <p className="text-xs text-red-400 font-semibold pt-2">
                    If an agency starts selling before understanding your business, that&apos;s a warning sign.
                  </p>
                </div>

                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-primary font-bold">4.</span> Examine Their Reporting
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Ask to see an example monthly report. A useful report should answer:
                  </p>
                  <ul className="space-y-1.5 text-xs text-gray-300 pl-4 border-l-2 border-white/10">
                    <li>➢ What did we do?</li>
                    <li>➢ What changed?</li>
                    <li>➢ What worked?</li>
                    <li>➢ What didn&apos;t work?</li>
                    <li>➢ What are we doing next?</li>
                  </ul>
                  <p className="text-xs text-gray-400">
                    Avoid reports that simply dump hundreds of ranking numbers without explaining their business significance.
                  </p>
                </div>

                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-primary font-bold">5.</span> Ask About Content Quality
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    If an agency promises 20 or 30 articles every month, ask how those articles will be researched and reviewed. More content doesn&apos;t automatically mean better SEO.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Google specifically says there is no preferred word count that creators should target simply because they believe it helps rankings. A 1,200-word article that completely answers the reader&apos;s question can be more useful than a padded 3,000-word article.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* How Much Does SEO Cost in Hyderabad? */}
            <section id="seo-costs" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How Much Does SEO Cost in Hyderabad?
              </h2>
              <p>
                There is no single correct SEO price. Pricing depends on factors such as:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 pl-2">
                <li>• Website size</li>
                <li>• Industry competition</li>
                <li>• Number of target keywords</li>
                <li>• Geographic targeting</li>
                <li>• Content requirements</li>
                <li>• Technical complexity</li>
                <li>• Link-building requirements</li>
                <li>• Ecommerce catalogue size</li>
                <li>• Existing website authority</li>
                <li>• Business objectives</li>
              </div>
              <p>
                A small local business may require a very different level of investment from a national ecommerce brand. The important thing is to <strong>compare scope, not just price</strong>.
              </p>

              {/* Low-Cost vs Strategic SEO Comparison Table */}
              <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#121216]/60">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-4 font-bold uppercase tracking-wider text-white">Factor</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-gray-400">Low-Cost SEO</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-primary">Strategic SEO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    <tr>
                      <td className="p-4 font-semibold text-white">Keyword research</td>
                      <td className="p-4 text-gray-400">Basic</td>
                      <td className="p-4 text-primary font-bold">Detailed & intent-mapped</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Competitor analysis</td>
                      <td className="p-4 text-gray-400">Limited</td>
                      <td className="p-4 text-primary font-bold">Comprehensive</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Technical SEO</td>
                      <td className="p-4 text-gray-400">Minimal</td>
                      <td className="p-4 text-primary font-bold">Regular optimization</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Content</td>
                      <td className="p-4 text-gray-400">Quantity-focused</td>
                      <td className="p-4 text-primary font-bold">Intent-focused & helpful</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Link building</td>
                      <td className="p-4 text-gray-400">Often generic</td>
                      <td className="p-4 text-primary font-bold">Relevant and strategic</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Reporting</td>
                      <td className="p-4 text-gray-400">Basic metrics</td>
                      <td className="p-4 text-primary font-bold">Business & lead-focused</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Strategy</td>
                      <td className="p-4 text-gray-400">Fixed template</td>
                      <td className="p-4 text-primary font-bold">Customized roadmap</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Conversion focus</td>
                      <td className="p-4 text-gray-400">Limited</td>
                      <td className="p-4 text-primary font-bold">Strong & ROI-driven</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-400">
                The cheapest agency may not be the cheapest option in the long run if the work produces little business value. For an in-depth breakdown of monthly packages and pricing structures, read our dedicated guide to <Link href="/blog/how-much-does-seo-cost-in-hyderabad" className="text-primary hover:underline font-bold">SEO packages in Hyderabad</Link>.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* How Long Does SEO Take to Show Results? */}
            <section id="timeline-results" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How Long Does SEO Take to Show Results?
              </h2>
              <p>
                SEO is usually a long-term growth channel rather than an instant advertising system. Results depend on:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-400 pl-2">
                <li>• Competition</li>
                <li>• Website history</li>
                <li>• Technical condition</li>
                <li>• Content quality</li>
                <li>• Domain authority</li>
                <li>• Search intent</li>
                <li>• Target keywords</li>
                <li>• Industry</li>
                <li>• Implementation speed</li>
              </div>
              <p>
                Some improvements can appear relatively quickly. Competitive keywords may take substantially longer.
              </p>
              <div className="p-6 border border-white/10 bg-[#121216]/60 rounded-2xl space-y-3">
                <p className="text-sm text-gray-300 font-semibold">
                  The right mindset is to build a system that becomes stronger over time rather than expecting overnight rankings.
                </p>
                <p className="text-xs text-gray-400">
                  At G2G Media House, our proven framework typically builds compound organic momentum within <strong>60–90 days</strong>, while emphasizing customized strategies. That should be treated as a planning window rather than a guaranteed ranking timeline.
                </p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* SEO Company vs Freelancer: Which Is Better? */}
            <section id="agency-vs-freelancer" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                SEO Company vs Freelancer: Which Is Better?
              </h2>
              <p>
                Both can work. The right choice depends on your requirements.
              </p>

              {/* Freelancer vs Agency Table */}
              <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#121216]/60">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-4 font-bold uppercase tracking-wider text-white">Requirement</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-gray-400">Freelancer</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-primary">SEO Company</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    <tr>
                      <td className="p-4 font-semibold text-white">Lower initial cost</td>
                      <td className="p-4 text-green-400 font-medium">Often</td>
                      <td className="p-4 text-gray-400">Sometimes</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Dedicated specialist</td>
                      <td className="p-4 text-gray-300">Usually</td>
                      <td className="p-4 text-gray-300">Usually</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Multiple SEO disciplines</td>
                      <td className="p-4 text-gray-400">Limited</td>
                      <td className="p-4 text-primary font-bold">Stronger</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Technical SEO</td>
                      <td className="p-4 text-gray-400">Depends</td>
                      <td className="p-4 text-primary font-bold">More scalable</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Content team</td>
                      <td className="p-4 text-gray-400">Depends</td>
                      <td className="p-4 text-primary font-bold">Often available</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Link building</td>
                      <td className="p-4 text-gray-400">Depends</td>
                      <td className="p-4 text-primary font-bold">Usually available</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Reporting</td>
                      <td className="p-4 text-gray-400">Varies</td>
                      <td className="p-4 text-primary font-bold">Structured</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Scalability</td>
                      <td className="p-4 text-gray-400">Moderate</td>
                      <td className="p-4 text-primary font-bold">Higher</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Full digital marketing integration</td>
                      <td className="p-4 text-gray-400">Limited</td>
                      <td className="p-4 text-primary font-bold">Stronger</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-400">
                If your requirements involve technical SEO, content, link building, conversion optimization and broader digital marketing, an agency offers a far more complete and accountable setup.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* Common SEO Mistakes Businesses Make */}
            <section id="common-mistakes" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Common SEO Mistakes Businesses Make
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                    <XCircle size={16} /> Mistake 1: Choosing Based Only on Price
                  </h4>
                  <p className="text-xs text-gray-400">
                    Cheap SEO can become expensive when you spend months without meaningful progress.
                  </p>
                </div>

                <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                    <XCircle size={16} /> Mistake 2: Targeting Only High-Volume Keywords
                  </h4>
                  <p className="text-xs text-gray-400">
                    Search volume doesn&apos;t equal revenue. Target keywords based on intent and business value.
                  </p>
                </div>

                <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                    <XCircle size={16} /> Mistake 3: Publishing Generic AI Content
                  </h4>
                  <p className="text-xs text-gray-400">
                    Content should demonstrate genuine knowledge, user experience and originality.
                  </p>
                </div>

                <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                    <XCircle size={16} /> Mistake 4: Ignoring Technical SEO
                  </h4>
                  <p className="text-xs text-gray-400">
                    Great content cannot compensate for major crawling, indexing or website usability problems.
                  </p>
                </div>

                <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                    <XCircle size={16} /> Mistake 5: Buying Low-Quality Backlinks
                  </h4>
                  <p className="text-xs text-gray-400">
                    A large backlink number is meaningless if the links are irrelevant or low quality.
                  </p>
                </div>

                <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                    <XCircle size={16} /> Mistake 6: Measuring Rankings Alone
                  </h4>
                  <p className="text-xs text-gray-400">
                    Track leads, form conversions and revenue wherever possible—not just keyword positions.
                  </p>
                </div>
              </div>

              <div className="p-5 border border-white/10 bg-[#121216]/60 rounded-2xl space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <AlertCircle size={16} className="text-primary" /> Mistake 7: Expecting SEO to Work Without Website Changes
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Sometimes SEO requires changes to pages, navigation, content, technical elements and conversion paths. Be prepared to evolve your digital presence.
                </p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Why G2G Media House Takes a Growth-Focused Approach to SEO */}
            <section id="g2g-approach" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Why G2G Media House Takes a Growth-Focused Approach to SEO
              </h2>
              <p>
                SEO works best when it connects with the rest of your marketing.
              </p>
              <p>
                G2G Media House positions its services around a broader growth system covering content, paid advertising, branding, websites and funnels, and SEO. Learn more about our end-to-end <Link href="/blog/digital-marketing-services" className="text-primary hover:underline font-bold">digital marketing services</Link>.
              </p>
              <p>
                Our SEO offering includes keyword research, competitor analysis and on-page SEO at the starter level, while higher packages add off-page SEO, link building and technical SEO.
              </p>
              <p>
                That broader perspective matters. A visitor may discover your brand through Google but convert because:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-300">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Your website looks trustworthy</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Your messaging is clear</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Your landing page answers their question</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Your brand feels credible</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Your offer is easy to understand</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Your CTA makes the next step obvious</span>
                </div>
              </div>

              <div className="p-6 border-l-4 border-primary bg-primary/5 rounded-r-2xl text-center sm:text-left">
                <p className="text-lg font-black uppercase tracking-tight text-white">
                  Traffic gets attention. Strategy turns attention into growth.
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  G2G&apos;s positioning also emphasizes understanding the business, building a strategy, creating campaigns, executing them and scaling what performs. For businesses that want SEO connected to wider marketing activity, that is a transformative advantage.
                </p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* A Practical SEO Hiring Checklist */}
            <section id="hiring-checklist" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                A Practical SEO Hiring Checklist
              </h2>
              <p>
                Before signing an SEO contract, review these critical verification questions:
              </p>

              <div className="space-y-3">
                {checklist.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleChecklistItem(item.id)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                      item.checked
                        ? "border-primary/40 bg-primary/10 text-white"
                        : "border-white/5 bg-[#121216]/60 text-gray-400 hover:border-white/20"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        item.checked
                          ? "bg-primary border-primary text-black"
                          : "border-gray-600 bg-black/40"
                      }`}
                    >
                      {item.checked && <Check size={14} strokeWidth={3} />}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary block">
                        {item.category}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold">
                        {item.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <hr className="border-white/5" />

            {/* What Makes a Good SEO Strategy Different? */}
            <section id="different-strategy" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Makes a Good SEO Strategy Different?
              </h2>
              <p>
                A strong SEO strategy doesn&apos;t begin with: <em>“How many keywords can we rank?”</em>
              </p>
              <div className="p-6 border border-primary/20 bg-white/5 rounded-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">It begins with:</span>
                <p className="text-base sm:text-lg font-bold text-white italic">
                  “Which searches can create meaningful business opportunities?”
                </p>
              </div>
              <p>
                That shift changes everything:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-300 pl-4 border-l-2 border-primary">
                <li>• <strong>Intent over volume:</strong> Instead of creating content just because a keyword has volume, you create content because customers need it.</li>
                <li>• <strong>Authority over numbers:</strong> Instead of collecting backlinks simply to increase a number, you build authority around your industry.</li>
                <li>• <strong>Conversions over vanity metrics:</strong> Instead of reporting ranking positions alone, you connect SEO with enquiries and conversions.</li>
                <li>• <strong>Customer-centricity:</strong> And instead of treating Google as the customer, you build the website for the person who is actually going to buy from you.</li>
              </ul>
              <p className="font-bold text-white text-sm">
                That&apos;s the foundation of sustainable SEO.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* Final Thoughts & Conclusion */}
            <section id="conclusion" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Final Thoughts: Choosing an SEO Company in Hyderabad
              </h2>
              <p>
                Finding an SEO company in Hyderabad isn&apos;t difficult. Finding the <strong>right SEO company</strong> is.
              </p>
              <p>
                The right partner should understand your business, your customers, your competition and your growth goals. They should be able to explain their strategy in plain English, care about more than rankings, and be willing to measure whether their work is actually helping your business.
              </p>
              <p>
                Before choosing an agency, compare strategy, experience, transparency, technical capability, content quality, reporting and business focus—not just monthly pricing.
              </p>
              <p>
                If your goal is to build stronger Google visibility, attract qualified visitors and turn organic search into a reliable source of leads, SEO deserves to be treated as a long-term growth investment.
              </p>

              <div className="p-8 border border-primary/30 bg-gradient-to-br from-primary/10 via-[#121216] to-green-500/5 rounded-3xl text-center space-y-6 my-8 shadow-2xl">
                <span className="px-3.5 py-1 bg-primary/20 border border-primary/30 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full inline-block">
                  Ready to Grow?
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-white">
                  Looking for an SEO Company in Hyderabad? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
                    Start with a Strategy—Not a Package
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
                  Speak with G2G Media House about your website, target market and growth goals, and build an SEO plan around what your business actually needs.
                </p>
                <div>
                  <Link
                    href="/contact-form"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    Request an SEO Strategy Consultation <ArrowRight size={16} />
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

          {/* Right Column: Share & Author & SEO Tags */}
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
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mt-1">SEO & Strategy Specialists</p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-normal">
                Connecting technical search optimization with clear commercial funnels to build predictable inbound leads for Hyderabad businesses.
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
                <BookOpen size={14} className="text-primary" /> Official Guidelines
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
                    Google&apos;s People-First Guidance <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://developers.google.com/search"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Google Search Central <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100" />
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
