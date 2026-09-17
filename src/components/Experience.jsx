import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, FileText } from "lucide-react";
import { experienceData } from "../data/portfolioData";
import { playHoverSound, playClickSound } from "../utils/audio";

export default function Experience({ onOpenResume }) {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Career Journey</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100">
          Work Experience & <span className="gradient-text">Milestones</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Proven track record of architecting mission-critical web applications, scaling design systems, and driving frontend performance.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Continuous vertical timeline bar */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800 -translate-x-1/2 hidden sm:block" />

        <div className="space-y-12">
          {experienceData.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                onMouseEnter={playHoverSound}
                className={`relative flex flex-col sm:flex-row items-center ${
                  isEven ? "sm:flex-row-reverse" : ""
                } gap-8`}
              >
                {/* Center Node Dot */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0b0f19] border-2 border-cyan-400 items-center justify-center z-10 shadow-lg shadow-cyan-500/30">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Content Card */}
                <div className="w-full sm:w-[calc(50%-2rem)]">
                  <div className="group p-6 rounded-3xl bg-[#0d121f]/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 backdrop-blur-md space-y-4">
                    
                    {/* Period & Role Badge Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                      <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-800/40">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                        {item.badge}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <div>
                      <h3 className="text-lg font-bold font-heading text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mt-0.5">
                        <span className="text-white font-semibold">{item.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {item.description}
                    </p>

                    {/* Quantifiable Achievements */}
                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-mono uppercase text-slate-400 font-bold">Key Impacts:</div>
                      {item.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills Used */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-800/70 text-[10px] font-mono text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Empty Spacer for alternating layout on desktop */}
                <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />

              </div>
            );
          })}
        </div>

        {/* Bottom Resume CTA */}
        <div className="text-center pt-12">
          <button
            onClick={() => {
              playClickSound();
              onOpenResume();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/50 text-xs font-bold transition-all shadow-lg hover:scale-102 cursor-pointer font-mono"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Open Complete CV & Verification Credentials</span>
          </button>
        </div>

      </div>
    </section>
  );
}

