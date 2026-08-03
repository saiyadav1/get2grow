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
    "matters",
    "agency",
    "services",
    "benefits",
    "choose",
    "questions",
    "pricing",
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
    { id: "c1", text: "Define clear marketing goals", checked: false },
    { id: "c2", text: "Set a realistic budget", checked: false },
    { id: "c3", text: "Review candidate agency portfolios", checked: false },
    { id: "c4", text: "Check client reviews and testimonials", checked: false },
    { id: "c5", text: "Verify certifications (e.g. Google Ads, Analytics)", checked: false },
    { id: "c6", text: "Ask about reporting frequency and metrics", checked: false },
    { id: "c7", text: "Inquire about the dedicated account manager", checked: false },
    { id: "c8", text: "Confirm contract terms and transparency", checked: false },
    { id: "c9", text: "Avoid agencies guaranteeing #1 rankings", checked: false },
    { id: "c10", text: "Schedule a discovery call/consultation", checked: false },
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
    { id: "agency", text: "What is a Digital Agency?" },
    { id: "services", text: "Core Services Offered" },
    { id: "benefits", text: "Benefits of Hiring Local" },
    { id: "choose", text: "How to Choose an Agency" },
    { id: "questions", text: "Questions & Red Flags" },
    { id: "pricing", text: "Cost & Why Choose G2G" },
    { id: "checklist", text: "Agency Selection Checklist" },
    { id: "faq", text: "FAQ" }
  ];

  // FAQ Content Array
  const faqs = [
    {
      q: "What does a digital marketing agency near me do?",
      a: "A digital marketing agency near you helps businesses improve their online presence through services such as SEO, pay-per-click advertising, social media marketing, content creation, email marketing, and website optimization. A local agency also understands regional market trends and can tailor campaigns to attract nearby customers more effectively."
    },
    {
      q: "Is hiring a local digital marketing agency better than a remote agency?",
      a: "A local agency offers advantages such as better knowledge of your target market, easier communication, and stronger local SEO strategies. While remote agencies can also deliver excellent work, a nearby team may provide more personalized support and opportunities for in-person collaboration when needed."
    },
    {
      q: "How long does it take to see results from digital marketing?",
      a: "Results depend on the services you choose. PPC advertising can generate traffic within days or weeks, while SEO and content marketing typically take several months to build momentum. Consistency, quality, and ongoing optimization are key to achieving sustainable long-term growth."
    },
    {
      q: "How much should I budget for digital marketing?",
      a: "The right budget depends on your business size, goals, competition, and selected services. Instead of focusing on the lowest price, look for an agency that provides clear deliverables, transparent reporting, and strategies designed to deliver a strong return on your investment."
    },
    {
      q: "How do I choose the best digital marketing agency near me?",
      a: "Start by reviewing the agency's experience, client testimonials, case studies, service offerings, communication style, and reporting process. Ask detailed questions about their strategy and how they measure success. The best agency will take time to understand your business and recommend solutions tailored to your goals."
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
            <span className="text-gray-300">Digital Marketing Agency Guide</span>
          </nav>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              Agency & Partners
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Calendar size={14} className="text-primary" /> August 3, 2026
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Clock size={14} className="text-primary" /> 12 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] max-w-5xl mb-6">
            Digital Marketing Agency Near Me: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 font-black">How to Choose</span> the Right Partner
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Looking for a digital marketing agency near me? Discover expert SEO, PPC, social media, and web marketing services to grow your business today.
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
                src="/assets/blog/agency-near-me-featured.jpg"
                alt="Digital Marketing Agency Near Me – Business Growth Experts"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#1</span> Choosing the Right Marketing Partner
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Finding a <strong>digital marketing agency near me</strong> may seem as simple as searching Google and picking the first result. But with thousands of agencies promising &quot;guaranteed rankings&quot; and &quot;instant leads,&quot; how do you know which one can actually help your business grow?
              </p>
              <p>
                The truth is that digital marketing isn&apos;t just about running ads or posting on social media. It&apos;s about creating a strategy that attracts the right audience, builds trust, and converts visitors into loyal customers. Whether you own a local business, manage an e-commerce store, or run a growing startup, choosing the right marketing partner can significantly impact your success.
              </p>
              <p>
                In today&apos;s competitive online marketplace, businesses that invest in professional digital marketing consistently outperform those relying only on traditional advertising. From improving search engine rankings to generating qualified leads and increasing revenue, a trusted digital marketing agency provides the expertise and tools needed to stay ahead of the competition.
              </p>
              <p>
                In this guide, you&apos;ll learn what a digital marketing agency does, the services you should expect, and how to choose the best agency for your business goals.
              </p>
            </section>

            {/* Why Digital Marketing Matters Section */}
            <section id="matters" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#2</span> Why Digital Marketing Matters More Than Ever
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Consumer behavior has changed dramatically over the past decade. Before making a purchase, most people research products, compare reviews, and visit multiple websites. If your business isn&apos;t visible online, you&apos;re likely losing customers to competitors who are.
              </p>
              <p>
                Here are just a few reasons digital marketing is essential:
              </p>
              <ul className="space-y-3">
                {[
                  "Customers search online before buying.",
                  "Mobile searches continue to grow every year.",
                  "Online reviews influence purchasing decisions.",
                  "Businesses with strong online visibility earn more qualified leads.",
                  "Digital campaigns provide measurable results compared to traditional advertising."
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-gray-300">{reason}</span>
                  </li>
                ))}
              </ul>
              <p>
                Instead of relying on guesswork, digital marketing allows businesses to make informed decisions using real-time data, analytics, and customer insights.
              </p>
              <div className="p-5 border border-primary/20 bg-primary/5 rounded-2xl flex gap-4">
                <Sparkles className="text-primary flex-shrink-0 mt-0.5" size={20} />
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  <strong>Key Takeaway:</strong> Your website and online presence often create the first impression of your business. Investing in digital marketing helps ensure it&apos;s a positive one.
                </p>
              </div>
            </section>

            {/* What is a Digital Agency Section */}
            <section id="agency" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#3</span> What Is a Digital Marketing Agency?
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                A digital marketing agency is a team of professionals who help businesses promote their products and services online using proven marketing strategies and digital channels.
              </p>
              <p>
                Unlike a traditional advertising agency, a digital marketing agency focuses on measurable online results such as:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Increasing website traffic",
                  "Improving Google rankings",
                  "Generating qualified leads",
                  "Growing online sales",
                  "Building brand awareness",
                  "Increasing customer engagement"
                ].map((goal, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl text-xs uppercase tracking-wider font-bold">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {goal}
                  </div>
                ))}
              </div>
              <p>
                A full-service agency combines creative expertise with data-driven strategies to help businesses achieve sustainable growth.
              </p>

              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                  What Does a Digital Marketing Agency Do?
                </h3>
                <p>
                  A professional agency develops customized marketing strategies based on your business goals, target audience, industry, and competition. Instead of offering one-size-fits-all solutions, experienced agencies analyze your current marketing performance and identify opportunities for improvement.
                </p>

                <div className="overflow-x-auto rounded-xl border border-white/10 my-6">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="bg-white/5 border-b border-white/10 uppercase tracking-widest text-[10px] font-bold text-white">
                        <th className="p-4">Service</th>
                        <th className="p-4">Purpose</th>
                        <th className="p-4 text-primary">Business Benefit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { s: "SEO", p: "Improve search rankings", b: "More organic traffic" },
                        { s: "PPC Advertising", p: "Generate immediate leads", b: "Faster ROI" },
                        { s: "Social Media Marketing", p: "Build engagement", b: "Brand awareness" },
                        { s: "Content Marketing", p: "Educate customers", b: "Increased trust" },
                        { s: "Email Marketing", p: "Nurture prospects", b: "Higher conversions" },
                        { s: "Website Optimization", p: "Improve user experience", b: "Better conversion rates" },
                        { s: "Analytics & Reporting", p: "Measure performance", b: "Smarter business decisions" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/5 transition-colors">
                          <td className="p-4 font-bold text-white">{row.s}</td>
                          <td className="p-4 text-gray-400">{row.p}</td>
                          <td className="p-4 font-semibold text-primary">{row.b}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p>
                  By combining these services into a unified strategy, agencies help businesses attract, engage, and convert customers more effectively.
                </p>

                {/* Image 1 Placement */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                  <Image
                    src="/assets/blog/agency-near-me-discussion.jpg"
                    alt="Digital marketing agency team discussing SEO, PPC, analytics, and online marketing strategies."
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Core Services Offered Section */}
            <section id="services" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#4</span> Core Services Offered by a Full-Service Agency
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Understanding the services offered by an agency helps you choose a partner capable of meeting your business needs.
              </p>

              {/* SEO Sub-section */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                  1. Search Engine Optimization (SEO)
                </h3>
                <p>
                  SEO is one of the most valuable long-term marketing investments. It focuses on improving your website&apos;s visibility in search engines so potential customers can find your business naturally.
                </p>
                <p>
                  A comprehensive strategy includes keyword research, on-page optimization, technical SEO, link building, and performance monitoring. To understand official search engine guidelines, check out the <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Search Central SEO Starter Guide</a> and <a href="https://moz.com/beginners-guide-to-seo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Moz Beginner&apos;s Guide to SEO</a>.
                </p>
                <div className="p-5 rounded-xl bg-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Benefits of SEO:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal">
                    <span>• Higher Google rankings</span>
                    <span>• Increased website traffic</span>
                    <span>• Better-quality leads</span>
                    <span>• Long-term business growth</span>
                    <span>• Lower customer acquisition costs</span>
                  </div>
                </div>
              </div>

              {/* PPC Sub-section */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                  2. Pay-Per-Click (PPC) Advertising
                </h3>
                <p>
                  PPC advertising delivers immediate visibility by placing your business at the top of search engine results through paid ads. Popular platforms include Google Ads, Microsoft Advertising, YouTube Ads, and social media networks.
                </p>
                <div className="p-5 rounded-xl bg-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">PPC Is Ideal For:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal">
                    <span>• Product launches & promos</span>
                    <span>• Fast lead generation</span>
                    <span>• Local search ads</span>
                    <span>• Retargeting audiences</span>
                    <span>• E-commerce store scale</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  <strong>Pro Tip:</strong> The best agencies combine SEO and PPC strategies to maximize both short-term wins and long-term growth.
                </p>
              </div>

              {/* Social Media Sub-section */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                  3. Social Media Marketing
                </h3>
                <p>
                  Your customers spend hours each day on social media platforms. A digital marketing agency helps businesses build meaningful relationships with audiences across platforms like Facebook, Instagram, LinkedIn, X, TikTok, and Pinterest.
                </p>
                <p>
                  This includes content creation, community management, graphic design, paid advertising campaigns, and audience engagement metrics.
                </p>
              </div>

              {/* Content Marketing Sub-section */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                  4. Content Marketing
                </h3>
                <p>
                  Content is the foundation of successful digital marketing. Quality content helps answer customer questions, solve problems, and build credibility with both users and search engines.
                </p>
                <p>
                  Examples include blog posts, case studies, industry guides, white papers, videos, infographics, and FAQs. For exceptional learning materials, you can visit <a href="https://www.hubspot.com/marketing" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">HubSpot Marketing Resources</a>.
                </p>
              </div>

              {/* Website Design & Dev Sub-section */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                  5. Website Design and Optimization
                </h3>
                <p>
                  Your website is often your most important marketing asset. An outdated or slow website can drive visitors away before they become customers.
                </p>
                <p>
                  Professional agencies focus on mobile responsiveness, fast loading speeds, clear navigation, user-friendly layouts, conversion optimization (CRO), and strong calls to action.
                </p>
              </div>

              {/* Email Marketing Sub-section */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                  6. Email Marketing
                </h3>
                <p>
                  Email remains one of the highest-performing digital marketing channels. Rather than sending generic promotions, agencies create personalized campaigns that nurture customer relationships, welcome sequences, product announcements, and customer retention systems.
                </p>
              </div>

              {/* Local SEO Sub-section */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                  7. Local SEO
                </h3>
                <p>
                  If you serve customers in a specific city or region, Local SEO is essential. It helps businesses appear in Google Maps, local search results, and &quot;near me&quot; searches.
                </p>
                <p>
                  Key activities include optimizing your Google Business Profile (refer to <a href="https://www.google.com/business/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Business Profile Help</a>), building local citations, managing online reviews, and creating location-specific landing content.
                </p>
              </div>

              {/* Image 2 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                <Image
                  src="/assets/blog/agency-near-me-seo-expert.jpg"
                  alt="SEO expert analyzing keyword rankings and website performance for business growth."
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Benefits of Hiring Local Section */}
            <section id="benefits" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#5</span> Benefits of Hiring a Local Digital Marketing Agency
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Searching for a <strong>digital marketing agency near me</strong> isn&apos;t just about convenience. Working with a local agency often provides advantages that remote agencies may struggle to match.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">Better Understanding of Your Market</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Local agencies understand regional customer behavior, local competitors, and market trends. This insight helps create campaigns that resonate with your audience and improve results. For example, targeting customers in a major metropolitan area requires different messaging than targeting a small community.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">Easier Communication & Accessibility</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Although virtual meetings are common, having the option to meet in person can strengthen collaboration and build trust. Local agencies are accessible for strategy sessions, campaign reviews, interactive workshops, and business consultations.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">Stronger Local SEO Strategies</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Local agencies are highly experienced in optimizing businesses for geographic searches (like &quot;SEO company near me&quot; or &quot;web design company near me&quot;). They understand how to optimize map listings, local citations, landing pages, and customer reviews.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">Faster Response Times & Dedicated Support</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    When questions arise or campaigns need adjustments, working with a nearby agency can make communication quicker and more efficient. Local agencies often build long-term relationships with their clients rather than treating them as account numbers.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">Access to a Full Team of Specialists</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    A reputable agency brings together experts in multiple disciplines—SEO specialists, PPC managers, content writers, graphic designers, web developers, social media strategists, and marketing analysts.
                  </p>
                </div>
              </div>

              {/* Image 3 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                <Image
                  src="/assets/blog/agency-near-me-client-meeting.jpg"
                  alt="Business owner meeting with a local digital marketing agency for SEO and online growth planning."
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* How to Choose Section */}
            <section id="choose" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#6</span> How to Choose the Best Agency Near You
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Choosing the right agency is about more than comparing prices. The best agency understands your business, communicates clearly, and delivers measurable results.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">Define Your Marketing Goals</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Before contacting an agency, identify what you want to achieve (e.g. increase website traffic, generate more qualified leads, grow online sales). Clear goals help agencies recommend the right strategy instead of selling unnecessary services.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">Review Their Experience & Testimonials</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Experience matters, especially if the agency has worked with businesses similar to yours. Look for years in business, client testimonials, case studies, portfolio of completed projects, and proven campaign results.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">Check Client Reviews & Transparency</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Customer feedback provides valuable insight into how an agency communicates, solves problems, and delivers results. Look for reviews that mention professionalism, transparency, and return on investment.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">Evaluate Their Service Integration</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    A full-service digital marketing agency should provide cohesive solutions that support your long-term growth. Working with one agency for multiple services creates a more consistent marketing strategy.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-base font-bold uppercase tracking-wider text-white">Compare Value, Not Just Price:</h3>
                
                <div className="overflow-x-auto rounded-xl border border-white/10">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="bg-white/5 border-b border-white/10 uppercase tracking-widest text-[10px] font-bold text-white">
                        <th className="p-4">Low-Cost Agency</th>
                        <th className="p-4 text-primary">Professional Agency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { l: "Generic strategies", p: "Customized marketing plans" },
                        { l: "Limited reporting", p: "Detailed performance reports" },
                        { l: "Poor communication", p: "Dedicated account support" },
                        { l: "Short-term focus", p: "Long-term business growth" },
                        { l: "Few services", p: "Full-service marketing expertise" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/5 transition-colors">
                          <td className="p-4 font-bold text-gray-500">{row.l}</td>
                          <td className="p-4 font-semibold text-white">{row.p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Image 4 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                <Image
                  src="/assets/blog/agency-near-me-choosing-strategy.jpg"
                  alt="Business owner choosing the best digital marketing agency based on SEO reports and marketing strategy."
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Questions to Ask & Red Flags Section */}
            <section id="questions" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#7</span> Questions to Ask & Red Flags to Avoid
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Prepare these questions before your consultation to evaluate the agency:
              </p>
              <div className="space-y-4">
                {[
                  { q: "What industries do you specialize in?", a: "Industry experience helps agencies understand customer behavior and competition more quickly." },
                  { q: "Can you share recent case studies?", a: "Real examples demonstrate the agency's ability to deliver results." },
                  { q: "How do you measure success?", a: "Look for answers based on measurable outcomes such as website traffic, leads, conversion rates, and ROI." },
                  { q: "Who will manage my account and how often will we communicate?", a: "Knowing who you'll work with directly improves communication and accountability." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 border border-white/5 bg-[#121216]/40 rounded-xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">{item.q}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">{item.a}</p>
                  </div>
                ))}
              </div>

              <div className="overflow-x-auto rounded-xl border border-white/10 my-4">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 uppercase tracking-widest text-[10px] font-bold text-white">
                      <th className="p-4">Service Channel</th>
                      <th className="p-4 text-primary">Expected Timeline for Results</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { s: "PPC Advertising", t: "Days to weeks" },
                      { s: "Social Media", t: "1-3 months" },
                      { s: "SEO", t: "3-6 months (or longer for competitive markets)" },
                      { s: "Content Marketing", t: "3-6 months" }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-bold text-gray-400">{row.s}</td>
                        <td className="p-4 font-semibold text-white">{row.t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <AlertCircle size={18} className="text-red-400" /> Red Flags to Watch For
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { t: "Guaranteed #1 Rankings", d: "No agency can guarantee the number one position on Google. Search rankings depend on many factors outside an agency's control." },
                    { t: "No Clear Strategy", d: "If an agency can't explain its approach, outline clear objectives, timeline, deliverables, or success metrics, it may not have one." },
                    { t: "Lack of Transparency", d: "Avoid agencies that won't explain pricing, contract terms, campaign performance, or advertising spend transparently." },
                    { t: "Extremely Low Prices", d: "If a deal seems too good to be true, it usually is. Very low pricing may indicate outsourced low-quality work, bot traffic, or black-hat tactics." }
                  ].map((red, idx) => (
                    <div key={idx} className="p-4 border border-white/5 bg-[#1a0e10]/20 rounded-xl space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
                        <AlertCircle size={14} /> {red.t}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-normal">{red.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Cost & Why Choose G2G Section */}
            <section id="pricing" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#8</span> How Much Does It Cost? & Why G2G Media House
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Pricing varies based on business size, industry competition, marketing goals, services required, and campaign complexity. Common models include:
              </p>
              <div className="overflow-x-auto rounded-xl border border-white/10 my-4">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 uppercase tracking-widest text-[10px] font-bold text-white">
                      <th className="p-4">Pricing Model</th>
                      <th className="p-4 text-primary">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { m: "Monthly Retainer", b: "Ongoing marketing support" },
                      { m: "Project-Based", b: "Website redesigns or one-time campaigns" },
                      { m: "Hourly Consulting", b: "Strategy sessions and audits" },
                      { m: "Performance-Based", b: "Specific measurable outcomes (where appropriate)" }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-bold text-gray-400">{row.m}</td>
                        <td className="p-4 font-semibold text-white">{row.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400">
                <strong>Pro Tip:</strong> Request a detailed proposal outlining services, deliverables, timelines, and reporting before signing any agreement.
              </p>

              <div className="space-y-4 pt-6">
                <h3 className="text-lg font-black uppercase tracking-tight text-white">Why Choose G2G Media House?</h3>
                <p>
                  Selecting the right digital marketing partner is an investment in your business&apos;s future. At <Link href="/" className="text-primary hover:underline">G2G Media House</Link>, we focus on strategies that deliver sustainable growth—not just short-term wins.
                </p>
                <div className="p-5 rounded-xl bg-[#121216]/50 border border-white/5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Our customized approach includes:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400 font-normal">
                    <span>• Strategies tailored to business goals</span>
                    <span>• Search Engine Optimization (SEO)</span>
                    <span>• Pay-Per-Click (PPC) campaigns</span>
                    <span>• Social media branding campaigns</span>
                    <span>• High-quality content creation</span>
                    <span>• Website and landing optimization</span>
                    <span>• Transparent reporting & dashboards</span>
                    <span>• Dedicated advisor support</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Checklist Section */}
            <section id="checklist" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#9</span> Agency Selection Checklist
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Use this interactive checklist to guide your search for the perfect digital marketing agency near you. Check items off to see your readiness score!
              </p>

              {/* Progress bar */}
              <div className="p-6 border border-white/10 rounded-2xl bg-[#121216]/50">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Readiness Score</span>
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
                <span className="text-primary font-mono text-sm">#10</span> Frequently Asked Questions
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

            {/* Conclusion / CTA */}
            <section className="pt-6 border-t border-white/5 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Conclusion</h2>
              <p>
                Finding the right <strong>digital marketing agency near me</strong> is one of the most important decisions you can make for your business. A skilled agency does more than increase traffic—it helps you attract the right audience, generate qualified leads, strengthen your brand, and grow revenue over time.
              </p>
              <p>
                Take the time to evaluate experience, services, communication, and transparency before making your choice. A trusted marketing partner will understand your goals, provide clear reporting, and adapt strategies as your business evolves.
              </p>
              <p>
                If you&apos;re ready to expand your online presence with a team committed to measurable results, now is the perfect time to invest in a digital marketing strategy built for long-term success.
              </p>

              <div className="p-6 border border-primary/20 bg-gradient-to-br from-primary/5 via-green-500/0 to-[#121216] rounded-3xl space-y-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white">Grow Your Business with G2G Media House</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-normal">
                  Ready to attract more customers and increase your online visibility? Whether you need SEO, PPC, social media marketing, or a complete digital strategy, our team is here to help.
                </p>
                <Link
                  href="/contact-form"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-white/30"
                >
                  Contact G2G Media House Today <ArrowRight size={14} />
                </Link>
              </div>
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
                  href={`https://twitter.com/intent/tweet?text=Check out this awesome Digital Marketing Agency Guide!`}
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
