"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Volume2, VolumeX } from "lucide-react";

function TestimonialVideo({ src, isActive }: { src: string; isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = isMuted;

    if (isActive) {
      const timer = setTimeout(() => {
        videoRef.current?.play().catch((err) => console.log("Autoplay blocked:", err));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      videoRef.current.pause();
    }
  }, [isActive, isMuted]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
        controls={true}
        preload="metadata"
      />
      <button
        onClick={toggleMute}
        className="absolute bottom-4 left-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10"
        aria-label="Toggle sound"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </>
  );
}

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const testimonials = [
    {
      videoUrl: "https://res.cloudinary.com/dtsasu4sq/video/upload/q_auto/f_auto/v1777913952/IMG_0369_lldq7v.mov",
      quote:
        "G2G helped us generate more leads and completely upgraded our online presence.",
      name: "Karanvir Singh",
      role: "Founder – Get2Grow",
      image:
        "https://cdn.prod.website-files.com/6778043699a2f913f47628dd/6778043699a2f913f476291d_placeholder-image.svg",
    },
    {
      videoUrl: "https://res.cloudinary.com/dtsasu4sq/video/upload/q_auto/f_auto/v1777913952/IMG_0369_lldq7v.mov",
      quote:
        "Their content and ad strategy brought real growth, not just engagement.",
      name: "Karanvir Singh",
      role: "Founder – Get2Grow",
      image:
        "https://cdn.prod.website-files.com/6778043699a2f913f47628dd/6778043699a2f913f476291d_placeholder-image.svg",
    },
    {
      videoUrl: "https://res.cloudinary.com/dtsasu4sq/video/upload/q_auto/f_auto/v1777913952/IMG_0369_lldq7v.mov",
      quote:
        "Professional, creative, and focused on results.",
      name: "Karanvir Singh",
      role: "Founder – Get2Grow",
      image:
        "https://cdn.prod.website-files.com/6778043699a2f913f47628dd/6778043699a2f913f476291d_placeholder-image.svg",
    }
    // add more here
  ];

  if (!mounted) {
    return <section className="py-20 min-h-[400px]" />;
  }

  return (
    <section
      id="section_testimonials"
      className="sm:py-20 py-16 relative clear-both border-t border-white/5 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] h-[300px] bg-primary/10 blur-[100px] rounded-[100%] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block">
            Success Stories
          </span>
          <h2 className="text-[38px] md:text-[56px] font-black text-white leading-tight uppercase tracking-tighter">
            <span className="text-primary ">Testimonials</span>
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={60}
            slidesPerView={1}
            loop={false}
            autoHeight
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center py-4">

                    <div className="relative">
                      <div className="absolute -inset-2 bg-primary/5 rounded-[1.5rem] blur-xl" />
                      <div className="relative rounded-[1.5rem] bg-black shadow-2xl border border-white/10 overflow-hidden aspect-video">

                        <TestimonialVideo src={testimonial.videoUrl} isActive={isActive} />

                      </div>
                    </div>

                    <div className="flex flex-col items-start">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 44 34"
                        fill="none"
                        className="text-primary opacity-30 mb-6"
                      >
                        <path
                          d="M12.5 0C5.6 0 0 5.6 0 12.5V34H17.5V12.5H7.5C7.5 9.7 9.7 7.5 12.5 7.5V0ZM39 0C32.1 0 26.5 5.6 26.5 12.5V34H44V12.5H34C34 9.7 36.2 7.5 39 7.5V0Z"
                          fill="currentColor"
                        />
                      </svg>

                      <p className="text-white text-[20px] md:text-[24px] leading-[1.4] font-medium tracking-tight mb-8">
                        {testimonial.quote}
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border border-primary/20 bg-slate-50">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-lg text-white uppercase tracking-tight">
                            {testimonial.name}
                          </div>
                          {/* <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                          {testimonial.role}
                        </div> */}
                        </div>
                      </div>
                    </div>

                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAVIGATION */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
            <div className="custom-pagination !static !w-auto flex gap-3" />

            <div className="flex items-center gap-3">
              <button className="custom-prev flex h-12 w-12 items-center justify-center rounded-full bg-primary text-brand-black hover:bg-primary/80 transition-all duration-300">
                ‹
              </button>
              <button className="custom-next flex h-12 w-12 items-center justify-center rounded-full bg-primary text-brand-black hover:bg-primary/80 transition-all duration-300">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #e5e5e5;
          opacity: 1;
          width: 25px;
          height: 2px;
          border-radius: 0;
          transition: all 0.5s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: var(--primary-green);
          width: 50px;
        }
      `}</style>
    </section>
  );
}
