// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Script from "next/script";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// export default function TestimonialsSection() {
//     const [mounted, setMounted] = useState(false);

//     // This prevents the "Hydration Mismatch" error by ensuring 
//     // the Swiper only renders once the client is ready.
//     useEffect(() => {
//         setMounted(true);
//     }, []);

//     const testimonials = [
//         {
//             videoId: "avhoawn2gp",
//             quote: "In just six weeks, Saksham and his team at Metro Media House helped me grow my brand significantly, increasing my income by thousands of dollars and securing three key client calls.",
//             name: "Rob Menezes",
//             role: "Founder- Pause Studios",
//             image: "https://cdn.prod.website-files.com/6778043699a2f913f47628dd/6778043699a2f913f476291d_placeholder-image.svg",
//         },
//         // ... other testimonials
//     ];

//     if (!mounted) {
//         return <section className="py-20 bg-white min-h-[400px]" />;
//     }

//     return (
//         <section id="section_testimonials" className="sm:py-20 bg-white relative clear-both">
//             <div className="container mx-auto px-6 max-w-6xl">
                
//                 {/* Header */}
//                 <div className="mb-16">
//                     <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block">
//                         Success Stories
//                     </span>
//                     <h2 className="text-[38px] md:text-[56px] font-black text-brand-black leading-tight uppercase tracking-tighter">
//                         Exceptional <br /> <span className="text-primary">Results.</span>
//                     </h2>
//                 </div>

//                 <div className="relative">
//                     <Swiper
//                         modules={[Navigation, Pagination, Autoplay]}
//                         spaceBetween={60}
//                         slidesPerView={1}
//                         loop={true}
//                         autoHeight={true}
//                         navigation={{
//                             nextEl: ".custom-next",
//                             prevEl: ".custom-prev",
//                         }}
//                         pagination={{ 
//                             clickable: true,
//                             el: '.custom-pagination'
//                         }}
//                         className="testimonial-swiper"
//                     >
//                         {testimonials.map((testimonial, index) => (
//                             <SwiperSlide key={index}>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center py-4">
                                    
//                                     {/* Video Side */}
//                                     <div className="relative">
//                                         <div className="absolute -inset-2 bg-primary/5 rounded-[1.5rem] blur-xl" />
//                                         <div className="relative rounded-[1.5rem] bg-black shadow-2xl border border-gray-100 overflow-hidden aspect-video">
//                                             <wistia-player 
//                                                 media-id={testimonial.videoId} 
//                                                 autoPlay={false}
//                                                 muted={true}
//                                                 className="w-full h-full"
//                                             ></wistia-player>
//                                             <Script
//                                                 src={`https://fast.wistia.com/embed/${testimonial.videoId}.js`}
//                                                 strategy="afterInteractive"
//                                                 type="module"
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Content Side */}
//                                     <div className="flex flex-col items-start">
//                                         <svg width="32" height="32" viewBox="0 0 44 34" fill="none" className="text-primary opacity-30 mb-6">
//                                             <path d="M12.5 0C5.6 0 0 5.6 0 12.5V34H17.5V12.5H7.5C7.5 9.7 9.7 7.5 12.5 7.5V0ZM39 0C32.1 0 26.5 5.6 26.5 12.5V34H44V12.5H34C34 9.7 36.2 7.5 39 7.5V0Z" fill="currentColor"/>
//                                         </svg>
                                        
//                                         <p className="text-brand-black text-[20px] md:text-[24px] leading-[1.4] font-medium tracking-tight mb-8">
//                                             {testimonial.quote}
//                                         </p>

