"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
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
    "how-generate",
    "why-powerful",
    "campaign-types",
    "setup-steps",
    "create-ads",
    "lead-form",
    "targeting",
    "tracking",
    "wasted-spend",
    "mistakes",
    "checklist",
    "scaling",
    "funnel",
    "tips",
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
    { id: "bp1", text: "Clear customer profile defined", checked: false },
    { id: "bp2", text: "Strong, compelling offer ready", checked: false },
    { id: "bp3", text: "One clear message per ad copy", checked: false },
    { id: "bp4", text: "Relevant scroll-stopping creative designed", checked: false },
    { id: "bp5", text: "Appropriate campaign objective selected (Leads)", checked: false },
    { id: "bp6", text: "Suitable conversion location determined", checked: false },
    { id: "bp7", text: "Simple lead form with minimal friction", checked: false },
    { id: "bp8", text: "Qualification questions included where necessary", checked: false },
    { id: "bp9", text: "CRM sync integration configured", checked: false },
    { id: "bp10", text: "Pixel and Conversions API tracking verified", checked: false },
    { id: "bp11", text: "Lead follow-up sales process established", checked: false },
    { id: "bp12", text: "Multiple creative variations prepared", checked: false },
    { id: "bp13", text: "Defined success metrics mapped out", checked: false },
    { id: "bp14", text: "Qualified-lead reporting active", checked: false }
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
    { id: "definition", text: "What is Meta Ads for Lead Gen?" },
    { id: "how-generate", text: "How Meta Ads Work" },
    { id: "why-powerful", text: "Why Meta Ads are Powerful" },
    { id: "campaign-types", text: "Campaign Types" },
    { id: "setup-steps", text: "Setting Up Meta Ads" },
    { id: "create-ads", text: "Create High-Quality Ads" },
    { id: "lead-form", text: "Building Lead Forms" },
    { id: "targeting", text: "Targeting Strategies" },
    { id: "tracking", text: "Track & Measure" },
    { id: "wasted-spend", text: "Reduce Wasted Spend" },
    { id: "mistakes", text: "Common Mistakes" },
    { id: "checklist", text: "Pre-Launch Checklist" },
    { id: "scaling", text: "How to Scale" },
    { id: "funnel", text: "Lead Generation Funnel" },
    { id: "tips", text: "Lead Quality Tips" },
    { id: "faq", text: "FAQ" },
    { id: "conclusion", text: "Conclusion" }
  ];

  // FAQ Content Array
  const faqs = [
    {
      q: "How do Meta Ads generate leads?",
      a: "Meta Ads generate leads by showing targeted advertisements to potential customers and giving them a way to respond. Depending on the campaign, prospects can submit an instant form, visit a website form, start a Messenger or Instagram conversation, or call a business. The best option depends on the sales process, customer journey, and type of offer."
    },
    {
      q: "Are Meta Ads good for lead generation?",
      a: "Yes. Meta Ads can be effective for lead generation because businesses can reach people based on relevant audience signals and capture enquiries through several conversion paths. Meta supports instant forms, website forms, messaging and calls. However, campaign success depends on targeting, creative, offer, lead quality, tracking and follow-up—not simply the advertising platform."
    },
    {
      q: "How much do Meta Ads cost for lead generation?",
      a: "There is no universal cost per lead for Meta Ads. Costs vary based on industry, audience, location, competition, offer, creative, conversion method and lead quality. A campaign should therefore be evaluated using more than CPL. Track qualified leads, appointments, customers and customer acquisition cost to understand whether the advertising is actually profitable."
    },
    {
      q: "How can I get better quality leads from Meta Ads?",
      a: "Start by defining your ideal customer and creating an offer that attracts people with genuine buying intent. Use qualification questions when appropriate, connect your CRM, track downstream outcomes and optimize toward quality rather than simply maximizing form submissions. Meta's conversion-leads tools can use CRM and Conversions API data to help optimize toward higher-quality outcomes."
    },
    {
      q: "What is the best Meta Ads strategy for lead generation?",
      a: "There is no single strategy that works for every business. A strong approach combines a specific audience, compelling offer, clear creative, appropriate conversion location, simple lead capture, reliable tracking and fast follow-up. Test instant forms, website forms, messaging or calls based on your customer's buying process, then optimize using qualified-lead and customer data."
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
            <span className="text-gray-300">Meta Ads for Lead Generation</span>
          </nav>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full">
              Paid Ads
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
            Meta Ads for Lead Generation: <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 font-black">Proven Growth</span> Guide
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Learn how Meta Ads for Lead Generation can attract qualified prospects, reduce wasted ad spend, and turn social media attention into real business opportunities.
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
                src="/assets/blog/meta-ads-for-lead-generation-featured.jpg"
                alt="Meta Ads for Lead Generation campaign being analysed by a digital marketing professional."
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <p>
                Getting leads from Facebook and Instagram sounds simple:
              </p>
              <ul className="space-y-2 text-gray-300 pl-4">
                <li className="flex items-center gap-2">➢ Create an ad.</li>
                <li className="flex items-center gap-2">➢ Put a form behind it.</li>
                <li className="flex items-center gap-2">➢ Collect contact details.</li>
              </ul>
              <p>
                But anyone who has actually managed paid campaigns knows the harder question is: <strong>Are those leads worth anything?</strong>
              </p>
              <p>
                A campaign can generate hundreds of leads and still produce very few sales. On the other hand, a well-structured Meta Ads campaign can consistently put qualified prospects into your sales pipeline.
              </p>
              <p>
                That difference comes down to strategy. Meta Ads for Lead Generation work best when the entire system is designed around the customer journey—not simply the number of forms submitted.
              </p>
              <p>
                In this guide, you'll learn how to build that system, from choosing the right campaign type and audience to creating better ads, qualifying prospects, tracking results, and turning leads into customers.
              </p>
              <p>
                To succeed, you'll want to leverage professional <Link href="/#services" className="text-primary hover:underline font-bold">social media marketing services</Link> that align visual creative with audience targeting.
              </p>
              
              <div className="p-6 border-l-4 border-primary bg-white/5 rounded-r-2xl my-6">
                <p className="font-bold text-white mb-2">Key Takeaway:</p>
                <p className="text-gray-300 italic">
                  A cheap lead is not necessarily a good lead. The real goal is to generate prospects who have a genuine need, fit your offer, and are likely to become customers.
                </p>
              </div>
            </section>

            {/* What Are Meta Ads */}
            <hr className="border-white/5" />
            <section id="definition" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                What Are Meta Ads for Lead Generation?
              </h2>
              <p>
                Meta Ads for Lead Generation are paid campaigns designed to turn people on Facebook, Instagram, Messenger, or related Meta placements into potential customers.
              </p>
              <p>
                Instead of relying only on organic reach, you pay to put your offer in front of a carefully selected audience. A prospect might:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 pl-4">
                <li>• Submit an instant form</li>
                <li>• Complete a website form</li>
                <li>• Start a Messenger conversation</li>
                <li>• Start an Instagram conversation</li>
                <li>• Call your business</li>
                <li>• Request information</li>
                <li>• Book a consultation</li>
                <li>• Ask for a quote</li>
                <li>• Register for an event</li>
              </ul>
              <p>
                Meta currently supports several lead-generation conversion paths, including forms, messaging, and calls. This makes Meta especially useful for businesses where a prospect needs to raise their hand before a salesperson takes over.
              </p>
              <p>
                For official resources, you can learn about native <a href="https://www.facebook.com/business/ads/ad-objectives/lead-generation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Meta lead generation</a> options directly from Meta Business.
              </p>
            </section>

            {/* How Meta Ads Generate Leads */}
            <hr className="border-white/5" />
            <section id="how-generate" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How Meta Ads Generate Leads
              </h2>
              <p>
                Think of your campaign as a five-stage system:
              </p>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center text-white font-bold text-sm">
                Audience &rarr; Ad &rarr; Offer &rarr; Lead Capture &rarr; Follow-Up
              </div>
              <p>
                If any one of these stages is weak, performance suffers. For example:
              </p>
              <ul className="space-y-2 text-gray-300 pl-4">
                <li>➢ You may have excellent targeting, but a boring advertisement.</li>
                <li>➢ Or you may have a great advertisement but ask for 15 pieces of information in the form.</li>
                <li>➢ Or you may generate hundreds of leads but wait three days before contacting them.</li>
              </ul>
              <p>
                The campaign doesn't fail because Meta cannot generate leads. It fails because the system around the ads is broken.
              </p>
              
              <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-3xl space-y-4">
                <h4 className="font-bold text-white text-sm">A Simple Example:</h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Imagine a Hyderabad-based real estate company wants property enquiries. Instead of running a boring ad like &quot;We sell premium apartments. Contact us.&quot;, they offer: <strong>&quot;Get the Latest 2 &amp; 3 BHK Project Price List + Availability&quot;</strong>.
                </p>
                <ul className="list-disc pl-5 text-xs text-gray-400 space-y-1">
                  <li>The ad attracts people interested in buying.</li>
                  <li>The form collects essential information.</li>
                  <li>The sales team receives the enquiry.</li>
                  <li>The prospect gets contacted quickly.</li>
                </ul>
                <p className="text-xs text-primary font-bold">Now the campaign has a clear job: create qualified buying conversations.</p>
              </div>

              {/* Image 2 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 my-8">
                <Image
                  src="/assets/blog/creating-meta-ads-lead-generation-campaign.jpg"
                  alt="Creating a Meta Ads lead generation campaign"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Why Meta Ads Can Be Powerful */}
            <hr className="border-white/5" />
            <section id="why-powerful" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Why Meta Ads Can Be Powerful for Lead Generation
              </h2>
              <ul className="space-y-2 text-gray-300 pl-4">
                <li>➢ Meta's major advantage is that people don't have to search for your business first.</li>
                <li>➢ Google Search often captures existing intent, but Meta can help create interest before someone actively searches.</li>
                <li>➢ Someone may not search for &quot;best interior designer near me&quot;, but they may stop scrolling when they see a stunning home transformation.</li>
              </ul>
              <p>
                That is the power of discovery-based advertising. Meta itself describes lead generation as an environment where businesses can create demand and nurture interest, rather than relying only on people already searching for a solution.
              </p>
              <p>
                Other advantages include large potential audiences, detailed audience signals, visual advertising, Instagram placements, instant forms, messaging campaigns, and call campaigns.
              </p>
              <p>
                Meta reported more than <strong>1 billion instant forms submitted in 2023</strong>, with 16.6% growth compared with 2022. That tells us native lead capture is a major part of the Meta advertising ecosystem.
              </p>
            </section>

            {/* Campaign Types */}
            <hr className="border-white/5" />
            <section id="campaign-types" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Meta Lead Generation Campaign Types
              </h2>
              <p>
                Choosing the right conversion path is one of the first strategic decisions.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">1. Instant Forms</h3>
              <p>
                Instant Forms allow prospects to submit their information without leaving the Meta environment. This reduces friction because the user doesn't have to load a separate website. You can find detailed best practices on setting up <a href="https://www.facebook.com/business/ads/ad-objectives/lead-generation/lead-ads-with-forms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Meta lead ads with forms</a>.
              </p>
              <p>
                They can provide information such as name, email, phone number, location, and answers to custom qualification questions.
              </p>
              <p>
                <strong>Best for:</strong> Consultations, quote requests, real estate, education, financial services, local businesses, and service businesses.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">2. Website Forms</h3>
              <p>
                Website lead campaigns send prospects to your landing page. This creates an additional step, but it can be useful when prospects need more information before submitting their details. A strong landing page can include testimonials, case studies, pricing, FAQs, and detailed service information.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">3. Click-to-Message Lead Ads</h3>
              <p>
                Some prospects don't want to fill out a form; they want to ask a question. For these audiences, messaging can be extremely useful. A person could click an advertisement and start a conversation through Messenger or Instagram.
              </p>
              <p>
                Meta recommends using clear, simple questions and setting expectations. Its guidance says six questions or fewer is usually optimal for automated chat flows. For local businesses, linking this to <Link href="/#services" className="text-primary hover:underline font-bold">Facebook and Instagram advertising</Link> options creates a seamless path to conversation.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">4. Call Ads</h3>
              <p>
                If your business closes leads through phone conversations, call campaigns make sense. They're particularly useful when the purchase requires consultation, customers have questions, the service is high-value, salespeople are available, and speed matters.
              </p>

              {/* Image 3 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 my-8">
                <Image
                  src="/assets/blog/meta-lead-ad-instant-form-customer-enquiries.jpg"
                  alt="Meta lead ad instant form for collecting customer enquiries"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Setting Up Meta Ads */}
            <hr className="border-white/5" />
            <section id="setup-steps" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How to Set Up Meta Ads for Lead Generation
              </h2>
              <p>
                A successful campaign starts before you open Ads Manager.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">Step 1: Define Your Ideal Customer</h3>
              <p>
                Don't begin with: <em>&quot;Everyone who might buy.&quot;</em> That's too broad. Define: age range, location, job/business type, buying motivation, pain points, budget level, awareness stage, and previous interactions.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">Step 2: Choose the Right Offer</h3>
              <p>
                A strong advertisement cannot rescue a weak offer. <em>&quot;Contact us today&quot;</em> is rarely as compelling as something specific and useful. Better examples include free consultations, free quotes, price guides, property lists, and downloadable guides.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">Step 3: Choose Your Conversion Location</h3>
              
              <div className="overflow-x-auto my-6 border border-white/5 rounded-xl">
                <table className="min-w-full divide-y divide-white/5 text-left text-xs sm:text-sm">
                  <thead className="bg-[#121216] text-white">
                    <tr>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider border-r border-white/5">Conversion Method</th>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Instant Form</td>
                      <td className="px-6 py-3">Fast lead capture</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Website Form</td>
                      <td className="px-6 py-3">Detailed sales pages</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Messenger</td>
                      <td className="px-6 py-3">Conversational sales</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Instagram Messaging</td>
                      <td className="px-6 py-3">Social-first audiences</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Calls</td>
                      <td className="px-6 py-3">High-intent enquiries</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-white mt-4">Step 4: Build Your Campaign</h3>
              <p>
                In Meta Ads Manager, use the <strong>Leads</strong> objective when lead generation is the desired outcome. Then structure the campaign around: Audience, Budget, Conversion location, Creative, Offer, Form, Tracking, and Follow-up.
              </p>
            </section>

            {/* Create High-Quality Ads */}
            <hr className="border-white/5" />
            <section id="create-ads" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How to Create Ads That Generate Quality Leads
              </h2>
              <p>
                The best lead-generation ads aren't necessarily the prettiest; they're the ones that make the right person stop.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">Start With the Problem</h3>
              <p>
                Instead of: <em>&quot;We are a leading digital marketing company.&quot;</em> <br />
                Try: <strong>&quot;Spending on ads but not getting enough qualified enquiries?&quot;</strong>
              </p>
              <p>
                The second message immediately identifies a problem.
              </p>

              <div className="p-5 bg-white/5 rounded-xl border border-white/5 text-center text-white space-y-2">
                <p className="text-xs text-primary font-bold uppercase tracking-widest">A simple ad structure</p>
                <p className="font-bold">Hook &rarr; Problem &rarr; Solution &rarr; Proof &rarr; CTA</p>
              </div>

              <p>
                Use creative that stops the scroll. Test different formats: short-form video, customer testimonials, before-and-after visuals, founder-led videos, carousels, and UGC-style content.
              </p>
              <p>
                Don't assume one format will work forever. Creative fatigue is real. When performance declines, sometimes the audience isn't the problem—the creative is.
              </p>
              <p>
                To learn how to construct these campaigns, HubSpot offers a great lesson on how to <a href="https://academy.hubspot.com/lessons/create-facebook-leads-ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">create Facebook Lead Ads</a>.
              </p>

              {/* Image 4 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 my-8">
                <Image
                  src="/assets/blog/measuring-meta-ads-lead-generation-performance-qualified-leads.jpg"
                  alt="Measuring Meta Ads lead generation performance and qualified leads"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Building Lead Forms */}
            <hr className="border-white/5" />
            <section id="lead-form" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How to Build a High-Converting Lead Form
              </h2>
              <p>
                Your lead form has one job: <strong>Get the right information with as little friction as possible.</strong>
              </p>
              <p>
                Don't ask for everything you could possibly want. Ask for what the sales team needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-6 border border-white/5 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-white mb-2">Basic Form</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Name</li>
                    <li>• Phone</li>
                    <li>• Email</li>
                  </ul>
                </div>
                <div className="p-6 border border-primary/20 bg-[#121216]/60 rounded-2xl">
                  <h4 className="font-bold text-primary mb-2">Qualified Lead Form</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Name, Phone, Email</li>
                    <li>• Service required</li>
                    <li>• Location &amp; Approximate budget</li>
                    <li>• Preferred contact time</li>
                  </ul>
                </div>
              </div>

              <p>
                The second form may produce fewer leads, but that's not automatically bad. If it produces better prospects, your business may make more money.
              </p>
              <div className="p-6 border border-white/10 bg-[#121216]/60 rounded-2xl flex items-start gap-4">
                <Sparkles className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold text-white mb-1">Pro Tip:</p>
                  <p className="text-gray-400 text-sm">
                    Don't judge your form only by completion rate. Compare the quality of leads that reach sales.
                  </p>
                </div>
              </div>
            </section>

            {/* Targeting Strategies */}
            <hr className="border-white/5" />
            <section id="targeting" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Meta Ads Targeting Strategies for Better Leads
              </h2>
              <p>
                Targeting should reflect your customer journey.
              </p>
              <p>
                <strong>Cold Audiences:</strong> These are people who haven't interacted with your business. Use relevant audience signals, broad targeting where appropriate, customer data, lookalike audiences, and strong creative.
              </p>
              <p>
                <strong>Warm Audiences:</strong> These people already know you. They may have watched your videos, visited your website, engaged on Instagram, or interacted with previous forms. Awareness already exists, making them highly valuable.
              </p>
              <p>
                <strong>Retargeting:</strong> Retarget people who showed meaningful interest but didn't convert. For example, someone watches your video, and later they see an advertisement offering a free consultation. That second interaction moves them closer to conversion.
              </p>

              {/* Image 5 Placement */}
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 my-8">
                <Image
                  src="/assets/blog/meta-ads-strategy-lead-generation-optimization-meeting.jpg"
                  alt="Meta Ads strategy and lead generation optimization meeting"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Track and Measure */}
            <hr className="border-white/5" />
            <section id="tracking" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How to Track and Measure Meta Ads for Lead Generation
              </h2>
              <p>
                The biggest mistake is tracking only cost per lead. CPL matters, but it isn't the final business metric. Track the complete funnel.
              </p>
              <p>
                To learn about deeper API setups, read about the <a href="https://www.facebook.com/business/help/AboutConversionsAPI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Meta Conversions API</a>.
              </p>
              <p>
                When measuring performance across your paid ads channels, employing professional <Link href="/#services" className="text-primary hover:underline font-bold">performance marketing services</Link> can help connect Meta data with downstream CRM pipelines.
              </p>

              <div className="overflow-x-auto my-6 border border-white/5 rounded-xl">
                <table className="min-w-full divide-y divide-white/5 text-left text-xs sm:text-sm">
                  <thead className="bg-[#121216] text-white">
                    <tr>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider border-r border-white/5">Metric</th>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider">What It Tells You</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Impressions</td>
                      <td className="px-6 py-3">How often ads were shown</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">CTR</td>
                      <td className="px-6 py-3">How compelling the ad is</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">CPC</td>
                      <td className="px-6 py-3">Cost of generating clicks</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Leads</td>
                      <td className="px-6 py-3">Number of enquiries</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">CPL</td>
                      <td className="px-6 py-3">Cost per lead</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Qualified Leads</td>
                      <td className="px-6 py-3">Lead quality</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Cost per Qualified Lead</td>
                      <td className="px-6 py-3">Efficiency of quality acquisition</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Appointments</td>
                      <td className="px-6 py-3">Sales opportunity</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Customers</td>
                      <td className="px-6 py-3">Actual business outcome</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Cost per Customer</td>
                      <td className="px-6 py-3">True acquisition cost</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-6 py-3 border-r border-white/5 font-semibold">Revenue</td>
                      <td className="px-6 py-3">Financial return</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-white mt-4">The metric that changes everything: Cost per qualified lead</h3>
              <p>
                Suppose Campaign A generates 100 leads at ₹200 each (Total spend: ₹20,000), but only 5 are qualified. That's ₹4,000 per qualified lead.
              </p>
              <p>
                Suppose Campaign B generates 40 leads at ₹500 each (Total spend: ₹20,000), but 15 are qualified. That's ₹1,333 per qualified lead.
              </p>
              <p>
                Campaign B has the higher CPL, but it is the better campaign. That's why businesses should avoid optimizing blindly for cheap leads.
              </p>
              <p>
                Connect your lead source to your CRM whenever possible. A CRM helps you store leads, assign sales owners, track lead status, automate follow-up, record appointments, and measure customer acquisition. HubSpot's current Meta integrations support lead syncing and conversion-event workflows.
              </p>
              <p>
                Don't only tell Meta that somebody submitted a form. Feed downstream information (Lead &rarr; Qualified Lead &rarr; Appointment &rarr; Customer) back into Meta's optimization systems to give you a clearer picture of campaign performance.
              </p>
            </section>

            {/* Reduce Wasted Spend */}
            <hr className="border-white/5" />
            <section id="wasted-spend" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How to Reduce Wasted Ad Spend
              </h2>
              <p>
                Wasted spend usually comes from one of four problems:
              </p>
              <ul className="space-y-4 pl-4 text-sm text-gray-400">
                <li><strong>1. Weak offer:</strong> Nobody cares enough to respond.</li>
                <li><strong>2. Wrong audience:</strong> The ad reaches people who aren't likely to buy.</li>
                <li><strong>3. Weak creative:</strong> The right people don't stop scrolling.</li>
                <li><strong>4. Poor follow-up:</strong> The business generates leads but fails to convert them.</li>
              </ul>
              
              <div className="p-6 border border-white/10 bg-[#121216]/60 rounded-r-2xl border-l-4 border-primary">
                <p className="text-gray-300 italic">
                  You can't fix a sales problem by endlessly changing the advertisement. Look at the entire funnel.
                </p>
              </div>
            </section>

            {/* Common Mistakes */}
            <hr className="border-white/5" />
            <section id="mistakes" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Common Meta Ads Lead Generation Mistakes
              </h2>

              <h3 className="text-lg font-bold text-white mt-4">Mistake 1: Optimizing for Cheap Leads</h3>
              <p>
                Cheap leads can look impressive inside Ads Manager, but revenue doesn't care about impressive dashboards. Focus on qualified leads and customers.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">Mistake 2: Using the Same Ad for Everyone</h3>
              <p>
                Different audiences have different problems. A startup founder cares about growth, a homeowner cares about price, and a B2B decision-maker cares about ROI. Your messaging should reflect those differences.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">Mistake 3: Asking Too Many Questions</h3>
              <p>
                Every extra field adds friction. Ask only what you genuinely need.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">Mistake 4: Ignoring Follow-Up</h3>
              <p>
                A lead is not a customer. Create a follow-up process before launching the campaign.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">Mistake 5: Changing Everything at Once</h3>
              <p>
                If you change audience, creative, offer, budget, and form all at the same time, you won't know what caused the result. Test systematically.
              </p>

              <h3 className="text-lg font-bold text-white mt-4">Mistake 6: Forgetting Creative Testing</h3>
              <p>
                One advertisement isn't a strategy. Build a testing pipeline. For details on how to build targeting and ad setups, search portals like Search Engine Land's guide on <a href="https://searchengineland.com/meta-ads-lead-gen-what-you-need-to-know-456269" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Meta Ads lead generation</a>.
              </p>
            </section>

            {/* Checklist */}
            <hr className="border-white/5" />
            <section id="checklist" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Best Practices: Pre-Launch Checklist
              </h2>
              <p>
                Use this interactive checklist before launching your next campaign:
              </p>

              <div className="border border-white/10 bg-[#121216]/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-white text-base">Launch Readiness</h3>
                    <span className="text-xs font-bold text-primary">{progressPercentage}% Ready</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-green-400 transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                  {checklistItems.map((item) => (
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
            </section>

            {/* Scaling */}
            <hr className="border-white/5" />
            <section id="scaling" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                How to Scale a Successful Campaign
              </h2>
              <p>
                Don't double your budget simply because yesterday looked good. Scale based on evidence. First identify: winning audience, winning creative, winning offer, acceptable CPL, acceptable cost per qualified lead, and lead-to-customer rate.
              </p>
              <p>
                Then increase investment carefully while continuing to test. Meta's current Advantage+ lead-generation tools can use automation and first-party data, with Meta specifically recommending CRM data and Conversions API for quality-focused optimization.
              </p>
              <p>
                A practical scaling framework follows five stages:
              </p>
              <ul className="list-decimal pl-5 space-y-2 text-sm text-gray-400">
                <li><strong>Stage 1: Test</strong> - Find promising combinations of copy, creatives, and forms.</li>
                <li><strong>Stage 2: Validate</strong> - Confirm performance across enough data points.</li>
                <li><strong>Stage 3: Improve</strong> - Fix lead quality, creatives, and follow-up times.</li>
                <li><strong>Stage 4: Scale</strong> - Increase budget slowly while monitoring unit economics.</li>
                <li><strong>Stage 5: Refresh</strong> - Introduce new creative assets before performance fatigue stalls.</li>
              </ul>
            </section>

            {/* Funnel */}
            <hr className="border-white/5" />
            <section id="funnel" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                A Simple Meta Ads Lead Generation Funnel
              </h2>
              <p>
                Here's a practical funnel you can adapt:
              </p>
              <div className="p-6 bg-white/5 border border-white/5 rounded-2xl max-w-md mx-auto space-y-2 text-center text-sm font-semibold">
                <div className="p-2.5 bg-primary/10 rounded border border-primary/20 text-primary">Cold Audience</div>
                <div className="text-gray-500">&darr;</div>
                <div className="p-2.5 bg-white/5 rounded border border-white/5">Educational / Problem-Focused Ad</div>
                <div className="text-gray-500">&darr;</div>
                <div className="p-2.5 bg-white/5 rounded border border-white/5">Relevant Offer</div>
                <div className="text-gray-500">&darr;</div>
                <div className="p-2.5 bg-white/5 rounded border border-white/5">Instant Form / Website / Message</div>
                <div className="text-gray-500">&darr;</div>
                <div className="p-2.5 bg-white/5 rounded border border-white/5">Lead Qualification</div>
                <div className="text-gray-500">&darr;</div>
                <div className="p-2.5 bg-white/5 rounded border border-white/5">CRM Sync</div>
                <div className="text-gray-500">&darr;</div>
                <div className="p-2.5 bg-white/5 rounded border border-white/5">Sales Follow-Up</div>
                <div className="text-gray-500">&darr;</div>
                <div className="p-2.5 bg-white/5 rounded border border-white/5">Appointment</div>
                <div className="text-gray-500">&darr;</div>
                <div className="p-2.5 bg-white/5 rounded border border-white/5">Customer Acquisition</div>
                <div className="text-gray-500">&darr;</div>
                <div className="p-2.5 bg-green-500/10 rounded border border-green-500/20 text-green-400">Repeat Business / Referral</div>
              </div>
              <p>
                The ad is only one part of the machine. The businesses that win consistently are usually the ones that improve the whole machine.
              </p>
            </section>

            {/* Tips */}
            <hr className="border-white/5" />
            <section id="tips" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Expert Tips for Better Lead Quality
              </h2>
              <ul className="space-y-4 text-gray-300 pl-4">
                <li><strong>Tip 1: Match the ad to the landing experience</strong> - If your ad promises a free consultation, don't send people somewhere that talks about something completely different.</li>
                <li><strong>Tip 2: Use qualification strategically</strong> - If your sales team cannot serve everyone, ask questions that identify your best prospects.</li>
                <li><strong>Tip 3: Track sales outcomes</strong> - Don't stop at form submission.</li>
                <li><strong>Tip 4: Follow up quickly</strong> - Interest is often highest immediately after someone enquires.</li>
                <li><strong>Tip 5: Build multiple creative angles</strong> - Test pain points, desired outcomes, objections, proof and educational content.</li>
                <li><strong>Tip 6: Let data guide decisions</strong> - Don't kill a campaign because one day looked bad. Don't scale it because one day looked amazing. Look for meaningful patterns.</li>
              </ul>
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
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
                <li>Meta Ads can generate leads through forms, websites, messaging and calls.</li>
                <li>The cheapest lead isn't always the most valuable lead.</li>
                <li>A strong offer is critical.</li>
                <li>Creative should focus on the customer's problem or desired outcome.</li>
                <li>Keep forms simple but qualify prospects when necessary.</li>
                <li>Track qualified leads and customers—not just form submissions.</li>
                <li>Connect your CRM wherever practical.</li>
                <li>Use Pixel and Conversions API appropriately for stronger measurement.</li>
                <li>Test multiple creative angles.</li>
                <li>Scale campaigns based on business economics, not vanity metrics.</li>
                <li>Follow-up is part of lead generation—not an afterthought.</li>
              </ul>

              <h3 className="text-xl font-black uppercase tracking-tight text-white mt-8">
                Meta Ads for Lead Generation: The Bottom Line
              </h3>
              <p>
                Meta Ads can be a powerful lead-generation channel, but successful campaigns are not built around clicks alone. They are built around people.
              </p>
              <p>
                Understand what your audience wants, give them a compelling reason to respond, use the right conversion path, make the form easy, qualify leads, and optimize toward the outcomes that matter to the business. The goal isn't to collect the largest possible database; it's to build a reliable pipeline of people who have a genuine reason to buy.
              </p>
              <p>
                And that's the difference between running Meta Ads and building a Meta lead-generation system.
              </p>
              <p>
                For businesses looking to launch paid media setups, G2G Media House provides full-funnel <Link href="/#services" className="text-primary hover:underline font-bold">digital marketing services</Link> to turn attention into qualified customers.
              </p>

              <div className="p-8 border border-primary/20 bg-gradient-to-br from-primary/10 to-green-500/5 rounded-3xl text-center space-y-6">
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white">
                  Ready to turn Meta Ads into a predictable lead-generation channel?
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
                  Talk to G2G Media House about your audience, offer, current campaign performance, and growth goals. Let's design a custom customer acquisition system that scales your business online.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
                  If you are ready to build a reliable pipeline, contact us today to learn about our full <Link href="/#services" className="text-primary hover:underline font-bold">lead generation services</Link> and ask about our <strong>Free Meta Ads Lead Generation Audit Checklist</strong>.
                </p>
                <div>
                  <Link
                    href="/contact-form"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    Get a Campaign Consultation <ArrowRight size={16} />
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
