"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function PortfolioSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const videoIds = [
    "7viozadrjl", "v8k7at96mz", "zx3jdjnoqt", "5fw5ystba4", 
    "0uigfz3p31", "i88px9e0ys", "f6rr8qdv73",
  ];

  if (!isMounted) {
    return <section className="h-[100dvh] bg-brand-black" />;
  }

  return (
    <section className="h-[100dvh] min-h-[550px] flex flex-col justify-center bg-brand-black overflow-hidden text-white relative">
      {/* FIX 1: Load the main Wistia engine ONLY. 
          The 'wistia-player' tag works automatically once this is loaded.
      */}
      <Script 
        src="https://fast.wistia.com/assets/external/E-v1.js" 
        strategy="afterInteractive" 
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-[28px] sm:text-[40px] md:text-[60px] lg:text-[64px] font-black leading-[1.1] uppercase tracking-tighter mb-2 text-white">
            We turn <span className="text-primary">simple</span> content <span className="text-primary">viral.</span>
          </h2>
          <p className="text-[14px] md:text-[20px] text-gray-500 font-light tracking-wide italic">
            Ideated from scratch, created for efficiency.
          </p>
          <div className="w-12 md:w-20 h-[1px] bg-primary/40 mx-auto mt-4"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect={"coverflow"}
            centeredSlides={true}
            loop={true}
            slidesPerView={1.4}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2, coverflowEffect: { depth: 150 } },
              1024: { slidesPerView: 3, coverflowEffect: { depth: 200 } }, 
            }}
            navigation
            pagination={{ clickable: true }}
            className="luxury-swiper !pb-12"
          >
            {videoIds.map((id) => (
              <SwiperSlide key={id}>
                <div className="max-w-[180px] sm:max-w-[220px] md:max-w-[280px] mx-auto relative group">
                  <div className="absolute inset-0 bg-primary/10 blur-[40px] md:blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  
                  <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] p-[1px] md:p-[2px] bg-gradient-to-b from-primary/30 to-white/5 border border-white/10 shadow-2xl">
                    <div className="rounded-[1.4rem] md:rounded-[2.4rem] overflow-hidden bg-black aspect-[9/16] relative">
                      {/* FIX 2: Ensure the tag is clean. 
                          The 'wistia-player' will initialize once the global script loads.
                      */}
                      <wistia-player 
                        media-id={id}
                        autoPlay={true}
                        muted={true}
                        silentAutoPlayOnly={true}
                        class="w-full h-full"
                      ></wistia-player>
                      {/* REMOVED: Individual video scripts from here */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .luxury-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2);
          width: 8px;
          height: 8px;
          opacity: 1;
        }
        .luxury-swiper .swiper-pagination-bullet-active {
          background: #ee9d2b !important;
          width: 24px;
          border-radius: 4px;
        }
        .luxury-swiper .swiper-button-next, 
        .luxury-swiper .swiper-button-prev {
          color: white;
          opacity: 0.1;
          transform: scale(0.6);
          transition: all 0.3s ease;
        }
        .luxury-swiper .swiper-button-next:hover, 
        .luxury-swiper .swiper-button-prev:hover {
          opacity: 0.8;
          color: #ee9d2b;
        }
        @media (max-width: 640px) {
          .luxury-swiper .swiper-button-next, 
          .luxury-swiper .swiper-button-prev {
            display: none;
          }
        }
        .luxury-swiper .swiper-slide:not(.swiper-slide-active) {
          filter: brightness(0.3) grayscale(0.5);
          transition: all 0.5s ease;
        }
      `}</style>
    </section>
  );
}