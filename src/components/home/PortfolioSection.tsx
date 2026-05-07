"use client";

import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Volume2, VolumeX } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function VideoSlide({
  src,
  isActive,
  isInView,
  isMuted,
  toggleMute,
}: {
  src: string;
  isActive: boolean;
  isInView: boolean;
  isMuted: boolean;
  toggleMute: (e: React.MouseEvent) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    // Explicitly enforce muted state to satisfy browser autoplay policies
    videoRef.current.muted = isMuted;

    if (isActive && isInView) {
      // Adding a slight delay to ensure Swiper has finished rendering
      const timer = setTimeout(() => {
        videoRef.current?.play().catch((err) => console.log("Autoplay blocked:", err));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      videoRef.current.pause();
    }
  }, [isActive, isInView, isMuted]);

  return (
    <div className="max-w-[200px] md:max-w-[260px] mx-auto relative group">
      <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-[9/16] shadow-[0_0_50px_rgba(34,197,94,0.1)] border border-white/5 transition-all">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
          controls={true}
          preload="metadata"
          autoPlay={isActive && isInView}
        />
        {/* Sound Toggle Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10"
          aria-label="Toggle sound"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [mounted, setMounted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "100px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const videos = [
    "https://res.cloudinary.com/dtsasu4sq/video/upload/q_auto/f_auto/v1777911448/IMG_0435_ygem30.mp4",
    "https://res.cloudinary.com/dtsasu4sq/video/upload/q_auto/f_auto/v1777913952/IMG_0369_lldq7v.mov",
    "https://res.cloudinary.com/dtsasu4sq/video/upload/q_auto/f_auto/v1777911448/IMG_0435_ygem30.mp4",
    "https://res.cloudinary.com/dtsasu4sq/video/upload/q_auto/f_auto/v1777913952/IMG_0369_lldq7v.mov",
    "https://res.cloudinary.com/dtsasu4sq/video/upload/q_auto/f_auto/v1777911448/IMG_0435_ygem30.mp4",
    "https://res.cloudinary.com/dtsasu4sq/video/upload/q_auto/f_auto/v1777913952/IMG_0369_lldq7v.mov"
  ];

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  if (!mounted) {
    return <section className="min-h-screen " />;
  }

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden text-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[32px] md:text-[56px] font-black uppercase tracking-tighter leading-tight">
             <span className="text-primary">Growth </span> starts here
            {/* <span className="text-primary">viral.</span> */}
          </h2>
          <p className="text-gray-400 italic mt-4 font-light tracking-wide">
            Ideated from scratch, created for efficiency.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          centeredSlides
          loop={true}
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
          {videos.map((src, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <VideoSlide
                  src={src}
                  isActive={isActive}
                  isInView={isInView}
                  isMuted={isMuted}
                  toggleMute={toggleMute}
                />
              )}
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
          background: var(--primary-green, #22c55e);
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

