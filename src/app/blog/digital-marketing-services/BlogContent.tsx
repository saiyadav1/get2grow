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
    "definition",
    "why-need",
    "seo",
    "ppc",
    "social",
    "content",
    "branding",
    "website",
    "leadgen",
    "cro",
    "together",
    "comparison",
    "choose",
    "mistakes",
    "investment",
    "timeline",
    "strategy-steps",
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
    { id: "c1", text: "Does the agency understand my target audience?", checked: false },
    { id: "c2", text: "Does it understand my business goals?", checked: false },
    { id: "c3", text: "Is there a clear strategy?", checked: false },
    { id: "c4", text: "Are the recommended services connected to my objectives?", checked: false },
    { id: "c5", text: "Can the agency explain how success will be measured?", checked: false },
    { id: "c6", text: "Does it provide transparent reporting?", checked: false },
    { id: "c7", text: "Does it have relevant experience?", checked: false },
    { id: "c8", text: "Does it understand SEO and paid advertising?", checked: false },
    { id: "c9", text: "Can it create quality content and improve conversion paths?", checked: false },
    { id: "c10", text: "Does it focus on business results rather than vanity metrics?", checked: false }
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
    { id: "definition", text: "What Are Services?" },
    { id: "why-need", text: "Why Do You Need It?" },
    { id: "seo", text: "1. SEO" },
    { id: "ppc", text: "2. PPC" },
    { id: "social", text: "3. Social Media" },
    { id: "content", text: "4. Content Marketing" },
    { id: "branding", text: "5. Branding Strategy" },
    { id: "website", text: "6. Web Optimization" },
    { id: "leadgen", text: "7. Lead Gen" },
    { id: "cro", text: "8. CRO" },
    { id: "together", text: "Integration" },
    { id: "comparison", text: "Channel Comparison" },
    { id: "choose", text: "Choosing an Agency" },
    { id: "mistakes", text: "Common Mistakes" },
    { id: "investment", text: "How Much to Invest" },
    { id: "timeline", text: "Timelines & Speeds" },
    { id: "strategy-steps", text: "7-Step Strategy" },
    { id: "checklist", text: "Agency Checklist" },
    { id: "faq", text: "FAQ" }
  ];

  // FAQ Content Array
  const faqs = [
    {
      q: "What are digital marketing services?",
      a: "Digital marketing services are strategies that help businesses attract and convert customers through online channels. They can include SEO, paid advertising, social media marketing, content marketing, branding, website optimization, lead generation, and conversion optimization. The right mix depends on your business goals, target audience, industry, budget, and buying journey."
    },
    {
      q: "What are the most important digital marketing services for a small business?",
      a: "For many small businesses, a combination of local or organic SEO, paid advertising, social media, useful content, and conversion-focused website optimization can provide a strong foundation. However, the best mix depends on where customers discover the business and how they make purchasing decisions. A focused strategy is usually more effective than trying to manage every marketing channel at once."
    },
    {
      q: "How long does digital marketing take to show results?",
      a: "The timeline depends on the channel. Paid advertising can begin generating traffic quickly, while SEO and content marketing typically require more time to build visibility and authority. Branding and social media also become more valuable through consistent exposure. Instead of expecting one sudden result, businesses should track progress through qualified leads, conversions, customer acquisition costs, organic visibility, and revenue."
    },
    {
      q: "How much do digital marketing services cost?",
      a: "There is no single price for digital marketing services. Costs vary based on the services required, business size, competition, target market, advertising budget, and level of strategy and execution. A small local business may need a very different investment from an e-commerce company or enterprise. The better approach is to compare the expected business value of the marketing investment rather than choosing an agency based only on its monthly fee."
    },
    {
      q: "How do I choose the right digital marketing agency?",
      a: "Start by evaluating whether the agency understands your business, audience, competitors, goals, and sales process. Ask how it measures results, what reporting you will receive, what services are recommended, and whether it can show relevant examples of its work. Avoid agencies that focus entirely on vanity metrics or promise guaranteed rankings. Choose a partner that can explain its strategy clearly and connect marketing activity to business outcomes."
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
            <span className="text-gray-300">Digital Marketing Services Guide</span>
          </nav>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              Digital Marketing Services
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Calendar size={14} className="text-primary" /> August 13, 2026
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Clock size={14} className="text-primary" /> 14 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] max-w-5xl mb-6">
            Digital Marketing Services: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 font-black">That Drive Real</span> Growth
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Looking for digital marketing services? Learn which strategies drive traffic, leads, sales, and long-term growth—and how to choose the right agency.
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
                src="/assets/blog/digital-marketing-services-featured.jpg"
                alt="Digital marketing strategy meeting with business founders in Hyderabad"
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
                Your customers are already online.
              </p>
              <p>
                They're searching Google. They're scrolling Instagram. They're watching YouTube videos. They're comparing brands, reading reviews, checking websites, and asking questions before they ever speak to a salesperson. The real question isn't whether your business needs an online presence. It’s whether your online presence is bringing your business.
              </p>
              <p>
                That's where professional <strong>digital marketing services</strong> come in.
              </p>
              <p>
                Digital marketing is no longer just about posting on social media or running occasional advertisements. A strong strategy connects search, content, social media, paid advertising, branding, websites, landing pages, and conversion tracking into one system. When those pieces work together, your marketing can do more than generate attention. It can attract the right people, build trust, generate qualified leads, and turn interest into revenue.
              </p>
              <p>
                This guide explains what digital marketing services include, which ones matter most, how they work together, and what to look for when choosing a digital marketing partner.
              </p>
            </section>

            {/* What Are Digital Marketing Services? */}
            <section id="definition" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#2</span> What Are Digital Marketing Services?
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Digital marketing services are professional strategies and activities designed to help businesses promote their products or services through digital channels.
              </p>
              <p>
                These channels can include:
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-gray-400 bg-white/5 p-5 rounded-2xl">
                <span>• Search engines</span>
                <span>• Social media platforms</span>
                <span>• Websites</span>
                <span>• Search advertising</span>
                <span>• Display advertising</span>
                <span>• Email</span>
                <span>• Video platforms</span>
                <span>• Content platforms</span>
                <span className="col-span-2">• Digital communities</span>
              </div>
              <p>
                The important point is that digital marketing isn't one service. It's an ecosystem.
              </p>
              <p>
                For example, someone might discover your business through a Google search, visit your website, see your Instagram content later, click a retargeting advertisement, and eventually contact your sales team. If each touchpoint tells the same story, the customer journey becomes much stronger.
              </p>
              <div className="p-5 border border-primary/20 bg-primary/5 rounded-2xl flex gap-4">
                <Sparkles className="text-primary flex-shrink-0 mt-0.5" size={20} />
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  <strong>Pro Tip:</strong> Don't choose marketing channels simply because your competitors use them. Start with your business goal, audience, offer, and customer journey. Then select the channels that support those objectives.
                </p>
              </div>
            </section>

            {/* Why Do Businesses Need Digital Marketing Services? */}
            <section id="why-need" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#3</span> Why Do Businesses Need Digital Marketing Services?
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Traditional marketing can still have value, but digital channels give businesses something extremely useful: <strong>measurability</strong>.
              </p>
              <p>
                You can often see:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Where visitors came from",
                  "Which campaigns generated leads",
                  "Which pages people visited",
                  "Which advertisements received clicks",
                  "Which keywords brought organic traffic",
                  "How many people converted",
                  "How much a campaign cost",
                  "Which content generated engagement"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl text-xs uppercase tracking-wider font-bold">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
              <p>
                That information gives businesses the opportunity to make smarter decisions.
              </p>
              <p>
                Google also recommends creating useful, reliable, people-first content rather than producing material primarily to manipulate search rankings. That principle should apply to your entire digital strategy—not just your blog.
              </p>
              <p>
                A good digital marketing strategy therefore isn't <em>"Let's get more traffic"</em>. It's <strong>"Let's attract the right people and give them a clear reason to become customers."</strong>
              </p>
            </section>

            {/* What Digital Marketing Services Should a Business Invest In? */}
            <section id="invest-what" className="scroll-mt-28 space-y-4">
              <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                What Digital Marketing Services Should a Business Invest In?
              </h3>
              <p>
                There isn't one universal marketing package that works for every business.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400 font-normal">
                <li>• <strong>A local service company</strong> may need local SEO, Google Ads, landing pages, and reviews.</li>
                <li>• <strong>An e-commerce company</strong> may need shopping campaigns, product content, retargeting, email marketing, and conversion optimization.</li>
                <li>• <strong>A startup</strong> may need positioning, branding, content, paid acquisition, and lead generation.</li>
                <li>• <strong>A personal brand</strong> may need social media, video content, LinkedIn marketing, and authority-building content.</li>
              </ul>
              <p>
                The strongest strategy is built around the business—not around a predetermined list of services. Here are the major digital marketing services businesses should consider.
              </p>
            </section>

            {/* 1. SEO */}
            <section id="seo" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#4</span> 1. Search Engine Optimization (SEO)
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                SEO helps your website become more visible when people search for information, products, or services related to your business. For the fundamentals, Google's <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">SEO Starter Guide</a> is a useful reference for understanding how search engines crawl, index, and understand websites.
              </p>
              <p>
                A professional SEO strategy can include:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">Keyword Research</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Finding the searches that matter to your business. The goal isn't to rank for every keyword. The goal is to identify searches that have a realistic connection to your products, services, and customers.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">On-Page SEO</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    This includes improving: Page titles, Headings, Content, Internal links, Images, URLs, Search intent alignment, and Page structure.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">Technical SEO</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Technical SEO helps search engines crawl, understand, and index your website. It can involve: Crawlability, Indexation, Site architecture, Mobile experience, Page performance, Structured data, and Canonicalization.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Businesses should also follow Google's <a href="https://developers.google.com/search/docs/essentials" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Search Essentials</a> when building and optimizing their websites.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">Off-Page SEO and Link Building</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Authority can also be built through relevant external mentions and links. But quality matters more than simply collecting large numbers of backlinks. The goal should be to earn links that make sense for your industry and provide genuine value.
                  </p>
                </div>
              </div>

              <div className="p-5 border border-primary/20 bg-primary/5 rounded-2xl">
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  <strong>Best for:</strong> Long-term organic visibility, high-intent searches, authority, and sustainable traffic.
                </p>
              </div>

              <div className="pt-2">
                <Link href="/#services" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider">
                  Check G2G SEO services <ArrowUpRight size={14} />
                </Link>
              </div>

              {/* Image 2 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                <Image
                  src="/assets/blog/seo-specialist-search-performance.jpg"
                  alt="SEO specialist analyzing search performance as part of digital marketing services"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* 2. PPC */}
            <section id="ppc" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#5</span> 2. Pay-Per-Click Advertising (PPC)
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                SEO can take time. Paid advertising can help businesses reach potential customers much faster. PPC advertising includes platforms such as Google Ads and social advertising platforms.
              </p>
              <p>
                A strong paid campaign involves much more than pressing the &quot;boost&quot; button. It may require:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal bg-white/5 p-4 rounded-xl">
                <span>• Audience research</span>
                <span>• Keyword research</span>
                <span>• Campaign structure</span>
                <span>• Ad copy</span>
                <span>• Creative development</span>
                <span>• Landing pages</span>
                <span>• Conversion tracking</span>
                <span>• Budget management</span>
                <span>• Bid optimization</span>
                <span>• Retargeting & analytics</span>
              </div>
              <p>
                The real objective isn't simply to get clicks. It's to generate **profitable actions**.
              </p>
              <p>
                For example, 1,000 clicks + 2 leads may be less valuable than 300 clicks + 25 qualified leads. PPC works best when advertising, landing pages, offers, and tracking are designed as one system.
              </p>

              <div className="pt-2">
                <Link href="/#services" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider">
                  Check our paid advertising services <ArrowUpRight size={14} />
                </Link>
              </div>

              {/* Image 3 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                <Image
                  src="/assets/blog/ppc-advertising-campaign-management.jpg"
                  alt="PPC advertising campaign management for digital marketing services"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* 3. Social Media */}
            <section id="social" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#6</span> 3. Social Media Marketing
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Social media can help businesses become visible, recognizable, and trusted. But posting randomly isn't a strategy.
              </p>
              <p>
                Effective social media marketing usually starts with:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal bg-white/5 p-4 rounded-xl">
                <span>1. Audience research</span>
                <span>2. Content pillars</span>
                <span>3. Brand positioning</span>
                <span>4. Creative direction</span>
                <span>5. Content calendar</span>
                <span>6. Short-form video</span>
                <span>7. Engagement strategy</span>
                <span>8. Performance tracking</span>
              </div>
              <p>
                Content might include: Reels, Carousels, Static graphics, Educational posts, Customer stories, Testimonials, Behind-the-scenes content, Founder content, UGC, and Promotional campaigns.
              </p>
              <p>
                The goal isn't to make every post go viral. The goal is to repeatedly give the right audience a reason to remember your brand.
              </p>

              <div className="pt-2">
                <Link href="/#services" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider">
                  Check our social media marketing services <ArrowUpRight size={14} />
                </Link>
              </div>

              {/* Image 4 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                <Image
                  src="/assets/blog/social-media-marketing-team.jpg"
                  alt="Social media marketing team creating digital content and campaigns"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* 4. Content Marketing */}
            <section id="content" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#7</span> 4. Content Marketing
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Content marketing turns your knowledge into an asset. This can include: Blog posts, Guides, Case studies, Videos, Social media content, Newsletters, Downloadable resources, and Educational landing pages.
              </p>
              <p>
                The best content answers questions customers actually have. This approach also aligns with Google's <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-reliable-people-first-content" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">people-first content guidance</a>, which emphasizes creating useful, reliable content for people rather than content designed primarily to manipulate search rankings.
              </p>
              <p>
                For example, instead of publishing: <em>&quot;Why Our Company Is the Best&quot;</em>, you could publish: <strong>&quot;How Much Should a Small Business Spend on Google Ads?&quot;</strong> The second topic gives the reader useful information before asking for anything. That approach builds trust.
              </p>
              <p>
                SEO and content marketing can also reinforce each other: search research can reveal what audiences want to know, while useful content can support organic visibility and authority.
              </p>
            </section>

            {/* 5. Branding Strategy */}
            <section id="branding" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#8</span> 5. Branding and Brand Strategy
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Marketing can generate attention. Branding determines what people remember.
              </p>
              <p>
                Strong branding can include: Brand positioning, Visual identity, Logo design, Typography, Color systems, Brand messaging, Tone of voice, Brand guidelines, and Marketing collateral.
              </p>
              <p>
                Consider two companies offering similar services. One looks inconsistent across its website and social media. The other has a clear message, polished visual identity, professional content, and consistent positioning. The second company often starts with a trust advantage.
              </p>
              <p>
                Your brand doesn't have to look expensive. It needs to look <strong>intentional</strong>.
              </p>
            </section>

            {/* 6. Web Optimization */}
            <section id="website" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#9</span> 6. Website and Landing Page Optimization
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                You can spend thousands on advertising and still struggle to generate leads if your website doesn't convert.
              </p>
              <p>
                A website should answer three questions quickly:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center my-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 font-bold text-xs uppercase tracking-wider">What do you offer?</div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 font-bold text-xs uppercase tracking-wider">Who is it for?</div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 font-bold text-xs uppercase tracking-wider">Why choose you?</div>
              </div>
              <p>
                Effective landing pages often include: A clear headline, Strong value proposition, Relevant benefits, Social proof, Trust signals, Clear calls to action, Simple navigation, Mobile-friendly design, and Conversion-focused copy.
              </p>
              <p>
                Your website isn't simply an online brochure. It is one of your most important sales assets.
              </p>
              
              <div className="pt-2">
                <Link href="/#services" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider">
                  Check our website and landing page optimization services <ArrowUpRight size={14} />
                </Link>
              </div>

              {/* Image 5 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                <Image
                  src="/assets/blog/website-landing-page-optimization.jpg"
                  alt="Website and landing page optimization for digital marketing growth"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* 7. Lead Gen */}
            <section id="leadgen" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#10</span> 7. Lead Generation
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Traffic is useful. Leads are more useful. Lead generation strategies are designed to turn interested visitors into identifiable prospects.
              </p>
              <p>
                Examples include: Contact forms, Consultation requests, WhatsApp enquiries, Phone calls, Demo bookings, Lead magnets, Newsletter subscriptions, Quote requests, and Free strategy calls.
              </p>
              <ul className="space-y-2 text-xs text-gray-400 font-normal">
                <li>• The best lead generation strategy depends on how your customers make buying decisions.</li>
                <li>• A high-ticket service may need consultation calls.</li>
                <li>• A low-cost product may need a simple checkout.</li>
                <li>• A B2B company may need lead magnets and sales qualification.</li>
              </ul>
            </section>

            {/* 8. CRO */}
            <section id="cro" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#11</span> 8. Conversion Rate Optimization (CRO)
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Getting visitors to your website is only half the battle. The next question is: <em>How many acts?</em>
              </p>
              <p>
                Conversion rate optimization, or CRO, focuses on improving the percentage of visitors who complete a desired action. This can involve testing: Headlines, CTA buttons, Forms, Page layouts, Offers, Testimonials, Pricing presentation, Trust signals, and Landing page copy.
              </p>
              <p>
                Small improvements can matter when a website already receives significant traffic.
              </p>
            </section>

            {/* How Services Work Together */}
            <section id="together" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#12</span> How Digital Marketing Services Work Together
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                The biggest mistake businesses make is treating every marketing channel as a separate activity.
              </p>
              <p>
                Imagine this journey:
              </p>
              <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-xs sm:text-sm font-semibold text-center leading-relaxed">
                Google Search <span className="text-primary">→</span> Website <span className="text-primary">→</span> Educational Content <span className="text-primary">→</span> Retargeting Ad <span className="text-primary">→</span> Landing Page <span className="text-primary">→</span> Lead Form <span className="text-primary">→</span> Sales Call
              </div>
              <p>
                That's a system. Now imagine another:
              </p>
              <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-xs sm:text-sm font-semibold text-center leading-relaxed mb-6">
                Instagram Reel <span className="text-primary">→</span> Profile Visit <span className="text-primary">→</span> Website <span className="text-primary">→</span> Case Study <span className="text-primary">→</span> Consultation Request
              </div>
              <p>
                Digital marketing becomes more powerful when channels support one another:
              </p>
              <ul className="space-y-2 text-xs text-gray-400 font-normal">
                <li>• <strong>SEO</strong> brings organic traffic.</li>
                <li>• <strong>Content</strong> educates that traffic.</li>
                <li>• <strong>Social media</strong> increases brand familiarity.</li>
                <li>• <strong>Paid advertising</strong> accelerates reach.</li>
                <li>• <strong>Retargeting</strong> brings interested visitors back.</li>
                <li>• <strong>Landing pages</strong> convert attention into leads.</li>
                <li>• <strong>Analytics</strong> shows what's working.</li>
              </ul>
              <p>
                This is why simply asking, <em>&quot;Which digital marketing service is best?&quot;</em> isn't always the right question. A better question is: <strong>&quot;Which combination of services will help my business reach its next growth goal?&quot;</strong>
              </p>
            </section>

            {/* Comparison Section */}
            <section id="comparison" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#13</span> SEO vs. PPC vs. Social Media
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                SEO and PPC aren't necessarily competing choices. They can complement each other when used strategically. PPC can provide faster visibility, while SEO can build organic visibility over time.
              </p>

              <div className="overflow-x-auto rounded-xl border border-white/10 my-6">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 uppercase tracking-widest text-[10px] font-bold text-white">
                      <th className="p-4">Channel</th>
                      <th className="p-4">Main Strength</th>
                      <th className="p-4 text-primary">Typical Role</th>
                      <th className="p-4">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-400">
                    {[
                      { c: "SEO", s: "Organic visibility", r: "Long-term acquisition", b: "Search-driven businesses" },
                      { c: "PPC", s: "Fast targeted traffic", r: "Lead generation", b: "Immediate demand" },
                      { c: "Social Media", s: "Awareness & engagement", r: "Brand building", b: "Consumer & personal brands" },
                      { c: "Content Marketing", s: "Education & authority", r: "Trust building", b: "Complex products & services" },
                      { c: "Email Marketing", s: "Retention", r: "Customer nurturing", b: "Existing audiences" },
                      { c: "Branding", s: "Differentation", r: "Positioning", b: "New and growing brands" },
                      { c: "CRO", s: "Conversion improvement", r: "Revenue optimization", b: "Businesses with traffic" }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-bold text-white">{row.c}</td>
                        <td className="p-4">{row.s}</td>
                        <td className="p-4 font-semibold text-primary">{row.r}</td>
                        <td className="p-4">{row.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* How to Choose Section */}
            <section id="choose" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#14</span> How to Choose the Right Digital Marketing Agency
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Choosing an agency shouldn't be based only on price. Before signing a contract, ask:
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">1. Do they understand your business?</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    An agency should understand: your customers, your competitors, your offer, your sales process, and your business goals.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">2. Do they have a clear strategy?</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Be cautious if the entire pitch is: <em>&quot;We'll post 20 times per month.&quot;</em> Ask what those posts are designed to accomplish.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">3. How do they measure success?</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Look beyond Likes, Followers, and Impressions. Ask about: Qualified leads, Cost per lead, Conversion rates, Revenue, Search visibility, Customer acquisition, and Return on ad spend.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">4. Do they show real work?</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Look for Case studies, Campaign examples, Creative examples, Client testimonials, Strategy explanations, and Before-and-after results.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">5. Will they communicate clearly?</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    You shouldn't need a marketing degree to understand your monthly report. A good agency should explain: <strong>What happened → Why it happened → What we're changing → What happens next.</strong>
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider">
                  Learn about digital marketing agency in Hyderabad <ArrowUpRight size={14} />
                </Link>
              </div>
            </section>

            {/* Common Mistakes Section */}
            <section id="mistakes" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#15</span> Common Digital Marketing Mistakes to Avoid
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <div className="grid grid-cols-1 gap-4">
                {[
                  { t: "Mistake 1: Trying Every Platform", d: "Being everywhere isn't the same as being effective. Choose platforms where your audience spends time." },
                  { t: "Mistake 2: Chasing Vanity Metrics", d: "10,000 followers mean very little if they never become customers. Measure business outcomes." },
                  { t: "Mistake 3: Running Ads Without Tracking", d: "If you can't measure conversions, you can't properly evaluate campaign profitability." },
                  { t: "Mistake 4: Ignoring the Website", d: "Sending paid traffic to a confusing website wastes marketing budget." },
                  { t: "Mistake 5: Expecting Instant SEO Results", d: "SEO is generally a longer-term channel. Google notes that changes can take anywhere from hours to months to be reflected in Search, depending on the change and circumstances." },
                  { t: "Mistake 6: Publishing Content Without a Strategy", d: "More content isn't automatically better. Useful, relevant content is more valuable than publishing simply to hit a content quota." },
                  { t: "Mistake 7: Choosing the Cheapest Agency", d: "Low cost can become expensive if the strategy produces poor leads, weak branding, or wasted advertising spend." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 border border-white/5 bg-[#121216]/40 rounded-xl space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-red-400">{item.t}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">{item.d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How Much to Invest */}
            <section id="investment" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#16</span> How Much Should You Invest in Digital Marketing?
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                There isn't one universal number. Your investment should depend on:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-normal bg-white/5 p-4 rounded-xl">
                <span>• Business size</span>
                <span>• Industry type</span>
                <span>• Customer acquisition cost</span>
                <span>• Average order value</span>
                <span>• Competition level</span>
                <span>• Growth stage</span>
                <span>• Geographic market</span>
                <span>• Sales cycle</span>
                <span>• Marketing goals</span>
                <span>• Brand awareness</span>
              </div>
              <p>
                A business selling a ₹1,000 product and a company selling a ₹10 lakh service shouldn't have the same marketing model. Start with the economics. Ask:
              </p>
              <div className="p-4 border border-white/5 bg-[#121216]/40 rounded-xl space-y-2 text-xs sm:text-sm font-semibold">
                <div>1. How much is a new customer worth?</div>
                <div>2. How much can we reasonably spend to acquire one?</div>
              </div>
              <p>
                That gives you a much stronger foundation for deciding your marketing budget.
              </p>
            </section>

            {/* Timelines Section */}
            <section id="timeline" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#17</span> How Long Does Digital Marketing Take to Work?
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Different channels operate at different speeds:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Paid Advertising</h4>
                  <p className="text-xs text-gray-400">Campaigns can begin generating traffic quickly, although profitable performance usually requires testing and optimization.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Social Media</h4>
                  <p className="text-xs text-gray-400">Visibility and engagement can grow relatively quickly, but building meaningful brand recognition takes consistency.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">SEO</h4>
                  <p className="text-xs text-gray-400">SEO generally requires patience. Rankings can take weeks or months, depending on competition, authority, technical health, content quality, and other factors.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Branding</h4>
                  <p className="text-xs text-gray-400">Brand recognition develops over time through repeated exposure and consistent positioning.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Content Marketing</h4>
                  <p className="text-xs text-gray-400">Individual pieces can sometimes gain traction quickly, but a content library becomes more valuable as useful content accumulates.</p>
                </div>
              </div>
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
                <p className="text-xs text-gray-400 font-semibold">
                  The right expectation is not: <em>&quot;When will we go viral?&quot;</em> It's: <strong>&quot;Are our marketing assets improving month after month?&quot;</strong>
                </p>
              </div>
            </section>

            {/* A Practical Digital Marketing Strategy for 2026 */}
            <section id="strategy-steps" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#18</span> A Practical Digital Marketing Strategy for 2026
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                A strong strategy can be built in seven steps:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Step 1: Define the Business Goal</h4>
                  <p className="text-xs text-gray-400">Choose a measurable goal. Examples: Generate 50 qualified leads, Increase online sales, Reduce cost per acquisition, Improve organic traffic, Launch a new product, Build brand awareness.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Step 2: Define Your Ideal Customer</h4>
                  <p className="text-xs text-gray-400">Understand: Who they are, What they need, What they fear, What they want, What alternatives they consider, Why they hesitate, What makes them buy.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Step 3: Audit Your Current Marketing</h4>
                  <p className="text-xs text-gray-400">Review: Website, SEO, Social media, Paid campaigns, Content, Branding, Conversion paths, and Analytics. Find the biggest bottleneck.</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Businesses should monitor their organic search performance regularly using tools such as <a href="https://search.google.com/search-console/about" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google Search Console</a> rather than relying only on traffic or ranking screenshots.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Step 4: Select Your Core Channels</h4>
                  <p className="text-xs text-gray-400">Don't automatically choose five channels. Choose the two or three that have the strongest connection to your audience and business model.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Step 5: Build the Content and Campaign System</h4>
                  <p className="text-xs text-gray-400">Create: Content pillars, Ad creatives, Landing pages, Offers, CTAs, Campaign structures, and Retargeting audiences.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Step 6: Track Meaningful Metrics</h4>
                  <p className="text-xs text-gray-400">Monitor: Traffic, Leads, Conversion rate, Cost per lead, Customer acquisition cost, Revenue, Return on ad spend, and Organic visibility.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Step 7: Optimize and Scale</h4>
                  <p className="text-xs text-gray-400">Keep what works. Improve what underperforms. Stop what wastes resources. Then increase investment in the strategies producing the strongest business outcomes.</p>
                </div>
              </div>
            </section>

            {/* Checklist Section */}
            <section id="checklist" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#19</span> Digital Marketing Services Checklist
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Before choosing a digital marketing partner, make sure you can answer &quot;yes&quot; to these questions. Check off the items to calculate your readiness!
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
                <span className="text-primary font-mono text-sm">#20</span> Frequently Asked Questions (FAQ)
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
                Your customers don't experience your marketing as separate departments. They experience one brand. They see your Instagram content, they search your company on Google, they visit your website, they read your content, they see your advertisements, they compare your offer with competitors, and they decide whether they trust you.
              </p>
              <p>
                That's why modern digital marketing services should work together as a complete customer journey.
              </p>
              <p>
                If your business is struggling with inconsistent leads, weak online visibility, poor conversion rates, or marketing that feels disconnected, the solution may not be &quot;more marketing.&quot; It may be a better strategy.
              </p>
              <p>
                At <strong>G2G Media House</strong>, we help businesses bring together content, social media, paid advertising, branding, websites and funnels, and SEO with a growth-focused approach.
              </p>
              <p>
                If your goal is to attract more of the right customers—not simply generate more online activity—the next step is to identify what's currently preventing your marketing from converting. Start with the bottleneck. Fix the system. Then scale what works.
              </p>

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
