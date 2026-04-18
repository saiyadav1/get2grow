"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function PortfolioSection() {
  const [mounted, setMounted] = useState(false);
  const [wistiaReady, setWistiaReady] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const videoIds = [
    "7viozadrjl",
    "v8k7at96mz",
    "zx3jdjnoqt",
    "5fw5ystba4",
    "0uigfz3p31",
    "i88px9e0ys",
    "f6rr8qdv73",
  ];

  if (!mounted) {
    return <section className="min-h-screen " />;
  }

  return (
    <section className="py-20  overflow-hidden text-white relative"
    // style={{
    //   backgroundImage: `
    //           repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 80px),
    //           repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 80px)
    //       `,
    //   backgroundSize: '80px 80px'
    // }}
    >
      {/* ✅ Load Wistia ONCE */}
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="afterInteractive"
        onLoad={() => setWistiaReady(true)}
      />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[32px] md:text-[56px] font-black uppercase tracking-tighter leading-tight">
            We turn <span className="text-primary">simple</span> content{" "}
            <span className="text-primary">viral.</span>
          </h2>
          <p className="text-gray-400 italic mt-4 font-light tracking-wide">
            Ideated from scratch, created for efficiency.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          centeredSlides
          loop
          slidesPerView={1.2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2.5,
            slideShadows: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            el: ".portfolio-pagination",
          }}
          navigation={{
            nextEl: ".port-next",
            prevEl: ".port-prev",
          }}
          className="portfolio-swiper !pb-24"
        >
          {videoIds.map((id) => (
            <SwiperSlide key={id}>
              <div className="max-w-[200px] md:max-w-[260px] mx-auto">
                <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-[9/16] shadow-[0_0_50px_rgba(238,157,43,0.1)] border border-white/5 transition-all">

                  {/* ✅ Render embed ONLY when Wistia is ready */}
                  {wistiaReady && (
                    <div
                      className={`wistia_embed wistia_async_${id} videoFoam=true w-full h-full`}
                    />
                  )}

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls */}
        <div className="flex flex-col items-center gap-8 mt-4">
          <div className="portfolio-pagination !static !w-auto flex gap-2" />

          <div className="flex items-center gap-4">
            <button className="port-prev w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-brand-black transition-all">
              ‹
            </button>
            <button className="port-next w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-brand-black transition-all">
              ›
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Pagination */
        .portfolio-pagination .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2);
          width: 8px;
          height: 8px;
          opacity: 1;
          transition: all 0.4s ease;
        }
        .portfolio-pagination .swiper-pagination-bullet-active {
          background: #ee9d2b;
          width: 28px;
          border-radius: 4px;
        }

        /* Scoped slide styling */
        .portfolio-swiper .swiper-slide {
          transition: all 0.5s ease;
        }

        .portfolio-swiper .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.4;
          filter: blur(2px) grayscale(0.5);
          transform: scale(0.85);
        }
      `}</style>
    </section>
  );
}

