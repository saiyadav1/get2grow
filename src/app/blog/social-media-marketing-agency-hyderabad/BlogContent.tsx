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
    "do",
    "need-partner",
    "services",
    "platforms",
    "choose",
    "cost",
    "results",
    "red-flags",
    "journey",
    "trends",
    "questions",
    "why-g2g",
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
    { id: "do", text: "What Agencies Do" },
    { id: "need-partner", text: "Why Choose Strategic Partner" },
    { id: "services", text: "Core Services to Expect" },
    { id: "platforms", text: "Platform Guide" },
    { id: "choose", text: "How to Choose an Agency" },
    { id: "cost", text: "Cost Breakdown" },
    { id: "results", text: "What Results to Expect" },
    { id: "red-flags", text: "Red Flags to Watch" },
    { id: "journey", text: "Customer Journey Mapping" },
    { id: "trends", text: "Trends to Watch" },
    { id: "questions", text: "Key Contract Questions" },
    { id: "why-g2g", text: "Evaluation & Takeaways" },
    { id: "faq", text: "FAQ" }
  ];

  // FAQ Content Array
  const faqs = [
    {
      q: "What does a social media marketing agency in Hyderabad do?",
      a: "A social media marketing agency in Hyderabad helps businesses plan and manage their presence across platforms such as Instagram, Facebook, LinkedIn and YouTube. Services may include strategy, content creation, Reels, community management, paid advertising, influencer marketing and analytics. A strong agency should connect these activities to business goals such as awareness, website traffic, qualified leads, enquiries or sales."
    },
    {
      q: "How much does social media marketing cost in Hyderabad?",
      a: "Social media marketing costs in Hyderabad vary based on the services required, number of platforms, content volume, video production, advertising and strategic support. Instead of choosing an agency only by monthly price, compare what is included and how performance will be measured. Ask for a clear scope covering content, revisions, management, advertising, reporting and additional charges before signing."
    },
    {
      q: "Which social media platform is best for a business?",
      a: "There is no single best social media platform for every business. Instagram can be effective for visual consumer brands, Facebook can support local businesses and communities, LinkedIn is often valuable for B2B marketing, and YouTube can help brands build authority through video. The right choice depends on where your customers spend time, and which platforms support your business objectives."
    },
    {
      q: "How do I choose the best social media marketing agency in Hyderabad?",
      a: "Start by defining your business goals, then compare agencies based on relevant experience, portfolio quality, strategy, creative capabilities, communication and reporting. Ask who will manage your account, how content approvals work and which KPIs they will track. Be cautious about agencies promising guaranteed viral results or unrealistic follower growth without explaining how those numbers will contribute to business outcomes."
    },
    {
      q: "Is social media marketing worth it for small businesses?",
      a: "Social media marketing can be valuable for small businesses when the strategy focuses on the right audience and measurable goals. Small businesses do not necessarily need to be active on every platform. A focused strategy using one or two relevant channels can build awareness, trust, enquiries and repeat engagement. The key is creating useful content consistently and connecting social activity to a clear customer journey."
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
            <span className="text-gray-300">Social Media Marketing Agency Hyderabad</span>
          </nav>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              Social Media Strategy
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Calendar size={14} className="text-primary" /> August 29, 2026
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Clock size={14} className="text-primary" /> 14 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] max-w-5xl mb-6">
            Social Media Marketing Agency Hyderabad: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 font-black">How to Choose</span> the Right Partner
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Social Media Marketing Agency Hyderabad: Discover how to choose the right partner to turn social media attention into trust, enquiries, and real business outcomes.
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
                src="/assets/blog/social-media-marketing-agency-hyderabad-featured.jpg"
                alt="Social media marketing agency in Hyderabad planning digital campaigns"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#1</span> Attention Into Outcomes
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Your customers are already on social media. The real question is whether they are noticing <strong>your business</strong>.
              </p>
              <p>
                A customer may discover a brand through an Instagram Reel, check its profile, read the comments, visit its website, compare competitors and send a WhatsApp message—all before ever speaking with a salesperson.
              </p>
              <p>
                That is why social media marketing is no longer just about posting attractive pictures. It is about creating a system that turns attention into trust, trust into enquiries, and enquiries into business.
              </p>
              <p>
                If you are searching for a <strong>social media marketing agency in Hyderabad</strong>, you will quickly discover that there are plenty of options. Current agency directories list hundreds of social media marketing providers in the city, with different prices, specialties, team sizes and service models.
              </p>
              <p>
                So how do you know which agency is actually right for your business?
              </p>
              <p>
                This guide explains what to look for, what services matter, what questions to ask and which warning signs should make you think twice.
              </p>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-primary block">Key Takeaway</span>
                <p className="text-sm font-semibold italic text-gray-300">
                  &quot;Don&apos;t hire an agency simply because it promises more followers. Hire a team that understands your customers, creates content with a purpose and can connect social media activity to meaningful business outcomes.&quot;
                </p>
              </div>
              <p>
                For more complete online marketing solutions, you can also explore our full suite of <Link href="/blog/digital-marketing-services" className="text-primary hover:underline font-bold">digital marketing services</Link>.
              </p>
            </section>

            {/* What Does a Social Media Marketing Agency Do Section */}
            <section id="do" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#2</span> What Agencies Do
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                A professional social media marketing agency helps businesses plan, create, publish, promote and measure content across relevant social platforms.
              </p>
              <p>
                The work can include:
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-gray-400 bg-white/5 p-5 rounded-xl border border-white/5 font-normal">
                <span>• Social media strategy</span>
                <span>• Audience research</span>
                <span>• Content planning</span>
                <span>• Graphic design</span>
                <span>• Reels & short-form video</span>
                <span>• Copywriting</span>
                <span>• Instagram management</span>
                <span>• Facebook management</span>
                <span>• LinkedIn marketing</span>
                <span>• YouTube content</span>
                <span>• Paid social advertising</span>
                <span>• Community management</span>
                <span>• Influencer campaigns</span>
                <span>• Social media analytics</span>
                <span>• Competitor research</span>
                <span>• Reputation management</span>
              </div>
              <p>
                But there is an important distinction: <strong>Posting content is not the same as social media marketing.</strong> Anyone can create a post.
              </p>
              <p>
                A strong agency asks:
              </p>
              <ul className="space-y-2 text-sm text-gray-300 pl-4 border-l-2 border-primary">
                <li>• Who is this post for?</li>
                <li>• Why should they care?</li>
                <li>• What action should they take?</li>
                <li>• How will we know whether it worked?</li>
              </ul>
              <p>
                That strategic thinking is what separates a content vendor from a genuine marketing partner.
              </p>
              <p>
                According to HubSpot&apos;s <a href="https://blog.hubspot.com/marketing/social-media-strategy-guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">social media marketing strategy</a> guide, a successful plan requires a strong foundation of goals, audience research, platform selection, KPIs, competitive analysis, content creation, publishing, and ongoing measurement.
              </p>

              {/* Image 1 */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                <Image
                  src="/assets/blog/social-media-strategy-planning-hyderabad.jpg"
                  alt="Social media strategy planning by a marketing agency in Hyderabad"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Why Hyderabad Businesses Need a Strategic Social Media Partner Section */}
            <section id="need-partner" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#3</span> Why Strategic Partner
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Hyderabad is a diverse business market. A technology company in HITEC City does not communicate with customers in the same way as a restaurant in Jubilee Hills.
              </p>
              <p>
                A real estate company targeting buyers in Gachibowli has different content requirements from a fashion brand targeting young consumers across Telangana. A B2B SaaS company may benefit heavily from LinkedIn, while a consumer brand could generate more discovery through Instagram and short-form video.
              </p>
              <p>
                That is why there is no universal social media formula. Your strategy should reflect:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 bg-white/5 p-4 rounded-xl font-normal">
                <span>• Your industry</span>
                <span>• Your target customer</span>
                <span>• Your location</span>
                <span>• Your sales cycle</span>
                <span>• Your price point</span>
                <span>• Your competitors</span>
                <span>• Your business goals</span>
                <span>• Your available marketing budget</span>
              </div>
              <p>
                The best social media marketing agency in Hyderabad for one company may be a poor fit for another. <strong>Fit matters more than popularity.</strong>
              </p>
            </section>

            {/* What Services Should a Social Media Marketing Agency Provide Section */}
            <section id="services" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#4</span> Core Services to Expect
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                A good agency should be able to explain exactly what it is doing and why. For general guidance on web standards, you can refer to <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google SEO best practices</a>.
              </p>
              
              <div className="space-y-8 pt-4">
                {/* 1. Social Media Strategy */}
                <div className="space-y-3">
                  <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                    1. Social Media Strategy
                  </h3>
                  <p>
                    Strategy should come before content. A proper strategy identifies:
                  </p>
                  <ul className="grid grid-cols-2 gap-1 text-xs text-gray-400 pl-4 list-disc font-normal">
                    <li>Target audience</li>
                    <li>Buyer personas</li>
                    <li>Brand positioning</li>
                    <li>Content pillars</li>
                    <li>Platform priorities</li>
                    <li>Posting frequency</li>
                    <li>Campaign themes</li>
                    <li>Conversion opportunities</li>
                    <li>KPIs & reporting structure</li>
                  </ul>
                  <p className="text-sm">
                    Your agency should be able to explain how social media supports your wider marketing and sales objectives.
                  </p>
                </div>

                {/* 2. Content Creation */}
                <div className="space-y-3">
                  <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                    2. Content Creation
                  </h3>
                  <p>
                    Content is the visible part of your social media strategy. Depending on your business, this may include:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 bg-white/5 p-4 rounded-xl font-normal">
                    <span>• Reels & video content</span>
                    <span>• Carousels & graphics</span>
                    <span>• Static photography</span>
                    <span>• Testimonials & Case studies</span>
                    <span>• Educational posts</span>
                    <span>• Behind-the-scenes content</span>
                    <span>• Founder-led video series</span>
                    <span>• Customer-generated content</span>
                  </div>
                  <p>
                    The goal isn&apos;t to fill a calendar. The goal is to give people a reason to stop scrolling.
                  </p>
                  <p>
                    To make your content convert even better, consider combining it with high-quality <Link href="/blog/digital-marketing-for-small-business" className="text-primary hover:underline font-bold">content marketing services</Link>.
                  </p>
                </div>

                {/* 3. Instagram and Reels Marketing */}
                <div className="space-y-3">
                  <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                    3. Instagram and Reels Marketing
                  </h3>
                  <p>
                    Instagram can be particularly useful for brands that depend on visual discovery. A good Instagram strategy combines Reels, Stories, Carousels, Educational content, Product demonstrations, Testimonials, UGC, Community interaction, and Paid promotion.
                  </p>
                  <p>
                    Short-form video has become an important part of modern social strategies. According to HubSpot&apos;s <a href="https://blog.hubspot.com/marketing/hubspot-blog-marketing-industry-trends-report" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">social media marketing best practices</a> research, short-form video is the most leveraged content format among marketers today. But don&apos;t create Reels simply because everyone else is doing it—the format should support the message.
                  </p>

                  {/* Image 2 */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                    <Image
                      src="/assets/blog/instagram-reels-marketing-hyderabad.jpg"
                      alt="Instagram Reels marketing content creation for a Hyderabad business"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* 4. Facebook Marketing */}
                <div className="space-y-3">
                  <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                    4. Facebook Marketing
                  </h3>
                  <p>
                    Facebook can still play an important role for many businesses, especially local businesses, communities and advertising campaigns. A strong Facebook strategy includes organic content, community engagement, lead campaigns, retargeting, promotional campaigns, and customer communication.
                  </p>
                </div>

                {/* 5. LinkedIn Marketing */}
                <div className="space-y-3">
                  <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                    5. LinkedIn Marketing
                  </h3>
                  <p>
                    For B2B businesses, LinkedIn can be a valuable channel for building authority and generating demand. Content can include founder insights, industry commentary, case studies, customer success stories, educational posts, company updates, employee expertise, and thought leadership.
                  </p>
                  <p className="italic text-gray-400">
                    The important point is to avoid turning LinkedIn into a company notice board. People follow people—not corporate brochures.
                  </p>
                </div>

                {/* 6. Paid Social Advertising */}
                <div className="space-y-3">
                  <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                    6. Paid Social Advertising
                  </h3>
                  <p>
                    Organic reach is only one part of the equation. Paid campaigns help businesses reach specific audiences based on factors such as location, interests, demographics, behaviours, previous interactions, website activity, and customer lists.
                  </p>
                  <p>
                    A capable agency connects ad campaigns to a clear conversion goal:
                  </p>
                  <div className="p-4 rounded-xl bg-white/5 text-center font-bold text-xs tracking-wider space-y-1 text-primary">
                    <div>Ad ➔ Landing Page ➔ Lead ➔ Sales Team</div>
                    <div className="text-gray-500 font-normal">or</div>
                    <div>Ad ➔ Instagram ➔ DM ➔ Consultation</div>
                  </div>
                  <p>
                    Without a conversion path, advertising can generate clicks without generating business.
                  </p>
                </div>

                {/* 7. Community Management */}
                <div className="space-y-3">
                  <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                    7. Community Management
                  </h3>
                  <p>
                    Social media is a conversation. Your agency may need to monitor comments, DMs, reviews, mentions, questions, complaints, and customer feedback. Fast and thoughtful responses can strengthen trust. Poor responses can damage it.
                  </p>
                </div>

                {/* 8. Analytics and Reporting */}
                <div className="space-y-3">
                  <h3 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-2">
                    8. Analytics and Reporting
                  </h3>
                  <p>
                    Monthly reports should answer more than just &quot;How many posts did we publish?&quot; They should help answer:
                  </p>
                  <ul className="grid grid-cols-2 gap-1 text-xs text-gray-400 pl-4 list-disc font-normal mb-4">
                    <li>What content worked?</li>
                    <li>Which audience responded?</li>
                    <li>Which platform produced results?</li>
                    <li>What generated enquiries?</li>
                    <li>What did not work?</li>
                    <li>What should change next month?</li>
                  </ul>
                  
                  {/* Business Goal Metrics Table */}
                  <div className="overflow-x-auto my-4 rounded-xl border border-white/10">
                    <table className="min-w-full divide-y divide-white/10 text-left text-xs bg-white/5">
                      <thead>
                        <tr className="bg-white/10 font-bold uppercase tracking-wider text-gray-300">
                          <th className="px-4 py-3">Business Goal</th>
                          <th className="px-4 py-3">Useful Metrics</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10 font-normal text-gray-400">
                        <tr>
                          <td className="px-4 py-2.5 font-bold text-white">Brand awareness</td>
                          <td className="px-4 py-2.5">Reach, impressions, mentions</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2.5 font-bold text-white">Engagement</td>
                          <td className="px-4 py-2.5">Comments, shares, saves, engagement rate</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2.5 font-bold text-white">Website traffic</td>
                          <td className="px-4 py-2.5">Link clicks, sessions</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2.5 font-bold text-white">Lead generation</td>
                          <td className="px-4 py-2.5">Leads, cost per lead, conversion rate</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2.5 font-bold text-white">Sales</td>
                          <td className="px-4 py-2.5">Revenue, ROAS, attributed conversions</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2.5 font-bold text-white">Community</td>
                          <td className="px-4 py-2.5">Replies, DMs, response time</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2.5 font-bold text-white">Content quality</td>
                          <td className="px-4 py-2.5">Watch time, retention, saves</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Which Social Media Platforms Should Your Business Use Section */}
            <section id="platforms" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#5</span> Platform Guide
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                You don&apos;t need to be everywhere. In fact, trying to manage every platform can dilute your resources. HubSpot&apos;s research recommends choosing platforms based on audience behaviour, business objectives and the team&apos;s ability to consistently produce quality content.
              </p>
              
              {/* Platform Comparison Table */}
              <div className="overflow-x-auto my-6 rounded-xl border border-white/10">
                <table className="min-w-full divide-y divide-white/10 text-left text-xs bg-white/5">
                  <thead>
                    <tr className="bg-white/10 font-bold uppercase tracking-wider text-gray-300">
                      <th className="px-4 py-3">Platform</th>
                      <th className="px-4 py-3">Best For</th>
                      <th className="px-4 py-3">Strong Content Formats</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 font-normal text-gray-400">
                    <tr>
                      <td className="px-4 py-2.5 font-bold text-white">Instagram</td>
                      <td className="px-4 py-2.5">Consumer brands, lifestyle, local businesses</td>
                      <td className="px-4 py-2.5">Reels, Stories, Carousels</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold text-white">Facebook</td>
                      <td className="px-4 py-2.5">Local businesses, communities, broad audiences</td>
                      <td className="px-4 py-2.5">Video, posts, ads</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold text-white">LinkedIn</td>
                      <td className="px-4 py-2.5">B2B, professionals, founders</td>
                      <td className="px-4 py-2.5">Thought leadership, case studies</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold text-white">YouTube</td>
                      <td className="px-4 py-2.5">Education, demonstrations, authority</td>
                      <td className="px-4 py-2.5">Shorts, tutorials, long-form</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold text-white">Pinterest</td>
                      <td className="px-4 py-2.5">Visual discovery, lifestyle, e-commerce</td>
                      <td className="px-4 py-2.5">Pins, guides</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold text-white">WhatsApp</td>
                      <td className="px-4 py-2.5">Lead nurturing and customer communication</td>
                      <td className="px-4 py-2.5">Messages, catalogs, updates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm font-semibold text-gray-300">
                <strong>Pro Tip:</strong> Start with two or three platforms where your customers are genuinely active rather than spreading your budget across six channels.
              </p>
            </section>

            {/* How to Choose the Best Social Media Marketing Agency in Hyderabad Section */}
            <section id="choose" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#6</span> How to Choose an Agency
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                This is where many businesses make expensive mistakes. Don&apos;t choose an agency because it has the largest follower count. Use this process instead:
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold text-sm">Step 1: Define Your Business Goal</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    Before speaking to an agency, write down what success means. E.g., Generate 100 qualified leads per month, increase brand awareness, build founder authority, or increase e-commerce sales. A vague goal creates a vague strategy.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Step 2: Review Their Portfolio</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    Look for work similar to your business. Ask: Have they worked in your industry? Does their creative quality match your brand? Do they demonstrate measurable outcomes? A portfolio tells you what an agency can create; a case study tells you what it can achieve.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Step 3: Ask About Their Process</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    A professional agency should have a clear workflow: Discovery ➔ Strategy ➔ Content Plan ➔ Production ➔ Approval ➔ Publishing ➔ Community Management ➔ Reporting ➔ Optimization.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Step 4: Understand Who Will Work on Your Account</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    Ask whether you will have a strategist, account manager, copywriter, designer, video editor, and performance marketer. You don&apos;t necessarily need a huge team, but you need the right capabilities.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Step 5: Ask How They Measure Results</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    A good agency should be comfortable discussing numbers. Ask: &quot;Which KPIs will you report every month?&quot; and &quot;How do those KPIs connect to my business goals?&quot;
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Step 6: Understand the Approval Process</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    Find out: Who creates content? Who approves it? How many revisions are included? Who handles urgent posts? Who owns the creative assets? Clear expectations prevent frustration later.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Step 7: Ask About Advertising Separately</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    Organic social media management and paid advertising are related—but they are not identical. Ask if your package includes ad strategy, campaign setup, creative testing, audience testing, budget management, retargeting, and performance reporting.
                  </p>
                </div>
              </div>
            </section>

            {/* How Much Does Social Media Marketing Cost in Hyderabad Section */}
            <section id="cost" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#7</span> Cost Breakdown
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                There is no single price that applies to every business. Current agency directories show a wide range of Hyderabad providers, with pricing influenced by agency size, service mix, expertise and project requirements.
              </p>
              <p>
                Your monthly investment can depend on the number of platforms, number of posts and Reels, photography/video production requirements, paid advertising scale, influencer campaigns, and strategy complexity.
              </p>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                <h4 className="text-sm font-bold text-white">Think Beyond the Monthly Retainer:</h4>
                <ul className="space-y-3 text-xs text-gray-400 font-normal list-disc pl-4">
                  <li>A cheaper package isn&apos;t automatically better.</li>
                  <li>Suppose Agency A charges less but produces generic content that generates no qualified enquiries.</li>
                  <li>Agency B costs more but develops a stronger strategy, produces better creative and improves lead quality.</li>
                </ul>
                <p className="text-xs text-gray-300 font-semibold italic border-t border-white/5 pt-3">
                  The relevant question is not: &quot;Which agency is cheapest?&quot; It is: &quot;Which agency gives my business the strongest potential return for the investment?&quot;
                </p>
              </div>
            </section>

            {/* What Results Should You Expect Section */}
            <section id="results" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#8</span> What Results to Expect
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Be careful with agencies promising guaranteed outcomes. No credible professional can guarantee that a specific post will go viral or that you will receive a fixed number of sales every month.
              </p>
              <p>
                Social media performance depends on market demand, offer quality, creative quality, competition, audience, budget, platform changes, sales processes, landing pages, and follow-up speed.
              </p>
              <p>
                Instead, look for an agency that follows a cycle of: <strong>Test ➔ Measure ➔ Learn ➔ Improve ➔ Repeat</strong>. That is how sustainable growth is built.
              </p>

              {/* Image 3 */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                <Image
                  src="/assets/blog/social-media-analytics-performance-tracking-hyderabad.jpg"
                  alt="Social media analytics and campaign performance tracking in Hyderabad"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Red Flags Section */}
            <section id="red-flags" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#9</span> Red Flags to Watch
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/10 space-y-1">
                  <h4 className="text-red-400 font-bold text-sm flex items-center gap-2">
                    <AlertCircle size={16} /> Guaranteed Viral Results
                  </h4>
                  <p className="text-gray-400 text-xs">
                    &quot;Guaranteed 1 million views&quot; should make you cautious. True virality cannot be bought or guaranteed reliably.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/10 space-y-1">
                  <h4 className="text-red-400 font-bold text-sm flex items-center gap-2">
                    <AlertCircle size={16} /> Guaranteed Followers
                  </h4>
                  <p className="text-gray-400 text-xs">
                    A large follower count means little if those followers never engage or buy.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/10 space-y-1">
                  <h4 className="text-red-400 font-bold text-sm flex items-center gap-2">
                    <AlertCircle size={16} /> No Clear Reporting
                  </h4>
                  <p className="text-gray-400 text-xs">
                    If you don&apos;t know what your agency is measuring, you cannot evaluate its performance.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/10 space-y-1">
                  <h4 className="text-red-400 font-bold text-sm flex items-center gap-2">
                    <AlertCircle size={16} /> Generic Content Templates
                  </h4>
                  <p className="text-gray-400 text-xs">
                    If the templates could be used for five unrelated businesses, the strategy isn&apos;t customized enough.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/10 space-y-1">
                  <h4 className="text-red-400 font-bold text-sm flex items-center gap-2">
                    <AlertCircle size={16} /> No Questions Asked
                  </h4>
                  <p className="text-gray-400 text-xs">
                    A good agency should ask detailed questions about your customers, competitors, products, sales process and goals.
                  </p>
                </div>
              </div>
            </section>

            {/* Customer Journey Section */}
            <section id="journey" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#10</span> Customer Journey Mapping
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Think of social media as a customer journey:
              </p>
              
              <div className="relative border-l-2 border-primary/20 ml-4 pl-6 space-y-8 my-6">
                <div className="relative">
                  <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-primary border-4 border-[#0B0B0F]" />
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">Stage 1: Discovery</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    A potential customer sees your Reel, Video, Carousel, Recommendation, or Advertisement.
                  </p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-primary border-4 border-[#0B0B0F]" />
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">Stage 2: Interest</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    They visit your profile. They look at your Bio, Website link, Reviews, Previous content, and Testimonials.
                  </p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-primary border-4 border-[#0B0B0F]" />
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">Stage 3: Trust</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    They consume educational content. They see customer stories, case results, expertise, and behind-the-scenes content.
                  </p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-primary border-4 border-[#0B0B0F]" />
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">Stage 4: Action</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    They take action: Send a DM, call, visit your website, fill in a form, request a quote, or make a purchase.
                  </p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-primary border-4 border-[#0B0B0F]" />
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">Stage 5: Retention</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    Good content doesn&apos;t stop after the sale. Support repeat purchases, referrals, community building, and brand loyalty.
                  </p>
                </div>
              </div>
              
              <p>
                A key driver in this journey is a fast, high-converting website. Consider looking into our local <Link href="/blog/website-design-company-hyderabad" className="text-primary hover:underline font-bold">website development services</Link> to ensure your social traffic lands on a page optimized to convert.
              </p>
            </section>

            {/* Trends Section */}
            <section id="trends" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#11</span> Trends to Watch
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Social media is changing quickly. Several trends are particularly important in 2026:
              </p>

              <div className="space-y-6 pt-4">
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-sm">1. Social Search</h4>
                  <p className="text-gray-400 text-xs">
                    People increasingly use social platforms to discover brands, products, services and answers. HubSpot&apos;s <a href="https://blog.hubspot.com/marketing/social-media-trends" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">2026 social media trends</a> research highlights this shift toward interest-based discovery. To rank for these searches effectively, you can also leverage our professional <Link href="/blog/local-seo-for-small-business" className="text-primary hover:underline font-bold">SEO services</Link> to optimize your search footprint.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-sm">2. Short-Form Video</h4>
                  <p className="text-gray-400 text-xs">
                    Reels, Shorts and other short-form formats continue to dominate content strategies. But quality does not mean expensive production. A useful 30-second video can outperform a polished video that says nothing valuable.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-white font-bold text-sm">3. Authentic Content</h4>
                  <p className="text-gray-400 text-xs">
                    People can recognize overly polished advertising. Founder videos, employee stories, customer experiences and behind-the-scenes content can make brands feel more human.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-white font-bold text-sm">4. AI-Assisted Marketing</h4>
                  <p className="text-gray-400 text-xs">
                    AI can help with research, ideation, repurposing, workflow automation, drafting, and analysis. According to HubSpot&apos;s <a href="https://blog.hubspot.com/marketing/state-of-ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">social media marketing research</a>, AI should support creativity rather than replace brand personality.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-white font-bold text-sm">5. Community Over Vanity Metrics</h4>
                  <p className="text-gray-400 text-xs">
                    A smaller audience that trusts your brand can be more valuable than a huge audience that never buys. Focus on meaningful interaction.
                  </p>
                </div>
              </div>

              {/* Image 4 */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 my-6">
                <Image
                  src="/assets/blog/client-strategy-meeting-social-media-agency-hyderabad.jpg"
                  alt="Client strategy meeting with a social media marketing agency in Hyderabad"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Questions to Ask Section */}
            <section id="questions" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#12</span> Key Contract Questions
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                Use this checklist during your agency evaluation:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-normal text-gray-400">
                <div className="bg-white/5 p-4 rounded-xl space-y-2 border border-white/5">
                  <h4 className="text-white font-bold text-xs uppercase tracking-wide">Strategy</h4>
                  <ul className="space-y-1.5">
                    <li>• What is your approach to audience research?</li>
                    <li>• How will you identify content pillars?</li>
                    <li>• Which platforms do you recommend and why?</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-xl space-y-2 border border-white/5">
                  <h4 className="text-white font-bold text-xs uppercase tracking-wide">Content</h4>
                  <ul className="space-y-1.5">
                    <li>• How many posts and Reels are included?</li>
                    <li>• Who creates the content?</li>
                    <li>• Are shoots included? How many revisions?</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-xl space-y-2 border border-white/5">
                  <h4 className="text-white font-bold text-xs uppercase tracking-wide">Advertising</h4>
                  <ul className="space-y-1.5">
                    <li>• Is paid advertising included?</li>
                    <li>• Is the ad budget separate?</li>
                    <li>• How frequently are campaigns optimized?</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-xl space-y-2 border border-white/5">
                  <h4 className="text-white font-bold text-xs uppercase tracking-wide">Measurement</h4>
                  <ul className="space-y-1.5">
                    <li>• Which KPIs will you report?</li>
                    <li>• Can you track leads & measure conversions?</li>
                    <li>• How often will we review performance?</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm font-semibold text-gray-300">
                <strong>Pro Tip:</strong> Ask an agency to explain its strategy using your actual business—not a generic presentation. You&apos;ll learn much more from how they think about your customers than from a polished sales deck.
              </p>
            </section>

            {/* Evaluation & Takeaways Section */}
            <section id="why-g2g" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#13</span> Evaluation & Takeaways
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <p>
                If you&apos;re comparing a <Link href="/blog/best-digital-marketing-agency-hyderabad" className="text-primary hover:underline font-bold">digital marketing agency in Hyderabad</Link>, look beyond the promise of more posts.
              </p>
              <p>
                The right partner should understand the bigger picture:
              </p>
              <div className="p-4 rounded-xl bg-white/5 text-center font-bold text-xs tracking-wider text-primary">
                Brand ➔ Content ➔ Audience ➔ Engagement ➔ Leads ➔ Sales
              </div>
              <p>
                That means your social media strategy should be built around your business rather than around a predetermined number of posts. For G2G Media House, the strongest positioning opportunity is to make the conversation about business outcomes, creative quality and strategic thinking, rather than competing only on price.
              </p>

              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white">Key Takeaways</h3>
                <ul className="space-y-2 text-sm text-gray-400 font-normal">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    A social media marketing agency should provide strategy, not just posting.
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    Your agency should understand your audience and industry.
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    Instagram, Facebook, LinkedIn and YouTube serve different purposes.
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    More followers do not automatically mean more sales.
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    Content should have a clear business purpose.
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    Paid advertising should connect to measurable conversion goals.
                  </li>
                </ul>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
                <span className="text-primary font-mono text-sm">#14</span> FAQ Section
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="border border-white/5 rounded-xl bg-[#121216]/40 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                      >
                        <span className="font-bold text-xs uppercase tracking-wider text-white">
                          {faq.q}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`text-primary transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? "max-h-[300px] border-t border-white/5" : "max-h-0"
                        }`}
                      >
                        <p className="p-6 text-xs text-gray-400 leading-relaxed font-normal">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

          </article>

          {/* Right Column: Interactive Widgets */}
          <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-28 self-start space-y-8">
            
            {/* Share Widget */}
            <div className="border border-white/5 rounded-2xl bg-[#121216]/60 p-6 backdrop-blur-md">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Share Guide</h4>
              <div className="flex gap-3 mb-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <FaTwitter size={18} />
                </a>
              </div>
              <button
                onClick={copyToClipboard}
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Link2 size={14} />
                {copied ? "Copied Link!" : "Copy Page Link"}
              </button>
            </div>

            {/* Checklist Widget */}
            <div className="border border-white/5 rounded-2xl bg-[#121216]/60 p-6 backdrop-blur-md">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Agency Evaluator</h4>
              <p className="text-[10px] text-gray-500 mb-4 font-normal">Track your selection process steps:</p>
              
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-1.5 uppercase tracking-wide">
                  <span>Progress</span>
                  <span>{progressPercentage}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-green-400 transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>

              {/* Checklist items */}
              <ul className="space-y-3">
                {checklistItems.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <button
                      onClick={() => toggleChecklistItem(item.id)}
                      className={`w-4.5 h-4.5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        item.checked
                          ? "bg-primary border-primary text-black"
                          : "border-white/10 hover:border-primary/50 bg-white/5"
                      }`}
                    >
                      {item.checked && <Check size={12} className="stroke-[3]" />}
                    </button>
                    <span
                      onClick={() => toggleChecklistItem(item.id)}
                      className={`text-[10px] leading-tight font-medium cursor-pointer transition-all ${
                        item.checked ? "text-gray-500 line-through" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </aside>

        </div>
      </div>

      {/* End of Article CTA Section */}
      <section className="border-t border-white/5 bg-[#0e0e14] py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-white leading-tight">
            Your competitors are already competing for attention on social media. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
              The question is whether your brand is showing up with a strategy—or simply showing up.
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Talk to G2G Media House about building a social media strategy designed around your audience, brand and business goals.
          </p>
          <Link
            href="/#contact-form"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            Start Your Social Media Strategy <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
