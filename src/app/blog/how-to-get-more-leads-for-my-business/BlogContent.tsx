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
  Target,
  Layers,
  PhoneCall,
  Users,
  CheckCircle2,
  Filter
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
    "why-not-enough",
    "what-is-lead-gen",
    "strategy-1",
    "strategy-2",
    "strategy-3",
    "strategy-4",
    "strategy-5",
    "strategy-6",
    "strategy-7",
    "strategy-8",
    "strategy-9",
    "strategy-10",
    "strategy-11",
    "strategy-12",
    "strategy-13",
    "strategy-14",
    "strategy-15",
    "choose-strategy",
    "common-mistakes",
    "lead-gen-checklist",
    "how-much-spend",
    "when-hire-agency",
    "lead-quality-focus",
    "system-approach",
    "g2g-help",
    "final-takeaways",
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

  // Interactive Lead Gen Audit Checklist State
  const [auditChecklist, setAuditChecklist] = useState([
    // Audience
    { id: "a1", category: "Audience", text: "Do we clearly know our ideal customer persona?", checked: false },
    { id: "a2", category: "Audience", text: "Do we understand their biggest urgent pain points?", checked: false },
    { id: "a3", category: "Audience", text: "Do we know what triggers their buying decision?", checked: false },
    // Offer
    { id: "o1", category: "Offer", text: "Is our primary offer crystal clear & compelling?", checked: false },
    { id: "o2", category: "Offer", text: "Is the tangible customer benefit immediately obvious?", checked: false },
    { id: "o3", category: "Offer", text: "Is there a strong, low-friction reason to act today?", checked: false },
    // Website
    { id: "w1", category: "Website", text: "Is our primary CTA visible above the fold on all key pages?", checked: false },
    { id: "w2", category: "Website", text: "Do we display genuine client testimonials & case studies?", checked: false },
    { id: "w3", category: "Website", text: "Are lead capture forms short, fast, and easy to complete?", checked: false },
    { id: "w4", category: "Website", text: "Does the website load in under 2.5s on mobile devices?", checked: false },
    // Traffic
    { id: "t1", category: "Traffic", text: "Are we targeting high-intent commercial search queries?", checked: false },
    { id: "t2", category: "Traffic", text: "Are our ads focused on solving customer problems?", checked: false },
    { id: "t3", category: "Traffic", text: "Are we creating educational content that builds trust?", checked: false },
    // Conversion & Sales
    { id: "c1", category: "Conversion & Sales", text: "Do landing pages strictly match ad campaign messaging?", checked: false },
    { id: "c2", category: "Conversion & Sales", text: "Are all conversion events & phone calls properly tracked?", checked: false },
    { id: "c3", category: "Conversion & Sales", text: "Are inbound leads contacted in under 15 minutes?", checked: false },
    { id: "c4", category: "Conversion & Sales", text: "Do we have an automated nurture sequence for non-converters?", checked: false }
  ]);

  const toggleAuditItem = (id: string) => {
    setAuditChecklist(
      auditChecklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const auditProgress = Math.round(
    (auditChecklist.filter((i) => i.checked).length / auditChecklist.length) * 100
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
    { id: "why-not-enough", text: "Why You're Not Getting Leads" },
    { id: "what-is-lead-gen", text: "What Is Lead Generation?" },
    { id: "strategy-1", text: "1. Define Ideal Customer" },
    { id: "strategy-2", text: "2. Irresistible Offer" },
    { id: "strategy-3", text: "3. Conversion Website" },
    { id: "strategy-4", text: "4. High-Intent SEO" },
    { id: "strategy-5", text: "5. Targeted Google Ads" },
    { id: "strategy-6", text: "6. Meta Ads & Social" },
    { id: "strategy-7", text: "7. Social Media Funnels" },
    { id: "strategy-8", text: "8. Problem-Solving Content" },
    { id: "strategy-9", text: "9. Dedicated Landing Pages" },
    { id: "strategy-10", text: "10. Valuable Lead Magnets" },
    { id: "strategy-11", text: "11. Smart Retargeting" },
    { id: "strategy-12", text: "12. Rapid Lead Follow-Up" },
    { id: "strategy-13", text: "13. Track Lead Quality" },
    { id: "strategy-14", text: "14. Reviews & Referrals" },
    { id: "strategy-15", text: "15. Build a System Engine" },
    { id: "choose-strategy", text: "Which Strategy to Choose" },
    { id: "common-mistakes", text: "Mistakes to Avoid" },
    { id: "lead-gen-checklist", text: "Lead Gen Audit Checklist" },
    { id: "how-much-spend", text: "How Much to Spend" },
    { id: "when-hire-agency", text: "When to Hire an Agency" },
    { id: "lead-quality-focus", text: "Lead Quality vs Volume" },
    { id: "system-approach", text: "The Lead Engine System" },
    { id: "g2g-help", text: "How G2G Can Help" },
    { id: "final-takeaways", text: "Final Takeaways" },
    { id: "faq", text: "Frequently Asked Questions" }
  ];

  // FAQ Content Array
  const faqs = [
    {
      q: "How can I get more leads for my business?",
      a: "To get more leads, identify your ideal customers first, then reach them through channels such as SEO, Google Ads, social media, content marketing, referrals, and email marketing. Your website should have a clear offer, strong trust signals, and simple calls to action. Most importantly, track qualified leads, conversion rates, and sales, not just website traffic or clicks."
    },
    {
      q: "What is the best way to generate leads?",
      a: "There is no single best lead-generation method for every business. The right strategy depends on your industry, target audience, location, budget, and buying cycle. SEO and content marketing can generate long-term organic leads, while Google Ads and Meta Ads can produce faster results. Combining traffic generation with strong landing pages, clear offers, conversion tracking, and consistent follow-up usually creates the strongest lead-generation system."
    },
    {
      q: "How do I generate leads without spending a lot of money?",
      a: "You can generate leads with a limited budget by focusing on channels that require more consistency than advertising spend. Create useful SEO content, optimize your Google Business Profile, build a social media presence, collect customer reviews, encourage referrals, and improve your website's conversion rate. Start with strategies that reach people already interested in your services, measure what produces qualified enquiries, and reinvest in the channels that work."
    },
    {
      q: "How can I get more qualified leads?",
      a: "Getting qualified leads starts with clearly defining your ideal customer. Target people based on factors such as their needs, location, industry, budget, and buying intent. Use specific keywords and audience targeting instead of broad campaigns. Your landing pages should clearly explain who your service is for, the problem you solve, and the expected outcome. Then track which leads become genuine sales opportunities and optimize your marketing accordingly."
    },
    {
      q: "How can digital marketing generate leads for my business?",
      a: "Digital marketing generates leads by connecting your business with potential customers across search engines, social media, paid advertising, websites, content, and email. SEO captures people actively searching for solutions, while Google and Meta Ads can reach targeted audiences quickly. Your website or landing page then converts that attention into enquiries through forms, calls, WhatsApp, or bookings. Follow-up and lead nurturing help turn those enquiries into customers."
    }
  ];

  // SEO Tags
  const seoTags = [
    "Lead Generation",
    "Digital Marketing",
    "Lead Generation Strategies",
    "Business Growth",
    "Online Marketing",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Conversion Optimization",
    "Small Business Marketing"
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
            <span className="text-gray-300">How to Get More Leads for Your Business</span>
          </nav>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              Growth Playbook
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Calendar size={14} className="text-primary" /> September 2026
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Clock size={14} className="text-primary" /> 16 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] max-w-5xl mb-6">
            How to Get More Leads for Your Business: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 font-black">
              15 Proven Strategies
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Learn how to get more leads for your business with proven SEO, paid ads, social media, landing pages, and follow-up strategies that drive real revenue.
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
              <ul className="space-y-2.5">
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
                src="/assets/blog/how-to-get-more-leads-for-my-business-featured.jpg"
                alt="Business owner reviewing a digital lead generation strategy and qualified leads"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <p>
                If you are constantly asking yourself, <em>&quot;How do I get more leads for my business?&quot;</em>, you probably don&apos;t need another random marketing trick.
              </p>
              
              <div className="p-6 border-l-4 border-primary bg-white/5 rounded-r-2xl my-6">
                <p className="font-bold text-white text-lg italic">
                  You need a system.
                </p>
              </div>

              <p>
                Maybe your website gets visitors but very few enquiries. Maybe your social media posts get likes but no customers. Or perhaps you are spending money on advertising without knowing whether the leads are actually worth pursuing.
              </p>
              <p>
                These are not necessarily traffic problems. They are often <strong>lead-generation and conversion problems</strong>.
              </p>
              <p>
                In this guide, we&apos;ll walk through 15 practical strategies to help you attract more potential customers, generate better-quality enquiries, and turn marketing activity into measurable business growth.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* Why Your Business Isn't Getting Enough Leads */}
            <section id="why-not-enough" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Why Your Business Isn&apos;t Getting Enough Leads
              </h2>
              <p>
                Before looking for new channels, find out where the current system is breaking:
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 pl-4">
                <li>• The wrong people are seeing the marketing</li>
                <li>• The offer isn&apos;t clear</li>
                <li>• The website doesn&apos;t build enough trust</li>
                <li>• There is no strong call to action</li>
                <li>• Advertising targets clicks instead of buyers</li>
                <li>• Content attracts visitors without buying intent</li>
                <li>• Landing pages are difficult to use</li>
                <li>• Leads aren&apos;t followed up quickly</li>
                <li>• Marketing performance isn&apos;t tracked properly</li>
              </ul>

              <p>
                For example, imagine a company receives 5,000 website visitors every month but only 10 enquiries. Getting another 5,000 visitors may not solve the problem. Improving the website, offer, messaging and conversion process will.
              </p>
              <div className="p-4 border-l-2 border-primary bg-white/5 rounded-r-xl text-sm font-bold text-white">
                The first rule of lead generation: fix the leaks before pouring more traffic into the funnel.
              </div>
            </section>

            <hr className="border-white/5" />

            {/* What Is Lead Generation? */}
            <section id="what-is-lead-gen" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Is Lead Generation?
              </h2>
              <p>
                Lead generation is the process of attracting potential customers and encouraging them to take an action that allows your business to continue the conversation.
              </p>
              <p className="font-bold text-white">That action could be:</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Filling out a contact form</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Calling your business</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Booking a consultation</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Requesting a quotation</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Starting a WhatsApp chat</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Downloading a resource</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Booking a product demo</span>
              </div>
              <p className="text-sm text-gray-400">
                The important distinction is that <strong>traffic isn&apos;t the same as a lead</strong>. A visitor becomes a lead when they show meaningful interest and give your business a way to continue the conversation.
              </p>

              {/* Image 2 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                <Image
                  src="/assets/blog/lead-generation-funnel-converting-visitors.jpg"
                  alt="Lead generation funnel showing how businesses convert visitors into qualified leads and customers"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            <hr className="border-white/5" />

            {/* 15 Strategies */}
            <section id="strategy-1" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                15 Practical Strategies to Generate More Leads
              </h2>
              
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">1.</span> Define Your Ideal Customer
              </h3>
              <p>
                Before trying to generate more leads, get specific about who you want. Ask: Who is most likely to buy? What triggers them to look for a solution? What objections stop them? What is a customer worth to your business?
              </p>
              <div className="p-4 border border-white/10 bg-[#121216]/60 rounded-xl text-xs space-y-1">
                <p className="text-red-400">Too broad: &quot;Business owners&quot;</p>
                <p className="text-green-400 font-semibold">Strong definition: &quot;Hyderabad-based service businesses with established revenue that want to generate consistent qualified enquiries through digital marketing.&quot;</p>
              </div>

              {/* Image 3 Placement: After 1. Define Ideal Customer */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                <Image
                  src="/assets/blog/digital-marketing-team-identifying-ideal-customers.jpg"
                  alt="Digital marketing team identifying ideal customers and target audience for lead generation"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            <section id="strategy-2" className="scroll-mt-28 space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">2.</span> Create an Offer People Actually Want
              </h3>
              <p className="text-sm text-gray-400">
                A lead campaign cannot compensate for a weak offer. Instead of <em>&quot;Contact us for digital marketing services&quot;</em>, try: <strong>&quot;Get a free 20-minute growth consultation and identify the three biggest opportunities in your marketing funnel.&quot;</strong>
              </p>
            </section>

            <section id="strategy-3" className="scroll-mt-28 space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">3.</span> Build a Website That Converts Visitors Into Leads
              </h3>
              <p className="text-sm text-gray-400">
                A high-converting website makes five things obvious: What you do, Who you help, Why you&apos;re different, Why people should trust you, and What they should do next.
              </p>
            </section>

            <section id="strategy-4" className="scroll-mt-28 space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">4.</span> Use SEO to Capture High-Intent Customers
              </h3>
              <p className="text-sm text-gray-400">
                SEO captures users at commercial investigation (<em>&quot;best marketing agency&quot;</em>) and transactional stages (<em>&quot;digital marketing agency Hyderabad&quot;</em>).
              </p>
              <p className="text-xs text-gray-300">
                Businesses that want long-term organic lead generation should invest in professional <Link href="/blog/seo-services-in-hyderabad" className="text-primary hover:underline font-bold">SEO Services</Link> to improve visibility and rankings.
              </p>
              <p className="text-xs text-gray-400">
                According to <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google Search Essentials</a>, focus on creating helpful, people-first content using natural language.
              </p>
            </section>

            <section id="strategy-5" className="scroll-mt-28 space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">5.</span> Run Google Ads for High-Intent Demand
              </h3>
              <p className="text-sm text-gray-400">
                Paid search helps reach people actively looking for what you sell right now. Working with experienced <Link href="/blog/google-ads-agency-hyderabad" className="text-primary hover:underline font-bold">Google Ads Management Services</Link> providers can help businesses maximize qualified leads while controlling acquisition costs. Refer to the <a href="https://support.google.com/google-ads/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google Ads Help Center</a> for campaign fundamentals.
              </p>
            </section>

            <section id="strategy-6" className="scroll-mt-28 space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">6.</span> Use Meta Ads to Create and Capture Demand
              </h3>
              <p className="text-sm text-gray-400">
                Facebook and Instagram can be powerful lead-generation channels. Structure ads around: <strong>Problem → Insight → Solution → Proof → CTA</strong>. For technical setup, visit the <a href="https://www.facebook.com/business/help" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Meta Business Help Center</a>.
              </p>

              {/* Image 4 Placement: After 6. Meta Ads */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                <Image
                  src="/assets/blog/digital-advertising-campaign-google-social-media-ads.jpg"
                  alt="Digital advertising campaign generating leads through Google and social media ads"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            <section id="strategy-7" className="scroll-mt-28 space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">7.</span> Turn Social Media Into a Lead Generation Channel
              </h3>
              <p className="text-sm text-gray-400">
                Use the framework: <strong>Teach → Prove → Engage → Convert</strong>. Create educational posts, case studies, and customer stories to make sales conversations feel natural.
              </p>
            </section>

            <section id="strategy-8" className="scroll-mt-28 space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">8.</span> Create Content That Attracts Potential Customers
              </h3>
              <p className="text-sm text-gray-400">
                Write problem-solving articles like <em>&quot;Why Your Google Ads Are Getting Clicks but No Leads&quot;</em> rather than generic introductory fluff.
              </p>
            </section>

            <section id="strategy-9" className="scroll-mt-28 space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">9.</span> Build Dedicated Landing Pages
              </h3>
              <p className="text-sm text-gray-400">
                Stop sending every advertising visitor to your homepage. Effective landing pages are often built as part of a broader <Link href="/blog/website-design-company-hyderabad" className="text-primary hover:underline font-bold">Website Design and Development Services</Link> strategy focused on conversions.
              </p>
            </section>

            <section id="strategy-10" className="scroll-mt-28 space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">10.</span> Offer a Useful Lead Magnet
              </h3>
              <p className="text-sm text-gray-400">
                Checklists, pricing guides, ROI calculators, or audit frameworks give prospects a reason to enter your funnel before they are ready to buy.
              </p>
            </section>

            <section id="strategy-11" className="scroll-mt-28 space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">11.</span> Retarget People Who Didn&apos;t Convert
              </h3>
              <p className="text-sm text-gray-400">
                Show testimonials, case studies, and special offers to users who visited but didn&apos;t convert on their first touchpoint.
              </p>
            </section>

            <section id="strategy-12" className="scroll-mt-28 space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">12.</span> Improve Your Lead Follow-Up
              </h3>
              <p className="text-sm text-gray-400">
                Speed to lead matters: Instant confirmation → Personal response → Qualify → Book next step → Nurture.
              </p>
            </section>

            <section id="strategy-13" className="scroll-mt-28 space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">13.</span> Track Lead Quality, Not Just Lead Quantity
              </h3>
              <p className="text-sm text-gray-400">
                40 qualified leads at ₹700 each with 15 sales is vastly superior to 100 cheap leads at ₹300 with only 5 sales.
              </p>

              {/* Metric Table */}
              <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#121216]/60 my-4">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-3.5 font-bold uppercase text-primary">Metric</th>
                      <th className="p-3.5 font-bold uppercase text-white">What It Tells You</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-400">
                    <tr><td className="p-3 font-semibold text-white">Leads</td><td className="p-3">How many prospects you generated</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Cost Per Lead</td><td className="p-3">What you&apos;re paying for each enquiry</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Qualified Leads</td><td className="p-3 text-primary font-semibold">How many fit your target customer criteria</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Cost Per Qualified Lead</td><td className="p-3">Cost of meaningful sales opportunities</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Conversion Rate</td><td className="p-3">How effectively traffic becomes leads</td></tr>
                    <tr><td className="p-3 font-semibold text-white">CAC & Revenue</td><td className="p-3 text-green-400 font-semibold">Cost to acquire customers vs actual financial outcome</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Image 5 Placement: After 13. Track Lead Quality */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6 bg-[#121216]">
                <Image
                  src="/assets/blog/business-team-analyzing-qualified-leads-roi.jpg"
                  alt="Business team analyzing qualified leads, conversion rates and customer acquisition costs"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            <section id="strategy-14" className="scroll-mt-28 space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">14.</span> Ask for Reviews, Referrals and Recommendations
              </h3>
              <p className="text-sm text-gray-400">
                Referrals arrive with pre-built trust. Make asking for reviews and introductions a structured part of your post-delivery workflow.
              </p>
            </section>

            <section id="strategy-15" className="scroll-mt-28 space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">15.</span> Build a Lead Generation System Instead of Using Random Tactics
              </h3>
              <p className="text-sm text-gray-400">
                SEO + Content → Landing Page → Lead Magnet → Form/WhatsApp → Qualification → Sales Follow-Up → Customer → Referral.
              </p>
            </section>

            <hr className="border-white/5" />

            {/* Which Strategy to Choose Table */}
            <section id="choose-strategy" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Which Lead Generation Strategy Should You Choose?
              </h2>

              <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#121216]/60">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-3.5 font-bold uppercase text-white">Business Type</th>
                      <th className="p-3.5 font-bold uppercase text-primary">Strong Lead Sources</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-400">
                    <tr><td className="p-3 font-semibold text-white">Local Business</td><td className="p-3">Local SEO, Google Ads, Reviews, Social Media</td></tr>
                    <tr><td className="p-3 font-semibold text-white">B2B Company</td><td className="p-3">SEO, LinkedIn, Content, Email, Webinars</td></tr>
                    <tr><td className="p-3 font-semibold text-white">E-commerce</td><td className="p-3">Google Ads, Meta Ads, SEO, Retargeting, Email</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Startup</td><td className="p-3">Content, Paid Ads, Social Media, Partnerships</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Professional Services</td><td className="p-3">SEO, Google Ads, Referrals, Case Studies</td></tr>
                    <tr><td className="p-3 font-semibold text-white">High-Ticket Services</td><td className="p-3">SEO, Paid Search, Content, Webinars, Consultations</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Personal Brand</td><td className="p-3">Social Media, Video, LinkedIn, Content</td></tr>
                    <tr><td className="p-3 font-semibold text-white">Real Estate</td><td className="p-3">Google Ads, Meta Ads, Local SEO, Landing Pages</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Common Mistakes */}
            <section id="common-mistakes" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Common Lead Generation Mistakes to Avoid
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-400">
                <div className="p-3.5 border border-white/5 bg-[#121216]/40 rounded-xl">
                  <strong className="text-white block mb-1">1. Chasing Cheap Leads:</strong> Lowest cost per lead often equals lowest buyer intent.
                </div>
                <div className="p-3.5 border border-white/5 bg-[#121216]/40 rounded-xl">
                  <strong className="text-white block mb-1">2. Sending to Homepage:</strong> Campaign landing pages provide higher conversion rates.
                </div>
                <div className="p-3.5 border border-white/5 bg-[#121216]/40 rounded-xl">
                  <strong className="text-white block mb-1">3. Weak Call to Action:</strong> Use specific, high-value conversion propositions.
                </div>
                <div className="p-3.5 border border-white/5 bg-[#121216]/40 rounded-xl">
                  <strong className="text-white block mb-1">4. Talking Only About Yourself:</strong> Lead with customer problems and outcomes.
                </div>
                <div className="p-3.5 border border-white/5 bg-[#121216]/40 rounded-xl">
                  <strong className="text-white block mb-1">5. Ignoring Mobile Users:</strong> Ensure smooth forms on smartphones.
                </div>
                <div className="p-3.5 border border-white/5 bg-[#121216]/40 rounded-xl">
                  <strong className="text-white block mb-1">6. Buying Leads:</strong> Purchased lists destroy sender reputation and conversion rates.
                </div>
                <div className="p-3.5 border border-white/5 bg-[#121216]/40 rounded-xl">
                  <strong className="text-white block mb-1">7. Ignoring Follow-Up:</strong> Slow responses kill qualified deals.
                </div>
                <div className="p-3.5 border border-white/5 bg-[#121216]/40 rounded-xl">
                  <strong className="text-white block mb-1">8. Measuring Vanity Metrics:</strong> Revenue is the only metric that matters.
                </div>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* Interactive Audit Checklist */}
            <section id="lead-gen-checklist" className="scroll-mt-28 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                    Simple Lead Generation Audit Checklist
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">Audit your marketing engine across audience, offer, website, and sales.</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {auditProgress}% Completed
                  </span>
                  <div className="w-32 h-2 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                    <div className="h-full bg-primary transition-all duration-300" style={{ width: `${auditProgress}%` }} />
                  </div>
                </div>
              </div>

              {["Audience", "Offer", "Website", "Traffic", "Conversion & Sales"].map((category) => (
                <div key={category} className="border border-white/5 rounded-2xl bg-[#121216]/60 p-4 space-y-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                    <Layers size={13} /> {category}
                  </h3>
                  <div className="space-y-1.5">
                    {auditChecklist
                      .filter((i) => i.category === category)
                      .map((item) => (
                        <label
                          key={item.id}
                          onClick={() => toggleAuditItem(item.id)}
                          className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
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

            {/* How Much to Spend & Agency Selection */}
            <section id="how-much-spend" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How Much Should You Spend on Lead Generation?
              </h2>
              <p>
                A better question than <em>&quot;How much should I spend on ads?&quot;</em> is: <strong>&quot;How much can I profitably spend to acquire a customer?&quot;</strong> Connect your acquisition budget directly to unit economics and customer lifetime value.
              </p>
            </section>

            <section id="when-hire-agency" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                When Should You Hire a Lead Generation Agency?
              </h2>
              <p>
                An agency becomes useful when current leads are inconsistent, campaigns aren&apos;t profitable, website traffic isn&apos;t converting, or marketing channels aren&apos;t connected into a unified funnel.
              </p>
            </section>

            <section id="g2g-help" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How G2G Media House Can Help
              </h2>
              <p>
                At G2G Media House, we connect content, paid advertising, branding, high-converting websites, sales funnels, and SEO into a unified growth engine designed to attract qualified buyer attention and drive revenue.
              </p>

              {/* End of Article CTA */}
              <div className="p-8 border border-primary/20 bg-gradient-to-br from-primary/10 to-green-500/5 rounded-3xl text-center space-y-6 my-8">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white">
                  Ready to Turn Marketing Into a Predictable Lead Engine?
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
                  More traffic isn&apos;t always the answer. Better targeting, stronger offers and a better conversion system make the real difference.
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

          {/* Right Column */}
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
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mt-1">Lead Generation Specialists</p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-normal">
                Designing end-to-end customer acquisition funnels and conversion engines for scaling businesses.
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
                <BookOpen size={14} className="text-primary" /> Resource Links
              </h4>
              <ul className="space-y-3 text-xs">
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
                    href="https://support.google.com/google-ads/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Google Ads Help Center <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/business/help"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-primary transition-colors block font-semibold"
                  >
                    Meta Business Help Center <ArrowUpRight size={12} className="inline ml-1 opacity-50 group-hover:opacity-100" />
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
