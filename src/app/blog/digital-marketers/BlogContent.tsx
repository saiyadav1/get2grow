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
  CheckCircle,
  Link2,
  Bookmark,
  Share2,
  Sparkles,
  Target,
  FileText,
  AlertCircle,
  TrendingUp,
  BrainCircuit,
  Volume2,
  Video,
  ShieldCheck,
  UserCheck
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
    "landscape",
    "responsibilities",
    "skills",
    "services",
    "benefits",
    "comparison",
    "choose",
    "mistakes",
    "trends",
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
    { id: "c1", text: "Define clear business goals", checked: false },
    { id: "c2", text: "Understand your target audience", checked: false },
    { id: "c3", text: "Invest in SEO and quality content", checked: false },
    { id: "c4", text: "Maintain consistent branding", checked: false },
    { id: "c5", text: "Use multiple marketing channels", checked: false },
    { id: "c6", text: "Track performance with analytics", checked: false },
    { id: "c7", text: "Optimize campaigns regularly", checked: false },
    { id: "c8", text: "Stay updated on industry trends", checked: false },
    { id: "c9", text: "Prioritize user experience", checked: false },
    { id: "c10", text: "Focus on long-term, sustainable growth", checked: false },
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
    { id: "landscape", text: "Why Digital Marketers Matter" },
    { id: "responsibilities", text: "Core Responsibilities" },
    { id: "skills", text: "Essential Skills" },
    { id: "services", text: "Services Offered" },
    { id: "benefits", text: "Benefits of Hiring" },
    { id: "comparison", text: "In-House vs Freelancer vs Agency" },
    { id: "choose", text: "How to Choose" },
    { id: "mistakes", text: "Common Mistakes" },
    { id: "trends", text: "Future Trends" },
    { id: "checklist", text: "Best Practices Checklist" },
    { id: "faq", text: "FAQ" }
  ];

  // FAQ Content Array
  const faqs = [
    {
      q: "What does a digital marketer do?",
      a: "A digital marketer helps businesses promote their products or services online using strategies such as SEO, content marketing, social media, paid advertising, email campaigns, and analytics. Their goal is to increase brand visibility, attract qualified leads, and improve conversions."
    },
    {
      q: "Why are digital marketers important for businesses?",
      a: "Digital marketers help businesses reach the right audience, improve online visibility, generate leads, and measure campaign performance. Their expertise enables companies to build stronger customer relationships and achieve sustainable business growth."
    },
    {
      q: "What skills should a successful digital marketer have?",
      a: "Successful digital marketers need skills in SEO, content creation, PPC advertising, social media marketing, analytics, communication, creativity, and strategic planning. Staying updated with industry trends is also essential."
    },
    {
      q: "How do digital marketers improve SEO?",
      a: "Digital marketers improve SEO by conducting keyword research, optimizing website content, enhancing technical performance, building quality backlinks, and creating valuable content that meets user intent and search engine guidelines."
    },
    {
      q: "Should small businesses hire digital marketers?",
      a: "Yes. Professional digital marketers help small businesses compete online by improving search rankings, generating leads, managing advertising campaigns, and creating effective marketing strategies that maximize limited budgets."
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
            <span className="text-gray-300">Digital Marketers Guide</span>
          </nav>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              Growth System
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Calendar size={14} className="text-primary" /> July 20, 2026
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Clock size={14} className="text-primary" /> 10 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] max-w-5xl mb-6">
            Digital Marketers: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 font-black">What They Do</span> and How They Help Grow
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Learn how digital marketers help businesses increase traffic, generate quality leads, improve brand visibility, and boost online sales with proven strategies.
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
                src="/assets/blog/digital-marketers-business-growth.jpg"
                alt="Digital marketer analyzing SEO, Google Analytics, content marketing, PPC advertising, and social media performance to grow an online business."
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#1</span> Digital Marketers & Business Growth
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                In today&apos;s digital-first world, having a great product or service isn&apos;t enough. Your customers are searching online, comparing brands, reading reviews, and making purchasing decisions before they ever contact a business. If your company isn&apos;t visible where your audience spends their time, you&apos;re likely losing valuable opportunities to competitors.
              </p>
              <p>
                This is where <strong>digital marketers</strong> make a significant difference.
              </p>
              <p>
                Digital marketers use data-driven strategies to help businesses build brand awareness, attract qualified leads, increase website traffic, and convert visitors into loyal customers. Whether you&apos;re a startup looking for your first customers or an established business aiming to scale, the right digital marketing approach can accelerate growth and improve long-term success.
              </p>
              <p>
                In this guide, you&apos;ll learn what digital marketers do, the services they provide, the skills they need, and how they help businesses achieve measurable results.
              </p>

              <div className="p-5 border border-primary/20 bg-primary/5 rounded-2xl flex gap-4">
                <Sparkles className="text-primary flex-shrink-0 mt-0.5" size={20} />
                <div className="space-y-2">
                  <h4 className="text-xs text-primary font-bold uppercase tracking-wider">What Is a Digital Marketer?</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">
                    A digital marketer is a professional who promotes products, services, or brands through online channels. Unlike traditional marketing, which relies on television, radio, newspapers, or billboards, digital marketing focuses on reaching audiences through the internet. They combine creativity with analytics to design campaigns that attract the right audience and encourage them to take action.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-bold uppercase tracking-wider text-white">Their Primary Goals Include:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Increasing website traffic",
                    "Building brand awareness",
                    "Generating qualified leads",
                    "Improving customer engagement",
                    "Boosting online sales",
                    "Strengthening customer loyalty",
                    "Measuring marketing performance"
                  ].map((goal, idx) => (
                    <li key={idx} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl text-xs uppercase tracking-wider font-bold">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="p-4 border-l-4 border-primary bg-white/5 text-xs text-gray-300 font-bold uppercase tracking-wider leading-relaxed">
                Key Takeaway: Digital marketers don&apos;t just create advertisements—they develop complete strategies that connect businesses with their ideal customers.
              </p>
            </section>

            {/* Why Digital Marketers Matter Section */}
            <section id="landscape" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#2</span> Why Digital Marketers Matter
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Consumer behavior has changed dramatically over the past decade. Before making a purchase, most people search online, read reviews, compare competitors, and explore social media. Without a strong online presence, businesses risk becoming invisible to potential customers.
              </p>
              <p>
                Digital marketers help businesses adapt by ensuring they appear in the right places at the right time.
              </p>

              <div className="space-y-6">
                <div className="p-6 border border-white/5 bg-[#121216]/40 rounded-2xl">
                  <h3 className="text-base font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                    <Target size={16} className="text-primary" /> They Increase Online Visibility
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal mb-4">
                    When customers search for products or services, businesses that appear on the first page of search results receive significantly more attention than those buried deeper in search rankings.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Search Engine Optimization (SEO)", "Local SEO", "Content marketing", "Paid advertising", "Social media marketing"].map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-white/5 text-gray-300 text-[10px] font-bold uppercase tracking-widest rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 border border-white/5 bg-[#121216]/40 rounded-2xl">
                  <h3 className="text-base font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                    <Target size={16} className="text-primary" /> They Generate High-Quality Leads
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal mb-4">
                    Not every website visitor becomes a customer. Digital marketers focus on attracting people who are already interested in what your business offers.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-400">
                    <span>• Targeted advertising</span>
                    <span>• Keyword research</span>
                    <span>• Audience segmentation</span>
                    <span>• Landing page optimization</span>
                    <span>• Email campaigns</span>
                  </div>
                </div>

                <div className="p-6 border border-white/5 bg-[#121216]/40 rounded-2xl">
                  <h3 className="text-base font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                    <Target size={16} className="text-primary" /> They Build Brand Trust
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal mb-4">
                    Modern customers buy from businesses they trust. Digital marketers help establish credibility by creating:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                    <span>• Helpful blog content</span>
                    <span>• Educational videos</span>
                    <span>• Customer success stories</span>
                    <span>• Testimonials & Social proof</span>
                    <span>• Consistent branding</span>
                  </div>
                </div>
              </div>

              {/* Metrics Table */}
              <div className="space-y-4 pt-4">
                <h3 className="text-base font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <TrendingUp size={16} className="text-primary" /> They Measure Everything
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                  Traditional marketing often makes it difficult to know which campaigns are working. Digital marketing provides measurable insights, including:
                </p>

                <div className="overflow-x-auto rounded-xl border border-white/10">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="bg-white/5 border-b border-white/10 uppercase tracking-widest text-[10px] font-bold text-white">
                        <th className="p-4">Metric</th>
                        <th className="p-4 text-primary">Why It Matters</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { m: "Website Traffic", d: "Shows audience growth" },
                        { m: "Conversion Rate", d: "Measures sales effectiveness" },
                        { m: "Click-Through Rate (CTR)", d: "Evaluates ad performance" },
                        { m: "Cost Per Lead", d: "Tracks marketing efficiency" },
                        { m: "Bounce Rate", d: "Reveals user engagement" },
                        { m: "Return on Investment (ROI)", d: "Measures profitability" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/5 transition-colors">
                          <td className="p-4 font-bold text-gray-400">{row.m}</td>
                          <td className="p-4 font-semibold text-white">{row.d}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Core Responsibilities Section */}
            <section id="responsibilities" className="scroll-mt-28 space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#3</span> Core Responsibilities
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Digital marketers wear many hats. Depending on the business, they may manage multiple marketing channels simultaneously. Here are some of their key responsibilities.
              </p>

              {/* Responsibilities 1 */}
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="text-primary">1.</span> Search Engine Optimization (SEO)
                </h3>
                <p>
                  SEO helps websites rank higher in search engine results, making it easier for potential customers to find a business organically.
                </p>

                {/* Image 1: SEO dashboard */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-4">
                  <Image
                    src="/assets/blog/digital-marketer-seo-dashboards.jpg"
                    alt="Digital marketing professional reviewing keyword research, SEO reports, search rankings, backlinks, and website analytics on dual monitors in a modern office."
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-5 rounded-xl bg-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Common SEO activities include:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal">
                    <span>• Keyword research</span>
                    <span>• Technical SEO improvements</span>
                    <span>• On-page optimization</span>
                    <span>• Content optimization</span>
                    <span>• Link building</span>
                    <span>• Local SEO</span>
                    <span>• Website audits</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-400">
                  A strong SEO strategy generates long-term traffic without relying solely on paid advertising. To start learning more about best practices, check out the <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Search Central SEO Starter Guide</a>, the <a href="https://ahrefs.com/blog" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ahrefs SEO Blog</a>, and <a href="https://searchengineland.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Search Engine Land</a>.
                </p>
              </div>

              {/* Responsibilities 2 */}
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="text-primary">2.</span> Content Marketing
                </h3>
                <p>
                  Content is one of the most powerful tools in digital marketing. Digital marketers create valuable content that educates, informs, and builds trust with audiences.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {["Blog articles", "Videos", "Case studies", "Guides", "E-books", "Infographics", "Podcasts", "Webinars"].map((fmt, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-gray-300">
                      {fmt}
                    </span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  High-quality content not only attracts visitors but also supports SEO and nurtures leads throughout the buying journey. For excellent inbound strategies, explore the <a href="https://blog.hubspot.com/marketing" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">HubSpot Marketing Resources</a>.
                </p>

                <div className="p-4 border border-primary/20 bg-primary/5 rounded-2xl flex gap-3">
                  <Sparkles className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-xs text-primary font-bold uppercase tracking-wide leading-relaxed">
                    Pro Tip: Focus on solving your audience&apos;s problems instead of simply promoting your products. Helpful content earns trust and improves long-term engagement.
                  </p>
                </div>
              </div>

              {/* Responsibilities 3 */}
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="text-primary">3.</span> Social Media Marketing
                </h3>
                <p>
                  Social media allows businesses to connect directly with their audience. Digital marketers develop strategies for platforms such as Facebook, Instagram, LinkedIn, X (formerly Twitter), TikTok, Pinterest, and YouTube.
                </p>

                {/* Image 2: Social Media Dashboard */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-4">
                  <Image
                    src="/assets/blog/social-media-campaign-analytics.jpg"
                    alt="Marketing professional monitoring social media campaign analytics and content performance on desktop and mobile devices."
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-5 rounded-xl bg-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Their responsibilities may include:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal">
                    <span>• Content planning</span>
                    <span>• Community management</span>
                    <span>• Paid social campaigns</span>
                    <span>• Influencer collaborations</span>
                    <span>• Performance tracking</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities 4 */}
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="text-primary">4.</span> Pay-Per-Click (PPC) Advertising
                </h3>
                <p>
                  PPC advertising enables businesses to reach potential customers quickly by placing ads on search engines and social media platforms.
                </p>

                {/* Image 3: PPC dashboard */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-4">
                  <Image
                    src="/assets/blog/google-ads-campaign-analytics.jpg"
                    alt="Digital marketer reviewing Google Ads campaign performance and conversion analytics."
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-5 rounded-xl bg-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Digital marketers manage:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal">
                    <span>• Google & Microsoft Ads</span>
                    <span>• Facebook & Instagram Ads</span>
                    <span>• LinkedIn & YouTube Ads</span>
                    <span>• Keyword Refinements & Bidding</span>
                    <span>• Landing Page Testing & Copywriting</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities 5 */}
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="text-primary">5.</span> Email Marketing
                </h3>
                <p>
                  Despite the rise of social media, email remains one of the most effective digital marketing channels.
                </p>
                <div className="p-5 rounded-xl bg-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Digital marketers use email campaigns to:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal">
                    <span>• Welcome new subscribers</span>
                    <span>• Promote products</span>
                    <span>• Share educational content</span>
                    <span>• Recover abandoned carts</span>
                    <span>• Announce events</span>
                    <span>• Build customer loyalty</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  Personalized email campaigns often deliver stronger engagement and higher conversion rates than generic mass emails.
                </p>
              </div>

              {/* Responsibilities 6 */}
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="text-primary">6.</span> Analytics and Performance Reporting
                </h3>
                <p>
                  One of the biggest advantages of digital marketing is the ability to measure results.
                </p>
                <div className="p-5 rounded-xl bg-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Digital marketers regularly analyze:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal">
                    <span>• Website traffic</span>
                    <span>• User behavior</span>
                    <span>• Lead generation</span>
                    <span>• Sales performance</span>
                    <span>• Customer acquisition cost</span>
                    <span>• Campaign ROI</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  These insights help businesses understand what works, what doesn&apos;t, and where improvements can be made. To explore more analytic tools, see <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics</a> and the <a href="https://www.semrush.com/blog" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Semrush Blog</a>.
                </p>
              </div>
            </section>

            {/* Essential Skills Section */}
            <section id="skills" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#4</span> Essential Skills Every Marketer Needs
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Successful digital marketers combine technical expertise with creativity and strategic thinking. Here are some of the most important skills they rely on:
              </p>

              <div className="space-y-4">
                {[
                  { t: "Analytical Thinking", d: "Marketing decisions should be driven by data, not assumptions. Marketers use analytics to interpret campaign performance, identify growth opportunities, and optimize advertising budgets." },
                  { t: "Communication Skills", d: "Whether writing blog posts, creating advertisements, or managing social media, clear communication is essential. Great marketers know how to explain complex ideas simply." },
                  { t: "Creativity", d: "Creative thinking helps businesses stand out in competitive markets. They use creativity to design compelling advertisements, unique storytelling, and memorable brand experiences." },
                  { t: "Technical Knowledge", d: "Understanding modern platforms like Google Search Console, Google Ads, CRM tools, and marketing automation software is critical to stay competitive." },
                  { t: "Adaptability", d: "Algorithms, platforms, and behaviors change daily. Successful digital marketers embrace continuous learning and adjust their strategies as new trends emerge." }
                ].map((skill, idx) => (
                  <div key={idx} className="p-5 border border-white/5 bg-[#121216]/40 rounded-xl hover:bg-[#121216]/80 transition-all">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                      <UserCheck size={14} className="text-primary" /> {skill.t}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">{skill.d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Services Offered Section */}
            <section id="services" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#5</span> Services Offered
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                While responsibilities may vary, most professional digital marketers offer a combination of services designed to support business growth:
              </p>

              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 uppercase tracking-widest text-[10px] font-bold text-white">
                      <th className="p-4">Service</th>
                      <th className="p-4 text-primary">Business Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { s: "Search Engine Optimization (SEO)", b: "Improves organic visibility and rankings" },
                      { s: "Content Marketing", b: "Builds trust and attracts qualified visitors" },
                      { s: "Social Media Management", b: "Increases engagement and brand awareness" },
                      { s: "Pay-Per-Click Advertising", b: "Generates immediate targeted traffic" },
                      { s: "Email Marketing", b: "Nurtures leads and encourages repeat business" },
                      { s: "Conversion Rate Optimization (CRO)", b: "Turns more visitors into customers" },
                      { s: "Website Optimization", b: "Improves user experience and performance" },
                      { s: "Analytics & Reporting", b: "Tracks campaign success and informs decisions" },
                      { s: "Online Reputation Management", b: "Strengthens brand credibility" },
                      { s: "Digital Marketing Strategy", b: "Aligns marketing efforts with business goals" }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-bold text-gray-400">{row.s}</td>
                        <td className="p-4 font-semibold text-white">{row.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-400 italic">
                Important Note: The most effective digital marketers don&apos;t rely on a single tactic. They integrate SEO, content, social media, paid advertising, email, and analytics into a unified strategy that supports sustainable growth.
              </p>
            </section>

            {/* Benefits of Hiring Section */}
            <section id="benefits" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#6</span> Benefits of Hiring Professional Marketers
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Investing in professional digital marketers is one of the smartest decisions a business can make. Instead of relying on trial and error, experienced marketers use proven strategies to help businesses achieve measurable growth.
              </p>

              {/* Image 4: Benefits team meeting */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-4">
                <Image
                  src="/assets/blog/benefits-of-hiring-digital-marketers.jpg"
                  alt="Benefits of hiring digital marketers"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                {[
                  { t: "1. Reach the Right Audience", d: "One of the biggest challenges for any business is finding the right customers. Professional digital marketers use audience research, customer personas, and data analytics to identify who your ideal customers are and where they spend their time online. This means your marketing budget is spent reaching people who are more likely to become paying customers." },
                  { t: "2. Increase Website Traffic", d: "A beautiful website has little value if no one visits it. Marketers use a combination of SEO, content marketing, social media, and paid advertising to attract consistent traffic from multiple channels (organic engines, social platforms, referral links, and local listings)." },
                  { t: "3. Improve Lead Generation", d: "Generating leads is about attracting people who are genuinely interested in your products or services. Marketers create optimized landing pages, compelling calls to action (like downloads, quotes, or consultations), and targeted campaigns that encourage visitors to take the next step." },
                  { t: "4. Strengthen Brand Awareness", d: "People are more likely to buy from brands they recognize and trust. Marketers build brand awareness by maintaining a consistent presence across multiple digital channels (social channels, display ads, and newsletters)." },
                  { t: "5. Achieve Better Return on Investment (ROI)", d: "Every marketing dollar should contribute to business growth. Unlike traditional advertising, digital marketing provides detailed performance data, making it easier to identify what&apos;s working, reduce costs, and maximize ROI." },
                  { t: "6. Stay Ahead of Competitors", d: "Your competitors are constantly looking for ways to attract the same customers. Digital marketers monitor industry trends, analyze competitor strategies, and identify opportunities that help your business stay competitive." }
                ].map((benefit, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-base font-bold uppercase tracking-tight text-white">{benefit.t}</h4>
                    <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">{benefit.d}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 border border-dashed border-white/10 bg-black/20 rounded-2xl">
                <p className="text-xs text-primary font-bold uppercase tracking-wide leading-relaxed">
                  Expert Tip: The most successful businesses treat digital marketing as an ongoing investment, not a one-time project. Consistent optimization produces better long-term results than short bursts of activity.
                </p>
              </div>
            </section>

            {/* In-House vs Freelance vs Agency Matrix Section */}
            <section id="comparison" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#7</span> In-House vs. Freelancer vs. Agency
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Choosing the right type of digital marketer depends on your goals, budget, and available resources. Let&apos;s look at a quick feature matrix:
              </p>

              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 uppercase tracking-widest text-[10px] font-bold text-white">
                      <th className="p-4">Feature</th>
                      <th className="p-4 text-gray-300">In-House Marketer</th>
                      <th className="p-4 text-primary">Freelancer</th>
                      <th className="p-4 text-green-400">Agency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { f: "Cost", s: "High", p: "Low to Medium", a: "Medium to High" },
                      { f: "Expertise", s: "Limited to individual skills", p: "Specialized", a: "Broad team expertise" },
                      { f: "Scalability", s: "Moderate", p: "Limited", a: "High" },
                      { f: "Availability", s: "Full-time", p: "Flexible", a: "Dedicated team" },
                      { f: "Access to Tools", s: "Company-owned", p: "Personal tools", a: "Enterprise-level tools" },
                      { f: "Speed", s: "Moderate", p: "Fast", a: "Fast" },
                      { f: "Best For", s: "Large businesses", p: "Small projects", a: "Long-term growth" }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-bold text-gray-400">{row.f}</td>
                        <td className="p-4 text-gray-300">{row.s}</td>
                        <td className="p-4 text-white font-semibold">{row.p}</td>
                        <td className="p-4 text-white font-semibold">{row.a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 gap-6 pt-4">
                <div className="p-5 bg-white/5 rounded-xl border border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">In-House Digital Marketers</h4>
                  <p className="text-xs text-gray-400 mb-3">An in-house marketer works exclusively for your company.</p>
                  <p className="text-xs text-gray-400 font-semibold mb-1">Advantages: Deep understanding of your brand, immediate communication, close collaboration.</p>
                  <p className="text-xs text-gray-400 font-semibold">Challenges: Higher salary and benefits, limited expertise across all channels, additional training costs.</p>
                </div>
                <div className="p-5 bg-white/5 rounded-xl border border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">Freelance Digital Marketers</h4>
                  <p className="text-xs text-gray-400 mb-3">Freelancers are independent professionals who work with multiple clients.</p>
                  <p className="text-xs text-gray-400 font-semibold mb-1">Advantages: Affordable for smaller businesses, flexible contracts, specialized expertise.</p>
                  <p className="text-xs text-gray-400 font-semibold">Challenges: Limited availability, may not offer every service, managing multiple freelancers is complex.</p>
                </div>
                <div className="p-5 bg-white/5 rounded-xl border border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">Digital Marketing Agencies</h4>
                  <p className="text-xs text-gray-400 mb-3">Agencies provide access to teams of specialists, including SEO experts, content writers, designers, PPC managers, and analysts.</p>
                  <p className="text-xs text-gray-400 font-semibold mb-1">Advantages: Comprehensive services, experienced specialists, access to premium tools, scalable solutions.</p>
                  <p className="text-xs text-gray-400 font-semibold">Challenges: Higher monthly investment, requires clear communication and collaboration.</p>
                </div>
              </div>

              <p className="text-xs text-primary font-bold uppercase tracking-wide leading-relaxed">
                Recommendation: Businesses seeking consistent growth often benefit from partnering with an experienced digital marketing agency (like <Link href="/contact-form" className="underline hover:text-white">G2G Media House</Link>) that can manage multiple channels under one strategy.
              </p>
            </section>

            {/* How to Choose Section */}
            <section id="choose" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#8</span> How to Choose the Right Marketer
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Not every marketer will be the right fit for your business. Before making a hiring decision, consider the following factors:
              </p>

              <div className="space-y-6">
                {[
                  { t: "1. Review Their Experience", d: "Look for professionals who have worked with businesses similar to yours. Ask about industry experience, results achieved, case studies, and channel specialties." },
                  { t: "2. Evaluate Their Skills", d: "A well-rounded digital marketer should understand SEO, PPC, content marketing, email campaigns, social media, analytics, and conversion optimization." },
                  { t: "3. Ask About Their Process", d: "Professional marketers follow structured workflows: Business discovery → Competitor research → Audience analysis → Strategy development → Campaign execution → Performance tracking → Continuous optimization." },
                  { t: "4. Check Communication", d: "Successful partnerships rely on regular communication. Look for marketers who provide monthly reports, explain results clearly, and welcome collaboration." },
                  { t: "5. Focus on Long-Term Value", d: "Avoid choosing a marketer based solely on the lowest price. Instead, evaluate proven expertise, strategic thinking, quality of work, and client satisfaction." }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-base font-bold uppercase tracking-tight text-white">{item.t}</h4>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Common Mistakes Section */}
            <section id="mistakes" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#9</span> Common Mistakes Businesses Make
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Many businesses invest in digital marketing but fail to see results because of avoidable mistakes. Here are some of the most common ones:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: "Expecting Immediate Results", d: "SEO and brand building take time. Sustainable growth typically requires consistent effort over several months." },
                  { t: "Ignoring Analytics", d: "Without tracking performance, it's impossible to know what's working. Monitor website traffic, conversions, cost per lead, and ROI." },
                  { t: "Targeting Everyone", d: "Trying to appeal to every customer often results in ineffective messaging. Instead, define your ideal customer." },
                  { t: "Publishing Low-Quality Content", d: "Search engines and users value original, informative content. Avoid thin articles, duplicate content, and keyword stuffing." },
                  { t: "Neglecting Mobile Users", d: "A large percentage of searches happen on mobile. Make sure your website offers fast loading speed and responsive design." },
                  { t: "Failing to Test and Optimize", d: "Digital marketing isn&apos;t set-and-forget. Marketers must regularly test headlines, ad copies, landing pages, and target audience segments." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 border border-white/5 bg-[#1a0e10]/20 rounded-xl space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
                      <AlertCircle size={14} /> {item.t}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">{item.d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Future Trends Section */}
            <section id="trends" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#10</span> Future Trends Every Marketer Should Watch
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Digital marketing continues to evolve as technology and customer expectations change. Here are some of the most important trends shaping the future:
              </p>

              <div className="space-y-6">
                <div className="p-5 bg-white/5 rounded-xl border border-white/5 space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-white flex items-center gap-2">
                    <BrainCircuit size={16} className="text-primary" /> Artificial Intelligence (AI)
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
                    AI is automating repetitive tasks and providing deeper insights into behavior (like content planning, email personalization, chatbots, and predictive analytics). For ongoing industry news, follow <a href="https://www.searchenginejournal.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Search Engine Journal</a>.
                  </p>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-wider">
                    Pro Tip: Use AI to enhance your workflow—not replace authentic, customer-focused marketing.
                  </p>
                </div>

                <div className="p-5 bg-white/5 rounded-xl border border-white/5 space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-white flex items-center gap-2">
                    <Volume2 size={16} className="text-primary" /> Voice Search Optimization
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
                    With voice assistants, more people search using natural, conversational language (e.g. &quot;Who are the best digital marketers for small businesses?&quot;). Adapt by answering common customer questions and creating FAQ sections.
                  </p>
                </div>

                <div className="p-5 bg-white/5 rounded-xl border border-white/5 space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-white flex items-center gap-2">
                    <Video size={16} className="text-primary" /> Video Content Continues to Grow
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
                    Short-form videos, live streams, and educational tutorials are highly effective for capturing attention and encouraging brand trust.
                  </p>
                </div>

                <div className="p-5 bg-white/5 rounded-xl border border-white/5 space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-white flex items-center gap-2">
                    <ShieldCheck size={16} className="text-primary" /> First-Party Data & Personalization
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
                    As cookie policies tighten, collecting first-party data directly via surveys, newsletters, and registrations is crucial. Relevant, personalized messaging yields stronger retention.
                  </p>
                </div>
              </div>
            </section>

            {/* Checklist Section */}
            <section id="checklist" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#11</span> Best Practices Checklist
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Use this interactive checklist to review your digital marketing campaigns. Check items off as you complete them to view your compliance score!
              </p>

              {/* Progress bar */}
              <div className="p-6 border border-white/10 rounded-2xl bg-[#121216]/50">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Optimization Readiness</span>
                  <span className="text-xs font-bold text-primary">{progressPercentage}% Complete</span>
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
                <span className="text-primary font-mono text-sm">#12</span> Frequently Asked Questions
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Find quick answers to the most common questions regarding digital marketers and scaling your traffic:
              </p>

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

            {/* Final Thoughts */}
            <section className="pt-6 border-t border-white/5 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Final Thoughts</h2>
              <p>
                Digital marketing is no longer optional—it&apos;s an essential part of building and growing a successful business in today&apos;s competitive marketplace. From improving search visibility and generating qualified leads to strengthening customer relationships and increasing sales, digital marketers play a vital role in helping businesses achieve measurable results.
              </p>
              <p className="font-bold text-white">
                Whether you choose to hire an in-house marketer, work with a freelancer, or partner with a digital marketing agency, success depends on selecting professionals who understand your goals, communicate clearly, and focus on long-term business growth.
              </p>
            </section>

          </article>

          {/* Right Column: Author Info & CTAs */}
          <aside className="lg:col-span-3 lg:sticky lg:top-28 self-start space-y-8">
            
            {/* Share Widget */}
            <div className="border border-white/5 rounded-2xl bg-[#121216]/60 p-6 backdrop-blur-md">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                <Share2 size={14} className="text-primary" /> Share This Article
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={copyToClipboard}
                  className="flex-grow flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 text-xs font-bold uppercase tracking-widest hover:text-primary transition-all"
                >
                  <Link2 size={14} /> {copied ? "Copied!" : "Copy Link"}
                </button>
                <a
                  href={`https://twitter.com/intent/tweet?text=Check out this awesome Digital Marketers Guide!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:text-primary transition-all"
                >
                  <FaTwitter size={16} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:text-primary transition-all"
                >
                  <FaLinkedin size={16} />
                </a>
              </div>
            </div>

            {/* Author Card */}
            <div className="border border-white/5 rounded-2xl bg-[#121216]/60 p-6 backdrop-blur-md text-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto border border-primary/20 mb-4">
                <Image
                  src="/assets/g2g_logo.png"
                  alt="G2G Growth Team Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-white">G2G Growth Team</h4>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Growth Advisors</span>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed font-normal">
                Curating marketing playbooks, search tactics, and conversion systems to build industry leaders.
              </p>
            </div>

            {/* Action CTA Box */}
            <div className="border border-primary/20 bg-gradient-to-br from-primary/5 via-green-500/0 to-[#121216] rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-primary/5 blur-[50px] rounded-full pointer-events-none" />
              <h4 className="text-base font-black uppercase tracking-tight text-white mb-2 leading-tight">
                Scale Your Revenue Today
              </h4>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed font-normal">
                Ready to increase your online visibility and generate more qualified leads? Partner with <strong>G2G Media House</strong> for tailored strategies.
              </p>
              <Link
                href="/contact-form"
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-black font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-white transition-all shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-white/20"
              >
                Contact Us Today <ArrowRight size={12} />
              </Link>
            </div>

          </aside>
          
        </div>
      </div>

      {/* Global Newsletter Callout Footer */}
      <section className="bg-black/30 border-t border-white/5 py-16 text-center">
        <div className="container mx-auto px-6 max-w-xl">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">
            Was this guide useful?
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mb-6 max-w-md mx-auto">
            Subscribe for free weekly insights on lead generation, SEO optimization, and brand scaling tactics.
          </p>
          <Link
            href="/contact-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:border-primary text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary hover:text-black transition-all duration-300"
          >
            Work with G2G <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
