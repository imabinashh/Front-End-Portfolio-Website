import React, { useState, useEffect } from "react";
import { ArrowUp, Heart, Sparkles, Terminal, Code2, Clock } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { playClickSound, playSuccessSound } from "../utils/audio";
import confetti from "canvas-confetti";

export default function Footer({ onNavigate }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const triggerEasterEgg = () => {
    playSuccessSound();
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.8 },
    });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#07090e] text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-heading font-bold text-lg text-slate-100">{personalInfo.name}</span>
              <span className="text-xs font-mono text-cyan-400">/ portfolio</span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Frontend Web Developer & UI Engineer crafting responsive, accessible, and ultra-performant digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-300">
            {["hero", "skills", "projects", "lab", "terminal", "experience", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => {
                  playClickSound();
                  onNavigate(id);
                }}
                className="hover:text-cyan-400 transition-colors uppercase font-mono text-[11px]"
              >
                {id}
              </button>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all shadow-md cursor-pointer group"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
          </button>
        </div>

        {/* Live Status & Clock Bar */}
        <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-slate-300">All systems optimal • CWV Grade 100</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex items-center gap-1.5 text-cyan-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Local Time: {time || "--:--:--"}</span>
            </div>
            
            <button
              onClick={triggerEasterEgg}
              className="flex items-center gap-1 text-[11px] text-purple-400 hover:text-purple-300 hover:underline cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              <span>Surprise ✨</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-900 gap-2">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Designed & engineered with pixel precision.
          </div>
          <div className="flex items-center gap-1">
            <span>Powered by React 19, Tailwind CSS & Vite</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