//                                         <div className="flex items-center gap-4">
//                                             <div className="relative w-14 h-14 rounded-full overflow-hidden border border-primary/20 bg-slate-50">
//                                                 <Image
//                                                     src={testimonial.image}
//                                                     alt={testimonial.name}
//                                                     fill
//                                                     className="object-cover"
//                                                 />
//                                             </div>
//                                             <div>
//                                                 <div className="font-bold text-lg text-brand-black uppercase tracking-tight">{testimonial.name}</div>
//                                                 <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{testimonial.role}</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                     {/* Navigation Bar */}
//                     <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-100">
//                         <div className="custom-pagination !static !w-auto flex gap-3"></div>
                        
//                         <div className="flex items-center gap-3">
//                             <button className="custom-prev flex h-12 w-12 items-center justify-center rounded-full border border-brand-black/10 text-brand-black hover:bg-brand-black hover:text-white transition-all duration-300">
//                                 <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
//                             </button>
//                             <button className="custom-next flex h-12 w-12 items-center justify-center rounded-full border border-brand-black/10 text-brand-black hover:bg-brand-black hover:text-white transition-all duration-300">
//                                 <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <style jsx global>{`
//                 .custom-pagination .swiper-pagination-bullet {
//                     background: #e5e5e5;
//                     opacity: 1;
//                     width: 25px;
//                     height: 2px;
//                     border-radius: 0;
//                     transition: all 0.5s ease;
//                 }
//                 .custom-pagination .swiper-pagination-bullet-active {
//                     background: var(--primary-yellow) !important;
//                     width: 50px;
//                 }
//             `}</style>
//         </section>
//     );
// }





"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
      videoId: "avhoawn2gp",
      quote:
        "In just six weeks, Saksham and his team at Metro Media House helped me grow my brand significantly, increasing my income by thousands of dollars and securing three key client calls.",
      name: "Rob Menezes",
      role: "Founder – Pause Studios",
      image:
        "https://cdn.prod.website-files.com/6778043699a2f913f47628dd/6778043699a2f913f476291d_placeholder-image.svg",
    },
    // add more here
  ];

  if (!mounted) {
    return <section className="py-20 bg-white min-h-[400px]" />;
  }

  return (
    <section
      id="section_testimonials"
      className="sm:py-20 bg-white relative clear-both"
    >
      {/* ✅ Load Wistia ONCE for the whole section */}
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="afterInteractive"
      />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block">
            Success Stories
          </span>
          <h2 className="text-[38px] md:text-[56px] font-black text-brand-black leading-tight uppercase tracking-tighter">
            Exceptional <br /> <span className="text-primary">Results.</span>
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={60}
            slidesPerView={1}
            loop
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center py-4">
                  
                  {/* ✅ VIDEO */}
                  <div className="relative">
                    <div className="absolute -inset-2 bg-primary/5 rounded-[1.5rem] blur-xl" />
                    <div className="relative rounded-[1.5rem] bg-black shadow-2xl border border-gray-100 overflow-hidden aspect-video">
                      
                      {/* OFFICIAL WISTIA EMBED */}
                      <div
                        className={`wistia_embed wistia_async_${testimonial.videoId} videoFoam=true w-full h-full`}
                      />

                    </div>
                  </div>

                  {/* CONTENT */}
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

                    <p className="text-brand-black text-[20px] md:text-[24px] leading-[1.4] font-medium tracking-tight mb-8">
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
                        <div className="font-bold text-lg text-brand-black uppercase tracking-tight">
                          {testimonial.name}
                        </div>
                        <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAVIGATION */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-100">
            <div className="custom-pagination !static !w-auto flex gap-3" />

            <div className="flex items-center gap-3">
              <button className="custom-prev flex h-12 w-12 items-center justify-center rounded-full border border-brand-black/10 text-brand-black hover:bg-brand-black hover:text-white transition-all duration-300">
                ‹
              </button>
              <button className="custom-next flex h-12 w-12 items-center justify-center rounded-full border border-brand-black/10 text-brand-black hover:bg-brand-black hover:text-white transition-all duration-300">
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
          background: var(--primary-yellow);
          width: 50px;
        }
      `}</style>
    </section>
  );
}
