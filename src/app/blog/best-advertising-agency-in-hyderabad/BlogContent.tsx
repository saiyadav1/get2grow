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
  Award,
  Megaphone,
  Eye,
  Filter,
  DollarSign
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
    "what-agencies-do",
    "why-partner-matters",
    "what-makes-best-agency",
    "services-expected",
    "how-to-choose-5-steps",
    "ad-vs-digital-agency",
    "advertising-costs",
    "common-mistakes",
    "why-g2g-built-for-growth",
    "g2g-campaign-process",
    "questions-before-hiring",
    "agency-checklist",
    "future-of-advertising",
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
    { id: "c1", text: "Does the agency understand my specific industry & market dynamics?", checked: false },
    { id: "c2", text: "Does it deeply understand my target customer profile & search intent?", checked: false },
    { id: "c3", text: "Does it offer the multi-channel advertising expertise I need?", checked: false },
    { id: "c4", text: "Does it provide verified, relevant case studies with real revenue impact?", checked: false },
    { id: "c5", text: "Does it explain its strategy and creative testing roadmap clearly?", checked: false },
    { id: "c6", text: "Does it track end-to-end conversions and cost per customer acquisition?", checked: false },
    { id: "c7", text: "Does it optimize campaigns and test fresh ad creatives regularly?", checked: false },
    { id: "c8", text: "Does it provide transparent, business-focused monthly reporting?", checked: false },
    { id: "c9", text: "Are advertising costs clearly separated from agency management fees?", checked: false },
    { id: "c10", text: "Do I retain 100% ownership and administrative access to accounts & data?", checked: false },
    { id: "c11", text: "Is the communication channel and point of contact clearly defined?", checked: false },
    { id: "c12", text: "Does the contract and SLA make complete financial sense for my business?", checked: false }
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
    { id: "what-agencies-do", text: "What an Ad Agency Does" },
    { id: "why-partner-matters", text: "Why the Right Partner Matters" },
    { id: "what-makes-best-agency", text: "What Makes the Best Agency" },
    { id: "services-expected", text: "Expected Modern Services" },
    { id: "how-to-choose-5-steps", text: "5 Steps to Choose an Agency" },
    { id: "ad-vs-digital-agency", text: "Ad Agency vs Digital Agency" },
    { id: "advertising-costs", text: "How Much Does It Cost?" },
    { id: "common-mistakes", text: "Common Mistakes to Avoid" },
    { id: "why-g2g-built-for-growth", text: "Why G2G Is Built for Growth" },
    { id: "g2g-campaign-process", text: "Our 5-Step Campaign Framework" },
    { id: "questions-before-hiring", text: "19 Questions Before Hiring" },
    { id: "agency-checklist", text: "Agency Evaluation Checklist" },
    { id: "future-of-advertising", text: "The Future of Advertising" },
    { id: "conclusion", text: "Final Thoughts & Strategy" },
    { id: "faq", text: "Frequently Asked Questions" }
  ];

  // FAQ Content Array
  const faqs = [
    {
      q: "Which is the best advertising agency in Hyderabad?",
      a: "The best advertising agency in Hyderabad depends on your business goals, industry, budget and required services. A strong agency should understand your target audience, create relevant campaigns, track conversions and continuously optimize performance. Rather than choosing solely by price or reputation, compare relevant experience, case studies, reporting, strategy, communication and the agency's ability to connect advertising activity with measurable business outcomes."
    },
    {
      q: "How much does an advertising agency cost in Hyderabad?",
      a: "Advertising agency pricing in Hyderabad varies according to campaign complexity, advertising budget, number of platforms, creative requirements, landing pages and reporting needs. Some agencies charge a fixed management fee, while others use project-based or percentage-based pricing. Always ask for a clear breakdown of agency fees, advertising spend and additional costs before signing a contract so you can compare proposals accurately."
    },
    {
      q: "What services does an advertising agency provide?",
      a: "A modern advertising agency may provide Google Ads, Meta Ads, social media advertising, creative development, video advertising, retargeting, audience targeting, landing pages, conversion tracking and campaign optimization. Some agencies also combine advertising with branding, SEO, content and website services. The right service mix depends on whether your primary goal is lead generation, sales, brand awareness or customer acquisition."
    },
    {
      q: "How do I choose the right advertising agency?",
      a: "Start by defining your business goal and then compare agencies based on relevant experience, strategy, services, case studies, reporting, communication and pricing. Ask how the agency measures conversions and optimizes campaigns. You should also clarify account ownership, contract terms, advertising spend and additional fees. The best agency is not necessarily the cheapest; it is the one that fits your goals and can demonstrate a credible process."
    },
    {
      q: "Is hiring an advertising agency worth it for a small business?",
      a: "Hiring an advertising agency can be worthwhile for a small business when the agency has the expertise to manage campaigns efficiently and the expected business value justifies the investment. An experienced team can help with strategy, targeting, creative testing, conversion tracking and optimization. However, businesses should first establish realistic goals, budgets and tracking so they can evaluate whether the campaigns are generating profitable results."
    }
  ];

  // SEO Tags
  const seoTags = [
    "Best Advertising Agency in Hyderabad",
    "Advertising Agency Hyderabad",
    "Digital Advertising Hyderabad",
    "Digital Marketing Agency Hyderabad",
    "Google Ads Hyderabad",
    "Meta Ads Hyderabad",
    "Performance Marketing Hyderabad",
    "Social Media Advertising Hyderabad",
    "Branding Agency Hyderabad",
    "Lead Generation Hyderabad"
  ];

  // Schema Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Best Advertising Agency in Hyderabad: How to Choose the Right Partner for Growth",
        "description": "Looking for the best advertising agency in Hyderabad? Discover how G2G Media House helps brands generate leads, sales and measurable growth.",
        "image": "https://g2gmediahouse.com/assets/blog/best-advertising-agency-in-hyderabad-featured.jpg",
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
          "@id": "https://g2gmediahouse.com/blog/best-advertising-agency-in-hyderabad"
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
            <span className="text-gray-300">Best Advertising Agency in Hyderabad</span>
          </nav>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              Agency Selection Guide
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Calendar size={14} className="text-primary" /> September 2026
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Clock size={14} className="text-primary" /> 15 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.08] max-w-5xl mb-6">
            Best Advertising Agency in Hyderabad: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 font-black">
              How to Choose the Right Partner for Growth
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Looking for the best advertising agency in Hyderabad? Discover how G2G Media House helps brands generate qualified leads, sales, and measurable growth.
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
                src="/assets/blog/best-advertising-agency-in-hyderabad-featured.jpg"
                alt="Best advertising agency in Hyderabad for digital advertising, branding and lead generation"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <p className="text-lg text-white font-medium">
                If you are searching for the best advertising agency in Hyderabad, you probably have a bigger problem than simply finding someone who can run ads.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-200">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                  <Target size={16} className="text-primary shrink-0" />
                  <span>You want paying customers</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                  <Users size={16} className="text-primary shrink-0" />
                  <span>You want qualified inbound leads</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                  <Eye size={16} className="text-primary shrink-0" />
                  <span>You want your brand to be noticed</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                  <TrendingUp size={16} className="text-primary shrink-0" />
                  <span>You want measurable return on ad spend</span>
                </div>
              </div>
              <p>
                And most importantly, you want the money you spend on marketing to produce something you can actually measure.
              </p>
              <p>
                That is where choosing the right advertising partner becomes important. Hyderabad has a large and competitive marketing ecosystem. You will find traditional advertising companies, creative agencies, digital marketing agencies, social media specialists, performance marketing teams and full-service agencies competing for the same businesses.
              </p>
              <p>
                But not every agency is built for the same goal. Some are excellent at branding. Others specialize in Google Ads. Some focus heavily on social media content. Others are built around performance marketing and lead generation.
              </p>
              
              <div className="p-6 border-l-4 border-primary bg-white/5 rounded-r-2xl my-6">
                <p className="font-bold text-white text-base mb-1">So how do you decide?</p>
                <p className="text-gray-300 text-sm sm:text-base font-semibold italic">
                  This guide explains what to look for in an advertising agency in Hyderabad, which services matter, what questions you should ask before signing a contract and how to evaluate whether an agency can actually help your business grow.
                </p>
              </div>

              <p>
                To learn more about connecting multi-channel strategies, check our overview of <Link href="/blog/digital-marketing-services" className="text-primary hover:underline font-bold">digital marketing services in Hyderabad</Link>.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* What Does an Advertising Agency Actually Do? */}
            <section id="what-agencies-do" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Does an Advertising Agency Actually Do?
              </h2>
              <p>
                An advertising agency helps businesses plan, create, launch, manage and improve advertising campaigns.
              </p>
              <p>
                Traditionally, advertising focused heavily on television, newspapers, radio, outdoor media and print. Modern advertising is much broader and data-driven.
              </p>
              
              <div className="p-6 border border-white/10 rounded-2xl bg-[#121216]/60">
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">
                  A comprehensive modern advertising strategy may combine:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-300">
                  <span className="p-2 bg-white/5 rounded-lg">• Google Ads</span>
                  <span className="p-2 bg-white/5 rounded-lg">• Meta Ads</span>
                  <span className="p-2 bg-white/5 rounded-lg">• Instagram Ads</span>
                  <span className="p-2 bg-white/5 rounded-lg">• YouTube Ads</span>
                  <span className="p-2 bg-white/5 rounded-lg">• Display Networks</span>
                  <span className="p-2 bg-white/5 rounded-lg">• Retargeting</span>
                  <span className="p-2 bg-white/5 rounded-lg">• Social Campaigns</span>
                  <span className="p-2 bg-white/5 rounded-lg">• Creative Development</span>
                  <span className="p-2 bg-white/5 rounded-lg">• Video Advertising</span>
                  <span className="p-2 bg-white/5 rounded-lg">• Landing Pages</span>
                  <span className="p-2 bg-white/5 rounded-lg">• CRO Optimization</span>
                  <span className="p-2 bg-white/5 rounded-lg">• Audience Targeting</span>
                  <span className="p-2 bg-white/5 rounded-lg">• Brand Campaigns</span>
                  <span className="p-2 bg-white/5 rounded-lg">• Lead Generation</span>
                  <span className="p-2 bg-white/5 rounded-lg">• Performance Marketing</span>
                </div>
              </div>

              <div className="p-5 border-l-2 border-primary bg-primary/5 rounded-r-xl">
                <p className="text-base font-black text-white uppercase tracking-tight">The important word is STRATEGY.</p>
                <p className="text-xs text-gray-400 mt-1">
                  Running an advertisement is relatively easy. Running an advertisement that reaches the right person, communicates the right message, sends them to the right landing page and turns them into a customer is much harder. That is why businesses should look beyond an agency&apos;s ability to simply &quot;run ads.&quot;
                </p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Why Choosing the Right Advertising Agency Matters */}
            <section id="why-partner-matters" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Why Choosing the Right Advertising Agency Matters
              </h2>
              <p>Imagine two businesses selling similar products in Hyderabad:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white text-sm mb-1">Business A</h4>
                  <p className="text-xs text-red-400 font-semibold mb-2">Spends ₹1,00,000 on advertising</p>
                  <p className="text-xs text-gray-400">Generates 15,000 clicks, high vanity impressions, but <strong>only 4 qualified leads</strong>.</p>
                </div>
                <div className="p-5 border border-primary/20 bg-primary/5 rounded-2xl">
                  <h4 className="font-bold text-white text-sm mb-1">Business B</h4>
                  <p className="text-xs text-primary font-semibold mb-2">Spends ₹1,00,000 on advertising</p>
                  <p className="text-xs text-gray-300">Generates 3,000 targeted clicks, <strong>65 qualified enquiries, and 18 closed sales</strong>.</p>
                </div>
              </div>

              <p className="font-bold text-white">
                Which business had the better campaign? Clearly, Business B.
              </p>
              <p>
                This is why clicks, impressions and followers should not be treated as the final definition of advertising success. Your campaign should ultimately connect marketing activity to core business objectives:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 pl-2">
                <li>• More qualified leads</li>
                <li>• More purchases & pipeline</li>
                <li>• Lower customer acquisition cost (CAC)</li>
                <li>• Higher return on ad spend (ROAS)</li>
                <li>• More direct website enquiries</li>
                <li>• More high-intent phone calls</li>
                <li>• More scheduled demo bookings</li>
                <li>• Stronger customer lifetime value</li>
              </div>

              <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl">
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary block mb-1">Pro Tip</span>
                <p className="text-xs text-gray-300">
                  Never ask an agency only, <em>&quot;How many leads can you generate?&quot;</em> Ask, <strong>&quot;What kind of leads can you generate, how will you measure quality, and how will you improve the campaign over time?&quot;</strong>
                </p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* What Makes the Best Advertising Agency in Hyderabad? */}
            <section id="what-makes-best-agency" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Makes the Best Advertising Agency in Hyderabad?
              </h2>
              <p>
                There is no universal agency that is perfect for every company. The right agency depends on your industry, audience, budget, goals and growth stage. However, the strongest agencies share several characteristics:
              </p>

              <div className="space-y-6">
                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-primary font-bold">1.</span> Strategy Comes Before Ad Spend
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    A professional agency should not immediately ask: <em>&quot;How much is your monthly ad budget?&quot;</em>
                  </p>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">The better questions are:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-300">
                    <span>• What are you selling?</span>
                    <span>• Who is your ideal customer?</span>
                    <span>• What problem does your product solve?</span>
                    <span>• Where does your audience spend time?</span>
                    <span>• What is your average customer value?</span>
                    <span>• What is your sales cycle?</span>
                    <span>• What have you tried already?</span>
                    <span>• What does successful acquisition look like?</span>
                  </div>
                  <p className="text-xs text-primary font-semibold pt-1">
                    Once those questions are answered, the agency can build a real media strategy.
                  </p>
                </div>

                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-primary font-bold">2.</span> They Understand Creative & Messaging
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Advertising is about targeting, but creative is what makes the sale. Your headline, visual, video hook, offer, and call-to-action all influence whether someone continues or scrolls away.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <span className="text-red-400 font-bold block mb-1">Generic Ad Copy:</span>
                      <p className="text-gray-400">&quot;We provide digital marketing services.&quot;</p>
                    </div>
                    <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                      <span className="text-green-400 font-bold block mb-1">Outcome-Driven Copy:</span>
                      <p className="text-gray-200">&quot;Turn Your Website Traffic Into Qualified Inbound Leads.&quot;</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-primary font-bold">3.</span> They Measure Conversions & Business Impact
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    A professional advertising campaign must have bulletproof conversion tracking. This includes form submissions, verified phone calls, purchases, WhatsApp enquiries, demo requests, and attributable pipeline revenue. Without conversion tracking, you are making decisions on blind guesses.
                  </p>
                </div>

                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-primary font-bold">4.</span> They Optimize Instead of Just Reporting
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    A monthly report should not simply say: <em>&quot;Your campaign received 50,000 impressions.&quot;</em> You should understand: What worked? What failed? Which audience performed best? Which creative generated the strongest response? What will change next month?
                  </p>
                  <p className="text-xs text-gray-300 font-semibold italic">
                    Reporting tells you what happened. Optimization explains what happens next.
                  </p>
                </div>

                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-primary font-bold">5.</span> Complete Commercial & Account Transparency
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    You should know where every rupee is going. Ask your agency to clearly separate <strong>Agency Management Fees</strong> from <strong>Direct Advertising Spend</strong>. Always ensure you retain administrative ownership of your ad accounts, Meta Pixel, Google tag setups, and creative assets.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Services You Should Expect From a Modern Advertising Agency */}
            <section id="services-expected" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Services You Should Expect From a Modern Advertising Agency
              </h2>
              <p>
                A modern advertising agency can offer much more than simply placing banner advertisements:
              </p>

              <div className="space-y-8">
                {/* Google Ads */}
                <div className="p-6 border border-white/5 rounded-2xl bg-[#121216]/60 space-y-4">
                  <div className="flex items-center gap-3">
                    <Megaphone className="text-primary" size={22} />
                    <h3 className="text-lg font-bold text-white">Google Ads (Search, Display, Shopping, Performance Max)</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Google Ads helps businesses reach people actively searching for products or services. This makes search advertising particularly useful for high-intent queries like:
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-primary">
                    <span className="px-3 py-1 bg-white/5 rounded-md border border-white/5">“dentist near me”</span>
                    <span className="px-3 py-1 bg-white/5 rounded-md border border-white/5">“real estate company Hyderabad”</span>
                    <span className="px-3 py-1 bg-white/5 rounded-md border border-white/5">“best interior designer Hyderabad”</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    A good Google Ads strategy includes comprehensive negative keywords, bid management, conversion tracking, and ongoing search query optimization.
                  </p>
                </div>

                {/* Image 2 Placement: Google Ads */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                  <Image
                    src="/assets/blog/best-advertising-agency-in-hyderabad-google-ads.jpg"
                    alt="Google Ads campaign management by an advertising agency in Hyderabad"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Meta Ads */}
                <div className="p-6 border border-white/5 rounded-2xl bg-[#121216]/60 space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="text-primary" size={22} />
                    <h3 className="text-lg font-bold text-white">Meta Ads (Facebook & Instagram Advertising)</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Meta advertising includes platforms such as Facebook and Instagram. These platforms are unmatched for brand awareness, direct lead generation, e-commerce sales, and retargeting.
                  </p>
                  <p className="text-xs text-gray-400">
                    Explore our detailed guide on <Link href="/blog/meta-ads-for-lead-generation" className="text-primary hover:underline font-bold">G2G Media House paid advertising services</Link> to see how we build high-converting paid social funnels.
                  </p>
                </div>

                {/* Image 3 Placement: Meta Ads */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                  <Image
                    src="/assets/blog/best-advertising-agency-in-hyderabad-meta-ads.jpg"
                    alt="Meta Ads and social media advertising agency in Hyderabad"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Creative Advertising */}
                <div className="p-6 border border-white/5 rounded-2xl bg-[#121216]/60 space-y-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-primary" size={22} />
                    <h3 className="text-lg font-bold text-white">Creative Advertising & Video Production</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Creative is the bridge between your brand and your audience. It includes ad graphics, reels, short-form UGC videos, copy hooks, and promotional visual assets. For social advertising especially, continuous creative testing is essential to prevent ad fatigue.
                  </p>
                </div>

                {/* Landing Pages and Funnels */}
                <div className="p-6 border border-white/5 rounded-2xl bg-[#121216]/60 space-y-4">
                  <div className="flex items-center gap-3">
                    <Layers className="text-primary" size={22} />
                    <h3 className="text-lg font-bold text-white">Landing Pages and Full Funnel Optimization</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Getting someone to click your advertisement is only half the job. If your landing page is slow or confusing, you will lose qualified prospects. A sound advertising strategy considers the whole customer journey:
                  </p>
                  <p className="text-xs font-bold text-primary my-2 pl-2">
                    Ad → Landing Page → Enquiry → Fast Follow-up → Closed Sale
                  </p>
                </div>

                {/* Image 4 Placement: Funnels */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                  <Image
                    src="/assets/blog/best-advertising-agency-in-hyderabad-funnel.jpg"
                    alt="Advertising funnel from paid ads to leads and customers"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Retargeting */}
                <div className="p-6 border border-white/5 rounded-2xl bg-[#121216]/60 space-y-4">
                  <div className="flex items-center gap-3">
                    <Filter className="text-primary" size={22} />
                    <h3 className="text-lg font-bold text-white">Multi-Touch Retargeting</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Most visitors will not buy immediately. Retargeting allows you to reconnect with engaged website visitors and social viewers through customer proof, testimonials, and compelling limited-time offers.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* How to Choose the Best Advertising Agency in Hyderabad (5 Steps) */}
            <section id="how-to-choose-5-steps" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How to Choose the Best Advertising Agency in Hyderabad
              </h2>
              <p>
                Do not choose an agency simply because its website looks impressive. Use a structured 5-step evaluation process:
              </p>

              <div className="space-y-6">
                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-primary">Step 1:</span> Define Your Specific Objective
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Before calling agencies, write down your primary commercial goal: e.g., <em>&quot;We need 100 qualified B2B leads per month&quot;</em> or <em>&quot;We want to increase e-commerce sales by 30% while maintaining a 4x ROAS.&quot;</em>
                  </p>
                </div>

                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-primary">Step 2:</span> Verify Their Actual Service Capabilities
                  </h3>
                  
                  {/* Service Matrix Table */}
                  <div className="overflow-x-auto border border-white/10 rounded-xl">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                          <th className="p-3 font-bold text-white">Requirement</th>
                          <th className="p-3 font-bold text-primary">What to Look For</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-gray-300">
                        <tr>
                          <td className="p-3 font-semibold text-white">Google Ads</td>
                          <td className="p-3 text-gray-400">Search, display, shopping or relevant campaign expertise</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">Meta Ads</td>
                          <td className="p-3 text-gray-400">Facebook and Instagram campaign management</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">Lead Generation</td>
                          <td className="p-3 text-gray-400">Lead forms, landing pages and qualification funnels</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">E-commerce</td>
                          <td className="p-3 text-gray-400">Product catalogue campaigns and conversion optimization</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">Branding</td>
                          <td className="p-3 text-gray-400">Positioning, brand identity and consistent messaging</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">Social Media</td>
                          <td className="p-3 text-gray-400">Content strategy and creative production</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">SEO</td>
                          <td className="p-3 text-gray-400">Technical, on-page and off-page capabilities (see <Link href="/blog/seo-services-in-hyderabad" className="text-primary hover:underline">SEO services</Link>)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">Funnels</td>
                          <td className="p-3 text-gray-400">Custom landing pages and conversion optimization</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-primary">Step 3:</span> Ask for Relevant Case Studies with Context
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Be cautious of vague statements like <em>&quot;We helped a company achieve massive growth.&quot;</em> Ask for starting position, time period, channels used, advertising budget, and actual revenue generated.
                  </p>
                </div>

                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-primary">Step 4:</span> Understand Their Reporting & Optimization Cadence
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    A report should clearly communicate spend, lead volume, cost per lead, conversion rate, audience findings, creative winners, and actionable next steps.
                  </p>
                </div>

                {/* Image 5 Placement: Analytics & Tracking */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                  <Image
                    src="/assets/blog/best-advertising-agency-in-hyderabad-analytics-tracking.jpg"
                    alt="Advertising campaign optimization and conversion tracking"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-primary">Step 5:</span> Review the Contract & Governance Terms
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Clarify minimum contract periods, management fees, cancellation terms, data ownership, and communication channels. Get everything in writing before transferring ad funds. For agency selection insights, review <a href="https://academy.hubspot.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">HubSpot&apos;s guide on working with paid media agencies</a>.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Advertising Agency vs Digital Marketing Agency */}
            <section id="ad-vs-digital-agency" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Advertising Agency vs Digital Marketing Agency: What&apos;s the Difference?
              </h2>
              <p>The terms often overlap, but there is a distinct difference:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white text-sm mb-2">Advertising Agency</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Traditionally focuses primarily on paid promotion, media buying, creative campaigns, commercials, and direct response ads across Google, Meta, YouTube, and billboards.
                  </p>
                </div>
                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white text-sm mb-2">Digital Marketing Agency</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Offers a comprehensive growth spectrum including SEO, content marketing, social media management, email funnels, website optimization, branding, and conversion architecture.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-400">
                For a business that wants an end-to-end growth system, an integrated agency combining creative advertising with branding and SEO conversion strategy offers maximum long-term leverage. For deeper reading, review <a href="https://ahrefs.com/blog/digital-marketing-agency/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Ahrefs on how agencies specialize</a>.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* How Much Does an Advertising Agency Cost in Hyderabad? */}
            <section id="advertising-costs" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How Much Does an Advertising Agency Cost in Hyderabad?
              </h2>
              <p>
                There is no single standard price. Agency costs vary based on campaign complexity, monthly ad budget, number of platforms, creative production requirements, and reporting depth.
              </p>
              
              <div className="p-6 border border-white/10 bg-[#121216]/60 rounded-2xl space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">The Economics of Cost Per Lead (CPL) vs Cost Per Customer (CAC):</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  If you spend ₹50,000 on advertising and generate 100 leads, your average cost per lead is ₹500. But if only 5 leads convert into paying customers, your effective customer acquisition cost is ₹10,000.
                </p>
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary block mb-1">Key Takeaway</span>
                  <p className="text-xs text-gray-300 font-medium">
                    The cheapest agency is not automatically the most affordable agency. The better question is how efficiently the agency turns your marketing investment into profitable revenue.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Common Mistakes Businesses Make */}
            <section id="common-mistakes" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Common Mistakes Businesses Make When Hiring an Advertising Agency
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                    <XCircle size={16} /> Mistake 1: Choosing the Cheapest Quote
                  </h4>
                  <p className="text-xs text-gray-400">
                    A low management fee looks attractive, but poorly managed campaigns waste massive ad budgets.
                  </p>
                </div>

                <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                    <XCircle size={16} /> Mistake 2: Focusing Only on Followers
                  </h4>
                  <p className="text-xs text-gray-400">
                    Followers offer vanity social proof, but followers do not automatically equate to business revenue.
                  </p>
                </div>

                <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                    <XCircle size={16} /> Mistake 3: Expecting Overnight Miracles
                  </h4>
                  <p className="text-xs text-gray-400">
                    Paid ads generate traffic quickly, but profitable campaigns require iterative creative testing.
                  </p>
                </div>

                <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                    <XCircle size={16} /> Mistake 4: Not Tracking Conversions
                  </h4>
                  <p className="text-xs text-gray-400">
                    If you don&apos;t know which specific creative drives revenue, you cannot scale spend safely.
                  </p>
                </div>

                <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                    <XCircle size={16} /> Mistake 5: Zero Creative Freedom
                  </h4>
                  <p className="text-xs text-gray-400">
                    Brand guidelines matter, but digital ads require testing diverse angles, hooks, and formats.
                  </p>
                </div>

                <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                    <XCircle size={16} /> Mistake 6: Changing Strategy Weekly
                  </h4>
                  <p className="text-xs text-gray-400">
                    Constantly switching ad sets resets the algorithm before sufficient data is collected.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Why G2G Media House Is Built for Growth */}
            <section id="why-g2g-built-for-growth" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Why G2G Media House Is Built for Growth
              </h2>
              <p>
                G2G Media House, also known as Get2Grow, positions its marketing approach around a simple objective:
              </p>
              <div className="p-6 border-l-4 border-primary bg-primary/10 rounded-r-2xl text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  More Leads. More Sales. More Growth.
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Our service mix spans paid advertising, social media marketing, branding, conversion-focused websites, and data-driven SEO.
                </p>
              </div>
              <p>
                That combination is crucial because advertising rarely operates in isolation:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-300">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Your advertisement needs a strong message</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Your message needs a credible brand</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Your campaign needs high-converting creative</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Your traffic needs somewhere useful to land</span>
                </div>
              </div>
              <p className="text-xs text-gray-400">
                Having partnered with 27+ high-growth brands across Hyderabad, our approach connects every marketing touchpoint into a cohesive engine.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* How G2G Approaches Advertising Campaigns (5 Framework Steps) */}
            <section id="g2g-campaign-process" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How G2G Approaches Advertising Campaigns
              </h2>
              <p>
                A strong campaign follows a structured, repeatable methodology:
              </p>

              <div className="space-y-4">
                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">01</span>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Understand</h4>
                    <p className="text-xs text-gray-400">Deep dive into the business model, unit economics, audience psychology, competitive landscape, and primary objective.</p>
                  </div>
                </div>

                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">02</span>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Strategize</h4>
                    <p className="text-xs text-gray-400">Build a customized media architecture matching channel selection, audience segments, and budget allocations to goals.</p>
                  </div>
                </div>

                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">03</span>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Create</h4>
                    <p className="text-xs text-gray-400">Develop compelling hooks, ad visual assets, copywriting, video reels, and conversion-optimized landing pages.</p>
                  </div>
                </div>

                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">04</span>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Execute</h4>
                    <p className="text-xs text-gray-400">Launch campaigns with rigorous tag setups, real-time pixel firing, event tracking, and close spend monitoring.</p>
                  </div>
                </div>

                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">05</span>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Scale</h4>
                    <p className="text-xs text-gray-400">Systematically scale budget behind top-performing angles and audiences while pruning underperforming creative sets.</p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Questions to Ask Before Hiring an Advertising Agency */}
            <section id="questions-before-hiring" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Questions to Ask Before Hiring an Advertising Agency
              </h2>
              <p>
                Before signing any contract or releasing ad budgets, ask these 19 questions:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl space-y-2">
                  <span className="text-primary font-bold uppercase tracking-wider block">Strategy</span>
                  <p>1. How will you understand my business?</p>
                  <p>2. Who do you believe my ideal customer is?</p>
                  <p>3. Which platforms would you recommend and why?</p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl space-y-2">
                  <span className="text-primary font-bold uppercase tracking-wider block">Performance</span>
                  <p>4. What conversions will you track?</p>
                  <p>5. How will you measure campaign success?</p>
                  <p>6. How often will campaigns be optimized?</p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl space-y-2">
                  <span className="text-primary font-bold uppercase tracking-wider block">Creative</span>
                  <p>7. Who creates the ad creatives?</p>
                  <p>8. How frequently do you test new creatives?</p>
                  <p>9. Will you write the advertising copy?</p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl space-y-2">
                  <span className="text-primary font-bold uppercase tracking-wider block">Reporting</span>
                  <p>10. What will be included in monthly reports?</p>
                  <p>11. How often will we review performance?</p>
                  <p>12. Who will be my dedicated point of contact?</p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl space-y-2">
                  <span className="text-primary font-bold uppercase tracking-wider block">Ownership</span>
                  <p>13. Who owns the advertising account?</p>
                  <p>14. Who owns the creative assets?</p>
                  <p>15. What happens if we stop working together?</p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl space-y-2">
                  <span className="text-primary font-bold uppercase tracking-wider block">Commercials</span>
                  <p>16. What is your exact management fee?</p>
                  <p>17. Is direct advertising spend separate?</p>
                  <p>18. Are there landing-page costs?</p>
                  <p>19. Is there a minimum commitment period?</p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Interactive Agency Evaluation Checklist */}
            <section id="agency-checklist" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                A Simple Checklist for Choosing an Advertising Agency in Hyderabad
              </h2>
              <p>
                Use this interactive evaluation checklist before making your final selection:
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
                    <span className="text-xs sm:text-sm font-semibold">
                      {item.text}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <hr className="border-white/5" />

            {/* The Future of Advertising in Hyderabad */}
            <section id="future-of-advertising" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                The Future of Advertising in Hyderabad
              </h2>
              <p>
                Advertising is becoming increasingly measurable and digital-first. India&apos;s advertising market continues to rapidly shift toward digital channels, with businesses adopting social video, search, e-commerce ads, and AI-driven bidding algorithms.
              </p>
              <p>
                For Hyderabad businesses, this creates unprecedented opportunity and intensified competition. You are no longer competing only with businesses around your neighbourhood; your competitors are targeting the same customers across Google, Instagram, and YouTube.
              </p>
              <p className="font-bold text-white text-sm">
                The brands that win will not necessarily be the ones that spend the most—they will be the brands that understand their customer best and continuously optimize based on real data.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* Final Thoughts & Conclusion */}
            <section id="conclusion" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Final Thoughts: Choosing the Right Advertising Partner
              </h2>
              <p>
                Finding the best advertising agency in Hyderabad is not about finding the agency with the biggest team or the flashiest slides. It is about finding a partner that helps you answer five fundamental questions:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300 pl-4 border-l-2 border-primary">
                <li>➢ <strong>Who are we trying to reach?</strong></li>
                <li>➢ <strong>What should we say to them?</strong></li>
                <li>➢ <strong>Where should we reach them?</strong></li>
                <li>➢ <strong>What should happen after they respond?</strong></li>
                <li>➢ <strong>How will we know whether the campaign worked?</strong></li>
              </ul>
              <p>
                When those five questions are connected, advertising becomes a predictable growth engine.
              </p>

              <div className="p-8 border border-primary/30 bg-gradient-to-br from-primary/10 via-[#121216] to-green-500/5 rounded-3xl text-center space-y-6 my-8 shadow-2xl">
                <span className="px-3.5 py-1 bg-primary/20 border border-primary/30 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full inline-block">
                  Ready to Turn Advertising Into Growth?
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-white">
                  Stop Guessing Which Campaigns Will Work. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
                    Build a Predictable Pipeline Today.
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
                  Talk to G2G Media House about building a customized advertising strategy around your target audience, customer lifetime value, and revenue goals.
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
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mt-1">Paid Media & Growth Specialists</p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-normal">
                Connecting multi-platform media buying with high-converting creative and sales funnels to scale businesses in Hyderabad.
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
                <BookOpen size={14} className="text-primary" /> Authoritative References
              </h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <a
                    href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Google People-First Guidance <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://academy.hubspot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    HubSpot Paid Media Strategy <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://ahrefs.com/blog/digital-marketing-agency/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Ahrefs Agency Selection Guide <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100" />
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
