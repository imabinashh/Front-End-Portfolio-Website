import React, { useState } from "react";
import { MessageSquareQuote, Star, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { testimonialsData } from "../data/portfolioData";
import { playClickSound, playHoverSound } from "../utils/audio";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    playClickSound();
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    playClickSound();
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          <span>Social Proof</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100">
          Client & Team <span className="gradient-text">Endorsements</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          What engineering leaders, founders, and designers say about collaborating with Abinash.
        </p>
      </div>

      {/* Testimonials Grid on Desktop, Interactive Carousel on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonialsData.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={playHoverSound}
            className="group relative p-6 rounded-3xl bg-[#0d121f]/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1.5 flex flex-col justify-between backdrop-blur-md"
          >
            {/* Top Stars & Project Tag */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                {[...Array(item.rating)].map((_, rIdx) => (
                  <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/30">
                {item.project}
              </span>
            </div>

            {/* Quote Text */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
              "{item.text}"
            </p>

            {/* Author Footer */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-slate-950 text-sm shadow-md">
                {item.avatar}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                  <span>{item.name}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" title="Verified Engineering Colleague" />
                </h4>
                <p className="text-[11px] text-slate-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

