"use client";

import { useState, useEffect, useRef } from "react";
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
  AlertCircle
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
    "what-is-dm",
    "why-need-dm",
    "essential-strategies",
    "seo-vs-paid",
    "common-mistakes",
    "how-to-build",
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
    { id: "c1", text: "Mobile-friendly website", checked: false },
    { id: "c2", text: "Fast loading pages", checked: false },
    { id: "c3", text: "SEO-optimized content", checked: false },
    { id: "c4", text: "Google Business Profile listing", checked: false },
    { id: "c5", text: "Active social media accounts", checked: false },
    { id: "c6", text: "Clear contact information & phone numbers", checked: false },
    { id: "c7", text: "Recent customer reviews displayed", checked: false },
    { id: "c8", text: "Secure HTTPS website protocol", checked: false },
    { id: "c9", text: "Regular updates to blog or news section", checked: false },
    { id: "c10", text: "Web analytics tracking dashboard setup", checked: false },
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
    { id: "what-is-dm", text: "What is Digital Marketing?" },
    { id: "why-need-dm", text: "Why Small Businesses Need It" },
    { id: "essential-strategies", text: "5 Essential Strategies" },
    { id: "seo-vs-paid", text: "SEO vs Paid Ads Comparison" },
    { id: "common-mistakes", text: "Common Pitfalls" },
    { id: "how-to-build", text: "5-Step Roadmap" },
    { id: "checklist", text: "Action Checklist" },
    { id: "faq", text: "FAQ" }
  ];

  // FAQ Content Array
  const faqs = [
    {
      q: "What is digital marketing?",
      a: "Promotion of products or services that are sold via online platforms (e.g., search engines, social media, websites, and paid advertising) is known as the digital marketing of goods and services."
    },
    {
      q: "Is digital marketing good for small businesses?",
      a: "Yes. It helps businesses reach more customers, generate qualified leads, increase brand awareness, and improve sales while staying within budget by targeting audiences precisely."
    },
    {
      q: "How long does SEO take to show results?",
      a: "Most businesses begin seeing meaningful improvements within three to six months. Highly competitive industries often require more continuous optimization and high-quality authority building."
    },
    {
      q: "Which platform is best for my business marketing?",
      a: "The right platform depends entirely on where your audience spends their time. Google is ideal for search intent, Instagram and Facebook are effective for visual consumer engagement, LinkedIn suits B2B audiences, and YouTube is unmatched for educational content."
    },
    {
      q: "Should I invest in SEO or paid ads?",
      a: "SEO gives you the best opportunity for long-term compounding growth, while paid ads provide immediate visibility and instant lead flow. The most successful businesses combine SEO with paid ads for consistent short-term and long-term customer acquisition."
    },
    {
      q: "How often should I publish blog posts?",
      a: "Publishing two to four high-quality, in-depth blog posts per month is typically sufficient to keep your website fresh, signal authority to search engines, and rank for related search queries."
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
            <span className="text-gray-300">Digital Marketing Guide</span>
          </nav>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              Growth Strategy
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Calendar size={14} className="text-primary" /> July 13, 2026
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Clock size={14} className="text-primary" /> 8 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] max-w-5xl mb-6">
            Digital Marketing for Small Businesses: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">The Complete Guide</span> to Growing in 2026
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Learn how digital marketing helps small businesses attract more customers, generate quality leads, and increase sales. Discover proven strategies for SEO, social media, Google Ads, and website optimization.
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
            
            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#1</span> Growing Faster
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                There are continuously increasing difficulties in small businesses. Many consumers start searching online before making any purchases and will continue their shopping experience online, investigating all brands and products as well as reading customer reviews; as well as expecting companies to provide some level of professionalism on their website.
              </p>
              <p>
                If customers are unable to locate your company online you will not provide customers to your direct competitors. Digital marketing allows small companies to engage an appropriate target audience, create credibility, create leads that meet the criteria of qualification and ultimately increase sales with a lower cost of marketing than traditional methods of marketing.
              </p>
              <div className="p-5 border border-primary/20 bg-primary/5 rounded-2xl flex gap-4">
                <Sparkles className="text-primary flex-shrink-0 mt-0.5" size={20} />
                <p className="text-xs text-primary font-bold uppercase tracking-wide leading-relaxed">
                  This eBook guide will provide you a definition of Digital marketing, its importance to a small business and techniques used to grow your company by 2026.
                </p>
              </div>
            </section>

            {/* What is DM Section */}
            <section id="what-is-dm" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#2</span> What Is Digital Marketing?
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Digital marketing is a method of promoting your business using online tools such as:
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Search engines (SEO & PPC)",
                  "Social media platforms",
                  "Websites & Landing Pages",
                  "Email marketing campaigns",
                  "Online advertisements (PPC)",
                  "Content marketing & Blogging"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl text-xs uppercase tracking-wider font-bold">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <p>
                Unlike traditional marketing, digital marketing allows you to target specific audiences, track results, and adjust campaigns based on actual data in real-time.
              </p>
              <p>
                If you are a local business owner, a startup, and/or developing company, digital marketing can help you engage your customers at the exact time and place that they are most likely to be using the Internet.
              </p>
            </section>

            {/* Why Need DM Section */}
            <section id="why-need-dm" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#3</span> Why Small Businesses Need It
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Many small companies only rely on client referrals and foot traffic to bring in new business. Although client referrals can be a great way to find new customers, they are not a scalable solution.
              </p>
              <p>
                Digital marketing provides an opportunity for small businesses to reach out to new customers every single day. There are some great advantages to using digital marketing for your business:
              </p>

              {/* Grid of Advantages */}
              <div className="space-y-6">
                {[
                  {
                    title: "Increase Brand Awareness",
                    desc: "Customers like buying from brands that they know and trust. By using consistent digital marketing, you keep your business name in front of your potential customers. Once they are ready to buy your product/service, they will remember your business."
                  },
                  {
                    title: "Generate High-Quality Leads",
                    desc: "Traditional advertising has a very low return on investment (ROI) because it targets everyone, instead of only those who are currently searching for your product/service."
                  },
                  {
                    title: "Build Customer Trust",
                    desc: "Customers will often do research on your business by looking at your website and reviews, or by checking out your social media accounts. By demonstrating that you have a strong online presence, you will develop trust and credibility among potential customers."
                  },
                  {
                    title: "Compete with Larger Companies",
                    desc: "Digital marketing has created opportunities for small businesses to effectively compete with larger companies by using targeted marketing techniques that are relevant to potential customers."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 border border-white/5 bg-[#121216]/40 hover:bg-[#121216]/80 rounded-2xl transition-all">
                    <h3 className="text-base font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                      <Target size={16} className="text-primary" /> {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Track Results Callout */}
              <div className="p-6 border border-dashed border-white/10 rounded-2xl bg-black/20">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                  <CheckCircle size={14} /> Track & Measure Every Result:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Website traffic",
                    "Leads generated",
                    "Sales & Revenue",
                    "Conversion rates",
                    "Cost per lead (CPL)",
                    "Return on investment (ROI)"
                  ].map((metric, idx) => (
                    <div key={idx} className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                      • {metric}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Essential Strategies Section */}
            <section id="essential-strategies" className="scroll-mt-28 space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#4</span> Essential Strategies
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Not every marketing strategy delivers the same results. The following five methods consistently help small businesses grow.
              </p>

              {/* Strategy 1 */}
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="text-primary">1.</span> Search Engine Optimization (SEO)
                </h3>
                <p>
                  SEO is a way to help increase your site's exposure on search engines. Your aim is to be listed on the 1st page of search results when potential customers are searching for services you provide.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">SEO Includes:</h4>
                    <ul className="text-xs text-gray-400 space-y-1.5 font-normal">
                      <li>• Keyword research</li>
                      <li>• High-quality content</li>
                      <li>• Fast website speed</li>
                      <li>• Mobile-friendly design</li>
                      <li>• Internal linking</li>
                      <li>• Optimized images</li>
                      <li>• Technical SEO audits</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Benefits of SEO:</h4>
                    <ul className="text-xs text-gray-400 space-y-1.5 font-normal">
                      <li>• Free organic traffic</li>
                      <li>• Higher authority & credibility</li>
                      <li>• Better, high-intent lead quality</li>
                      <li>• Long-term sustainable growth</li>
                      <li>• Lower customer acquisition cost</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-gray-500 italic mt-2">
                  Example: If a user searches for &quot;Digital Marketing Agency near me,&quot; the better optimized a website is, the more likely that business will be listed first.
                </p>
              </div>

              {/* Strategy 2 */}
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="text-primary">2.</span> Social Media Marketing
                </h3>
                <p>
                  Millions of people use social media every day. Platforms like Instagram, Facebook, LinkedIn, and YouTube help businesses connect directly with potential customers.
                </p>
                <div className="p-5 rounded-xl bg-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Effective Social Media Includes:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal">
                    <span>• Educational posts</span>
                    <span>• Customer success stories</span>
                    <span>• Short-form video reels</span>
                    <span>• Behind-the-scenes content</span>
                    <span>• Product demonstrations</span>
                    <span>• Industry tips & hacks</span>
                  </div>
                </div>
                <p>
                  Posting consistently keeps your brand visible and builds stronger, long-term customer relationships.
                </p>
              </div>

              {/* Strategy 3 */}
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="text-primary">3.</span> Google Ads
                </h3>
                <p>
                  With Google Ads, companies can appear near the beginning of search engine results within minutes. This method can be used by companies to generate prospects more quickly.
                </p>
                <div className="p-5 rounded-xl bg-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Advantages Include:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal">
                    <span>• Instant search visibility</span>
                    <span>• Highly targeted search traffic</span>
                    <span>• Flexible budgeting caps</span>
                    <span>• Fast, measurable results</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 italic">
                  Google Ads work best when combined with search engine optimization (SEO) for compounding long-term growth.
                </p>
              </div>

              {/* Strategy 4 */}
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="text-primary">4.</span> Content Marketing
                </h3>
                <p>
                  Content marketing helps educate potential customers before they buy. Useful content builds trust and positions your business as an authority/expert.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Blog articles", "Videos", "Guides & Ebooks", "Checklists", "Case studies", "FAQs"].map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
                <p>
                  Helpful content answers target customer questions and improves organic search engine rankings.
                </p>
              </div>

              {/* Strategy 5 */}
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="text-primary">5.</span> Website Optimization
                </h3>
                <p>
                  Your website should convert visitors into customers. A professional website creates a strong first impression and encourages visitors to take action.
                </p>
                <div className="p-5 rounded-xl bg-white/5 border border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">An Effective Website Must Include:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400 font-normal">
                    <span>• Fast page loading speed</span>
                    <span>• Complete mobile responsiveness</span>
                    <span>• Clear and simple navigation</span>
                    <span>• Strong, visible call-to-action buttons</span>
                    <span>• Easy-to-use contact forms</span>
                    <span>• Trust signals & secure badges</span>
                    <span>• Social proof & customer reviews</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SEO vs Paid Ads Table Section */}
            <section id="seo-vs-paid" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#5</span> SEO vs Paid Advertising
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 uppercase tracking-widest text-[10px] font-bold text-white">
                      <th className="p-4 md:p-5">Feature</th>
                      <th className="p-4 md:p-5 text-primary">SEO</th>
                      <th className="p-4 md:p-5 text-green-400">Paid Ads</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { f: "Traffic Timeline", s: "Long-term compounding traffic", p: "Immediate instant traffic" },
                      { f: "Cost Structure", s: "Lower cost over time", p: "Ongoing media spend budget required" },
                      { f: "Core Value", s: "Builds authority & trust", p: "Delivers faster direct results" },
                      { f: "Sustainability", s: "Sustainable and permanent", p: "Stops completely when budget runs out" },
                      { f: "ROI Potential", s: "Higher margins & ROI over time", p: "Great for promotions & instant scaling" }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 md:p-5 font-bold text-gray-400">{row.f}</td>
                        <td className="p-4 md:p-5 font-semibold text-white">{row.s}</td>
                        <td className="p-4 md:p-5 text-gray-300">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 text-center font-semibold uppercase tracking-wide">
                Conclusion: The best businesses combine SEO with paid advertising for consistent, scaling growth.
              </p>
            </section>

            {/* Common Mistakes Section */}
            <section id="common-mistakes" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#6</span> Common Digital Marketing Mistakes
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Many businesses waste time and money by making avoidable mistakes. Avoiding these common mistakes improves marketing performance and customer satisfaction.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { m: "Ignoring SEO and website ranking signals", icon: <AlertCircle size={16} /> },
                  { m: "Posting on social media without a strategy", icon: <AlertCircle size={16} /> },
                  { m: "Having a slow, non-optimized website", icon: <AlertCircle size={16} /> },
                  { m: "Not tracking or analyzing lead conversions", icon: <AlertCircle size={16} /> },
                  { m: "Targeting the wrong target audience demographics", icon: <AlertCircle size={16} /> },
                  { m: "Using poor-quality, generic content and copy", icon: <AlertCircle size={16} /> },
                  { m: "Inconsistent brand styling and messaging", icon: <AlertCircle size={16} /> },
                  { m: "Not responding to customer queries quickly enough", icon: <AlertCircle size={16} /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 p-4 border border-white/5 bg-[#1a0e10]/20 rounded-xl">
                    <span className="text-red-400 flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-tight text-gray-300">{item.m}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Build Section */}
            <section id="how-to-build" className="scroll-mt-28 space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#7</span> How to Build a Marketing Strategy
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Building a digital marketing strategy doesn&apos;t have to be complex. Follow these five simple steps to align your marketing and business goals.
              </p>

              {/* Steps vertical list */}
              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5">
                {[
                  {
                    step: "Step 1",
                    title: "Define your business goals",
                    desc: "Make your marketing trackable by defining exact goals: increase website organic traffic, generate higher volume of leads, improve online direct sales, or build brand awareness."
                  },
                  {
                    step: "Step 2",
                    title: "Identify your target audience",
                    desc: "Understand their age, physical location, interest profiles, biggest business/personal problems, and buying behavior to craft appropriate messaging."
                  },
                  {
                    step: "Step 3",
                    title: "Choose the right marketing channels",
                    desc: "Focus your energy and spend on the platforms where your target customers actually spend their time instead of trying to be everywhere."
                  },
                  {
                    step: "Step 4",
                    title: "Create valuable, custom content",
                    desc: "Answer customer questions directly, solve their minor hurdles with guides, and provide information that proves your industry expertise."
                  },
                  {
                    step: "Step 5",
                    title: "Measure results & optimize analytics",
                    desc: "Track performance regularly. Look at data dashboards and adjust your strategies to spend more on what works and cut what doesn&apos;t."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative flex gap-6 z-10 group">
                    <div className="w-10 h-10 rounded-full bg-[#121216] border border-white/10 group-hover:border-primary flex items-center justify-center font-bold text-xs text-primary transition-all flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="bg-[#121216]/30 border border-white/5 rounded-2xl p-5 group-hover:bg-[#121216]/60 transition-all flex-grow">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">{item.step}</span>
                      <h4 className="text-base font-bold uppercase tracking-tight text-white mb-2">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Checklist Section */}
            <section id="checklist" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#8</span> Digital Marketing Checklist
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Use this interactive checklist to strengthen your online presence. Click items as you check them off to monitor your score!
              </p>

              {/* Progress bar */}
              <div className="p-6 border border-white/10 rounded-2xl bg-[#121216]/50">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Marketing Readiness</span>
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
                <span className="text-primary font-mono text-sm">#9</span> Frequently Asked Questions
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Find answers to common questions about launching digital marketing campaigns for growing companies.
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
                One of the best ways for small businesses to gain customers, create trust, and grow their business is via digital marketing. As you develop a digital marketing strategy that incorporates search engine optimization (SEO), content marketing, social media channels, paid advertising, and an effective website, you should also consider utilizing multiple marketing channels rather than relying on one.
              </p>
              <p className="font-bold text-white">
                No matter if you are a new business or looking to grow your existing business, investing in digital marketing today will provide you with the foundation to achieve future growth and give you a competitive edge over other companies.
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
                  href={`https://twitter.com/intent/tweet?text=Check out this awesome Digital Marketing Guide for Small Businesses in 2026!`}
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
                Ready to implement these strategies? Let the G2G experts design your customized growth system.
              </p>
              <Link
                href="/contact-form"
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-black font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-white transition-all shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-white/20"
              >
                Book Free Audit <ArrowRight size={12} />
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
