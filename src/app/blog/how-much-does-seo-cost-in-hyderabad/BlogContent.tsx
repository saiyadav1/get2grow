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
  Calculator
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
    "indicative-ranges",
    "what-included",
    "cost-by-business",
    "why-prices-vary",
    "local-vs-national",
    "freelancer-vs-agency",
    "package-checklist",
    "timeline",
    "cheap-seo-warning",
    "how-to-choose",
    "budget-calculation",
    "roi-example",
    "pricing-mistakes",
    "g2g-approach",
    "key-takeaways",
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

  // Interactive Package Checklist State
  const [packageChecklist, setPackageChecklist] = useState([
    { id: "pk1", text: "Keyword research & search intent mapping", checked: false },
    { id: "pk2", text: "Competitor analysis & gap identification", checked: false },
    { id: "pk3", text: "Technical SEO audit & Core Web Vitals fixes", checked: false },
    { id: "pk4", text: "On-page optimization (titles, headings, meta tags)", checked: false },
    { id: "pk5", text: "Content strategy & topic cluster planning", checked: false },
    { id: "pk6", text: "Content creation or optimization of existing pages", checked: false },
    { id: "pk7", text: "Internal linking architecture optimization", checked: false },
    { id: "pk8", text: "Local SEO & Google Business Profile management", checked: false },
    { id: "pk9", text: "High-quality off-page link building & digital PR", checked: false },
    { id: "pk10", text: "Keyword ranking tracking & SERP movement", checked: false },
    { id: "pk11", text: "Organic traffic & Search Console reporting", checked: false },
    { id: "pk12", text: "Conversion & inbound lead tracking setup", checked: false },
    { id: "pk13", text: "Monthly strategic review & roadmap refinement", checked: false }
  ]);

  const togglePackageItem = (id: string) => {
    setPackageChecklist(
      packageChecklist.map((item) =>
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
    { id: "indicative-ranges", text: "Monthly SEO Cost Ranges" },
    { id: "what-included", text: "What an SEO Package Includes" },
    { id: "cost-by-business", text: "Cost by Business Type" },
    { id: "why-prices-vary", text: "Why Pricing Varies" },
    { id: "local-vs-national", text: "Local vs National SEO Cost" },
    { id: "freelancer-vs-agency", text: "Freelancer vs Agency" },
    { id: "package-checklist", text: "SEO Package Checklist" },
    { id: "timeline", text: "Timeline for SEO Results" },
    { id: "cheap-seo-warning", text: "Is Cheap SEO Worth It?" },
    { id: "how-to-choose", text: "How to Choose an Agency" },
    { id: "budget-calculation", text: "Calculating Your SEO Budget" },
    { id: "roi-example", text: "Simple SEO ROI Example" },
    { id: "pricing-mistakes", text: "Common Pricing Mistakes" },
    { id: "g2g-approach", text: "G2G Media House Approach" },
    { id: "key-takeaways", text: "Key Takeaways" },
    { id: "conclusion", text: "Final Conclusion" },
    { id: "faq", text: "Frequently Asked Questions" }
  ];

  // FAQ Content Array
  const faqs = [
    {
      q: "How much does SEO cost in Hyderabad per month?",
      a: "SEO in Hyderabad can range from roughly ₹8,000–₹15,000 per month for basic local campaigns to ₹30,000–₹60,000+ for competitive campaigns, with advanced and enterprise programs potentially costing considerably more. The actual price depends on competition, website condition, content requirements, target keywords, technical SEO and link-building needs. Published Hyderabad pricing varies significantly by provider and scope."
    },
    {
      q: "Is SEO worth the cost for a small business in Hyderabad?",
      a: "Yes, SEO can be valuable for a small Hyderabad business when customers actively search for its products or services online. Local SEO can help businesses compete for relevant location-based searches without needing a national campaign. The key is choosing a focused strategy rather than paying for unnecessary services. Google also recommends useful, people-first content and a good overall website experience."
    },
    {
      q: "What is included in an SEO package?",
      a: "A professional SEO package may include keyword research, competitor analysis, technical SEO, on-page optimization, content strategy, internal linking, local SEO, link building, keyword tracking and reporting. Not every package includes all of these services. Before hiring an agency, ask for a written monthly deliverables list so you can compare proposals based on actual work rather than package names."
    },
    {
      q: "How long does SEO take to show results in Hyderabad?",
      a: "There is no universal SEO timeline. Some technical changes can be reflected relatively quickly, while meaningful organic growth can take several months. Google notes that changes can take anywhere from hours to several months to be reflected in Search. Competition, website authority, technical health, content quality and the scale of optimization all influence results."
    },
    {
      q: "How do I choose the best SEO agency in Hyderabad?",
      a: "Don't choose an SEO agency based only on price or promises of guaranteed rankings. Ask about its strategy, deliverables, reporting, previous work, technical process, content approach and measurement of leads or revenue. A good agency should understand your business goals before recommending keywords or packages. Look for transparent communication and a strategy designed around your customers rather than rankings alone."
    }
  ];

  // SEO Tags
  const seoTags = [
    "SEO Cost Hyderabad",
    "SEO Pricing Hyderabad",
    "SEO Services Hyderabad",
    "SEO Packages Hyderabad",
    "SEO Agency Hyderabad",
    "Local SEO Hyderabad",
    "Digital Marketing Hyderabad",
    "SEO Consultant Hyderabad",
    "SEO Strategy",
    "SEO for Small Business"
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
            <span className="text-gray-300">How Much Does SEO Cost in Hyderabad</span>
          </nav>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              Pricing Guide
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Calendar size={14} className="text-primary" /> 2026 Guide
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Clock size={14} className="text-primary" /> 12 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] max-w-5xl mb-6">
            How Much Does SEO Cost in Hyderabad? <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 font-black">
              A Complete 2026 Pricing Guide
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Wondering how much SEO costs in Hyderabad? Explore realistic pricing, packages, services, ROI and tips for choosing the right SEO agency.
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
                src="/assets/blog/how-much-does-seo-cost-in-hyderabad-featured.jpg"
                alt="SEO strategist explaining SEO cost and pricing options to a business owner in Hyderabad"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <p>
                If you&apos;ve spoken to three SEO agencies in Hyderabad, you&apos;ve probably noticed something strange:
              </p>
              <ul className="space-y-2 text-gray-300 pl-4 border-l-2 border-white/10">
                <li>• One agency may quote <strong>₹10,000 per month</strong>.</li>
                <li>• Another may ask for <strong>₹30,000</strong>.</li>
                <li>• A third may quote <strong>₹75,000 or more</strong>.</li>
              </ul>
              
              <div className="p-6 border-l-4 border-primary bg-white/5 rounded-r-2xl my-6">
                <p className="font-bold text-white mb-1">So, how much does SEO cost in Hyderabad?</p>
                <p className="text-gray-300 text-lg font-semibold italic">
                  The honest answer is there isn&apos;t one fixed price.
                </p>
              </div>

              <p>
                SEO pricing depends on what needs to be done, how competitive your market is, the condition of your website, how many keywords you want to target, how much content you need and how aggressively you want to compete.
              </p>
              <p>
                Current published Hyderabad pricing illustrates this wide spread. Some providers publish entry-level packages around ₹8,000–₹15,000 per month, while more competitive campaigns can move into ₹40,000+ territory. Other agencies publish retainers starting around ₹20,000 and extending beyond ₹1 lakh for highly competitive campaigns.
              </p>
              <p>
                To learn more about broader campaigns, check our guide on <Link href="/blog/digital-marketing-services" className="text-primary hover:underline font-bold">digital marketing services</Link>.
              </p>
              <p>
                That means the cheapest SEO package isn&apos;t automatically the best deal. And the most expensive package isn&apos;t automatically the best either.
              </p>
              <p className="font-bold text-white">
                The better question is: <em>What level of SEO investment makes sense for my business, market and growth target?</em>
              </p>
            </section>

            <hr className="border-white/5" />

            {/* Indicative Ranges Table */}
            <section id="indicative-ranges" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Indicative Monthly SEO Cost Ranges in Hyderabad
              </h2>
              <p>
                For planning purposes, businesses can use the following indicative monthly ranges:
              </p>

              <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#121216]/60">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-4 font-bold uppercase tracking-wider text-white">SEO Type</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-primary">Indicative Cost</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-gray-300">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-400">
                    <tr>
                      <td className="p-4 font-semibold text-white">Basic Local SEO</td>
                      <td className="p-4 text-primary font-bold">₹8,000 – ₹15,000</td>
                      <td className="p-4 text-gray-300">Small local businesses</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Starter / Growth SEO</td>
                      <td className="p-4 text-primary font-bold">₹15,000 – ₹30,000</td>
                      <td className="p-4 text-gray-300">Growing businesses & SMBs</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Competitive SEO</td>
                      <td className="p-4 text-primary font-bold">₹30,000 – ₹60,000+</td>
                      <td className="p-4 text-gray-300">Competitive industries (Tech, Real Estate, Health)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Advanced SEO</td>
                      <td className="p-4 text-primary font-bold">₹60,000 – ₹1,00,000+</td>
                      <td className="p-4 text-gray-300">Large or highly competitive regional brands</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Enterprise SEO</td>
                      <td className="p-4 text-primary font-bold">₹1,00,000+</td>
                      <td className="p-4 text-gray-300">Large e-commerce & national websites</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-5 border border-white/10 bg-[#121216]/60 rounded-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Quick Takeaway</span>
                <p className="text-sm text-gray-300">
                  For many Hyderabad SMBs, a realistic starting SEO budget is around <strong>₹15,000–₹30,000 per month</strong> if they want more than basic maintenance. But your actual requirement should determine the budget—not an arbitrary package label.
                </p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* What Does an SEO Package Actually Include? */}
            <section id="what-included" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Does an SEO Package Actually Include?
              </h2>
              <p>
                Before comparing prices, you need to understand what you&apos;re buying. SEO isn&apos;t one single task. Professional SEO involves several connected activities:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">1. Keyword Research</h3>
                  <p className="text-sm text-gray-400">
                    Identifying what your potential customers actually search for. For example, a Hyderabad real estate company might target <em>&quot;flats for sale in Hyderabad&quot;</em>, <em>&quot;apartments in Gachibowli&quot;</em>, and <em>&quot;property investment Hyderabad&quot;</em>. A good strategy maps keywords to:
                  </p>
                  <p className="text-xs font-bold text-primary my-2 pl-2">
                    Search intent → landing page → content → conversion
                  </p>
                </div>

                {/* Image 2 Placement */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                  <Image
                    src="/assets/blog/seo-professional-keyword-research-hyderabad.jpg"
                    alt="SEO professional conducting keyword research for a Hyderabad business"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">2. Competitor Research</h3>
                  <p className="text-sm text-gray-400">
                    Analyzing which keywords competitors rank for, which pages attract organic traffic, their content structure, backlink profiles, internal linking, and local visibility.
                  </p>
                </div>

                <div id="technical-seo-activities">
                  <h3 className="text-lg font-bold text-white mb-2">3. Technical SEO</h3>
                  <p className="text-sm text-gray-400">
                    Making your website easier for search engines to crawl, understand and index. Includes crawlability, indexation, site architecture, broken links, canonical tags, XML sitemaps, mobile usability, page speed, structured data, and Core Web Vitals.
                  </p>
                </div>

                {/* Image 3 Placement */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                  <Image
                    src="/assets/blog/technical-seo-specialist-analyzing-website-performance.jpg"
                    alt="Technical SEO specialist analyzing website performance and SEO issues"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">4. On-Page SEO</h3>
                  <p className="text-sm text-gray-400">
                    Improving title tags, meta descriptions, H1/H2 heading structure, content improvements, internal links, image optimization, clean URLs, and search intent alignment. The goal isn&apos;t to repeat a keyword 50 times—it&apos;s to make the page the most useful answer for the searcher.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">5. Content SEO</h3>
                  <p className="text-sm text-gray-400">
                    Publishing blog articles, service pages, location guides, case studies, and FAQs. The important question isn&apos;t <em>&quot;How many blogs will you publish?&quot;</em>—it is <strong>&quot;Which business problems will those pages solve?&quot;</strong> Ten strategically planned articles are more valuable than 50 generic posts.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">6. Off-Page SEO and Link Building</h3>
                  <p className="text-sm text-gray-400">
                    Earning relevant, high-quality backlinks through digital PR, industry mentions, and useful resources. According to <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google Search Essentials</a>, spammy manipulative link schemes are actively penalized.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* SEO Cost by Business Type */}
            <section id="cost-by-business" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                SEO Cost by Business Type
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white text-base mb-1">Local Small Business</h4>
                  <p className="text-xs text-primary font-bold mb-3">₹8,000 – ₹20,000 / month</p>
                  <p className="text-xs text-gray-400 mb-2">Restaurants, salons, clinics, gyms, local home services.</p>
                  <p className="text-xs text-gray-500">Focus: Google Business Profile, local keywords, reviews, citations, on-page optimization.</p>
                </div>

                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white text-base mb-1">Growing Business</h4>
                  <p className="text-xs text-primary font-bold mb-3">₹15,000 – ₹35,000 / month</p>
                  <p className="text-xs text-gray-400 mb-2">Established companies wanting more inbound leads.</p>
                  <p className="text-xs text-gray-500">Focus: Technical SEO, content strategy, link building, local expansion, monthly reporting.</p>
                </div>

                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white text-base mb-1">Competitive Industry</h4>
                  <p className="text-xs text-primary font-bold mb-3">₹30,000 – ₹60,000+ / month</p>
                  <p className="text-xs text-gray-400 mb-2">Real estate, healthcare, finance, legal, SaaS, education.</p>
                  <p className="text-xs text-gray-500">Focus: Deep content clusters, high-authority link building, advanced technical infrastructure.</p>
                </div>

                <div className="p-5 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white text-base mb-1">Enterprise / National</h4>
                  <p className="text-xs text-primary font-bold mb-3">₹60,000 – ₹1,00,000+ / month</p>
                  <p className="text-xs text-gray-400 mb-2">Large websites, national brands, multi-location companies.</p>
                  <p className="text-xs text-gray-500">Focus: Dedicated technical teams, large-scale content, digital PR, complex site architecture.</p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Why Do SEO Prices Vary So Much? */}
            <section id="why-prices-vary" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Why Do SEO Prices Vary So Much?
              </h2>
              <p>
                A local photographer with a 10-page website targeting a few local searches requires vastly different resources than an e-commerce website with 5,000 products competing nationally.
              </p>
              
              <ul className="space-y-3 text-sm text-gray-400 pl-4">
                <li><strong className="text-white">1. Competition:</strong> Ranking for low-competition local terms is fast; ranking against national powerhouses takes continuous work.</li>
                <li><strong className="text-white">2. Website Condition:</strong> A healthy site requires less repair; a broken site needs indexation fixes, redirect cleanup, and site restructuring.</li>
                <li><strong className="text-white">3. Number of Keywords:</strong> Targeting 20 keywords requires less tracking and page creation than targeting 500 keywords.</li>
                <li><strong className="text-white">4. Content Requirements:</strong> An SEO package that includes 8 expert-written articles each month costs more than one with zero content creation.</li>
                <li><strong className="text-white">5. Backlink Strategy:</strong> Manual outreach for genuine authority links requires research and relationship building compared to automated directories.</li>
              </ul>
            </section>

            <hr className="border-white/5" />

            {/* Local SEO vs National SEO Cost */}
            <section id="local-vs-national" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Local SEO vs National SEO Cost
              </h2>
              <p>
                If your customers are primarily in Hyderabad, you may not need an expensive national SEO campaign. Local SEO focuses on searches like <em>&quot;dentist in Hyderabad&quot;</em> or <em>&quot;restaurant in Banjara Hills&quot;</em>. For a detailed breakdown, explore our guide to <Link href="/blog/local-seo-for-small-business" className="text-primary hover:underline font-bold">local SEO for small businesses</Link>.
              </p>
              <div className="p-4 border-l-2 border-primary bg-white/5 rounded-r-xl text-xs text-gray-300">
                <strong>Pro Tip:</strong> Don&apos;t pay for national SEO if your customers only come from one city. Build local relevance first.
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Freelancer vs SEO Agency Comparison */}
            <section id="freelancer-vs-agency" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Freelancer vs SEO Agency: Which Costs More?
              </h2>
              <p>
                Both can work. The right choice depends on your requirements:
              </p>

              <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#121216]/60">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-4 font-bold uppercase tracking-wider text-white">Factor</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-gray-300">Freelancer</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-primary">SEO Agency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-400">
                    <tr>
                      <td className="p-4 font-semibold text-white">Cost</td>
                      <td className="p-4">Usually lower</td>
                      <td className="p-4 text-gray-200">Usually higher</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Team size</td>
                      <td className="p-4">Usually one person</td>
                      <td className="p-4 text-primary font-semibold">Multiple specialists</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Scalability</td>
                      <td className="p-4">Limited</td>
                      <td className="p-4 text-gray-200">Higher</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Technical resources</td>
                      <td className="p-4">Varies</td>
                      <td className="p-4 text-gray-200">Usually stronger</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Content capacity</td>
                      <td className="p-4">Limited to moderate</td>
                      <td className="p-4 text-gray-200">Moderate to high</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Best for</td>
                      <td className="p-4">Small, focused projects</td>
                      <td className="p-4 text-primary font-semibold">Growth-focused campaigns</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* SEO Package Checklist */}
            <section id="package-checklist" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Should a Good SEO Package Include?
              </h2>
              <p>
                Before signing a contract, ask for a clear scope. Use this checklist:
              </p>

              <div className="space-y-2.5 bg-[#121216]/60 border border-white/5 p-5 rounded-2xl">
                {packageChecklist.map((item) => (
                  <label
                    key={item.id}
                    onClick={() => togglePackageItem(item.id)}
                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
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
              <p className="text-xs text-gray-500 italic">
                If the proposal only says &quot;We will improve your rankings&quot; without clear deliverables, ask how.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* Timeline for SEO Results */}
            <section id="timeline" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How Long Does SEO Take to Show Results?
              </h2>
              <p>
                According to <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google Search Central SEO Starter Guide</a>, changes can take anywhere from hours to several months to be reflected in Search.
              </p>

              <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#121216]/60">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-4 font-bold uppercase tracking-wider text-primary">Period</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-white">What Typically Happens</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-400">
                    <tr>
                      <td className="p-4 font-semibold text-white">Month 1</td>
                      <td className="p-4">Technical audit, in-depth research, fixing crawl & indexing errors</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Months 2–3</td>
                      <td className="p-4">On-page optimization, content production, early ranking movement</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Months 3–6</td>
                      <td className="p-4">Growing keyword visibility, increased organic impressions and traffic</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Months 6–12</td>
                      <td className="p-4">Stronger domain authority and top-tier commercial keyword rankings</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">12+ months</td>
                      <td className="p-4">Scaling content clusters and compounding organic lead acquisition</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Cheap SEO Warnings */}
            <section id="cheap-seo-warning" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Is Cheap SEO Worth It?
              </h2>
              <p>
                A ₹5,000 package sounds attractive until you discover it delivers generic AI spam, automated reports, zero technical fixes, and low-quality links. You might save ₹10,000 today and lose months of growth.
              </p>
              
              <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl space-y-2">
                <h4 className="text-sm font-bold text-red-400 uppercase tracking-wider">Warning Signs:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                  <li className="flex items-center gap-1.5"><XCircle size={14} className="text-red-400" /> Guaranteed #1 rankings</li>
                  <li className="flex items-center gap-1.5"><XCircle size={14} className="text-red-400" /> Thousands of cheap backlinks</li>
                  <li className="flex items-center gap-1.5"><XCircle size={14} className="text-red-400" /> Instant results in 30 days</li>
                  <li className="flex items-center gap-1.5"><XCircle size={14} className="text-red-400" /> Secret Google tricks</li>
                  <li className="flex items-center gap-1.5"><XCircle size={14} className="text-red-400" /> One-size-fits-all packages</li>
                  <li className="flex items-center gap-1.5"><XCircle size={14} className="text-red-400" /> No explanation of deliverables</li>
                </ul>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* How to Choose the Right SEO Agency */}
            <section id="how-to-choose" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How to Choose the Right SEO Agency in Hyderabad
              </h2>
              <p>
                Don&apos;t choose an agency simply because its package is cheap. When evaluating the <Link href="/blog/best-digital-marketing-agency-hyderabad" className="text-primary hover:underline font-bold">best digital marketing agency in Hyderabad</Link>, look for strategic alignment:
              </p>

              {/* Image 4 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                <Image
                  src="/assets/blog/seo-consultant-discussing-pricing-strategy.jpg"
                  alt="SEO consultant discussing SEO pricing and strategy with a Hyderabad business owner"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-3">
                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">1. Ask About Your Business First</h4>
                  <p className="text-xs text-gray-400">They should ask about your margins, customer lifetime value, and sales cycle—not just keywords.</p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">2. Ask What Success Means</h4>
                  <p className="text-xs text-gray-400">Rankings are useful, but revenue, qualified leads, and cost per acquisition are the real business metrics.</p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">3. Request a Clear Monthly Deliverables List</h4>
                  <p className="text-xs text-gray-400">Know exactly what technical fixes, content, and links will be delivered every month.</p>
                </div>
                <div className="p-4 border border-white/5 bg-[#121216]/60 rounded-xl">
                  <h4 className="text-sm font-bold text-white mb-1">4. Review Their Existing Work</h4>
                  <p className="text-xs text-gray-400">Look for case studies, client results, and content quality rather than just logo badges.</p>
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Calculating Budget & ROI Example */}
            <section id="budget-calculation" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How to Calculate Your SEO Budget
              </h2>
              <p>
                For small businesses, practical guidance in our <Link href="/blog/digital-marketing-for-small-business" className="text-primary hover:underline font-bold">digital marketing for small businesses</Link> guide recommends connecting budget directly to customer lifetime value.
              </p>
              
              <ol className="space-y-2 text-xs sm:text-sm text-gray-400 list-decimal pl-5">
                <li><strong>Calculate Customer Value:</strong> Suppose one new customer generates ₹25,000 in revenue.</li>
                <li><strong>Estimate Required Leads:</strong> If you need 10 customers/month, determine the required lead volume.</li>
                <li><strong>Identify Search Opportunity:</strong> How many searches exist and how competitive are they?</li>
                <li><strong>Estimate Required SEO Work:</strong> Technical fixes, new service pages, content, local optimization.</li>
                <li><strong>Compare Expected Value With Investment:</strong> Marketing budget should connect to unit economics.</li>
              </ol>

              {/* Image 5 Placement: Before ROI Example */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                <Image
                  src="/assets/blog/business-owner-reviewing-seo-traffic-leads-roi.jpg"
                  alt="Business owner reviewing SEO traffic leads and ROI with a strategist"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            <section id="roi-example" className="scroll-mt-28 space-y-6">
              <div className="p-6 border border-primary/20 bg-primary/5 rounded-2xl space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Calculator size={18} className="text-primary" /> A Simple SEO ROI Example
                </h3>
                <div className="text-xs text-gray-300 space-y-2">
                  <p>• Monthly SEO Investment: <strong>₹25,000 / month</strong></p>
                  <p>• Resulting Monthly Leads: <strong>20 qualified leads</strong></p>
                  <p>• Conversion Rate: <strong>4 become customers (20%)</strong></p>
                  <p>• Customer Value: <strong>₹20,000</strong></p>
                  <p className="text-sm font-bold text-primary pt-2 border-t border-white/10">
                    Generated Monthly Revenue: 4 × ₹20,000 = ₹80,000
                  </p>
                </div>
                <p className="text-[11px] text-gray-400 italic">
                  This is a much healthier way to evaluate SEO than simply asking &quot;How many keywords are ranking?&quot;
                </p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Pricing Mistakes */}
            <section id="pricing-mistakes" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Common SEO Pricing Mistakes
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400 pl-4">
                <li>• <strong>Choosing the Cheapest Provider:</strong> Low cost becomes expensive when work is ineffective.</li>
                <li>• <strong>Comparing Only by Keyword Count:</strong> 30 high-intent keywords beat 100 irrelevant ones.</li>
                <li>• <strong>Ignoring Content Quality:</strong> SEO without authoritative content cannot scale.</li>
                <li>• <strong>Ignoring Technical SEO:</strong> Content cannot fix crawl or indexing blocks.</li>
                <li>• <strong>Expecting Overnight Results:</strong> SEO is compounding equity, not a 24-hour ad campaign.</li>
                <li>• <strong>Measuring Only Rankings:</strong> Track revenue and qualified leads.</li>
              </ul>
            </section>

            <hr className="border-white/5" />

            {/* G2G Media House Approach */}
            <section id="g2g-approach" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Makes G2G Media House&apos;s Approach Different?
              </h2>
              <p>
                G2G Media House presents SEO as part of a connected growth system. Our packages (Starter, Growth, Authority) integrate keyword research, technical SEO, on-page optimization, content creation, and high-authority link building.
              </p>
              <p className="text-xs text-gray-400">
                A visitor discovers your brand on Google → reads your blog → checks social media → visits landing page → submits enquiry. Your SEO supports the entire customer journey.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* Key Takeaways */}
            <section id="key-takeaways" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Key Takeaways
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400 pl-4">
                <li>1. <strong>SEO doesn&apos;t have one fixed price:</strong> Cost depends on scope and competition.</li>
                <li>2. <strong>₹8,000 SEO isn&apos;t comparable with ₹40,000 SEO:</strong> Deliverables differ completely.</li>
                <li>3. <strong>Small businesses don&apos;t need enterprise SEO:</strong> Start with focused local work.</li>
                <li>4. <strong>Don&apos;t buy rankings. Buy a strategy:</strong> The goal is qualified revenue.</li>
                <li>5. <strong>Evaluate SEO over time:</strong> Track multi-month performance trends.</li>
              </ul>
            </section>

            <hr className="border-white/5" />

            {/* Final Conclusion & CTA */}
            <section id="conclusion" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Final Conclusion
              </h2>
              <p>
                For many businesses in Hyderabad, a sensible planning range is <strong>₹8,000 to ₹60,000+ per month</strong>. Ask three questions before hiring:
              </p>
              <ul className="space-y-1.5 text-xs text-gray-300 pl-4">
                <li>➢ What exactly will you do each month?</li>
                <li>➢ How will you measure success?</li>
                <li>➢ How does this strategy connect to my business goals?</li>
              </ul>

              <div className="p-8 border border-primary/20 bg-gradient-to-br from-primary/10 to-green-500/5 rounded-3xl text-center space-y-6 my-8">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white">
                  Not Sure How Much Your Business Should Invest in SEO?
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
                  Get a clearer picture of your website&apos;s current SEO position, competition and growth opportunities before committing to a monthly package.
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
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mt-1">SEO & Pricing Specialists</p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-normal">
                Providing transparent SEO benchmarking and data-driven ROI roadmaps for growing businesses in Hyderabad.
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
                <BookOpen size={14} className="text-primary" /> Authority Resources
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
                    href="https://ahrefs.com/blog/seo-pricing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Ahrefs SEO Pricing Research <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100" />
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
