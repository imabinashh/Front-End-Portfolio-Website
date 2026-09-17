import React, { useState, useEffect } from "react";
import { ArrowRight, Terminal, Mail, Copy, Check, Sparkles, Download, Code2, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";
import { playClickSound, playSuccessSound, playHoverSound } from "../utils/audio";
import confetti from "canvas-confetti";

export default function Hero({ onNavigate, onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    playSuccessSound();
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Bio, Headline, CTAs */}
        <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>{personalInfo.availabilityBadge}</span>
          </div>

          {/* Main Title & Role Switcher */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading text-slate-100 leading-tight">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start overflow-hidden">
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center gap-2">
                <span className="text-slate-400 font-normal">I build as a</span>
                <span
                  key={roleIndex}
                  className="text-cyan-400 font-mono-code font-bold underline decoration-cyan-500/40 underline-offset-8 animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  {personalInfo.roles[roleIndex]}
                </span>
              </p>
            </div>
          </div>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            {personalInfo.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
            <button
              onClick={() => {
                playClickSound();
                onNavigate("projects");
              }}
              onMouseEnter={playHoverSound}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-102 cursor-pointer"
            >
              <span>Explore Featured Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => {
                playClickSound();
                onNavigate("terminal");
              }}
              onMouseEnter={playHoverSound}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium text-sm transition-all hover:border-cyan-500/50 cursor-pointer font-mono"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Launch Terminal</span>
            </button>

            <button
              onClick={handleCopyEmail}
              onMouseEnter={playHoverSound}
              className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-slate-300 text-sm transition-all cursor-pointer"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium text-xs">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-mono">Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links & Quick Contact Ribbon */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-slate-400 border-t border-slate-800/60 max-w-md">
            <span className="text-xs font-mono text-slate-500">Connect:</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 hover:text-cyan-400 border border-slate-800 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 hover:text-cyan-400 border border-slate-800 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 hover:text-cyan-400 border border-slate-800 transition-colors"
              title="X / Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              onMouseEnter={playHoverSound}
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 hover:text-cyan-400 border border-slate-800 transition-colors"
              title="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenResume}
              onMouseEnter={playHoverSound}
              className="ml-auto text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Developer Hero Visual */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md">
            
            {/* Ambient Background Aura Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000 animate-pulse-aura" />

            {/* Glass Developer Card */}
            <div className="relative rounded-2xl bg-[#0b0f19]/90 border border-slate-700/70 p-5 shadow-2xl backdrop-blur-xl space-y-4">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Abinash.config.ts</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  Ready
                </div>
              </div>

              {/* Code Snippet */}
              <div className="font-mono-code text-xs space-y-1.5 text-slate-300 py-1 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/60">
                <p><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = &#123;</p>
                <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"{personalInfo.name}"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">role:</span> <span className="text-emerald-300">"Senior Frontend Engineer"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">stack:</span> [<span className="text-amber-300">"React 19"</span>, <span className="text-amber-300">"Next.js"</span>, <span className="text-amber-300">"TypeScript"</span>, <span className="text-amber-300">"Tailwind"</span>],</p>
                <p className="pl-4"><span className="text-slate-400">coreVitals:</span> <span className="text-cyan-300">&#123;</span> <span className="text-slate-400">LCP:</span> <span className="text-rose-300">"0.6s"</span>, <span className="text-slate-400">CLS:</span> <span className="text-rose-300">"0.00"</span>, <span className="text-slate-400">FID:</span> <span className="text-rose-300">"&lt;10ms"</span> <span className="text-cyan-300">&#125;</span>,</p>
                <p className="pl-4"><span className="text-slate-400">accessibility:</span> <span className="text-emerald-400">"WCAG_AAA_COMPLIANT"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">openForHiring:</span> <span className="text-cyan-400">true</span></p>
                <p>&#125;;</p>
              </div>

              {/* Mini Badges Matrix */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Performance</div>
                    <div className="text-xs font-bold text-slate-100">100 Lighthouse</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Code Quality</div>
                    <div className="text-xs font-bold text-slate-100">Zero Regressions</div>
                  </div>
                </div>
              </div>

              {/* Live Activity Pulsar */}
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  <span className="text-slate-300 font-mono text-[11px]">Currently crafting reactive UI</span>
                </div>
                <span className="text-cyan-400 font-mono font-bold text-[11px]">2026 Ready</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
