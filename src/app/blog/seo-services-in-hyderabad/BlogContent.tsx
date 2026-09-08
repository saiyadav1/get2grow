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
  BrainCircuit,
  ShieldCheck,
  UserCheck,
  Layers,
  ArrowUpRight,
  Tag
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
    "why-matter",
    "what-include",
    "keyword-research",
    "competitor-research",
    "technical-seo",
    "on-page-seo",
    "content-seo",
    "local-seo",
    "off-page-seo",
    "process",
    "local-vs-traditional",
    "cost",
    "agency-checklist",
    "timeline",
    "seo-vs-ads",
    "mistakes",
    "measurement",
    "choose-agency",
    "why-g2g",
    "seo-checklist",
    "final-thoughts",
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

  // Agency Interview Checklist Interactive State
  const [agencyChecklist, setAgencyChecklist] = useState([
    { id: "ac1", text: "What exactly is included in the monthly scope?", checked: false },
    { id: "ac2", text: "Who will work on and manage our campaign?", checked: false },
    { id: "ac3", text: "How will target keywords be selected?", checked: false },
    { id: "ac4", text: "Will technical SEO issues be addressed and fixed?", checked: false },
    { id: "ac5", text: "How is optimized content created and published?", checked: false },
    { id: "ac6", text: "What link-building and outreach methods are used?", checked: false },
    { id: "ac7", text: "How often will we receive performance reports?", checked: false },
    { id: "ac8", text: "Which KPIs and business metrics will be measured?", checked: false },
    { id: "ac9", text: "Can we retain direct access to Google Analytics & Search Console?", checked: false },
    { id: "ac10", text: "How will campaign success be defined over 30, 60, and 90 days?", checked: false }
  ]);

  const toggleAgencyChecklist = (id: string) => {
    setAgencyChecklist(
      agencyChecklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // Comprehensive SEO Checklist State
  const [seoChecklist, setSeoChecklist] = useState([
    // Website
    { id: "w1", category: "Website", text: "Website is mobile-friendly", checked: false },
    { id: "w2", category: "Website", text: "HTTPS is enabled & secure", checked: false },
    { id: "w3", category: "Website", text: "Important pages are indexable", checked: false },
    { id: "w4", category: "Website", text: "XML sitemap is submitted & accessible", checked: false },
    { id: "w5", category: "Website", text: "Broken links (404s) are fixed", checked: false },
    { id: "w6", category: "Website", text: "URLs are clean & descriptive", checked: false },
    { id: "w7", category: "Website", text: "Page titles are optimized with focus keywords", checked: false },
    { id: "w8", category: "Website", text: "Meta descriptions are compelling & unique", checked: false },
    { id: "w9", category: "Website", text: "H1-H3 heading structure is clear", checked: false },
    { id: "w10", category: "Website", text: "Images have descriptive alt text", checked: false },
    // Content
    { id: "c1", category: "Content", text: "Content matches user search intent", checked: false },
    { id: "c2", category: "Content", text: "Service pages are comprehensive & clear", checked: false },
    { id: "c3", category: "Content", text: "Blog topics answer customer questions", checked: false },
    { id: "c4", category: "Content", text: "Content demonstrates clear industry expertise", checked: false },
    { id: "c5", category: "Content", text: "Internal links connect related topic clusters", checked: false },
    { id: "c6", category: "Content", text: "Content is regularly reviewed & updated", checked: false },
    // Local SEO
    { id: "l1", category: "Local SEO", text: "Google Business Profile is verified & active", checked: false },
    { id: "l2", category: "Local SEO", text: "NAP (Name, Address, Phone) business information is accurate", checked: false },
    { id: "l3", category: "Local SEO", text: "Services are clearly categorized & listed", checked: false },
    { id: "l4", category: "Local SEO", text: "Genuine customer reviews are actively encouraged", checked: false },
    { id: "l5", category: "Local SEO", text: "Website and citation information are consistent", checked: false },
    { id: "l6", category: "Local SEO", text: "Local content supports important locations (e.g., Gachibowli, Madhapur)", checked: false },
    // Measurement
    { id: "m1", category: "Measurement", text: "Google Search Console is connected & verified", checked: false },
    { id: "m2", category: "Measurement", text: "Google Analytics 4 is properly configured", checked: false },
    { id: "m3", category: "Measurement", text: "Enquiries, calls & leads are tracked as conversions", checked: false },
    { id: "m4", category: "Measurement", text: "Organic impressions and traffic are monitored", checked: false },
    { id: "m5", category: "Measurement", text: "Search queries and CTR are reviewed regularly", checked: false },
    { id: "m6", category: "Measurement", text: "SEO performance is reported with business insights", checked: false }
  ]);

  const toggleSeoChecklistItem = (id: string) => {
    setSeoChecklist(
      seoChecklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const seoProgress = Math.round(
    (seoChecklist.filter((i) => i.checked).length / seoChecklist.length) * 100
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
    { id: "why-matter", text: "Why SEO Matters in Hyderabad" },
    { id: "what-include", text: "What SEO Services Include" },
    { id: "keyword-research", text: "1. Keyword Research" },
    { id: "competitor-research", text: "2. Competitor Research" },
    { id: "technical-seo", text: "3. Technical SEO" },
    { id: "on-page-seo", text: "4. On-Page SEO" },
    { id: "content-seo", text: "5. Content SEO" },
    { id: "local-seo", text: "6. Local SEO" },
    { id: "off-page-seo", text: "7. Off-Page & Links" },
    { id: "process", text: "How Our SEO Process Works" },
    { id: "local-vs-traditional", text: "Local vs Traditional SEO" },
    { id: "cost", text: "How Much Does SEO Cost?" },
    { id: "agency-checklist", text: "Agency Evaluation Checklist" },
    { id: "timeline", text: "SEO Timeline & Expectations" },
    { id: "seo-vs-ads", text: "SEO vs Paid Advertising" },
    { id: "mistakes", text: "Common SEO Mistakes" },
    { id: "measurement", text: "How to Measure Success" },
    { id: "choose-agency", text: "Choosing the Right Agency" },
    { id: "why-g2g", text: "Why Choose G2G Media House" },
    { id: "seo-checklist", text: "Hyderabad SEO Checklist" },
    { id: "final-thoughts", text: "Final Thoughts" },
    { id: "faq", text: "Frequently Asked Questions" }
  ];

  // FAQ Content Array
  const faqs = [
    {
      q: "How much do SEO services in Hyderabad cost?",
      a: "SEO services in Hyderabad can range from entry-level local campaigns to significantly larger enterprise strategies. Pricing depends on competition, website size, number of locations, technical complexity, content requirements and link-building needs. Instead of choosing purely by monthly price, compare the actual scope, expertise, reporting and business outcomes included in the campaign."
    },
    {
      q: "How long does SEO take to show results in Hyderabad?",
      a: "SEO timelines vary depending on competition, website authority, technical health, content quality and the keywords being targeted. Some improvements can appear relatively quickly, while meaningful organic growth usually requires consistent work over time. Businesses should avoid agencies promising guaranteed first-page or #1 rankings within a fixed number of days."
    },
    {
      q: "What do SEO services in Hyderabad include?",
      a: "Professional SEO services may include keyword research, competitor analysis, technical SEO, on-page optimization, content strategy, local SEO, internal linking, off-page SEO, link building and performance reporting. The exact scope should depend on the business's goals, industry, competition, website condition and target audience rather than using the same checklist for every client."
    },
    {
      q: "Is SEO worth it for small businesses in Hyderabad?",
      a: "SEO can be valuable for small businesses when it targets searches that have a genuine connection to their products or services. Local SEO can help businesses improve visibility for location-based searches, while useful content can capture customers earlier in their buying journey. The key is measuring qualified leads and conversions rather than traffic alone."
    },
    {
      q: "How do I choose the best SEO company in Hyderabad?",
      a: "Look for an SEO company that understands your business, explains its process clearly, provides transparent reporting and sets realistic expectations. Ask what technical, content, local and off-page work is included. You should also understand how success will be measured and retain appropriate access to your analytics and search data. Avoid agencies that guarantee rankings without explaining how they will achieve them."
    }
  ];

  // SEO Tags from PDF Page 1
  const seoTags = [
    "SEO Services Hyderabad",
    "SEO Company Hyderabad",
    "SEO Agency Hyderabad",
    "Local SEO Hyderabad",
    "SEO Marketing",
    "Search Engine Optimization",
    "Digital Marketing Hyderabad",
    "SEO Strategy",
    "Organic Traffic",
    "Lead Generation"
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
            <span className="text-gray-300">SEO Services in Hyderabad</span>
          </nav>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              SEO Strategy
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Calendar size={14} className="text-primary" /> September 8, 2026
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Clock size={14} className="text-primary" /> 14 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] max-w-5xl mb-6">
            SEO Services in Hyderabad: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 font-black">
              That Turn Search Traffic Into
            </span>{" "}
            Business Growth
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Get SEO services in Hyderabad built to increase rankings, organic traffic and qualified leads. Explore G2G’s data-driven SEO strategies today.
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
            
            {/* Featured Image */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.02)] bg-[#121216]">
              <Image
                src="/assets/blog/seo-services-in-hyderabad-featured.jpg"
                alt="SEO services in Hyderabad team analyzing search rankings and organic traffic"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <p>
                Your customers are already searching for what you sell.
              </p>
              <p>
                They may be looking for an agency, comparing service providers, researching prices, checking reviews, or searching for a solution to a problem.
              </p>
              
              <div className="p-6 border-l-4 border-primary bg-white/5 rounded-r-2xl my-6">
                <p className="font-bold text-white mb-1">The question is simple:</p>
                <p className="text-gray-300 text-lg font-semibold italic">
                  Can they find your business before they find your competitors?
                </p>
              </div>

              <p>
                If your website is buried on page two, three or beyond, you are missing potential customers every day.
              </p>
              <p>
                That is where professional <strong>SEO services in Hyderabad</strong> can make a difference.
              </p>
              <p>
                Search engine optimization is not simply about putting keywords on a webpage. A serious SEO strategy connects keyword research, technical optimization, useful content, local search, internal linking, authority building and conversion optimization.
              </p>
              <p>
                At <strong>G2G Media House</strong>, SEO is part of a broader growth approach that connects search visibility with content, websites, <Link href="/blog/digital-marketing-services" className="text-primary hover:underline font-bold">digital marketing services</Link>, paid advertising, branding and social media. Our current SEO offering includes keyword research, competitor analysis, on-page SEO, off-page SEO, link building and technical SEO.
              </p>
              <p className="font-bold text-white">
                The objective is not to chase vanity rankings. The objective is to turn search visibility into business opportunities.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* Why SEO Services Matter */}
            <section id="why-matter" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Why SEO Services Matter for Hyderabad Businesses
              </h2>
              <p>
                Hyderabad is home to startups, technology companies, professional services, healthcare businesses, real estate companies, restaurants, retailers, e-commerce brands and established enterprises.
              </p>
              <p>
                That creates a competitive digital marketplace.
              </p>
              <p>
                Imagine two companies offering similar services:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400 block mb-2">Company A</span>
                  <p className="text-gray-400 text-sm">
                    Has a website, but nobody can easily find it through Google when searching for their core services.
                  </p>
                </div>
                <div className="p-5 border border-primary/20 bg-primary/5 rounded-2xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Company B</span>
                  <p className="text-gray-300 text-sm">
                    Has a well-structured website targeting searches its customers actually use, answers vital questions, maintains a healthy technical base, and dominates local search.
                  </p>
                </div>
              </div>
              <p>
                When a potential customer searches, Company B has a better opportunity to enter the conversation. That is the real value of SEO.
              </p>
              <p>
                Google&apos;s guidance emphasizes creating helpful, reliable, people-first content rather than content designed primarily to manipulate search rankings. For businesses, this means your SEO strategy should begin with the customer—not with a list of keywords.
              </p>
              
              <div className="p-6 border border-white/10 bg-[#121216]/60 rounded-2xl flex items-start gap-4">
                <Sparkles className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold text-white mb-1">Pro Tip:</p>
                  <p className="text-gray-400 text-sm">
                    Don&apos;t ask only, &quot;What keyword should we rank for?&quot; Ask, <strong>&quot;What is a potential customer trying to accomplish when they search this?&quot;</strong> That small change can completely improve your SEO strategy.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* What Do SEO Services Include */}
            <section id="what-include" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Do SEO Services in Hyderabad Include?
              </h2>
              <p>
                Professional SEO is a system rather than one isolated task. Depending on the business, a campaign may include the following core components:
              </p>
            </section>

            {/* 1. Keyword Research */}
            <section id="keyword-research" className="scroll-mt-28 space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">1.</span> Keyword Research
              </h3>
              <p>
                Keyword research identifies the words and phrases your potential customers use in search engines. But effective research goes deeper than finding high-volume keywords.
              </p>
              <p className="font-bold text-white">You need to understand:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 pl-4">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Search intent
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Competition
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Commercial value
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Location context
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Customer problems
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Buying stage
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Existing rankings
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Keyword relevance
                </li>
              </ul>
              <div className="p-4 border border-white/5 bg-[#121216]/40 rounded-xl space-y-2 text-sm">
                <p>For example, someone searching for:</p>
                <p className="text-gray-400 italic pl-2"><em>&quot;what is SEO&quot;</em> — is probably researching and learning.</p>
                <p>Someone searching for:</p>
                <p className="text-primary font-bold pl-2"><em>&quot;SEO services in Hyderabad&quot;</em> — is much closer to finding a service provider.</p>
              </div>
              <p>
                That difference matters. The best keyword strategy builds a path from informational searches to commercial and transactional searches.
              </p>

              {/* Image 2 Placement: Immediately after Keyword Research */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-8 bg-[#121216]">
                <Image
                  src="/assets/blog/seo-keyword-research-competitor-analysis-hyderabad.jpg"
                  alt="SEO keyword research and competitor analysis for Hyderabad businesses"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* 2. Competitor Research */}
            <section id="competitor-research" className="scroll-mt-28 space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">2.</span> Competitor Research
              </h3>
              <p>
                Your competitors already provide clues about what works in your market. A strong SEO competitor analysis examines:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 pl-4">
                <li className="flex items-center gap-2">• Ranking keywords</li>
                <li className="flex items-center gap-2">• Content topics</li>
                <li className="flex items-center gap-2">• Service pages</li>
                <li className="flex items-center gap-2">• Backlinks profile</li>
                <li className="flex items-center gap-2">• Internal links</li>
                <li className="flex items-center gap-2">• Page structure</li>
                <li className="flex items-center gap-2">• Local SEO signals</li>
                <li className="flex items-center gap-2">• Search intent</li>
                <li className="flex items-center gap-2">• Content gaps</li>
                <li className="flex items-center gap-2">• SERP features</li>
              </ul>
              <p>
                Current Hyderabad SEO competitors are targeting combinations such as SEO company Hyderabad, local SEO, technical SEO, AI search optimization, SEO packages and industry-specific SEO.
              </p>
              <div className="p-4 border-l-2 border-primary bg-white/5 rounded-r-xl text-sm">
                <strong>Key Takeaway:</strong> Ranking for &quot;SEO services in Hyderabad&quot; requires more than repeating the exact keyword. Your page needs to demonstrate broader topical relevance and stronger usefulness.
              </div>
            </section>

            {/* 3. Technical SEO */}
            <section id="technical-seo" className="scroll-mt-28 space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">3.</span> Technical SEO
              </h3>
              <p>
                You can have excellent content and still struggle if search engines cannot properly crawl, understand or index your website.
              </p>
              <p className="font-bold text-white">Technical SEO can include:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 pl-4">
                <li className="flex items-center gap-2">• Crawlability</li>
                <li className="flex items-center gap-2">• Indexation</li>
                <li className="flex items-center gap-2">• XML sitemaps</li>
                <li className="flex items-center gap-2">• Canonical URLs</li>
                <li className="flex items-center gap-2">• Site architecture</li>
                <li className="flex items-center gap-2">• Mobile usability</li>
                <li className="flex items-center gap-2">• Page performance</li>
                <li className="flex items-center gap-2">• Broken links & 404s</li>
                <li className="flex items-center gap-2">• 301 Redirects</li>
                <li className="flex items-center gap-2">• Structured data (Schema)</li>
                <li className="flex items-center gap-2">• HTTPS & Security</li>
                <li className="flex items-center gap-2">• Duplicate content</li>
                <li className="flex items-center gap-2">• JavaScript rendering</li>
              </ul>
              <p>
                According to the <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google SEO Starter Guide</a>, search engines prioritize websites that are accessible, maintain a secure, fast, and usable experience across all devices.
              </p>
              <p>
                Think of technical SEO as the foundation. If the foundation is weak, everything built above it becomes harder to scale.
              </p>

              {/* Image 3 Placement: After Technical SEO */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-8 bg-[#121216]">
                <Image
                  src="/assets/blog/technical-seo-specialist-website-performance.jpg"
                  alt="Technical SEO specialist optimizing website performance and search visibility"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* 4. On-Page SEO */}
            <section id="on-page-seo" className="scroll-mt-28 space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">4.</span> On-Page SEO
              </h3>
              <p>
                On-page SEO improves the elements users and search engines see on your website. This includes:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 pl-4">
                <li>• Page titles</li>
                <li>• H1 and H2 headings</li>
                <li>• Meta descriptions</li>
                <li>• URLs</li>
                <li>• Content</li>
                <li>• Internal links</li>
                <li>• Image alt text</li>
                <li>• Content structure</li>
                <li>• Search intent alignment</li>
                <li>• Calls to action</li>
              </ul>
              <p>
                Google recommends descriptive titles, useful URLs, relevant links and descriptive image alt text as part of making content easier for users and search engines to understand. But good on-page SEO should never make your website sound unnatural.
              </p>
              
              <div className="space-y-3 my-6">
                <div className="p-4 border border-red-500/20 bg-red-500/5 rounded-xl">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">Bad (Written for an algorithm):</p>
                  <p className="text-gray-400 text-sm italic">
                    &quot;SEO services in Hyderabad are the best SEO services in Hyderabad for businesses needing SEO services in Hyderabad.&quot;
                  </p>
                </div>
                <div className="p-4 border border-green-500/20 bg-green-500/5 rounded-xl">
                  <p className="text-xs font-bold uppercase tracking-wider text-green-400 mb-1">Better (Written for a person):</p>
                  <p className="text-gray-300 text-sm font-medium">
                    &quot;If your Hyderabad business depends on local customers, a focused SEO strategy can help you become more visible when those customers search for your services.&quot;
                  </p>
                </div>
              </div>
              <p>Always choose the second approach.</p>
            </section>

            {/* 5. Content SEO */}
            <section id="content-seo" className="scroll-mt-28 space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">5.</span> Content SEO
              </h3>
              <p>
                Content is one of the strongest ways to build topical relevance. But publishing 50 generic articles will not automatically create authority. Your content should answer real customer questions, such as:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 pl-4">
                <li>• What is SEO?</li>
                <li>• How much does SEO cost?</li>
                <li>• How long does SEO take?</li>
                <li>• Is SEO better than Google Ads?</li>
                <li>• How can a local business rank on Google?</li>
                <li>• How do Google Maps rankings work?</li>
                <li>• What should an SEO agency report every month?</li>
                <li>• How should businesses choose an SEO company?</li>
              </ul>
              <p>
                Useful content can attract people before they are ready to buy. Then, when they need professional help, your brand is already familiar. Google specifically advises publishers to create substantial, original and satisfying content that provides value beyond what users can find elsewhere.
              </p>
            </section>

            {/* 6. Local SEO */}
            <section id="local-seo" className="scroll-mt-28 space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">6.</span> Local SEO
              </h3>
              <p>
                If your business serves customers in Hyderabad, local SEO deserves special attention. Local SEO helps businesses become more visible for searches connected to a specific location.
              </p>
              <p className="font-bold text-white">Examples of high-intent local queries:</p>
              <div className="flex flex-wrap gap-2 my-3">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">SEO agency near me</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">SEO company Hyderabad</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">digital marketing agency Hyderabad</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">SEO services in Gachibowli</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">SEO services in Madhapur</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">marketing agency near me</span>
              </div>
              <p>
                According to <a href="https://support.google.com/business/answer/7091" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google&apos;s local ranking guidance</a>, local rankings are primarily influenced by <strong>relevance, distance, and prominence</strong>. Complete business information helps Google understand relevance, while customer reviews and local links contribute to prominence.
              </p>
              <p>
                For in-depth local tactics, read our dedicated guide on <Link href="/blog/local-seo-for-small-business" className="text-primary hover:underline font-bold">local SEO for small businesses</Link>.
              </p>
              <p className="font-bold text-white">Local SEO involves:</p>
              <ul className="space-y-1.5 text-sm text-gray-400 pl-4">
                <li>• Google Business Profile optimization</li>
                <li>• Accurate business information (NAP)</li>
                <li>• Local landing pages</li>
                <li>• Location-relevant content</li>
                <li>• Genuine customer reviews</li>
                <li>• Local citations & directory consistency</li>
                <li>• Relevant local links</li>
              </ul>
              <p className="text-sm italic text-gray-400">
                The important word is <strong>genuine</strong>. Don&apos;t create fake locations or fake reviews just to manipulate local rankings. That damages trust and causes long-term penalties.
              </p>

              {/* Image 4 Placement: After Local SEO */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-8 bg-[#121216]">
                <Image
                  src="/assets/blog/local-seo-strategy-hyderabad-visibility.jpg"
                  alt="Local SEO strategy improving Hyderabad business visibility in local search"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* 7. Off-Page SEO and Link Building */}
            <section id="off-page-seo" className="scroll-mt-28 space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">7.</span> Off-Page SEO and Link Building
              </h3>
              <p>
                Search engines use links and other signals to understand relationships between websites. But modern link building should not mean buying random backlinks or creating hundreds of low-quality directory links.
              </p>
              <p className="font-bold text-white">A better approach is to earn relevant mentions and links through:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 pl-4">
                <li>• Useful resources</li>
                <li>• Original research & studies</li>
                <li>• Digital PR</li>
                <li>• Industry publications</li>
                <li>• Business partnerships</li>
                <li>• Expert contributions</li>
                <li>• High-quality content</li>
                <li>• Relevant business directories</li>
              </ul>
              <p>
                Google&apos;s documentation notes that links help users and search engines discover pages and understand context. The goal isn&apos;t <em>&quot;How many backlinks can we build?&quot;</em> The better question is: <strong>&quot;Which relevant websites would have a genuine reason to reference our business?&quot;</strong>
              </p>
            </section>

            <hr className="border-white/5" />

            {/* How Our SEO Process Works */}
            <section id="process" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How Our SEO Process Works
              </h2>
              <p>
                A good SEO campaign should follow a transparent, repeatable framework:
              </p>

              <div className="space-y-6 pl-2">
                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-black font-black text-xs flex items-center justify-center">1</span>
                    Step 1: Understand Your Business
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">Before changing your website, understand:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-400 pl-4">
                    <li>• What you sell</li>
                    <li>• Who buys it</li>
                    <li>• Where customers are located</li>
                    <li>• Your strongest offers</li>
                    <li>• Your margins</li>
                    <li>• Your competitors</li>
                    <li>• Your business goals</li>
                  </ul>
                  <p className="text-xs text-primary font-semibold mt-3">SEO should support the business—not exist separately from it.</p>
                </div>

                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-black font-black text-xs flex items-center justify-center">2</span>
                    Step 2: Audit the Website
                  </h4>
                  <p className="text-gray-400 text-sm">
                    The initial audit looks for opportunities and problems across technical issues, content gaps, keyword opportunities, internal linking, website structure, local SEO, and competitor positioning.
                  </p>
                </div>

                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-black font-black text-xs flex items-center justify-center">3</span>
                    Step 3: Build the Keyword Strategy
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">
                    Instead of chasing hundreds of unrelated keywords, prioritize terms based on:
                  </p>
                  <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-primary text-xs font-bold tracking-wider">
                    Relevance + Intent + Competition + Business Value
                  </div>
                </div>

                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-black font-black text-xs flex items-center justify-center">4</span>
                    Step 4: Optimize Existing Pages
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Sometimes the fastest opportunity is already sitting on your website. A page ranking at position 11 may need better search intent alignment, stronger content, improved internal links or technical improvements. Don&apos;t always create another page—sometimes improve the page you already have.
                  </p>
                </div>

                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-black font-black text-xs flex items-center justify-center">5</span>
                    Step 5: Build Supporting Content
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">
                    Create helpful articles that support your main service pages to establish topical depth:
                  </p>
                  <ul className="text-xs text-gray-400 space-y-1 pl-4">
                    <li>• Main page: <strong>SEO Services in Hyderabad</strong></li>
                    <li>• Supporting: <em>How Much Does SEO Cost in Hyderabad?</em></li>
                    <li>• Supporting: <em>Local SEO Guide for Hyderabad Businesses</em></li>
                    <li>• Supporting: <em>SEO vs Google Ads</em></li>
                    <li>• Supporting: <em>How Long Does SEO Take?</em></li>
                    <li>• Supporting: <em>How to Choose an SEO Company</em></li>
                    <li>• Supporting: <em>Technical SEO Checklist</em></li>
                    <li>• Supporting: <em>Keyword Research Guide</em></li>
                  </ul>
                </div>

                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-black font-black text-xs flex items-center justify-center">6</span>
                    Step 6: Build Authority
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Earn relevant links, mentions and references while strengthening the overall brand reputation of the website across authoritative digital channels.
                  </p>
                </div>

                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-black font-black text-xs flex items-center justify-center">7</span>
                    Step 7: Measure and Improve
                  </h4>
                  <p className="text-gray-400 text-sm">
                    SEO should never become a &quot;set it and forget it&quot; service. Google Search Console provides data on clicks, impressions, CTR, average position and the queries bringing visitors to your website. Those insights help identify what deserves more attention.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Local SEO vs Traditional SEO Comparison */}
            <section id="local-vs-traditional" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Local SEO vs Traditional SEO
              </h2>
              <p>
                Most Hyderabad businesses don&apos;t need to choose one exclusively. A strong strategy combines both:
              </p>

              <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#121216]/60">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-4 font-bold uppercase tracking-wider text-white">Feature</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-gray-300">Traditional SEO</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-primary">Local SEO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-400">
                    <tr>
                      <td className="p-4 font-semibold text-white">Main goal</td>
                      <td className="p-4">Organic visibility</td>
                      <td className="p-4 text-gray-200">Local visibility</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Target</td>
                      <td className="p-4">National / global audience</td>
                      <td className="p-4 text-gray-200">Specific locations & cities</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Google Maps</td>
                      <td className="p-4">Usually secondary</td>
                      <td className="p-4 text-primary font-semibold">Major focus (Map Pack)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Local keywords</td>
                      <td className="p-4">Optional</td>
                      <td className="p-4 text-primary font-semibold">Important</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Google Business Profile</td>
                      <td className="p-4">Not central</td>
                      <td className="p-4 text-primary font-semibold">Essential</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Local reviews</td>
                      <td className="p-4">Helpful</td>
                      <td className="p-4 text-primary font-semibold">Important ranking signal</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Location pages</td>
                      <td className="p-4">Sometimes</td>
                      <td className="p-4 text-gray-200">Often highly valuable</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Example query</td>
                      <td className="p-4 italic">&quot;SEO tools&quot;</td>
                      <td className="p-4 italic font-semibold text-white">&quot;SEO services Hyderabad&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* How Much Do SEO Services Cost? */}
            <section id="cost" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How Much Do SEO Services in Hyderabad Cost?
              </h2>
              <p>
                There is no single SEO price that fits every business. Current publicly listed Hyderabad SEO packages vary considerably. Some providers advertise plans below ₹15,000 per month, while others publish packages around <strong>₹20,000–₹50,000+</strong> depending on scope and competition.
              </p>
              <p className="font-bold text-white">Pricing depends on:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 pl-4">
                <li>• Website size & structure</li>
                <li>• Industry & niche competition</li>
                <li>• Number of target locations</li>
                <li>• Number of pages to optimize</li>
                <li>• Content creation requirements</li>
                <li>• Technical complexity</li>
                <li>• Link-building requirements</li>
                <li>• E-commerce scale</li>
                <li>• Reporting depth</li>
                <li>• Target business goals</li>
              </ul>
              <p>
                For example, a small local clinic with ten pages has very different SEO requirements from an e-commerce store with 5,000 products.
              </p>

              <div className="p-6 border-l-4 border-primary bg-white/5 rounded-r-2xl my-6">
                <p className="font-bold text-white mb-1">Don&apos;t Choose SEO Based on Price Alone:</p>
                <p className="text-gray-300 italic text-sm">
                  A ₹10,000 campaign that does little may be far more expensive in wasted capital than a ₹25,000 campaign that consistently produces qualified leads and sales.
                </p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Agency Evaluation Checklist */}
            <section id="agency-checklist" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                SEO Agency Checklist: Questions to Ask
              </h2>
              <p>
                Before signing an agreement with an SEO agency in Hyderabad, ask these crucial questions:
              </p>

              <div className="space-y-3 bg-[#121216]/60 border border-white/5 p-6 rounded-2xl">
                {agencyChecklist.map((item) => (
                  <label
                    key={item.id}
                    onClick={() => toggleAgencyChecklist(item.id)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        item.checked
                          ? "bg-primary border-primary text-black"
                          : "border-white/20 bg-black/40"
                      }`}
                    >
                      {item.checked && <Check size={14} className="stroke-[3]" />}
                    </div>
                    <span className={`text-sm ${item.checked ? "line-through text-gray-500" : "text-gray-300"}`}>
                      {item.text}
                    </span>
                  </label>
                ))}
              </div>
              <p className="text-xs text-gray-500 italic">
                A transparent, high-performing agency should be comfortable answering all of these questions with clear clarity.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* SEO Timeline & Expectations */}
            <section id="timeline" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How Long Does SEO Take to Show Results?
              </h2>
              <p>
                This is one of the most common questions—and one of the easiest to answer badly. There is no universal SEO timeline.
              </p>
              <p>
                A new website competing in a difficult market may take substantially longer than an established website with strong authority and solid technical foundations.
              </p>
              <p className="font-bold text-white">Key timeline factors include:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 pl-4">
                <li>• Existing domain authority</li>
                <li>• Competitor aggressiveness</li>
                <li>• Search intent complexity</li>
                <li>• Content quality & depth</li>
                <li>• Technical health & speed</li>
                <li>• Backlink profile</li>
                <li>• Website age & history</li>
                <li>• Publishing consistency</li>
              </ul>
              
              <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl flex items-start gap-3">
                <AlertCircle className="text-red-400 shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold text-white text-sm">Beware of False Promises:</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Be cautious of anyone promising <strong>&quot;Guaranteed #1 rankings in 30 days.&quot;</strong> Google itself does not provide a secret formula or guarantee that a particular page will rank first. Good SEO is an iterative process of testing, learning and continuous improvement.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* SEO vs Paid Advertising */}
            <section id="seo-vs-ads" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                SEO vs Paid Advertising: Which Is Better?
              </h2>
              <p>
                It depends on your business goals and growth horizon:
              </p>

              <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#121216]/60">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-4 font-bold uppercase tracking-wider text-primary">SEO</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-gray-300">Paid Advertising</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-400">
                    <tr>
                      <td className="p-4 font-semibold text-white">Builds long-term organic visibility</td>
                      <td className="p-4">Buys immediate visibility</td>
                    </tr>
                    <tr>
                      <td className="p-4">Usually slower to compound</td>
                      <td className="p-4 text-gray-200">Can generate traffic quickly</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Builds lasting content assets</td>
                      <td className="p-4">Depends continuously on ad spend</td>
                    </tr>
                    <tr>
                      <td className="p-4">Long-term acquisition strategy</td>
                      <td className="p-4 text-gray-200">Short-to-medium-term customer acquisition</td>
                    </tr>
                    <tr>
                      <td className="p-4">Captures broad informational searches</td>
                      <td className="p-4 text-gray-200">Strong for commercial & transactional campaigns</td>
                    </tr>
                    <tr>
                      <td className="p-4">Requires ongoing optimization</td>
                      <td className="p-4 text-gray-200">Requires ongoing media budget</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-6 border border-white/10 bg-[#121216]/60 rounded-2xl">
                <p className="font-bold text-white mb-2">The Hybrid Solution: SEO + Paid Ads</p>
                <p className="text-gray-400 text-sm">
                  For many businesses, the answer isn&apos;t SEO or ads. It is <strong>SEO + paid advertising</strong>. Paid ads generate immediate demand while SEO builds a compound, low-cost organic acquisition channel over time.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  G2G Media House combines SEO with paid advertising, content, branding, social media and high-converting website design so businesses can build a resilient digital growth engine.
                </p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Common SEO Mistakes */}
            <section id="mistakes" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Common SEO Mistakes Businesses Should Avoid
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">Mistake 1: Targeting Only High-Volume Keywords</h4>
                  <p className="text-xs text-gray-400">A keyword can have thousands of searches and still produce zero paying clients. Always prioritize commercial relevance and buyer intent over vanity search numbers.</p>
                </div>

                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">Mistake 2: Keyword Stuffing</h4>
                  <p className="text-xs text-gray-400">Repeating &quot;SEO services in Hyderabad&quot; every few sentences degrades user experience and triggers search penalties. Write naturally for human beings.</p>
                </div>

                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">Mistake 3: Buying Cheap Backlinks</h4>
                  <p className="text-xs text-gray-400">Large numbers of spammy, irrelevant backlinks from low-quality link networks create severe algorithmic penalty risks rather than sustainable value.</p>
                </div>

                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">Mistake 4: Ignoring Technical SEO</h4>
                  <p className="text-xs text-gray-400">Great content cannot compensate for serious crawling, indexing, mobile responsiveness, or Core Web Vitals speed problems.</p>
                </div>

                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">Mistake 5: Publishing Generic AI Content</h4>
                  <p className="text-xs text-gray-400">Google&apos;s people-first guidance emphasizes originality, real expertise, and substantial value. Use technology as an assisting tool—not as a substitute for real subject matter expertise.</p>
                </div>

                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">Mistake 6: Measuring Only Rankings</h4>
                  <p className="text-xs text-gray-400">A ranking is not a sale. Track organic clicks, qualified leads, calls, enquiries, conversion rates, and revenue.</p>
                </div>

                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">Mistake 7: Expecting Immediate Results</h4>
                  <p className="text-xs text-gray-400">SEO is an investment. Treat it like building a compounding asset rather than buying a temporary traffic spike.</p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* How to Measure SEO Success */}
            <section id="measurement" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How to Measure SEO Success
              </h2>
              <p>
                A professional SEO campaign connects search performance to actual business revenue:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1.5">
                    <TrendingUp size={14} /> SEO Search Metrics
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-400">
                    <li>• Organic impressions</li>
                    <li>• Organic clicks</li>
                    <li>• Click-Through Rate (CTR)</li>
                    <li>• Average SERP position</li>
                    <li>• Ranking keywords growth</li>
                    <li>• Indexed pages health</li>
                    <li>• Organic traffic volume</li>
                    <li>• Backlinks & domain authority</li>
                    <li>• Referral traffic</li>
                  </ul>
                </div>

                <div className="p-5 border border-primary/20 bg-primary/5 rounded-2xl space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-1.5">
                    <Check size={14} className="text-primary" /> Real Business Metrics
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    <li>• Qualified inbound leads</li>
                    <li>• Direct phone calls</li>
                    <li>• Contact form submissions</li>
                    <li>• Consultation bookings</li>
                    <li>• Online sales & transactions</li>
                    <li>• Customer acquisition cost (CAC)</li>
                    <li>• Overall organic revenue</li>
                    <li>• High lead conversion quality</li>
                  </ul>
                </div>
              </div>

              <p>
                Leverage <a href="https://support.google.com/webmasters/answer/75765" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google Search Console performance data</a> to analyze queries, landing pages, CTR, and positions.
              </p>
              
              <div className="p-5 border-l-4 border-primary bg-white/5 rounded-r-2xl text-sm">
                <strong>Key Takeaway:</strong> The best SEO report isn&apos;t the one with the most keywords. It is the one that clearly explains <em>what changed, why it changed, what the business gained, and what happens next</em>.
              </div>

              {/* Image 5 Placement: After Measure SEO Success, before CTA */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-8 bg-[#121216]">
                <Image
                  src="/assets/blog/seo-reporting-organic-traffic-rankings-leads.jpg"
                  alt="SEO reporting showing organic traffic keyword rankings and lead growth"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Choosing the Right SEO Company */}
            <section id="choose-agency" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How to Choose the Right SEO Company in Hyderabad
              </h2>
              <p>
                Choosing an SEO agency is a strategic business decision. Don&apos;t choose solely because someone claims to be &quot;#1.&quot; Instead, look for:
              </p>

              <div className="space-y-4">
                <div className="p-4 border border-white/5 bg-[#121216]/40 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">1. A Clear Process</h4>
                  <p className="text-xs text-gray-400">The agency should be able to explain what happens during the first 30, 60, and 90 days of engagement.</p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/40 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">2. Business Understanding</h4>
                  <p className="text-xs text-gray-400">They should actively ask about your ideal customers, margins, offers, and commercial targets—not just search keywords.</p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/40 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">3. Transparent Reporting</h4>
                  <p className="text-xs text-gray-400">You should always know exactly what work was completed, which pages were optimized, and what backlinks were created.</p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/40 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">4. Realistic Expectations</h4>
                  <p className="text-xs text-gray-400">Reliable partners explain uncertainty and timelines rather than promising miraculous overnight rankings.</p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/40 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">5. Relevant Expertise</h4>
                  <p className="text-xs text-gray-400">Look for demonstrated case studies and experience in your sector or local market.</p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/40 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">6. Conversion Thinking</h4>
                  <p className="text-xs text-gray-400">
                    Traffic is useful only when it converts. An agency should evaluate your website UI and recommend a top <Link href="/blog/website-design-company-hyderabad" className="text-primary hover:underline font-bold">website design company in Hyderabad</Link> approach for conversion optimization.
                  </p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/40 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">7. Integrated Marketing</h4>
                  <p className="text-xs text-gray-400">
                    SEO compounds significantly when paired with the <Link href="/blog/best-digital-marketing-agency-hyderabad" className="text-primary hover:underline font-bold">best digital marketing agency in Hyderabad</Link> services, paid campaigns, branding, and content.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Why Choose G2G Media House */}
            <section id="why-g2g" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Why Choose G2G Media House?
              </h2>
              <p>
                G2G Media House approaches SEO as part of a broader growth system. Our current SEO offerings feature three scalable tiers:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                <div className="p-5 border border-white/10 bg-[#121216]/60 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-black uppercase text-white mb-1">G2G Starter</h4>
                    <p className="text-xs text-primary font-semibold mb-3">Startups & Personal Brands</p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Keyword research, competitor analysis, essential on-page SEO, and monthly transparent reporting.
                    </p>
                  </div>
                </div>

                <div className="p-5 border border-primary/40 bg-primary/5 rounded-2xl flex flex-col justify-between relative shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                  <span className="absolute -top-2.5 right-4 px-2 py-0.5 bg-primary text-black text-[9px] font-black uppercase tracking-wider rounded-full">
                    Popular
                  </span>
                  <div>
                    <h4 className="text-base font-black uppercase text-white mb-1">G2G Growth</h4>
                    <p className="text-xs text-primary font-semibold mb-3">Scaling Businesses</p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Adds comprehensive off-page SEO, high-authority link building, and in-depth technical SEO.
                    </p>
                  </div>
                </div>

                <div className="p-5 border border-white/10 bg-[#121216]/60 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-black uppercase text-white mb-1">G2G Authority</h4>
                    <p className="text-xs text-primary font-semibold mb-3">High-Growth Brands</p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Full enterprise SEO management, advanced content hubs, digital PR, and technical performance optimization.
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-bold text-white">
                SEO should never operate in a vacuum. A modern customer journey often looks like this:
              </p>
              <ol className="space-y-2 text-xs sm:text-sm text-gray-400 list-decimal pl-5">
                <li>Discover your brand through a Google search.</li>
                <li>Read authoritative guides on your website.</li>
                <li>Check your social media presence and social proof.</li>
                <li>See targeted remarketing advertising.</li>
                <li>Compare competitors and customer reviews.</li>
                <li>Return to your website with strong buyer intent.</li>
                <li>Submit a qualified enquiry or make a booking.</li>
              </ol>
              <p className="text-xs text-gray-400 italic">
                That is why SEO works best when your entire digital presence supports the same customer journey.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* SEO Checklist for Hyderabad Businesses */}
            <section id="seo-checklist" className="scroll-mt-28 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                    SEO Checklist for Hyderabad Businesses
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">
                    Use this interactive checklist before launching or auditing your SEO campaign.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {seoProgress}% Completed
                  </span>
                  <div className="w-32 h-2 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${seoProgress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Grouped Checklist */}
              {["Website", "Content", "Local SEO", "Measurement"].map((category) => (
                <div key={category} className="border border-white/5 rounded-2xl bg-[#121216]/60 p-5 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                    <Layers size={14} /> {category} Checklist
                  </h3>
                  <div className="space-y-2">
                    {seoChecklist
                      .filter((i) => i.category === category)
                      .map((item) => (
                        <label
                          key={item.id}
                          onClick={() => toggleSeoChecklistItem(item.id)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
                        >
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                              item.checked
                                ? "bg-primary border-primary text-black"
                                : "border-white/20 bg-black/40"
                            }`}
                          >
                            {item.checked && <Check size={12} className="stroke-[3]" />}
                          </div>
                          <span className={`text-xs ${item.checked ? "line-through text-gray-500" : "text-gray-300"}`}>
                            {item.text}
                          </span>
                        </label>
                      ))}
                  </div>
                </div>
              ))}
            </section>

            <hr className="border-white/5" />

            {/* Final Thoughts & CTA */}
            <section id="final-thoughts" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Final Thoughts
              </h2>
              <p>
                The best SEO services in Hyderabad aren&apos;t about chasing rankings for the sake of rankings. They&apos;re about building a digital asset that helps your business become easier to discover, easier to understand and easier to trust.
              </p>
              <ul className="space-y-2 text-sm text-gray-400 pl-4">
                <li className="flex items-start gap-2">• That means finding the right high-intent searches.</li>
                <li className="flex items-start gap-2">• Creating genuinely useful, people-first content.</li>
                <li className="flex items-start gap-2">• Fixing technical, indexing, and performance problems.</li>
                <li className="flex items-start gap-2">• Improving key conversion and service pages.</li>
                <li className="flex items-start gap-2">• Building relevant industry authority and backlinks.</li>
                <li className="flex items-start gap-2">• Strengthening local visibility across Google Maps.</li>
                <li className="flex items-start gap-2">• And measuring whether all that work is creating real business results.</li>
              </ul>
              <p>
                SEO takes patience, but done properly, it can become one of the most valuable long-term acquisition channels for a growing business.
              </p>
              <div className="p-4 border-l-2 border-primary bg-white/5 rounded-r-xl text-sm font-semibold text-white">
                If your competitors are appearing when your customers search, the opportunity isn&apos;t to copy them. It&apos;s to build something better.
              </div>

              {/* End-of-Article CTA */}
              <div className="p-8 border border-primary/20 bg-gradient-to-br from-primary/10 to-green-500/5 rounded-3xl text-center space-y-6 my-8">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white">
                  Ready to Turn Google Searches Into Qualified Leads?
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
                  Talk to G2G Media House about a customized SEO strategy built around your business, customers and growth goals. More visibility. More qualified traffic. More opportunities to grow.
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

            {/* Frequently Asked Questions */}
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

          {/* Right Column: Social Share, Author & Resource Panel */}
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
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mt-1">SEO Specialists</p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-normal">
                Helping businesses in Hyderabad and beyond dominate organic search results and generate sustainable qualified inbound leads.
              </p>
            </div>

            {/* SEO Tags Badge Cloud */}
            <div className="border border-white/5 rounded-2xl bg-[#121216]/60 p-6 backdrop-blur-md space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <Tag size={14} className="text-primary" /> SEO Focus Tags
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

            {/* External Resource Recommendations */}
            <div className="border border-white/5 rounded-2xl bg-[#121216]/60 p-6 backdrop-blur-md space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <BookOpen size={14} className="text-primary" /> Authoritative Resources
              </h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <a
                    href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Google Search Central SEO Starter Guide <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.google.com/business/answer/7091"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Google Local Ranking Guidance <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.google.com/webmasters/answer/75765"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Google Search Console Performance Report <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-opacity" />
                  </a>
                </li>
                <li>
                  <Link
                    href="/blog/local-seo-for-small-business"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Local SEO for Small Business Guide <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/website-design-company-hyderabad"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Website Design Company Hyderabad <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-opacity" />
                  </Link>
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
