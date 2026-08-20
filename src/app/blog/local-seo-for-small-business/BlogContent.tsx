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
    "why-matters",
    "how-works",
    "gbp",
    "category",
    "consistency",
    "keywords",
    "landing-pages",
    "reviews",
    "content",
    "links",
    "technical",
    "results",
    "checklist",
    "timeline",
    "worth-it",
    "g2g-help",
    "faq",
    "conclusion"
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
    // Google Business Profile
    { id: "gbp1", category: "Google Business Profile", text: "Claim and verify your profile", checked: false },
    { id: "gbp2", category: "Google Business Profile", text: "Choose accurate primary & secondary categories", checked: false },
    { id: "gbp3", category: "Google Business Profile", text: "Complete business hours & description fully", checked: false },
    { id: "gbp4", category: "Google Business Profile", text: "Add services list explicitly", checked: false },
    { id: "gbp5", category: "Google Business Profile", text: "Add quality, high-res photos regularly", checked: false },
    { id: "gbp6", category: "Google Business Profile", text: "Keep opening hours updated", checked: false },
    { id: "gbp7", category: "Google Business Profile", text: "Respond professionally to all reviews", checked: false },
    // Website
    { id: "web1", category: "Website", text: "Create clear, helpful service pages", checked: false },
    { id: "web2", category: "Website", text: "Include relevant location details (NAP info)", checked: false },
    { id: "web3", category: "Website", text: "Optimize SEO title tags with location terms", checked: false },
    { id: "web4", category: "Website", text: "Optimize SEO headings (H1-H3 structure)", checked: false },
    { id: "web5", category: "Website", text: "Improve internal linking across service pages", checked: false },
    { id: "web6", category: "Website", text: "Make website fast and mobile-friendly", checked: false },
    { id: "web7", category: "Website", text: "Improve page loading speeds", checked: false },
    { id: "web8", category: "Website", text: "Fix broken redirect links", checked: false },
    { id: "web9", category: "Website", text: "Add local schema structured data markup", checked: false },
    // Local Authority
    { id: "auth1", category: "Local Authority", text: "Build consistent, relevant local citations", checked: false },
    { id: "auth2", category: "Local Authority", text: "Earn local links from complementary businesses", checked: false },
    { id: "auth3", category: "Local Authority", text: "Partner with local organizations and chambers", checked: false },
    { id: "auth4", category: "Local Authority", text: "Encourage genuine, detailed customer reviews", checked: false },
    { id: "auth5", category: "Local Authority", text: "Publish useful content answering customer problems", checked: false },
    // Measurement
    { id: "meas1", category: "Measurement", text: "Connect site to Google Search Console", checked: false },
    { id: "meas2", category: "Measurement", text: "Monitor organic search traffic trends", checked: false },
    { id: "meas3", category: "Measurement", text: "Monitor local and maps search queries", checked: false },
    { id: "meas4", category: "Measurement", text: "Track Google Business Profile performance stats", checked: false },
    { id: "meas5", category: "Measurement", text: "Track phone call requests from profiles", checked: false },
    { id: "meas6", category: "Measurement", text: "Track contact form submissions", checked: false },
    { id: "meas7", category: "Measurement", text: "Track appointment bookings from search", checked: false },
    { id: "meas8", category: "Measurement", text: "Track qualified marketing leads", checked: false }
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
    { id: "definition", text: "What is Local SEO?" },
    { id: "why-matters", text: "Why It Matters" },
    { id: "how-works", text: "How Local Search Works" },
    { id: "gbp", text: "1. Optimize GBP" },
    { id: "category", text: "2. Business Category" },
    { id: "consistency", text: "3. Consistent Info" },
    { id: "keywords", text: "4. Keyword Research" },
    { id: "landing-pages", text: "5. Local Landing Pages" },
    { id: "reviews", text: "6. Customer Reviews" },
    { id: "content", text: "7. Local Content" },
    { id: "links", text: "8. Links & Citations" },
    { id: "technical", text: "9. Technical SEO" },
    { id: "results", text: "10. Track Results" },
    { id: "checklist", text: "GBP & SEO Checklist" },
    { id: "timeline", text: "How Long It Takes" },
    { id: "worth-it", text: "Is It Worth It?" },
    { id: "g2g-help", text: "How G2G Can Help" },
    { id: "faq", text: "FAQ" },
    { id: "conclusion", text: "Conclusion" }
  ];

  // FAQ Content Array
  const faqs = [
    {
      q: "What is local SEO for small business?",
      a: "Local SEO for small business is the process of improving a company's visibility in location-based searches on Google and other search platforms. It includes optimizing the Google Business Profile, website, local keywords, reviews, citations, content, links, and technical SEO. The goal is to help relevant customers in the areas you serve discover your business and take action."
    },
    {
      q: "How can a small business improve local SEO?",
      a: "Start by claiming and accurately completing your Google Business Profile. Then optimize your website around your real services and locations, research local search terms, collect genuine customer reviews, build relevant local citations and links, publish useful content, and fix technical SEO issues. Track calls, website enquiries, bookings, and Business Profile interactions to measure whether your work is producing business results."
    },
    {
      q: "How do I rank my small business on Google Maps?",
      a: "There is no guaranteed shortcut to ranking on Google Maps. Start with a verified and complete Google Business Profile, accurate business information, the right primary category, relevant services, genuine reviews, quality photos, and a trustworthy website. Google says local rankings are mainly influenced by relevance, distance, and prominence."
    },
    {
      q: "Is local SEO worth it for a small business?",
      a: "Local SEO can be highly valuable when your customers search online for businesses, products, or services in a specific area. It can help increase local discovery, website visits, calls, enquiries, bookings, and foot traffic. Its value depends on your industry, competition, location, website, reputation, and execution. The best measurement is qualified business outcomes rather than rankings alone."
    },
    {
      q: "How long does local SEO take to work?",
      a: "There is no fixed timeline for local SEO. Results depend on competition, location, website authority, Business Profile quality, reviews, content, links, technical health, and how consistently the strategy is implemented. Some improvements may appear relatively quickly, while stronger organic visibility can require sustained work. Monitor rankings, searches, calls, website actions, and leads over time rather than expecting overnight results."
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
            <span className="text-gray-300">Local SEO for Small Business</span>
          </nav>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              SEO Strategy
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Calendar size={14} className="text-primary" /> August 20, 2026
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Clock size={14} className="text-primary" /> 10 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] max-w-5xl mb-6">
            Local SEO for Small Business: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 font-black">Proven Growth</span> Guide
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Learn local SEO for small business with practical strategies to rank higher, attract nearby customers, improve Google visibility, and generate more leads.
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
          <article className="lg:col-span-6 text-gray-300 leading-relaxed text-sm sm:text-base font-medium space-y-12 animate-fade-in">
            
            {/* Featured Image */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
              <Image
                src="/assets/blog/local-seo-for-small-business-featured.jpg"
                alt="Local SEO for small business strategy with Google Maps and local search analytics"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <p>
                Imagine someone searches Google for <strong>&quot;digital marketing agency near me,&quot;</strong> <strong>&quot;best dentist in my area,&quot;</strong> <strong>&quot;plumber near me,&quot;</strong> or <strong>&quot;coffee shop nearby.&quot;</strong>
              </p>
              <ul className="space-y-2 text-gray-300 pl-4">
                <li className="flex items-center gap-2">➢ They already have a need.</li>
                <li className="flex items-center gap-2">➢ They are not casually browsing.</li>
                <li className="flex items-center gap-2">➢ They are looking for a business they can call, visit, book, or buy from.</li>
              </ul>
              <p>
                Now imagine your business offers exactly what they need—but your competitor appears in the local results, and you don't.
              </p>
              
              <div className="p-6 border-l-4 border-primary bg-white/5 rounded-r-2xl my-6">
                <p className="text-gray-300 italic">
                  That is the opportunity local SEO is designed to solve.
                </p>
              </div>

              <p>
                <strong>Local SEO for small business</strong> helps your company become more visible when people search for products or services in your area. It connects your business with customers who are already looking for what you offer.
              </p>
              <p>
                And unlike advertising, strong organic visibility can continue generating discovery after the initial optimization work is complete. This is why local SEO is a critical component of your <Link href="/#services" className="text-primary hover:underline font-bold">digital marketing services</Link> strategy.
              </p>
              <p>
                Google says local results are primarily influenced by relevance, distance, and prominence. Complete and accurate Business Profile information, reviews, and other signals help Google understand and evaluate a local business.
              </p>
              <p>
                The good news? You don't need a huge corporation-sized marketing budget to start. You need the right foundations, consistent execution, and patience.
              </p>
            </section>

            {/* What is Local SEO */}
            <hr className="border-white/5" />
            <section id="definition" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Is Local SEO for Small Business?
              </h2>
              <p>
                Local SEO is the process of improving your business's visibility for searches connected to a specific geographic area.
              </p>
              <p>
                For example:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-400">
                <li>&quot;SEO agency in Hyderabad&quot;</li>
                <li>&quot;dentist near me&quot;</li>
                <li>&quot;best salon in Banjara Hills&quot;</li>
                <li>&quot;emergency plumber Hyderabad&quot;</li>
                <li>&quot;Italian restaurant near me&quot;</li>
              </ul>
              <p>
                Local SEO is different from traditional SEO because <strong>location and real-world relevance matter heavily.</strong>
              </p>
              <p>
                A business trying to rank nationally for &quot;marketing agency&quot; faces a very different challenge from one trying to rank locally for &quot;marketing agency in Hyderabad.&quot;
              </p>
              <p>
                Local search can produce several types of visibility, including Google Maps results, the local pack, and traditional organic results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white mb-2">Traditional SEO</h4>
                  <p className="text-xs text-gray-400 italic">
                    &quot;Help me rank for what people search.&quot;
                  </p>
                </div>
                <div className="p-6 border border-primary/20 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-primary mb-2">Local SEO</h4>
                  <p className="text-xs text-gray-400 italic">
                    &quot;Help me rank when people search for what I offer in the area I serve.&quot;
                  </p>
                </div>
              </div>
              <p>
                That distinction is extremely important for small businesses.
              </p>
            </section>

            {/* Why Matters */}
            <hr className="border-white/5" />
            <section id="why-matters" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Why Local SEO Matters for Small Businesses
              </h2>
              <ul className="space-y-2 text-gray-300 pr-4 pl-4">
                <li>➢ A small business usually cannot outspend a multinational company.</li>
                <li>➢ But it doesn't necessarily need to.</li>
                <li>➢ A local business can compete by being more relevant to a specific audience in a specific location.</li>
                <li>➢ Think about a person searching for a bakery. They probably don't want the world's biggest bakery brand. They want a good bakery that is close enough to visit.</li>
              </ul>
              <p>
                That creates an advantage for businesses that establish strong local relevance. Google's own documentation recommends businesses maintain accurate information, respond to reviews, add useful photos and videos, and keep their Business Profile complete.
              </p>
              <p>
                Local SEO can help you:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 pl-4">
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> Get discovered by nearby customers</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> Increase Google Maps visibility</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> Generate phone calls</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> Increase website visits</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> Drive direction requests</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> Generate appointment inquiries</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> Build local brand awareness</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> Capture high-intent searches</div>
              </div>
              <p>
                The goal isn't simply more traffic. <strong>The goal is more relevant traffic that can become customers.</strong>
              </p>
              <div className="p-6 border border-white/10 bg-[#121216]/60 rounded-2xl flex items-start gap-4">
                <Sparkles className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold text-white mb-1">Pro Tip:</p>
                  <p className="text-gray-400 text-sm">
                    Don't measure local SEO only by rankings. Track calls, enquiries, bookings, website actions, direction requests, and qualified leads.
                  </p>
                </div>
              </div>
            </section>

            {/* How Works */}
            <hr className="border-white/5" />
            <section id="how-works" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How Local Search Actually Works
              </h2>
              <p>
                Google doesn't simply choose the business with the most keywords. Local results are influenced by factors including:
              </p>

              <h3 className="text-lg font-bold text-white mt-4">1. Relevance</h3>
              <p>
                Does your business match what the person is searching for? If someone searches for &quot;family dentist,&quot; Google needs to understand whether your business provides that service.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">2. Distance</h3>
              <p>
                How close is the business to the searcher or the location included in the search? A highly relevant business may still struggle to appear for a searcher who is far outside its service area.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">3. Prominence</h3>
              <p>
                How established and well-known does the business appear to be? Google says prominence can be influenced by information such as links and reviews.
              </p>
              <p>
                This is why local SEO isn't about inserting your city name into every sentence. It's about building a consistent, trustworthy digital presence. Google's local ranking guidance explains that local results are primarily influenced by relevance, distance, and prominence. Read <a href="https://support.google.com/business/answer/7091" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google's local ranking guidance</a> for more details.
              </p>
            </section>

            {/* Claim and Optimize Your GBP */}
            <hr className="border-white/5" />
            <section id="gbp" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                1. Claim and Optimize Your Google Business Profile
              </h2>
              <p>
                For most eligible local businesses, this is one of the first places to start.
              </p>
              <p>
                A verified <a href="https://support.google.com/business/answer/3038177" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google Business Profile</a> allows businesses to manage how their information appears across Google Search and Maps.
              </p>
              <p>
                Start by claiming and verifying the profile. Then make sure the information accurately represents your real business. Pay attention to:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 pl-4">
                <li>Business name</li>
                <li>Primary category</li>
                <li>Address</li>
                <li>Service area</li>
                <li>Phone number</li>
                <li>Website</li>
                <li>Opening hours</li>
                <li>Services & Photos</li>
                <li>Business description</li>
                <li>Relevant attributes</li>
              </div>
              <p>
                Don't treat the profile like a form you complete once and forget. Treat it as an active customer-facing asset.
              </p>

              {/* Image 2 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 my-8">
                <Image
                  src="/assets/blog/google-business-profile-optimization-local-seo.jpg"
                  alt="Google Business Profile optimization for local business SEO"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Choose the Right Category */}
            <hr className="border-white/5" />
            <section id="category" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                2. Choose the Right Business Category
              </h2>
              <p>
                Your primary category helps Google understand what your business does.
              </p>
              <p>
                For example, a business should select the most specific category that accurately represents its core service rather than choosing unrelated categories simply because they contain valuable keywords.
              </p>
              <p>
                Google specifically recommends choosing a category that is specific and representative of the business.
              </p>
              <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl space-y-4">
                <div>
                  <p className="font-bold text-red-400 mb-1">Avoid this mistake:</p>
                  <p className="text-gray-400 text-sm">
                    Adding dozens of categories just because they contain keywords you want to rank for.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-primary mb-1">Better approach:</p>
                  <p className="text-gray-300 text-sm">
                    Choose the category that best describes what customers actually see your business as.
                  </p>
                </div>
              </div>
              <p className="text-center font-bold text-white text-sm">Accuracy beats manipulation.</p>
            </section>

            {/* Keep Info Consistent */}
            <hr className="border-white/5" />
            <section id="consistency" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                3. Keep Your Business Information Consistent
              </h2>
              <p>
                Your business details should be consistent wherever customers find you. Pay particular attention to:
              </p>
              <ul className="list-disc pl-5 text-gray-400 space-y-1">
                <li>Business name</li>
                <li>Address</li>
                <li>Phone number</li>
                <li>Website</li>
                <li>Opening hours</li>
              </ul>
              <p>
                This information should match across your website, Google Business Profile, important directories, social profiles, and other trusted platforms where appropriate.
              </p>
              <p>
                Inconsistent information creates confusion for customers and makes your digital presence less trustworthy.
              </p>
              <p>
                For service-area businesses, make sure your service area reflects where you serve customers. Google provides specific guidelines for service-area and hybrid businesses.
              </p>
            </section>

            {/* Do Local Keyword Research */}
            <hr className="border-white/5" />
            <section id="keywords" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                4. Do Local Keyword Research
              </h2>
              <p>
                Don't start with keywords you think people search. Start with what your customers need.
              </p>
              <p>
                Suppose you run a photography business. Instead of focusing only on &quot;photographer&quot;, you could investigate searches such as:
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">
                <li>wedding photographer in Hyderabad</li>
                <li>maternity photographer Hyderabad</li>
                <li>corporate photographer near me</li>
                <li>pre-wedding photography Hyderabad</li>
                <li>newborn photographer near me</li>
              </ul>
              <p>
                The goal is to understand the relationship between: <strong>Service + Location + Customer Need</strong>.
              </p>
              
              <div className="p-5 bg-white/5 rounded-xl border border-white/5 text-center text-white space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">A simple keyword formula</p>
                <p className="font-bold">[Service] + [Location]</p>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Then expand it with intent:</p>
                <p className="font-bold">[Service] + [Location] + [problem/use case]</p>
              </div>

              <p>
                For example:
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">
                <li>&quot;AC repair Hyderabad&quot;</li>
                <li>&quot;AC repair Hyderabad emergency&quot;</li>
                <li>&quot;AC repair near me&quot;</li>
              </ul>
              <p>
                This creates a much stronger content and landing-page strategy than repeating one generic keyword. If you want a step-by-step primer on optimizing your site, you can read this comprehensive <a href="https://ahrefs.com/blog/local-seo/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">local SEO guide</a>.
              </p>

              {/* Image 3 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 my-8">
                <Image
                  src="/assets/blog/local-keyword-research-strategy-small-business-seo.jpg"
                  alt="Local keyword research strategy for small business SEO"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Build Local Landing Pages */}
            <hr className="border-white/5" />
            <section id="landing-pages" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                5. Build Useful Local Landing Pages
              </h2>
              <p>
                Your website should make it obvious what you do and where you do it. A service business might create pages such as:
              </p>
              <ul className="list-disc pl-5 text-gray-400 space-y-1 text-sm">
                <li>/seo-services/</li>
                <li>/local-seo/</li>
                <li>/google-business-profile-management/</li>
              </ul>
              <p>
                If the business genuinely serves different locations, location-specific pages may also be appropriate. But there is an important warning.
              </p>
              <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl">
                <p className="font-bold text-white mb-1">Do not create dozens of nearly identical pages with different city names simply to manipulate rankings.</p>
                <p className="text-gray-400 text-xs">
                  Each location page should provide genuine value. Include information such as services offered, location served, local customer needs, relevant examples, FAQs, testimonials, business information, and clear contact options.
                </p>
              </div>
              <p>
                The page should be useful even if Google never existed. That's a good test.
              </p>
            </section>

            {/* Build Customer Reviews */}
            <hr className="border-white/5" />
            <section id="reviews" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                6. Build Genuine Customer Reviews
              </h2>
              <p>
                Reviews are important for two reasons:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-400 text-sm">
                <li>They influence how potential customers perceive your business.</li>
                <li>Google uses review-related information as part of its local ecosystem.</li>
              </ol>
              <p>
                Google explains that reviews and ratings appear across Search and Maps, while its local ranking guidance notes that more reviews and positive ratings can help local prominence. But don't chase reviews purely for SEO. Ask real customers for honest feedback after a successful interaction.
              </p>
              
              <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-3xl space-y-3">
                <h4 className="font-bold text-white text-sm">A simple review process:</h4>
                <ol className="list-decimal pl-5 space-y-1 text-xs text-gray-400">
                  <li>Deliver the service.</li>
                  <li>Ask the customer for genuine feedback.</li>
                  <li>Make leaving a review easy.</li>
                  <li>Thank customers for their feedback.</li>
                  <li>Respond professionally (especially to negative ones).</li>
                  <li>Learn from negative feedback.</li>
                </ol>
              </div>
              
              <p className="text-center font-bold text-white text-sm">Never manufacture reviews.</p>
              <p>
                A smaller collection of genuine customer experiences is far more valuable than a suspicious collection of artificial ones.
              </p>
              <p>
                If a customer leaves a negative review, respond professionally. Don't argue, don't blame the customer, and don't reveal private information. Instead, acknowledge the concern, remain professional, offer to investigate, move the detailed discussion to a private channel, and fix legitimate problems. That response is visible to future customers too.
              </p>

              {/* Image 4 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 my-8">
                <Image
                  src="/assets/blog/customer-reviews-reputation-management-local-seo.jpg"
                  alt="Customer reviews and reputation management for local SEO"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Create Content */}
            <hr className="border-white/5" />
            <section id="content" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                7. Create Content Around Local Customer Problems
              </h2>
              <p>
                A local SEO blog shouldn't exist just to publish keywords. It should answer questions your potential customers ask.
              </p>
              <p>
                For example, a roofing company could publish:
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">
                <li>How much does roof repair cost in Hyderabad?</li>
                <li>How often should a roof be inspected?</li>
                <li>7 signs your roof needs immediate repair</li>
                <li>How to prepare your home for heavy rain</li>
                <li>Roof repair vs roof replacement: which is right?</li>
              </ul>
              <p>
                These topics connect <strong>customer problems with business expertise.</strong> This is the core of a successful <Link href="/#services" className="text-primary hover:underline font-bold">content marketing strategy</Link> that builds trust.
              </p>
              <p>
                Notice the difference? That is much stronger than publishing: <em>&quot;Best Roofing Company Hyderabad &vert; Roofing Company Hyderabad &vert; Roof Repair Hyderabad&quot;</em> for the sake of keyword repetition.
              </p>
              <p>
                Useful content demonstrates expertise while creating additional opportunities to appear for relevant searches.
              </p>
            </section>

            {/* Links and Citations */}
            <hr className="border-white/5" />
            <section id="links" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                8. Earn Local Links and Citations
              </h2>
              <p>
                A local citation is a mention of your business information on another website or directory. Relevant local links can come from local business organizations, industry associations, chambers of commerce, local publications, community organizations, relevant directories, local partnerships, sponsorships, and supplier websites.
              </p>
              <p>
                The key word is <strong>relevant.</strong> You don't need hundreds of random backlinks. You want references that make sense for your business.
              </p>
              <p>
                For example, a Hyderabad-based restaurant being mentioned by a respected local food publication makes considerably more sense than a random link from an unrelated website in another industry.
              </p>
              <p>
                Directories can support local visibility when they are relevant and trustworthy. But don't fall into the &quot;submit to 500 directories&quot; trap. Quality matters more than quantity. Prioritize:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-400 pl-4">
                <li>• Relevant industry directories</li>
                <li>• Trusted local directories</li>
                <li>• Professional associations</li>
                <li>• Chamber websites</li>
                <li>• Reputable business platforms</li>
                <li>• Local publications</li>
              </ul>
              <p>
                Keep important business details accurate. And don't pay for a directory simply because someone promises: <em>&quot;Guaranteed &num;1 Google ranking.&quot;</em> Google explicitly warns that third parties cannot guarantee placement in Google Search or Maps.
              </p>
              <p>
                Local link building becomes much easier when you stop thinking: <em>&quot;How do I get backlinks?&quot;</em> and start thinking: <strong>&quot;Why would another local website want to mention my business?&quot;</strong>
              </p>
              <p>
                Here are practical ideas:
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-400 space-y-2">
                <li><strong>Partner with complementary businesses:</strong> A wedding photographer could collaborate with wedding planners, venues, makeup artists, or event companies.</li>
                <li><strong>Sponsor local events:</strong> A genuine community sponsorship may generate both awareness and a relevant local mention.</li>
                <li><strong>Create useful local resources:</strong> For example, a &quot;Complete Hyderabad Wedding Venue Guide&quot; can attract organic attention from other sites.</li>
                <li><strong>Share original expertise:</strong> Local publications often need expert comments. Be available when journalists or publishers need industry insight.</li>
              </ul>
            </section>

            {/* Technical SEO */}
            <hr className="border-white/5" />
            <section id="technical" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                9. Strengthen Your Website's Technical SEO
              </h2>
              <p>
                Local SEO still depends on having a healthy website. Make sure your site loads quickly, works properly on mobile, uses HTTPS, has crawlable pages, has logical navigation, uses descriptive page titles, has useful meta descriptions, uses clean URLs, includes internal links, avoids broken pages, and has optimized images.
              </p>
              <p>
                Google specifically recommends making websites fast and accessible across devices. For official requirements and documentation, check out <a href="https://developers.google.com/search" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google Search Central</a>.
              </p>
              <p>
                Combined with <Link href="/#services" className="text-primary hover:underline font-bold">website and funnel optimization</Link>, a fast, responsive site ensures search traffic converts into paying customers.
              </p>
              
              <div className="p-6 border border-white/10 bg-[#121216]/60 rounded-r-2xl border-l-4 border-primary">
                <p className="text-gray-300 italic">
                  A beautiful website that takes forever to load is not a good local SEO asset.
                </p>
              </div>
            </section>

            {/* Track Results */}
            <hr className="border-white/5" />
            <section id="results" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                10. Track What Produces Business Results
              </h2>
              <p>
                Ranking reports alone don't tell the whole story. While organic visibility builds equity over time, combining it with <Link href="/#services" className="text-primary hover:underline font-bold">Google Ads management</Link> can provide immediate search coverage.
              </p>
              <p>
                Track:
              </p>

              <div className="overflow-x-auto my-6 border border-white/5 rounded-xl">
                <table className="min-w-full divide-y divide-white/5 text-left text-xs sm:text-sm">
                  <thead className="bg-[#121216] text-white">
                    <tr>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider border-r border-white/5">Metric</th>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Local rankings</td>
                      <td className="px-6 py-3">Shows visibility</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Google Business Profile views</td>
                      <td className="px-6 py-3">Shows discovery</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Search queries</td>
                      <td className="px-6 py-3">Shows how customers find you</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Website clicks</td>
                      <td className="px-6 py-3">Shows interest</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Phone calls</td>
                      <td className="px-6 py-3">Shows high intent</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Direction requests</td>
                      <td className="px-6 py-3">Shows offline intent</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Form submissions</td>
                      <td className="px-6 py-3">Shows leads</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Bookings</td>
                      <td className="px-6 py-3">Shows conversions</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Organic traffic</td>
                      <td className="px-6 py-3">Shows website visibility</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Qualified leads</td>
                      <td className="px-6 py-3">Shows actual business value</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Google Business Profile performance reporting can show searches, views, interactions, and other customer actions for verified profiles.
              </p>
              <div className="p-5 bg-white/5 rounded-xl border border-white/5 text-center text-white space-y-2">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">The question isn't:</p>
                <p className="italic text-gray-400">&quot;Did we move from position 8 to position 5?&quot;</p>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-2">The better question is:</p>
                <p className="font-bold text-primary text-base">&quot;Did local visibility create more qualified opportunities?&quot;</p>
              </div>

              {/* Image 5 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 my-8">
                <Image
                  src="/assets/blog/measuring-local-seo-performance-leads-small-business.jpg"
                  alt="Measuring local SEO performance and leads for small business"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Checklist */}
            <hr className="border-white/5" />
            <section id="checklist" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Local SEO Checklist for Small Business
              </h2>
              <p>
                Use this as your practical starting point. Check off items as you complete them to track your progress:
              </p>
              <p>
                For additional practical tips on growing your footprint on a budget, consult Ahrefs' <a href="https://ahrefs.com/blog/small-business-seo/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">small business SEO guide</a>.
              </p>

              <div className="border border-white/10 bg-[#121216]/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-white text-base">Checklist Completion</h3>
                    <span className="text-xs font-bold text-primary">{progressPercentage}% Done</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-green-400 transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {["Google Business Profile", "Website", "Local Authority", "Measurement"].map((category) => (
                    <div key={category} className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-white/5 pb-1">{category}</h4>
                      <div className="space-y-2">
                        {checklistItems
                          .filter((item) => item.category === category)
                          .map((item) => (
                            <label
                              key={item.id}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
                            >
                              <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => toggleChecklistItem(item.id)}
                                className="mt-1 accent-primary shrink-0"
                              />
                              <span className={`text-xs sm:text-sm transition-all ${item.checked ? "text-gray-500 line-through" : "text-gray-300"}`}>
                                {item.text}
                              </span>
                            </label>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* How Long Does It Take */}
            <hr className="border-white/5" />
            <section id="timeline" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How Long Does Local SEO Take?
              </h2>
              <p>
                There is no honest universal number. Your timeline depends on competition, location, industry, website quality, existing authority, review profile, Business Profile quality, content quality, links, technical issues, and consistency of execution.
              </p>
              <p>
                Some improvements can be noticed relatively quickly. Meaningful organic growth usually requires sustained work.
              </p>
              <p>
                Google itself notes that after structured-data changes, crawling and indexing can take time, and that pages may take several days to be discovered and crawled.
              </p>
              <div className="p-6 bg-white/5 border border-white/5 rounded-2xl text-center space-y-4">
                <p className="text-xs uppercase tracking-widest text-primary font-bold">The right mindset is:</p>
                <p className="text-lg font-bold">Build &rarr; measure &rarr; improve &rarr; repeat.</p>
                <p className="text-xs uppercase tracking-widest text-red-400 font-bold">Not:</p>
                <p className="text-gray-400 font-semibold">Publish &rarr; wait &rarr; panic.</p>
              </div>
            </section>

            {/* Worth it */}
            <hr className="border-white/5" />
            <section id="worth-it" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Is Local SEO Worth It for a Small Business?
              </h2>
              <p>
                If customers search online before choosing a local business, local SEO can be one of your most valuable long-term marketing channels. It is especially useful when your business depends on:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 pl-4">
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> Local customers</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> Phone calls</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> Appointments</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> Walk-ins</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> Service-area leads</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> Local product searches</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> Location-based discovery</div>
              </div>
              <p>
                And you don't necessarily need to do everything at once. Start with the foundations. Then improve one layer at a time.
              </p>
            </section>

            {/* G2G Help */}
            <hr className="border-white/5" />
            <section id="g2g-help" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How G2G Media House Can Help
              </h2>
              <p>
                For a small business owner, SEO can become overwhelming quickly.
              </p>
              <p>
                That's where an experienced marketing partner can help. G2G Media House offers <Link href="/#services" className="text-primary hover:underline font-bold">SEO services for growing businesses</Link> alongside content, paid advertising, branding, websites, funnels, and social media marketing.
              </p>
              <p>
                Its SEO offering includes keyword research, competitor analysis, on-page SEO, off-page SEO, link building, technical SEO, and monthly reporting.
              </p>
              <p>
                That broader approach matters because local visibility doesn't exist in isolation. A person may discover your business through Google, visit your website, check your social media, read reviews, and then contact you.
              </p>
              <p>
                Your entire digital presence needs to support that journey.
              </p>
            </section>

            {/* FAQ Accordion */}
            <hr className="border-white/5" />
            <section id="faq" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4 my-6">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-white/5 rounded-2xl bg-[#121216]/40 overflow-hidden hover:border-white/10 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between text-white font-bold text-sm sm:text-base hover:text-primary transition-colors gap-4"
                    >
                      {faq.q}
                      <ChevronDown
                        size={18}
                        className={`text-gray-500 transition-transform duration-300 ${
                          openFaqIndex === idx ? "rotate-180 text-primary" : ""
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

            {/* Key Takeaways & Conclusion */}
            <hr className="border-white/5" />
            <section id="conclusion" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Key Takeaways
              </h2>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-400">
                <li>Start with an accurate, verified Google Business Profile.</li>
                <li>Make your website clearly communicate your services and locations.</li>
                <li>Research real local search intent instead of stuffing keywords.</li>
                <li>Earn genuine customer reviews and respond professionally.</li>
                <li>Build relevant local citations and links.</li>
                <li>Create genuinely useful local content.</li>
                <li>Keep your website fast, mobile-friendly, and technically healthy.</li>
                <li>Track leads and customer actions—not rankings alone.</li>
                <li>Avoid fake locations, fake reviews, and manipulative SEO tactics.</li>
                <li>Treat local SEO as an ongoing growth system, not a one-time task.</li>
              </ol>

              <h3 className="text-xl font-black uppercase tracking-tight text-white mt-8">
                Conclusion
              </h3>
              <p>
                Local SEO for small business isn't about tricking Google. It's about making your business easier to understand, easier to discover, and easier to trust.
              </p>
              <p>
                When someone searches for what you offer, you want Google to understand:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-400 text-sm">
                <li>This business is relevant.</li>
                <li>This business serves this area.</li>
                <li>This business is legitimate.</li>
              </ul>
              <p>
                And when that customer reaches your website or Business Profile, you want them to think: <strong>&quot;This is exactly what I was looking for.&quot;</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-400 text-sm">
                <li>That's the real purpose of local SEO.</li>
                <li>Not vanity rankings.</li>
                <li>Not endless keyword reports.</li>
              </ul>
              <p>
                More visibility. More qualified enquiries. More customers. More growth. For a small business competing against larger brands, that can make a very real difference.
              </p>

              <div className="p-8 border border-primary/20 bg-gradient-to-br from-primary/10 to-green-500/5 rounded-3xl text-center space-y-6">
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white">
                  Ready to Turn Local Searches Into Customers?
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
                  Getting found locally is only the first step. Your website, messaging, reviews, offers, and conversion process all need to work together.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
                  If you're ready to build a stronger search presence and turn visibility into qualified leads, talk to G2G Media House about a customized SEO strategy or ask about our <strong>Free Local SEO Audit Checklist for Small Businesses</strong>.
                </p>
                <div>
                  <Link
                    href="/contact-form"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    Contact G2G Media House <ArrowRight size={16} />
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
