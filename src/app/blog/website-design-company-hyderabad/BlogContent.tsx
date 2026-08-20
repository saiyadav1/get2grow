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
    "matters",
    "what-do",
    "success",
    "difference",
    "choose",
    "include",
    "cost",
    "timeline",
    "comparison",
    "mistakes",
    "seo-web",
    "questions",
    "checklist",
    "g2g-approach",
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

  // Questions to Ask Accordion State
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);
  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  // Checklist Interactive State
  const [checklistItems, setChecklistItems] = useState([
    // Strategy
    { id: "s1", category: "Strategy", text: "Business objectives are clear", checked: false },
    { id: "s2", category: "Strategy", text: "Target audience is defined", checked: false },
    { id: "s3", category: "Strategy", text: "Main conversion goal is clear", checked: false },
    { id: "s4", category: "Strategy", text: "Customer journey has been considered", checked: false },
    // Content
    { id: "c1", category: "Content", text: "Homepage clearly explains the offer", checked: false },
    { id: "c2", category: "Content", text: "Service pages answer customer questions", checked: false },
    { id: "c3", category: "Content", text: "Content is easy to scan", checked: false },
    { id: "c4", category: "Content", text: "Calls to action are relevant", checked: false },
    { id: "c5", category: "Content", text: "Testimonials/case studies are genuine", checked: false },
    // Design
    { id: "d1", category: "Design", text: "Mobile responsive design", checked: false },
    { id: "d2", category: "Design", text: "Consistent branding implemented", checked: false },
    { id: "d3", category: "Design", text: "Easy navigation layout", checked: false },
    { id: "d4", category: "Design", text: "Readable typography choices", checked: false },
    { id: "d5", category: "Design", text: "Strong visual hierarchy", checked: false },
    // SEO
    { id: "seo1", category: "SEO", text: "Keyword research completed", checked: false },
    { id: "seo2", category: "SEO", text: "SEO titles written & integrated", checked: false },
    { id: "seo3", category: "SEO", text: "Meta descriptions written", checked: false },
    { id: "seo4", category: "SEO", text: "Heading hierarchy checked", checked: false },
    { id: "seo5", category: "SEO", text: "URLs optimized & friendly", checked: false },
    { id: "seo6", category: "SEO", text: "Internal links correctly added", checked: false },
    { id: "seo7", category: "SEO", text: "Images compressed & optimized", checked: false },
    { id: "seo8", category: "SEO", text: "XML sitemap available", checked: false },
    { id: "seo9", category: "SEO", text: "Search Console configured", checked: false },
    // Conversion
    { id: "conv1", category: "Conversion", text: "Contact forms work perfectly", checked: false },
    { id: "conv2", category: "Conversion", text: "Phone links work on mobile", checked: false },
    { id: "conv3", category: "Conversion", text: "CTA buttons are highly visible", checked: false },
    { id: "conv4", category: "Conversion", text: "Conversion events are tracked", checked: false },
    { id: "conv5", category: "Conversion", text: "Thank-you pages/messages work", checked: false }
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
    { id: "matters", text: "Why Choice Matters" },
    { id: "what-do", text: "What Do They Do?" },
    { id: "success", text: "Successful Websites" },
    { id: "difference", text: "Design vs. Development" },
    { id: "choose", text: "Choosing an Agency" },
    { id: "include", text: "What to Include" },
    { id: "cost", text: "Pricing & Costs" },
    { id: "timeline", text: "Timelines" },
    { id: "comparison", text: "Freelancer vs. Agency" },
    { id: "mistakes", text: "Common Mistakes" },
    { id: "seo-web", text: "SEO & Design" },
    { id: "questions", text: "Questions to Ask" },
    { id: "checklist", text: "Checklist" },
    { id: "g2g-approach", text: "G2G Approach" },
    { id: "conclusion", text: "Conclusion" }
  ];

  // Questions Content Array
  const interviewQuestions = [
    {
      q: "1. How will you understand my target audience?",
      cat: "Strategy",
      ans: "A thoughtful agency will perform initial discovery, study competitor dynamics, analyze customer journeys, and design layouts tailored to what your specific buyers need to make purchasing decisions."
    },
    {
      q: "2. What will the website's main conversion goal be?",
      cat: "Strategy",
      ans: "Whether you need enquiry forms filled, products sold directly, consultation bookings, or phone calls, your design partner should align every page structure around achieving these specific business conversion goals."
    },
    {
      q: "3. How will you structure the pages?",
      cat: "Strategy",
      ans: "The page structure should be intuitive, guiding visitors from awareness (understanding the offer) to trust (reviews and credentials) and action (distinct CTAs) without clutter."
    },
    {
      q: "4. Who handles UX and UI?",
      cat: "Design",
      ans: "UX (User Experience) and UI (User Interface) are separate specialties. You need professionals who design custom layouts tailored for usability, mobile responsiveness, and visual appeal."
    },
    {
      q: "5. Will the design be custom?",
      cat: "Design",
      ans: "Custom design matches your brand's unique identity and allows for conversion-focused flexibility, unlike basic pre-made templates that can look generic and slow down performance."
    },
    {
      q: "6. How many revision rounds are included?",
      cat: "Design",
      ans: "Clarifying this upfront ensures you have opportunities to provide feedback on initial wireframes and visual concepts before development begins, avoiding unexpected costs."
    },
    {
      q: "7. Is SEO included in the website build?",
      cat: "SEO",
      ans: "SEO foundations should be built directly into the site code, page titles, URLs, headings, and images during the design phase rather than being treated as an add-on later."
    },
    {
      q: "8. Will you optimize page titles, headings and URLs?",
      cat: "SEO",
      ans: "Yes, structured page metadata, logical H1-H3 title tags, clean URLs, and descriptive alt texts are essential for search engines to crawl and index your site properly."
    },
    {
      q: "9. Will you preserve SEO value if this is a redesign?",
      cat: "SEO",
      ans: "If you have an existing site, the agency must use 301 redirects to map old URLs to new ones, protecting your search history and organic rankings from dropping."
    },
    {
      q: "10. What platform will you use?",
      cat: "Development",
      ans: "The technology stack depends on your goals—WordPress, Next.js, Shopify, or custom solutions. The final platform must be fast, secure, scalable, and easy to maintain."
    },
    {
      q: "11. Will I have full access?",
      cat: "Development",
      ans: "You should retain full ownership of domain credentials, web hosting, site files, CMS access, Google Analytics, and Search Console. Avoid agency-lock configurations."
    },
    {
      q: "12. Is the website easy for my team to update?",
      cat: "Development",
      ans: "A professional agency provides proper handoff training so your internal team can easily edit content, post new blogs, and track customer enquiries."
    },
    {
      q: "13. How will you optimize page speed?",
      cat: "Performance",
      ans: "Through modern clean code, optimized and compressed images, caching, content delivery networks (CDNs), and limiting bloated scripts to keep page load times fast."
    },
    {
      q: "14. Will the website be tested across mobile devices?",
      cat: "Performance",
      ans: "With most traffic coming from smartphones, a rigorous responsive testing process ensures the design works seamlessly across multiple devices, viewports, and browsers."
    },
    {
      q: "15. What support is included?",
      cat: "After Launch",
      ans: "Clarify post-launch details—whether they provide a warranty window for bug fixes or offer monthly maintenance packages for security updates and content edits."
    },
    {
      q: "16. What happens if something breaks?",
      cat: "After Launch",
      ans: "Ensure there is a clear communication channel and response time protocol to handle server downtimes, script failures, or configuration issues after launch."
    },
    {
      q: "17. Can you continue improving the website after launch?",
      cat: "After Launch",
      ans: "A website is a living growth tool. A long-term partner can analyze post-launch user data, run conversion tests, and create new landing pages to keep scaling your results."
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
            <span className="text-gray-300">Website Design Company Hyderabad</span>
          </nav>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              Expert Guide
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Calendar size={14} className="text-primary" /> August 20, 2026
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
              <Clock size={14} className="text-primary" /> 12 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] max-w-5xl mb-6">
            Website Design Company Hyderabad: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 font-black">How to Choose the Right</span> Agency
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Need a website that brings leads, not just clicks? Learn how to choose a website design company in Hyderabad for growth, SEO and conversions.
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
                src="/assets/blog/website-design-company-hyderabad-featured.jpg"
                alt="Website design company Hyderabad creating a modern business website"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <p>
                Your website may be the first serious interaction a potential customer has with your business.
              </p>
              <p>
                Before they call you, visit your office or speak to your sales team, they may Google your company, open your website and decide within seconds.
              </p>
              
              <div className="p-6 border-l-4 border-primary bg-white/5 rounded-r-2xl my-6">
                <p className="font-bold text-white mb-2">That creates a simple problem:</p>
                <p className="text-gray-300 italic">
                  A website can look good and still fail to generate business.
                </p>
              </div>

              <p>
                Slow pages, confusing navigation, weak messaging, poor mobile design, missing calls to action and a lack of SEO can turn a potentially valuable visitor into a lost customer.
              </p>
              <p>
                That is why choosing the right website design company in Hyderabad is about more than finding someone who can create attractive pages.
              </p>
              <p>
                You need a partner who understands your business, your customers and what you want the website to achieve.
              </p>
              <p>
                Your website rarely works in isolation. It can become much more valuable when it relates to <Link href="/#services" className="text-primary hover:underline font-bold">digital marketing services</Link> such as SEO, paid advertising, content and social media.
              </p>
              <p>
                This guide explains what to look for, what a professional agency should provide, how pricing generally works, which mistakes to avoid and how to choose a website partner with confidence.
              </p>
            </section>

            {/* Section 2: Why Choice Matters */}
            <hr className="border-white/5" />
            <section id="matters" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Why Your Choice of Website Design Company Matters
              </h2>
              <p>
                Think about two businesses selling similar services.
              </p>
              <p>
                <strong>Business A</strong> has a modern website with clear messaging, fast-loading pages, strong calls to action, useful content and an easy way to contact the company.
              </p>
              <p>
                <strong>Business B</strong> has an outdated website. Its services are difficult to find, the pages look awkward on mobile, and visitors have no clear next step.
              </p>
              <p>
                Even if both businesses offer excellent services, the first company is likely to make a stronger digital impression.
              </p>
              <p>
                Your website is not simply an online brochure. It can work as:
              </p>
              <ul className="space-y-2 list-disc pl-5 text-gray-400">
                <li>Your digital storefront</li>
                <li>Your sales assistant</li>
                <li>Your credibility builder</li>
                <li>Your lead-generation channel</li>
                <li>Your brand presentation</li>
                <li>Your customer education platform</li>
                <li>Your search visibility asset</li>
              </ul>
              <p>
                Google's current guidance emphasizes helpful, reliable, people-first content and a satisfying page experience. That means successful websites need to serve the visitor first rather than being built simply to manipulate search rankings.
              </p>
              
              <div className="p-6 border border-white/10 bg-[#121216]/60 rounded-2xl flex items-start gap-4">
                <Sparkles className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold text-white mb-1">Pro Tip:</p>
                  <p className="text-gray-400 text-sm">
                    Don't begin a website project by asking, &quot;What design do we want?&quot; Start with, &quot;What should this website help our customers do?&quot;
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: What Do They Do */}
            <hr className="border-white/5" />
            <section id="what-do" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Does a Website Design Company in Hyderabad Actually Do?
              </h2>
              <p>
                A professional website design company typically handles much more than choosing colors and arranging images.
              </p>
              <p>
                Depending on the project, services can include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-400 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> Website strategy</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> Sitemap planning</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> UX design</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> UI design</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> Website development</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> Responsive design</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> Website copywriting</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> Landing page design</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> SEO foundations</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> <Link href="/#services" className="text-primary hover:underline">website and funnel optimization</Link></div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> Analytics integration</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> Contact forms</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> E-commerce functionality</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> Website speed optimization</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> Website maintenance</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> Website redesign</div>
                </div>
              </div>
              <p>
                The strongest projects connect these pieces. For example, your homepage should not merely look professional. It should quickly communicate:
              </p>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center text-white font-bold text-sm">
                Who you help + what you offer + why someone should trust you + what they should do next.
              </div>
              <p>
                That is where design becomes business strategy.
              </p>

              {/* Image 2 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 my-8">
                <Image
                  src="/assets/blog/professional-website-design-development-team-hyderabad.jpg"
                  alt="Professional website design and development team in Hyderabad"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Section 4: What Makes a Business Website Successful */}
            <hr className="border-white/5" />
            <section id="success" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Makes a Business Website Successful?
              </h2>
              <p>
                A successful website is not necessarily the most visually complicated one. In many cases, simplicity wins.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">1. Clear Positioning</h3>
              <p>
                Visitors should understand what your business does almost immediately. Avoid vague statements such as: <em>&quot;We deliver innovative solutions for a changing world.&quot;</em> Instead, explain exactly what you provide and who it is for.
              </p>
              <p>
                For example: <em>&quot;Digital marketing for Hyderabad businesses that want more qualified leads.&quot;</em> Clear beats clever.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">2. Strong User Experience</h3>
              <p>
                Visitors should be able to find important information without working for it. Your navigation should make sense. Important pages might include:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-400 text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Products</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
              <p>
                Your website also needs to communicate a consistent identity, which is why <Link href="/#services" className="text-primary hover:underline font-bold">branding services</Link> and website design should work together rather than being treated as completely separate projects.
              </p>
              <p>
                The exact structure depends on your business, but the principle remains the same: <strong>Make the next step obvious.</strong>
              </p>

              <h3 className="text-lg font-bold text-white mt-4">3. Mobile-Friendly Design</h3>
              <p>
                A website that looks excellent on a desktop but frustrating on a phone is not doing its job. Mobile visitors should be able to read your content comfortably, tap buttons easily, complete forms, navigate menus, view images correctly, and contact you without zooming.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">4. Fast Performance</h3>
              <p>
                Nobody enjoys waiting for a page to load. Large images, unnecessary scripts, excessive animations and poorly configured hosting can all affect performance. Your agency should consider performance during development rather than treating it as an afterthought.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">5. Conversion-Focused Structure</h3>
              <p>
                Every important page should have a purpose. A service page might encourage someone to request a consultation, call your business, submit an enquiry, book a meeting, or request a quote. The website should guide visitors toward meaningful actions.
              </p>

              {/* Image 3 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 my-8">
                <Image
                  src="/assets/blog/responsive-website-design-desktop-tablet-mobile.jpg"
                  alt="Responsive website design for desktop tablet and mobile"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Section 5: Difference */}
            <hr className="border-white/5" />
            <section id="difference" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Website Design vs. Website Development: What's the Difference?
              </h2>
              <p>
                These terms are often used interchangeably, but they describe different parts of the process.
              </p>

              <div className="overflow-x-auto my-6 border border-white/5 rounded-xl">
                <table className="min-w-full divide-y divide-white/5 text-left text-xs sm:text-sm">
                  <thead className="bg-[#121216] text-white">
                    <tr>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider border-r border-white/5">Website Design</th>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider">Website Development</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5">Visual appearance</td>
                      <td className="px-6 py-3">Technical implementation</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5">Layout</td>
                      <td className="px-6 py-3">Coding/configuration</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5">Typography</td>
                      <td className="px-6 py-3">Functionality</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5">Colours</td>
                      <td className="px-6 py-3">Integrations</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5">UI/UX</td>
                      <td className="px-6 py-3">Forms and databases</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5">Visual hierarchy</td>
                      <td className="px-6 py-3">Performance and technical setup</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> A professional website needs both.</li>
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> A beautiful design without reliable functionality creates frustration.</li>
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> A technically functional website without good UX may fail to engage visitors.</li>
              </ul>
              <p>
                The best results come when design, development, content, SEO and conversion strategy work <strong>together</strong>.
              </p>
            </section>

            {/* Section 6: How to Choose */}
            <hr className="border-white/5" />
            <section id="choose" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How to Choose the Right Website Design Company in Hyderabad
              </h2>
              <p>
                Choosing an agency becomes much easier when you know what to evaluate.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">1. Start With Your Business Goals</h3>
              <p>
                Before speaking to agencies, write down what you want your website to accomplish. For example:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400">
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> Generate enquiries</li>
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> Sell products</li>
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> Build brand authority</li>
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> Attract local customers</li>
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> Generate bookings</li>
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> Support paid advertising</li>
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> Rank for organic keywords</li>
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> Explain complex services</li>
              </ul>
              <p>
                Your goals should influence the website structure. A website designed primarily for lead generation will be different from an e-commerce store.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">2. Review Their Portfolio</h3>
              <p>
                Don't only look at whether the websites are visually attractive. Ask:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
                <li>Are the designs appropriate for each industry?</li>
                <li>Is the navigation clear?</li>
                <li>Do the websites work well on mobile?</li>
                <li>Is the messaging easy to understand?</li>
                <li>Are calls to action obvious?</li>
                <li>Do the websites appear designed around business objectives?</li>
              </ul>
              <p>
                A portfolio should demonstrate thinking, not just decoration.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">3. Look Beyond Visual Design</h3>
              <p>
                One of the biggest mistakes businesses make is choosing an agency purely because they like the appearance of its portfolio. Design matters, but your website also needs: <strong>Strategy + content + UX + SEO + technology + conversion thinking</strong>.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">4. Ask About SEO</h3>
              <p>
                SEO should not be something your agency &quot;adds later.&quot; Important foundations should be considered during website planning. Ask whether the project includes:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                <li>• SEO-friendly URLs</li>
                <li>• Page titles</li>
                <li>• Meta descriptions</li>
                <li>• Heading structure</li>
                <li>• Internal linking</li>
                <li>• Image optimization</li>
                <li>• Mobile usability</li>
                <li>• Technical SEO</li>
                <li>• XML sitemap</li>
                <li>• Analytics setup</li>
              </ul>
              <p>
                Google recommends using the words people search for in prominent and descriptive places such as page titles, headings, alt text and link text, while also emphasizing helpful content.
              </p>
              <p>
                Your agency should also understand the fundamentals covered in <a href="https://developers.google.com/search/docs/essentials" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google Search Essentials</a>, including technical requirements, spam policies and search best practices.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">5. Check Mobile Performance</h3>
              <p>
                Ask the agency to demonstrate the website on an actual smartphone. Don't settle for: <em>&quot;Yes, it's responsive.&quot;</em> Look at it yourself. Can you comfortably read the text, click buttons, open the menu, complete forms, and understand the offer?
              </p>

              <h3 className="text-lg font-bold text-white mt-4">6. Understand What's Included</h3>
              <p>
                Website quotations can be misleading when the scope isn't clear. Ask whether the price includes design, development, content, images, SEO setup, forms, hosting, domains, training, and support. A cheaper quote can become expensive if essential services are excluded.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">7. Ask Who Owns the Website</h3>
              <p>
                This is an important question that many business owners forget. You should understand who controls domain registration, hosting, website files, CMS access, analytics, and Search Console. You don't want your entire digital presence dependent on someone else's personal login.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">8. Clarify Maintenance and Support</h3>
              <p>
                A website isn't necessarily finished forever when it goes live. You may need security updates, content changes, new landing pages, bug fixes, performance reviews, and new integrations. Ask what happens after launch.
              </p>
            </section>

            {/* Section 7: What Should a Professional Website Include */}
            <hr className="border-white/5" />
            <section id="include" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Should a Professional Website Include?
              </h2>
              <p>
                A business website should be built around its audience and goals, but many professional websites need the following elements.
              </p>

              <div className="p-6 border border-white/10 bg-[#121216]/60 rounded-3xl space-y-4">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <Check size={18} className="text-primary" /> Essential Website Checklist
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400">
                  <div className="flex gap-2"><Check size={14} className="text-primary shrink-0 mt-1" /> Clear value proposition</div>
                  <div className="flex gap-2"><Check size={14} className="text-primary shrink-0 mt-1" /> Mobile-responsive design</div>
                  <div className="flex gap-2"><Check size={14} className="text-primary shrink-0 mt-1" /> Easy navigation layout</div>
                  <div className="flex gap-2"><Check size={14} className="text-primary shrink-0 mt-1" /> Fast-loading pages</div>
                  <div className="flex gap-2"><Check size={14} className="text-primary shrink-0 mt-1" /> Strong service/product pages</div>
                  <div className="flex gap-2"><Check size={14} className="text-primary shrink-0 mt-1" /> Clear calls to action</div>
                  <div className="flex gap-2"><Check size={14} className="text-primary shrink-0 mt-1" /> Contact information</div>
                  <div className="flex gap-2"><Check size={14} className="text-primary shrink-0 mt-1" /> Trust signals / Testimonials</div>
                  <div className="flex gap-2"><Check size={14} className="text-primary shrink-0 mt-1" /> Optimized images</div>
                  <div className="flex gap-2"><Check size={14} className="text-primary shrink-0 mt-1" /> SEO-friendly page structure</div>
                  <div className="flex gap-2"><Check size={14} className="text-primary shrink-0 mt-1" /> Analytics & HTTPS security</div>
                  <div className="flex gap-2"><Check size={14} className="text-primary shrink-0 mt-1" /> Conversion tracking</div>
                </div>
                <p className="text-xs text-gray-500 border-t border-white/5 pt-4 mt-2">
                  <strong>Important:</strong> Don't add elements simply because another company has them. Every component should have a reason to exist.
                </p>
              </div>
            </section>

            {/* Section 8: How Much Does Website Design Cost */}
            <hr className="border-white/5" />
            <section id="cost" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How Much Does Website Design Cost in Hyderabad?
              </h2>
              <p>
                There is no single &quot;standard&quot; website price. The cost depends on the complexity and business requirements.
              </p>
              <p>
                A basic business website may require fewer pages and integrations. A larger website may involve:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 list-disc pl-5">
                <li>Custom UX planning</li>
                <li>Custom development</li>
                <li>Multiple service categories</li>
                <li>E-commerce systems</li>
                <li>Payment integrations</li>
                <li>CRM integrations</li>
                <li>Advanced security/forms</li>
                <li>Custom animation details</li>
                <li>SEO migration services</li>
                <li>Multiple marketing landing pages</li>
              </ul>
              <p>
                Instead of asking only: <em>&quot;How much will the website cost?&quot;</em> ask: <strong>&quot;What will I receive for that investment?&quot;</strong>
              </p>
              <p>
                Compare agencies based on scope, quality, strategy and expected business outcome, not simply the lowest number.
              </p>
            </section>

            {/* Section 9: How Long Does It Take */}
            <hr className="border-white/5" />
            <section id="timeline" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How Long Does It Take to Build a Business Website?
              </h2>
              <p>
                The timeline depends on the project. A simple website can move relatively quickly when the content and approvals are ready. A larger custom website can take considerably longer.
              </p>
              <p>
                Typical project phases include:
              </p>
              <ol className="grid grid-cols-2 gap-2 text-sm text-gray-400 list-decimal pl-5">
                <li>Discovery</li>
                <li>Strategy</li>
                <li>Sitemap</li>
                <li>Copywriting</li>
                <li>Wireframes</li>
                <li>Visual design</li>
                <li>Development</li>
                <li>Content setup</li>
                <li>Testing</li>
                <li>SEO setup</li>
                <li>Launch</li>
              </ol>
              <p>
                One of the biggest causes of delays is not development. It's waiting for content, images, approvals or feedback.
              </p>
              
              <div className="p-6 border border-white/10 bg-[#121216]/60 rounded-2xl flex items-start gap-4">
                <AlertCircle className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold text-white mb-1">Pro Tip:</p>
                  <p className="text-gray-400 text-sm">
                    Prepare your brand assets, service information, photographs, testimonials and business details before development begins.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Freelancer vs Agency */}
            <hr className="border-white/5" />
            <section id="comparison" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Freelancer vs. Website Design Company: Which Is Better?
              </h2>
              <p>
                Neither option is automatically better. The right choice depends on your project requirements.
              </p>

              <div className="overflow-x-auto my-6 border border-white/5 rounded-xl">
                <table className="min-w-full divide-y divide-white/5 text-left text-xs sm:text-sm">
                  <thead className="bg-[#121216] text-white">
                    <tr>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider border-r border-white/5">Freelancer</th>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider">Agency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5">Often lower overhead</td>
                      <td className="px-6 py-3">Larger team/resources</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5">Direct communication</td>
                      <td className="px-6 py-3">Multiple specialists</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5">Good for smaller projects</td>
                      <td className="px-6 py-3">Useful for complex projects</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5">May have limited capacity</td>
                      <td className="px-6 py-3">Better scalability</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5">One main skill set may dominate</td>
                      <td className="px-6 py-3">Design, development, SEO and marketing can work together</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                If you need a simple website and have a limited budget, a capable freelancer may be sufficient.
              </p>
              <p>
                If your website is expected to support <strong>SEO, paid advertising, branding, lead generation and long term growth</strong>, an agency can provide broader expertise.
              </p>
            </section>

            {/* Section 11: Mistakes */}
            <hr className="border-white/5" />
            <section id="mistakes" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Common Website Design Mistakes Businesses Make
              </h2>
              
              <h3 className="text-lg font-bold text-white mt-4">Mistake 1: Designing for the Owner Instead of the Customer</h3>
              <p>
                Your website should answer the customer's questions, not simply showcase what the business owner likes.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">Mistake 2: Too Much Text Above the Fold</h3>
              <p>
                Visitors don't need your entire company history immediately. Give them:
              </p>
              <div className="p-4 bg-[#121216]/60 border border-white/5 rounded-xl text-center text-primary font-bold text-sm">
                What you do &rarr; Who you help &rarr; Why you're credible &rarr; What to do next.
              </div>
              <p>
                Then provide more detail below the fold.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">Mistake 3: Weak Calls to Action</h3>
              <p>
                &quot;Learn More&quot; isn't always enough. Depending on your goal, stronger CTAs may include:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                <li>• Book a Strategy Call</li>
                <li>• Request a Quote</li>
                <li>• Get a Free Consultation</li>
                <li>• Talk to Our Team</li>
                <li>• Start Your Project</li>
              </ul>

              <h3 className="text-lg font-bold text-white mt-4">Mistake 4: Ignoring SEO During Development</h3>
              <p>
                Changing URLs, page structures and content after launch can create unnecessary SEO problems. Plan important SEO elements from the beginning.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">Mistake 5: Choosing Design Trends Over Usability</h3>
              <p>
                Animations can look impressive. But if they slow the page down or distract from the main action, they aren't helping.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">Mistake 6: Forgetting Conversion Tracking</h3>
              <p>
                Without tracking, you may know that visitors arrived but not what happened afterward. Set up appropriate analytics and conversion tracking so you can learn what is working.
              </p>
            </section>

            {/* Section 12: How SEO and Web Design Work Together */}
            <hr className="border-white/5" />
            <section id="seo-web" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How SEO and Web Design Work Together
              </h2>
              <p>
                SEO and web design should not operate in separate worlds. Consider a local service business:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-400 text-sm">
                <li>Someone searches for a service in Hyderabad.</li>
                <li>They find the website through Google.</li>
                <li>The page loads.</li>
                <li>The visitor sees a clear explanation of the service, supporting information, trust signals and an obvious way to enquire.</li>
              </ol>
              <p>
                That's where SEO and conversion optimization meet. SEO brings qualified visitors. Good UX keeps them engaged. Strong content answers their questions. Conversion-focused design gives them a reason to act.
              </p>
              <p>
                This is why website design should be treated as part of your wider digital marketing system rather than an isolated creative project.
              </p>
              <p>
                For businesses building a new website, the <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google SEO Starter Guide</a> is a useful reference for understanding the fundamentals of making content easier for search engines and users to discover.
              </p>
              <p>
                If organic search is an important acquisition channel for your business, professional <Link href="/#services" className="text-primary hover:underline font-bold">SEO services</Link> can help ensure your website is structured and optimized to capture relevant search demand.
              </p>

              {/* Image 4 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 my-8">
                <Image
                  src="/assets/blog/seo-website-design-strategy-hyderabad-business.jpg"
                  alt="SEO and website design strategy for a Hyderabad business"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Section 13: Questions to Ask Before Hiring */}
            <hr className="border-white/5" />
            <section id="questions" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Questions to Ask Before Hiring a Website Design Company
              </h2>
              <p>
                Before signing a contract, ask these questions. Click on any question to read what to look for:
              </p>

              <div className="space-y-4 my-6">
                {interviewQuestions.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-white/5 rounded-2xl bg-[#121216]/40 overflow-hidden hover:border-white/10 transition-colors"
                  >
                    <button
                      onClick={() => toggleQuestion(idx)}
                      className="w-full p-5 text-left flex items-center justify-between text-white font-bold text-sm sm:text-base hover:text-primary transition-colors gap-4"
                    >
                      <span className="flex items-center gap-3">
                        <span className="px-2.5 py-0.5 rounded bg-white/5 text-primary text-[10px] uppercase font-bold tracking-widest">{item.cat}</span>
                        {item.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-gray-500 transition-transform duration-300 ${
                          openQuestionIndex === idx ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openQuestionIndex === idx ? "max-h-[500px] border-t border-white/5" : "max-h-0"
                      }`}
                    >
                      <div className="p-5 text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
                        {item.ans}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 14: Practical Checklist (Interactive Checklist Component) */}
            <hr className="border-white/5" />
            <section id="checklist" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                A Practical Website Design Checklist
              </h2>
              <p>
                Before approving your new website, review the following. Work through our interactive checklist below to see how prepared you are:
              </p>

              <div className="border border-white/10 bg-[#121216]/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-white text-base">Your Checklist Progress</h3>
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
                  {["Strategy", "Content", "Design", "SEO", "Conversion"].map((category) => (
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

            {/* Section 15: Why G2G Media House */}
            <hr className="border-white/5" />
            <section id="g2g-approach" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Why G2G Media House Takes a Growth-Focused Approach
              </h2>
              <p>
                A website shouldn't exist simply because every modern business is expected to have one. It should have a job.
              </p>
              <p>
                <strong>G2G Media House</strong> positions its services around helping businesses attract attention, build trust, generate leads and increase sales. Its current service offering includes website and funnel work alongside SEO, branding, content and paid advertising.
              </p>
              <p>
                That combination matters because your website rarely operates alone. A visitor might discover your business through Google Search, Instagram, Facebook, LinkedIn, Google Ads, a referral, or a social media post.
              </p>
              <p>
                The website is where that attention can become an enquiry, booking or sale.
              </p>
              <p>
                G2G's stated process follows a strategy-first approach: understand the business, develop the strategy, create the assets, execute the campaigns and scale what performs.
              </p>
              <p>
                For businesses looking for a website design company in Hyderabad, this broader perspective can be valuable. You aren't simply investing in pages. You're building part of your customer acquisition system.
              </p>
            </section>

            {/* Section 16: Key Takeaways and Conclusion */}
            <hr className="border-white/5" />
            <section id="conclusion" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Key Takeaways
              </h2>
              <p>
                If you're comparing website design companies in Hyderabad, don't make your decision based on screenshots alone. Look for an agency that can demonstrate:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400">
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> Clear strategic thinking</li>
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> Strong UX and visual design</li>
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> Mobile-first execution</li>
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> SEO foundations & knowledge</li>
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> Conversion-focused structure</li>
                <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> Transparent pricing & ownership</li>
              </ul>
              <p>
                The right website should make your business easier to understand, easier to trust and easier to contact. Most importantly, it should contribute to growth.
              </p>

              {/* Image 5 Placement (Before Conclusion) */}
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 my-8">
                <Image
                  src="/assets/blog/business-website-launch-digital-growth-strategy-hyderabad.jpg"
                  alt="Business website launch and digital growth strategy in Hyderabad"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-black uppercase tracking-tight text-white mt-8">
                Final Conclusion
              </h3>
              <p>
                Choosing a Website Design Company Hyderabad businesses can rely on is not simply about finding the agency with the most attractive portfolio. It's about finding a team that understands what happens after someone lands on your website.
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Will they understand your offer?</li>
                <li>• Will they trust your business?</li>
                <li>• Will they find the information they need?</li>
                <li>• Will the website work smoothly on mobile?</li>
                <li>• Can they easily contact you?</li>
                <li>• Can search engines understand your pages?</li>
                <li>• And, ultimately, does the website help turn attention into business?</li>
              </ul>
              <p>
                Those are the questions that matter.
              </p>
              <p>
                A strong website combines strategy, design, content, technology, SEO and conversion thinking into one experience.
              </p>
              <p>
                If you're planning a new website or considering a redesign, start with your business goals. Define your audience. Identify the actions you want visitors to take. Then choose a website partner based on its ability to help you achieve those outcomes—not simply its ability to make a website look good.
              </p>
              
              <div className="p-6 border-l-4 border-primary bg-white/5 rounded-r-2xl my-6">
                <p className="text-gray-300 italic">
                  Your website shouldn't just represent your business. It should help move your business forward.
                </p>
              </div>

              <p>
                Website content should ultimately serve the visitor, not just search engines. <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-reliable-people-first-content" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Google's people-first content guidance</a> emphasizes creating useful content that demonstrates expertise and leaves visitors satisfied.
              </p>

              <h3 className="text-lg font-bold text-white mt-8">Your Next Website Should Do More Than Look Good</h3>
              <p>
                If you're looking for a website design company in Hyderabad, choose a partner that understands the connection between website design, SEO, branding and lead generation.
              </p>

              <div className="p-8 border border-primary/20 bg-gradient-to-br from-primary/10 to-green-500/5 rounded-3xl text-center space-y-6">
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white">
                  Ready to build a website designed for growth?
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
                  Book your free strategy call with G2G Media House. Let's design a custom customer acquisition system that scales your business online.
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
