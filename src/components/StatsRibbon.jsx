import React from "react";
import { Briefcase, Layers, Zap, HeartHandshake } from "lucide-react";
import { statsData } from "../data/portfolioData";
import { playHoverSound } from "../utils/audio";

const iconMap = {
  Briefcase: Briefcase,
  Layers: Layers,
  Zap: Zap,
  HeartHandshake: HeartHandshake,
};

export default function StatsRibbon() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {statsData.map((stat, idx) => {
          const IconComponent = iconMap[stat.icon] || Zap;
          return (
            <div
              key={idx}
              onMouseEnter={playHoverSound}
              className="group p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c101d]/90 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-cyan-400 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Verified</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">{stat.label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{stat.detail}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

