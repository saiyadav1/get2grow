"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar, Mail } from "lucide-react";

export default function BlogHubContent() {
  const secondaryPosts = [
    {
      title: "Best Advertising Agency in Hyderabad: How to Choose the Right Partner",
      excerpt: "Looking for the best advertising agency in Hyderabad? Discover how G2G Media House helps brands generate leads, sales and measurable growth.",
      category: "Paid Media",
      readTime: "15 min read",
      date: "September 14, 2026",
      image: "/assets/blog/best-advertising-agency-in-hyderabad-featured.jpg",
      href: "/blog/best-advertising-agency-in-hyderabad"
    },
    {
      title: "SEO Company in Hyderabad: How to Choose the Right SEO Partner",
      excerpt: "Looking for an SEO company in Hyderabad? Get tailored SEO strategies, technical optimization, content and link building designed to grow traffic and leads.",
      category: "SEO",
      readTime: "14 min read",
      date: "September 14, 2026",
      image: "/assets/blog/seo-company-in-hyderabad-featured.jpg",
      href: "/blog/seo-company-in-hyderabad"
    },
    {
      title: "How Much Does SEO Cost in Hyderabad? 2026 Guide",
      excerpt: "Wondering how much SEO costs in Hyderabad? Explore realistic pricing, packages, services, ROI and tips for choosing the right SEO agency.",
      category: "SEO",
      readTime: "12 min read",
      date: "September 8, 2026",
      image: "/assets/blog/how-much-does-seo-cost-in-hyderabad-featured.jpg",
      href: "/blog/how-much-does-seo-cost-in-hyderabad"
    },
    {
      title: "How to Get More Leads for Your Business: 15 Proven Ways",
      excerpt: "Learn how to get more leads for your business with proven SEO, paid ads, social media, landing pages, and follow-up strategies that drive growth.",
      category: "Growth",
      readTime: "16 min read",
      date: "September 8, 2026",
      image: "/assets/blog/how-to-get-more-leads-for-my-business-featured.jpg",
      href: "/blog/how-to-get-more-leads-for-my-business"
    },
    {
      title: "SEO vs Google Ads: Which Is Better for Your Business?",
      excerpt: "SEO vs Google Ads: discover the real differences in cost, speed, leads and ROI. Learn which strategy makes sense for your business today.",
      category: "Strategy",
      readTime: "13 min read",
      date: "September 8, 2026",
      image: "/assets/blog/seo-vs-google-ads-featured.jpg",
      href: "/blog/seo-vs-google-ads"
    },
    {
      title: "SEO Services in Hyderabad That Drive Real Growth",
      excerpt: "Get SEO services in Hyderabad built to increase rankings, organic traffic and qualified leads. Explore G2G’s data-driven SEO strategies today.",
      category: "SEO",
      readTime: "14 min read",
      date: "September 8, 2026",
      image: "/assets/blog/seo-services-in-hyderabad-featured.jpg",
      href: "/blog/seo-services-in-hyderabad"
    },
    {
      title: "Google Ads Agency Hyderabad: How to Choose the Right Partner for Growth",
      excerpt: "Looking for a Google Ads agency in Hyderabad? Learn how expert PPC management can help you generate qualified leads, sales, and measurable growth.",
      category: "Paid Ads",
      readTime: "11 min read",
      date: "August 31, 2026",
      image: "/assets/blog/google-ads-agency-hyderabad-featured.jpg",
      href: "/blog/google-ads-agency-hyderabad"
    },
    {
      title: "Social Media Marketing Agency Hyderabad: How to Choose the Right Partner for Your Business",
      excerpt: "Looking for the right social media marketing agency in Hyderabad? Learn what services matter, what questions to ask, and how to choose the best strategic partner.",
      category: "Social Media",
      readTime: "14 min read",
      date: "August 29, 2026",
      image: "/assets/blog/social-media-marketing-agency-hyderabad-featured.jpg",
      href: "/blog/social-media-marketing-agency-hyderabad"
    },
    {
      title: "Meta Ads for Lead Generation: Proven Growth Guide",
      excerpt: "Learn how Meta Ads for Lead Generation can attract qualified prospects, reduce wasted ad spend, and turn social media attention into real business opportunities.",
      category: "Paid Ads",
      readTime: "10 min read",
      date: "August 20, 2026",
      image: "/assets/blog/meta-ads-for-lead-generation-featured.jpg",
      href: "/blog/meta-ads-for-lead-generation"
    },
    {
      title: "Local SEO for Small Business: Proven Growth Guide",
      excerpt: "Learn local SEO for small business with practical strategies to rank higher, attract nearby customers, improve Google visibility, and generate more leads.",
      category: "SEO",
      readTime: "10 min read",
      date: "August 20, 2026",
      image: "/assets/blog/local-seo-for-small-business-featured.jpg",
      href: "/blog/local-seo-for-small-business"
    },
    {
      title: "Website Design Company Hyderabad: How to Choose the Right Agency",
      excerpt: "Need a website that brings leads, not just clicks? Learn how to choose a website design company in Hyderabad for growth, SEO and conversions.",
      category: "Design",
      readTime: "12 min read",
      date: "August 20, 2026",
      image: "/assets/blog/website-design-company-hyderabad-featured.jpg",
      href: "/blog/website-design-company-hyderabad"
    },
    {
      title: "Digital Marketing Services: The Complete Guide to Growing Your Business Online",
      excerpt: "Looking for digital marketing services? Learn which strategies drive traffic, leads, sales, and long-term growth—and how to choose the right agency.",
      category: "Strategy",
      readTime: "14 min read",
      date: "August 13, 2026",
      image: "/assets/blog/digital-marketing-services-featured.jpg",
      href: "/blog/digital-marketing-services"
    },
    {
      title: "Best Digital Marketing Agency Hyderabad: How to Choose the Right Partner",
      excerpt: "Looking for the best digital marketing agency Hyderabad? Discover expert SEO, PPC, social media, branding and lead generation services that grow your business.",
      category: "Agency",
      readTime: "12 min read",
      date: "August 12, 2026",
      image: "/assets/blog/hyderabad-digital-marketing-strategy.png",
      href: "/blog/best-digital-marketing-agency-hyderabad"
    },
    {
      title: "Digital Marketing Agency Near Me: How to Choose the Right Partner",
      excerpt: "Looking for a digital marketing agency near me? Discover expert SEO, PPC, social media, and web marketing services to grow your business today.",
      category: "Agency",
      readTime: "12 min read",
      date: "August 3, 2026",
      image: "/assets/blog/agency-near-me-featured.jpg",
      href: "/blog/digital-marketing-agency-near-me"
    },
    {
      title: "Digital Marketers: What They Do and How They Help Businesses Grow",
      excerpt: "Learn how digital marketers help businesses increase traffic, generate quality leads, improve brand visibility, and boost online sales with proven strategies.",
      category: "Strategy",
      readTime: "10 min read",
      date: "July 20, 2026",
      image: "/assets/blog/digital-marketers-business-growth.jpg",
      href: "/blog/digital-marketers"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white font-sans flex flex-col justify-between">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 border-b border-white/5">
          <div className="absolute inset-0 bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-30 pointer-events-none" />
          <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              The Growth Hub
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
              INSIGHTS TO SCALE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">YOUR BUSINESS</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg">
              Actionable guides, deep-dives, and trends in branding, search engine optimization, paid media, and customer acquisition.
            </p>
          </div>
        </section>

        {/* Featured Post Section */}
        <section className="py-16 md:py-24 container mx-auto px-6 max-w-7xl">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Featured Guide</h2>
              <div className="w-16 h-1 bg-primary mt-2" />
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Our ultimate, comprehensive resource guide designed to help businesses dominate the digital landscape this year.
            </p>
          </div>

          <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#121216] transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(34,197,94,0.15)] flex flex-col lg:flex-row">
            {/* Image Container */}
            <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#121216] to-transparent z-10" />
              <Image
                src="/assets/blog/digital-marketing-for-small-business-2026-growth-guide.jpg"
                alt="Digital Marketing Guide 2026"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 z-20 flex gap-2">
                <span className="px-3 py-1 bg-primary text-black font-bold uppercase tracking-widest text-[10px] rounded-full">
                  Featured
                </span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white font-semibold uppercase tracking-widest text-[10px] rounded-full">
                  eBook Guide
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between relative z-20">
              <div>
                <div className="flex items-center gap-6 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" /> July 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-primary" /> 8 min read
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-6 group-hover:text-primary transition-colors">
                  Digital Marketing for Small Businesses: The Complete Guide to Growing in 2026
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-8">
                  Learn how digital marketing helps small businesses attract more customers, generate quality leads, and increase sales. Discover proven strategies for SEO, social media, Google Ads, and website optimization.
                </p>
              </div>

              <div>
                <Link
                  href="/blog/digital-marketing-for-small-business"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                  Read Full Guide <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Articles Section */}
        <section className="py-16 bg-black/40 border-t border-b border-white/5">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Insights & Strategy</h2>
              <div className="w-16 h-1 bg-primary mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {secondaryPosts.map((post, idx) => {
                const isComingSoon = post.date === "Coming Soon";
                const CardContent = (
                  <>
                    <div>
                      <div className="relative h-[200px] w-full overflow-hidden bg-gray-900">
                        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300 group-hover:opacity-20" />
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover filter grayscale opacity-70 group-hover:scale-105 group-hover:filter-none transition-all duration-500"
                        />
                        <span className="absolute bottom-4 left-4 z-20 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold uppercase tracking-widest text-[9px] rounded-full">
                          {post.category}
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                          <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                          <span className={`px-2 py-0.5 rounded text-[9px] font-semibold ${isComingSoon ? 'bg-primary/10 text-primary' : 'bg-green-500/10 text-green-400'}`}>{post.date}</span>
                        </div>
                        <h3 className="text-lg font-bold uppercase tracking-tight mb-3 text-white group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-primary/70 group-hover:text-primary cursor-pointer transition-colors mt-4">
                        {isComingSoon ? "Notify Me" : "Read Guide"} <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </>
                );

                return isComingSoon ? (
                  <div
                    key={idx}
                    className="group bg-[#121216]/60 border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
                  >
                    {CardContent}
                  </div>
                ) : (
                  <Link
                    key={idx}
                    href={post.href}
                    className="group bg-[#121216]/60 border border-white/5 hover:border-primary/40 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(34,197,94,0.05)] transition-all duration-300 flex flex-col justify-between"
                  >
                    {CardContent}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        {/* <section className="py-20 container mx-auto px-6 max-w-4xl text-center">
          <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 border border-white/10 bg-gradient-to-b from-[#121216] to-[#0d0d10] overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto">
              <Mail className="mx-auto text-primary mb-6" size={40} />
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4 text-white">
                Get Growth Tactics in Your Inbox
              </h2>
              <p className="text-gray-400 text-sm mb-8">
                Subscribe to our newsletter and receive curated, actionable digital marketing strategies to scale your business. No spam, only value.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-6 py-4 rounded-xl sm:rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-xs rounded-xl sm:rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
