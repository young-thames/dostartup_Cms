"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroProps {
  initialImages: { path: string }[];
}

export default function Hero({ initialImages = [] }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const ASSETS_URL = process.env.NEXT_PUBLIC_COCKPIT_ASSETS_URL;

  const slideTo = useCallback((idx: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(idx);
      setFade(true);
    }, 280);
  }, []);

  const goNext = useCallback(() => {
    if (initialImages.length === 0) return;
    slideTo(current === initialImages.length - 1 ? 0 : current + 1);
  }, [current, initialImages.length, slideTo]);

  const goPrev = useCallback(() => {
    if (initialImages.length === 0) return;
    slideTo(current === 0 ? initialImages.length - 1 : current - 1);
  }, [current, initialImages.length, slideTo]);

  useEffect(() => {
    if (!initialImages.length) return;
    const t = setInterval(goNext, 5000);
    return () => clearInterval(t);
  }, [goNext, initialImages.length]);

  if (!initialImages.length) return null;

  const trustBadges = ["10,000+ Clients", "Expert CAs", "100% Online", "Govt Approved"];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap');
        .slider-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(193,95,60,0.12) 0%, transparent 50%, rgba(26,23,20,0.35) 100%);
          pointer-events: none;
          border-radius: 20px;
        }
      `}</style>

      <section className="bg-[#EFEDE6] px-4 py-5 sm:px-6 sm:py-7 lg:px-12 lg:py-9">
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_380px] gap-5 md:gap-7 lg:gap-9">
          
          {/* SLIDER MAIN */}
          <div className="relative rounded-2xl overflow-hidden bg-[#1a1714] aspect-[16/9] sm:aspect-[16/8] md:aspect-auto md:min-h-[340px] lg:min-h-[400px] w-full slider-card">
            <img
              src={`${ASSETS_URL}${initialImages[current]?.path}`}
              alt={`Slide ${current + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Navigation Buttons */}
            <button 
              className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-3.5 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-none cursor-pointer flex items-center justify-center bg-black/20 backdrop-blur-sm text-white hover:bg-[#C15F3C] hover:scale-105 transition-all"
              onClick={goPrev} 
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3.5 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-none cursor-pointer flex items-center justify-center bg-black/20 backdrop-blur-sm text-white hover:bg-[#C15F3C] hover:scale-105 transition-all"
              onClick={goNext} 
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>

            {/* Pagination Dots */}
            {initialImages.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {initialImages.map((_, i) => (
                  <button
                    key={i}
                    className={`h-1.5 rounded-full border-none cursor-pointer transition-all ${
                      i === current ? "bg-[#C15F3C] w-5" : "bg-white/50 w-1.5"
                    }`}
                    onClick={() => slideTo(i)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* SIDE PANEL (Desktop) */}
          <div className="hidden md:flex flex-col gap-3.5">
            <div className="bg-white rounded-2xl p-5 border border-[#B1ADA1]/25 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex-1">
              <p className="font-['Sora'] text-[10px] font-semibold tracking-[0.1em] uppercase text-[#B1ADA1] mb-1.5">
                Most Popular
              </p>
              <p className="font-['Sora'] text-base font-semibold text-[#1a1714] mb-1 leading-tight">
                Start Your Business Today
              </p>
              <p className="text-xs text-[#7a7570] leading-relaxed mb-4">
                Private Limited, LLP, OPC — registered fast with expert support.
              </p>
              <div className="flex gap-2">
                <button className="inline-flex items-center gap-1.5 font-['Sora'] text-xs font-semibold px-4 py-2.5 rounded-lg border-none cursor-pointer transition-all bg-[#C15F3C] text-white hover:bg-[#a84e30] hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(193,95,60,0.3)]">
                  Get Started
                </button>
                <button className="inline-flex items-center gap-1.5 font-['Sora'] text-xs font-semibold px-4 py-2.5 rounded-lg cursor-pointer transition-all bg-transparent text-[#C15F3C] border border-[#C15F3C] hover:bg-[#C15F3C] hover:text-white">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#B1ADA1]/25 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <p className="font-['Sora'] text-[10px] font-semibold tracking-[0.1em] uppercase text-[#B1ADA1] mb-3">
                Why doStartup
              </p>
              <div className="grid grid-cols-2 gap-2">
                {trustBadges.map((t) => (
                  <div key={t} className="flex items-center gap-1.5 bg-[#F4F3EE] rounded-lg py-2 px-3 text-[11px] font-semibold text-[#3d3a35] border border-[#B1ADA1]/20 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-[#C15F3C] flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE: trust badges and CTA card */}
          <div className="grid grid-cols-2 gap-2 mt-2 md:hidden">
            {trustBadges.map((t) => (
              <div key={t} className="flex items-center gap-1.5 bg-[#F4F3EE] rounded-lg py-2.5 px-3 text-[11px] font-semibold text-[#3d3a35] border border-[#B1ADA1]/20 justify-center">
                <span className="w-2 h-2 rounded-full bg-[#C15F3C] flex-shrink-0" />
                {t}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 md:hidden mt-1">
            <div className="bg-white rounded-2xl p-5 border border-[#B1ADA1]/25 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <p className="font-['Sora'] text-[10px] font-semibold tracking-[0.1em] uppercase text-[#B1ADA1] mb-1.5">
                Most Popular
              </p>
              <p className="font-['Sora'] text-base font-semibold text-[#1a1714] mb-1">
                Start Your Business Today
              </p>
              <p className="text-xs text-[#7a7570] leading-relaxed mb-4">
                Private Limited, LLP, OPC — registered fast with expert support.
              </p>
              <div className="flex gap-2">
                <button className="flex-1 inline-flex items-center justify-center gap-1.5 font-['Sora'] text-xs font-semibold px-4 py-3 rounded-lg border-none cursor-pointer transition-all bg-[#C15F3C] text-white hover:bg-[#a84e30]">
                  Get Started
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-1.5 font-['Sora'] text-xs font-semibold px-4 py-3 rounded-lg cursor-pointer transition-all bg-transparent text-[#C15F3C] border border-[#C15F3C] hover:bg-[#C15F3C] hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}