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
  Target,
  FileText,
  AlertCircle,
  TrendingUp,
  BrainCircuit,
  ShieldCheck,
  UserCheck,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

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
    "matters",
    "do",
    "services",
    "benefits",
    "why-hyderabad",
    "comparison",
    "signs",
    "choose",
    "checklist",
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
    { id: "c1", text: "Define clear marketing objectives and budget", checked: false },
    { id: "c2", text: "Verify portfolio items and local case studies", checked: false },
    { id: "c3", text: "Confirm industry-specific expertise", checked: false },
    { id: "c4", text: "Ask about marketing tools, reporting, and metrics", checked: false },
    { id: "c5", text: "Confirm communication channels and account manager role", checked: false },
    { id: "c6", text: "Verify agency contract terms and pricing transparency", checked: false },
    { id: "c7", text: "Request a custom proposal with deliverables", checked: false },
    { id: "c8", text: "Evaluate alignment of long-term business goals", checked: false }
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
    { id: "matters", text: "Why Digital Marketing Matters" },
    { id: "do", text: "What Does an Agency Do?" },
    { id: "services", text: "Core Services You Should Expect" },
    { id: "benefits", text: "Benefits of a Professional Agency" },
    { id: "why-hyderabad", text: "Why Hyderabad Businesses Need It" },
    { id: "comparison", text: "Comparison: In-House vs Agency" },
    { id: "signs", text: "Signs You're Ready" },
    { id: "choose", text: "How to Choose an Agency" },
    { id: "checklist", text: "Agency Selection Checklist" },
    { id: "faq", text: "Frequently Asked Questions" }
  ];

  // FAQ Content Array
  const faqs = [
    {
      q: "Which is the best digital marketing agency in Hyderabad?",
      a: "The best digital marketing agency in Hyderabad is one that understands your business goals, offers customized strategies, provides transparent reporting, and has a proven record of delivering measurable results through SEO, PPC, social media marketing, content creation, and performance-driven campaigns."
    },
    {
      q: "What services does a digital marketing agency provide?",
      a: "A full-service digital marketing agency typically offers SEO, local SEO, Google Ads management, social media marketing, content marketing, email marketing, website development, branding, analytics, and conversion rate optimization. The exact services should align with your business objectives and target audience."
    },
    {
      q: "How much does digital marketing cost in Hyderabad?",
      a: "The cost depends on factors such as the services you require, your business size, campaign complexity, competition, and advertising budget. Rather than choosing the lowest price, evaluate agencies based on expertise, strategy, transparency, and the value they deliver."
    },
    {
      q: "How long does SEO take to show results?",
      a: "SEO is a long-term strategy. Many businesses begin noticing improvements within a few months, while competitive industries may require additional time. Consistent optimization, quality content, and ethical SEO practices contribute to sustainable growth over the long term."
    },
    {
      q: "Is hiring a digital marketing agency worth it?",
      a: "For many businesses, yes. An experienced agency brings specialized expertise, access to advanced tools, and a strategic approach that can improve online visibility, generate qualified leads, and help achieve better returns on marketing investment than trial-and-error efforts alone."
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
            <span className="text-gray-300">Best Digital Marketing Agency Hyderabad</span>
          </nav>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              Strategy
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Calendar size={14} className="text-primary" /> August 12, 2026
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Clock size={14} className="text-primary" /> 12 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] max-w-5xl mb-6">
            Best Digital Marketing Agency Hyderabad: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 font-black">How to Choose</span> the Right Partner
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Looking for the best digital marketing agency Hyderabad? Discover expert SEO, PPC, social media, branding and lead generation services that grow your business.
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
                      className={`text-left text-xs font-bold uppercase tracking-wider transition-all block w-full border-l-2 pl-4 py-1 hover:text-white ${
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
          <article className="lg:col-span-6 text-gray-300 leading-relaxed text-sm sm:text-base font-medium space-y-12">
            
            {/* Featured Image */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
              <Image
                src="/assets/blog/hyderabad-digital-marketing-strategy.png"
                alt="Digital marketing strategy helping Hyderabad businesses grow online."
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#1</span> Introduction
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Imagine launching a great product or service, only to realize that very few people know it exists. Your website gets visitors, but they don't become customers. Your social media posts receive likes, but not leads. Your competitors consistently appear at the top of Google while your business struggles to gain visibility.
              </p>
              <p>
                If this sounds familiar, you're not alone.
              </p>
              <p>
                Many businesses in Hyderabad face the same challenge. The good news is that the right digital marketing partner can transform your online presence into a steady source of qualified leads, sales, and long-term growth.
              </p>
              <p>
                In this guide, you'll learn what separates an average agency from the <strong>best digital marketing agency Hyderabad</strong> businesses can rely on. We'll cover the services you should expect, how to evaluate agencies, common mistakes to avoid, and practical tips to help you make a confident decision.
              </p>
            </section>

            {/* Why Digital Marketing Matters Section */}
            <section id="matters" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#2</span> Why Digital Marketing Matters More Than Ever
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Today's customers begin their buying journey online. Whether they're looking for a nearby restaurant, a legal consultant, an IT service provider, or an eCommerce store, their first step is usually a Google search.
              </p>
              <p>
                If your business isn't visible where your customers are searching, you're handing opportunities to your competitors.
              </p>
              <p>
                Digital marketing helps businesses:
              </p>
              <ul className="space-y-3">
                {[
                  "Increase online visibility",
                  "Reach the right audience",
                  "Generate qualified leads",
                  "Build brand credibility",
                  "Improve customer engagement",
                  "Increase sales with measurable ROI"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Unlike traditional advertising, digital marketing allows you to track performance, optimize campaigns, and invest where you see the best results.
              </p>
              <div className="p-5 border border-primary/20 bg-primary/5 rounded-2xl flex gap-4">
                <Sparkles className="text-primary flex-shrink-0 mt-0.5" size={20} />
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  <strong>Key Insight:</strong> Businesses that consistently invest in digital marketing are better positioned to adapt to changing customer behavior and stay competitive in crowded markets.
                </p>
              </div>

              {/* Image 1 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                <Image
                  src="/assets/blog/hyderabad-agency-services-banner.png"
                  alt="Best Digital Marketing Agency Hyderabad helping businesses grow through SEO, PPC, and social media marketing."
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* What Does a Digital Marketing Agency Do Section */}
            <section id="do" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#3</span> What Does a Digital Marketing Agency Do?
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                A digital marketing agency helps businesses grow through online strategies tailored to their goals. Rather than relying on one marketing channel, experienced agencies combine multiple approaches to create sustainable growth.
              </p>
              <p>
                These strategies typically include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Search Engine Optimization (SEO)",
                  "Google Ads (PPC)",
                  "Social Media Marketing",
                  "Content Marketing",
                  "Email Marketing",
                  "Website Design and Development",
                  "Conversion Rate Optimization (CRO)",
                  "Analytics and Reporting"
                ].map((strategy, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl text-xs uppercase tracking-wider font-bold">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {strategy}
                  </div>
                ))}
              </div>
              <p>
                The best agencies don't simply drive traffic—they focus on attracting the right visitors and converting them into customers.
              </p>
            </section>

            {/* Core Services Section */}
            <section id="services" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#4</span> Core Services You Should Expect
              </h2>
              <div className="w-12 h-0.5 bg-primary" />

              {/* 1. SEO */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                  1. Search Engine Optimization (SEO)
                </h3>
                <p>
                  SEO helps your website rank higher in search engine results for keywords your customers are already searching for. To understand Google's recommended SEO practices, you can review the <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google Search Central SEO Starter Guide</a>, which explains the fundamentals of creating search-friendly websites.
                </p>
                
                <p className="text-gray-400 text-xs sm:text-sm">
                  A comprehensive SEO strategy includes:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal bg-white/5 p-4 rounded-xl">
                  <span>• Technical website optimization</span>
                  <span>• Keyword research</span>
                  <span>• Content creation</span>
                  <span>• On-page optimization</span>
                  <span>• Link building</span>
                  <span>• Local SEO</span>
                  <span>• Performance tracking</span>
                </div>

                <div className="p-5 rounded-xl bg-white/5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Benefits of SEO:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal">
                    <span>• Long-term organic traffic</span>
                    <span>• Increased brand trust</span>
                    <span>• Lower customer acquisition costs</span>
                    <span>• Better user experience</span>
                    <span>• Sustainable lead generation</span>
                  </div>
                </div>
                
                <p>
                  <strong>Pro Tip:</strong> SEO is a long-term investment. While results may take time, consistent optimization often delivers lasting value compared to short-lived advertising campaigns.
                </p>
                <div className="pt-2">
                  <Link href="/#services" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider">
                    Learn about our SEO Services <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              {/* 2. Local SEO */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                  2. Local SEO
                </h3>
                <p>
                  For businesses serving customers in Hyderabad, local SEO is essential. A strong local SEO strategy helps your business appear in:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal bg-white/5 p-4 rounded-xl">
                  <span>• Google Maps</span>
                  <span>• Local search results</span>
                  <span>• &quot;Near me&quot; searches</span>
                  <span>• Google Business Profile listings</span>
                </div>
                <p>
                  Important local SEO activities include:
                </p>
                <ul className="space-y-2 text-xs text-gray-400 font-normal">
                  <li>• Optimizing your Google Business Profile</li>
                  <li>• Managing customer reviews</li>
                  <li>• Building local citations</li>
                  <li>• Creating location-specific content</li>
                  <li>• Ensuring consistent business information across directories</li>
                </ul>

                {/* Image 2 Placement */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                  <Image
                    src="/assets/blog/hyderabad-seo-experts.png"
                    alt="SEO experts improving Google rankings for businesses."
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* 3. Google Ads */}
              <div className="space-y-4 pt-6">
                <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                  3. Google Ads (PPC)
                </h3>
                <p>
                  If you need faster visibility, Google Ads can place your business in front of potential customers almost immediately. A well-managed PPC campaign includes keyword targeting, audience segmentation, ad copy optimization, landing page improvements, conversion tracking, and bid optimization.
                </p>
                <p>
                  Businesses new to paid advertising can also explore the <a href="https://support.google.com/google-ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google Ads Help Center</a> for official guidance on campaign setup and optimization.
                </p>
                
                <div className="p-5 rounded-xl bg-white/5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">A well-managed PPC campaign includes:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal">
                    <span>• Keyword targeting</span>
                    <span>• Audience segmentation</span>
                    <span>• Ad copy optimization</span>
                    <span>• Landing page improvements</span>
                    <span>• Conversion tracking</span>
                    <span>• Bid optimization</span>
                  </div>
                </div>

                <p>
                  The goal isn't simply more clicks—it's attracting visitors who are most likely to become customers.
                </p>
                <div className="pt-2">
                  <Link href="/#services" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider">
                    Explore our Google Ads Management <ArrowUpRight size={14} />
                  </Link>
                </div>

                {/* Image 3 Placement */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                  <Image
                    src="/assets/blog/hyderabad-google-ads-management.png"
                    alt="Google Ads campaign management by digital marketing professionals."
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* 4. Social Media */}
              <div className="space-y-4 pt-6">
                <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                  4. Social Media Marketing
                </h3>
                <p>
                  Your audience spends hours each day on platforms like Instagram, Facebook, LinkedIn, and YouTube. Effective social media marketing helps you:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal bg-white/5 p-4 rounded-xl">
                  <span>• Increase brand awareness</span>
                  <span>• Build trust</span>
                  <span>• Generate leads</span>
                  <span>• Engage your audience</span>
                  <span>• Strengthen customer relationships</span>
                </div>
                <p>
                  Successful campaigns combine creative content with data-driven targeting to reach the right people at the right time.
                </p>
                <div className="pt-2">
                  <Link href="/#services" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider">
                    Learn about our Social Media Marketing Services <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              {/* 5. Content Marketing */}
              <div className="space-y-4 pt-6">
                <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                  5. Content Marketing
                </h3>
                <p>
                  Content is one of the most powerful tools for building authority and attracting organic traffic. High-quality content answers customer questions, demonstrates expertise, and supports SEO by targeting relevant search terms.
                </p>
                <p>
                  The <a href="https://blog.hubspot.com/marketing" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">HubSpot Marketing Blog</a> regularly publishes practical resources on content strategy, inbound marketing, and customer engagement.
                </p>
                <div className="p-5 rounded-xl bg-white/5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Content examples include:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal">
                    <span>• Blog articles</span>
                    <span>• Service pages</span>
                    <span>• Case studies</span>
                    <span>• Videos</span>
                    <span>• Infographics</span>
                    <span>• Email newsletters</span>
                    <span>• Downloadable guides</span>
                  </div>
                </div>
              </div>

              {/* 6. Website Design */}
              <div className="space-y-4 pt-6">
                <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                  6. Website Design and Development
                </h3>
                <p>
                  Your website is often the first impression customers have of your business. An effective website should be fast-loading, mobile-friendly, easy to navigate, secure, conversion-focused, and optimized for search engines.
                </p>
                <p>
                  A visually appealing website alone isn't enough—it should guide visitors toward meaningful actions such as making an inquiry or requesting a quote.
                </p>
                <div className="pt-2">
                  <Link href="/#services" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider">
                    Check our Website Design & Development <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </section>

            {/* Benefits of Hiring a Professional Agency Section */}
            <section id="benefits" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#5</span> Benefits of Hiring a Professional Digital Marketing Agency
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Working with an experienced agency offers several advantages over trying to manage marketing entirely in-house.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">Access to Specialists</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Instead of relying on one person, you benefit from a team of experts specializing in SEO, paid advertising, graphic design, content writing, web development, analytics, and social media strategy.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">Save Time</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Marketing requires continuous effort, testing, and optimization. Outsourcing allows you to focus on running your business while professionals handle campaign planning, execution, and reporting.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">Better Return on Investment (ROI)</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Experienced agencies make decisions based on data rather than guesswork. They monitor conversion rates, cost per lead, and return on ad spend (ROAS) alongside organic traffic, keyword rankings, and customer acquisition costs.
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2">
                    Using tools explained in the <a href="https://support.google.com/analytics" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google Analytics Help Center</a> can help businesses better understand user behavior, conversions, and marketing performance.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">Stay Updated with Industry Changes</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Search engines, advertising platforms, and social media algorithms evolve frequently. A dedicated agency stays informed about Google algorithm updates, SEO best practices, new advertising features, consumer behavior trends, and emerging marketing technologies.
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2">
                    Following updates from <a href="https://www.searchenginejournal.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Search Engine Journal</a> helps marketers stay informed about algorithm changes, SEO trends, and digital marketing best practices.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Businesses in Hyderabad Need Digital Marketing */}
            <section id="why-hyderabad" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#6</span> Why Businesses in Hyderabad Need Digital Marketing
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Hyderabad has become one of India's fastest-growing business hubs. From startups and technology companies to healthcare providers, educational institutions, retailers, and manufacturers, competition is increasing across nearly every industry.
              </p>
              <p>
                As more consumers search online before making purchasing decisions, businesses that invest in digital marketing gain a significant advantage.
              </p>
              <p>
                A well-executed strategy can help local businesses:
              </p>
              <ul className="space-y-3">
                {[
                  "Reach customers searching for nearby services",
                  "Build credibility through consistent online visibility",
                  "Generate qualified leads instead of relying only on referrals",
                  "Expand into new markets beyond Hyderabad",
                  "Improve customer retention through ongoing engagement"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Comparison Section */}
            <section id="comparison" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#7</span> In-House Marketing vs. Freelancer vs. Agency
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                The right choice depends on your budget, business goals, and the level of expertise you need. Many growing businesses choose agencies because they provide a broader range of skills and resources under one roof.
              </p>

              <div className="overflow-x-auto rounded-xl border border-white/10 my-6">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 uppercase tracking-widest text-[10px] font-bold text-white">
                      <th className="p-4">Feature</th>
                      <th className="p-4">In-House Team</th>
                      <th className="p-4">Freelancer</th>
                      <th className="p-4 text-primary">Digital Marketing Agency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-400">
                    {[
                      { f: "SEO Expertise", i: "Moderate", fr: "Varies", a: "High" },
                      { f: "Google Ads", i: "Moderate", fr: "Good", a: "Excellent" },
                      { f: "Social Media", i: "Moderate", fr: "Good", a: "Excellent" },
                      { f: "Content Creation", i: "Limited", fr: "Moderate", a: "Comprehensive" },
                      { f: "Website Support", i: "Limited", fr: "Limited", a: "Full-Service" },
                      { f: "Reporting & Analytics", i: "Basic", fr: "Moderate", a: "Advanced" },
                      { f: "Scalability", i: "Moderate", fr: "Limited", a: "High" },
                      { f: "Overall Growth", i: "Good", fr: "Moderate", a: "Excellent" }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-bold text-white">{row.f}</td>
                        <td className="p-4">{row.i}</td>
                        <td className="p-4">{row.fr}</td>
                        <td className="p-4 font-semibold text-primary">{row.a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400">
                <strong>Important Note:</strong> Low-cost providers often lack the advanced tools, specialized knowledge, and integrated reporting processes that keep campaigns scaling correctly over time.
              </p>
            </section>

            {/* Signs You're Ready Section */}
            <section id="signs" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#8</span> Signs You're Ready to Hire a Digital Marketing Agency
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                You may benefit from professional support if:
              </p>
              <ul className="space-y-3">
                {[
                  "Your website isn't generating enough leads.",
                  "Organic traffic has plateaued or declined.",
                  "You're spending on ads without seeing a positive return.",
                  "Your competitors consistently outrank you.",
                  "You lack the time or in-house expertise to manage digital marketing effectively.",
                  "You're planning to scale your business and need a structured marketing strategy."
                ].map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-gray-300">{sign}</span>
                  </li>
                ))}
              </ul>
              <p>
                Investing in the right agency can help you move from reactive marketing to a proactive, measurable growth plan.
              </p>
            </section>

            {/* How to Choose Section */}
            <section id="choose" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#9</span> How to Choose the Best Digital Marketing Agency Hyderabad
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                With dozens of agencies claiming to be the best, choosing the right partner can feel overwhelming. A polished website or impressive social media presence doesn't always reflect the quality of an agency's work.
              </p>
              <p>
                Instead of focusing on marketing promises, evaluate agencies based on their experience, transparency, processes, and ability to deliver measurable results.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">1. Define Your Business Goals First</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Before contacting any agency, identify what success looks like for your business. Do you want more website traffic? Are you looking for qualified leads? Do you need more local customers? When your objectives are clear, it's easier to find an agency that specializes in achieving those outcomes.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    <strong>Pro Tip:</strong> Avoid hiring an agency simply because it offers every service. Choose one that aligns with your business goals and has experience delivering results in those areas.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">2. Review Their Portfolio</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    A reputable agency should be able to demonstrate its work through case studies, client testimonials, before-and-after performance examples, website projects, SEO improvements, and paid campaign results. Look beyond design quality. Ask about measurable outcomes such as organic traffic growth, lead generation, conversion improvements, and return on advertising spend (ROAS).
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">3. Evaluate Their Industry Experience</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Every industry has different customer behavior and competition levels. An agency with relevant experience understands customer intent, seasonal trends, competitor landscape, and industry regulations. Whether you operate in healthcare, education, legal services, manufacturing, real estate, or eCommerce, industry knowledge can shorten the learning curve.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">4. Understand Their Marketing Process</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Professional agencies follow a structured approach rather than relying on guesswork. A typical process includes Discovery (business/competitor analysis), Strategy (keyword and content planning), Execution (campaign optimization and management), and Optimization (performance monitoring and refinement).
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">5. Ask About Reporting</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Transparent reporting helps you understand what is working and where improvements are needed. A reliable agency should provide regular insights into website traffic, keyword rankings, lead generation, conversion rates, advertising performance, and return on investment (ROI).
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                  Why G2G Media House Stands Out
                </h3>
                <p>
                  Choosing a digital marketing partner is about more than finding someone who can run ads or publish content. It’s about working with a team that understands your business objectives and builds strategies around measurable growth.
                </p>
                <p>
                  At <strong>G2G Media House</strong>, the focus is on creating customized digital marketing solutions rather than one-size-fits-all campaigns.
                </p>
                <div className="p-5 rounded-xl bg-[#121216]/50 border border-white/5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Businesses can benefit from:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400 font-normal">
                    <span>• Tailored digital marketing strategies</span>
                    <span>• Search engine optimization (SEO)</span>
                    <span>• Google Ads management</span>
                    <span>• Social media marketing</span>
                    <span>• Content marketing</span>
                    <span>• Website design and development</span>
                    <span>• Performance-focused campaigns</span>
                    <span>• Transparent communication & reporting</span>
                  </div>
                </div>

                <div className="space-y-3 mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Expert Tips:</h4>
                  <p className="text-xs text-gray-400">
                    <strong>Expert Tip #1:</strong> Don't judge an agency by rankings alone. Ask how they achieved those rankings and whether they can explain their process clearly.
                  </p>
                  <p className="text-xs text-gray-400">
                    <strong>Expert Tip #2:</strong> A successful digital marketing strategy combines SEO, content marketing, paid advertising, and conversion optimization—not just one tactic.
                  </p>
                  <p className="text-xs text-gray-400">
                    <strong>Expert Tip #3:</strong> Set realistic KPIs before launching any campaign so both your team and the agency measure success using the same benchmarks.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/5 space-y-2 mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Key Takeaways:</h4>
                  <ul className="space-y-1.5 text-xs text-gray-400 font-normal">
                    <li>• Digital marketing is essential for businesses that want to grow online.</li>
                    <li>• The best agency focuses on business outcomes, not vanity metrics.</li>
                    <li>• Look for proven experience, transparency, and a structured process.</li>
                    <li>• SEO, PPC, content marketing, and social media work best when integrated.</li>
                    <li>• Regular reporting and optimization are critical for long-term success.</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Link href="/contact-form" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider">
                    Contact G2G Media House <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </section>

            {/* Selection Checklist Section */}
            <section id="checklist" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#10</span> Agency Selection Checklist
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Use this interactive checklist to guide your search for the perfect digital marketing partner in Hyderabad. Track your evaluation progress!
              </p>

              {/* Progress bar */}
              <div className="p-6 border border-white/10 rounded-2xl bg-[#121216]/50">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Progress Score</span>
                  <span className="text-xs font-bold text-primary">{progressPercentage}% Ready</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-green-400 transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>

                {/* Checkbox List */}
                <div className="mt-6 space-y-3">
                  {checklistItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => toggleChecklistItem(item.id)}
                      className="flex items-start gap-4 text-left w-full p-3 rounded-xl border border-white/5 hover:border-white/15 bg-white/0 hover:bg-white/5 transition-all group"
                    >
                      <div className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-all ${
                        item.checked
                          ? "bg-primary border-primary text-black"
                          : "border-white/20 group-hover:border-primary/50 text-transparent"
                      }`}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className={`text-xs uppercase tracking-wider font-semibold ${
                        item.checked ? "text-gray-500 line-through" : "text-gray-300"
                      }`}>
                        {item.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#11</span> Frequently Asked Questions (SEO Optimized)
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              
              {/* Accordions */}
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
                Conclusion: Ready to Grow Your Business?
              </h3>
              <p>
                Finding the <strong>best digital marketing agency Hyderabad</strong> isn't about choosing the company with the biggest claims—it's about selecting a partner that understands your business, communicates transparently, and delivers measurable results.
              </p>
              <p>
                The right agency will take the time to learn about your goals, recommend strategies that fit your budget, and continually optimize campaigns based on real performance data. Instead of chasing quick wins, focus on building a long-term partnership that supports sustainable growth.
              </p>
              <p>
                Whether you're a startup, a local business, or an established brand, <strong>G2G Media House</strong> can help you create a digital marketing strategy tailored to your goals.
              </p>

              {/* Image 4 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                <Image
                  src="/assets/blog/hyderabad-business-partnership.png"
                  alt="Business partnership with a digital marketing agency in Hyderabad."
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-8 border border-primary/20 bg-gradient-to-br from-primary/10 to-green-500/5 rounded-3xl text-center space-y-6">
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white">
                  Get In Touch Today for a Consultation
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
                  Discover how data-driven digital marketing can help your business grow with confidence. Let's build a strategy that works for you.
                </p>
                <div>
                  <Link
                    href="/contact-form"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    Book a Growth Call <ArrowRight size={16} />
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
                Helping businesses navigate and dominate the local digital landscape through expert campaigns.
              </p>
            </div>
          </aside>

        </div>
      </div>

      <Footer />
    </div>
  );
}
