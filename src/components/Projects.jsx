import React, { useState } from "react";
import { ExternalLink, Layers, Zap, ArrowRight, X, CheckCircle, Code2, Sparkles, BarChart3 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projectsData, projectCategories } from "../data/portfolioData";
import { playClickSound, playHoverSound } from "../utils/audio";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const filteredProjects = projectsData.filter((p) =>
    selectedCategory === "All" ? true : p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <Layers className="w-3.5 h-3.5" />
          <span>Featured Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100">
          Handcrafted <span className="gradient-text">Web Applications</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Production systems built for scale, sub-second performance, intuitive user experience, and robust frontend design architecture.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {projectCategories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                playClickSound();
                setSelectedCategory(cat);
              }}
              onMouseEnter={playHoverSound}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105"
                  : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={playHoverSound}
            className={`group rounded-2xl bg-[#0d121f]/90 border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/15 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden backdrop-blur-md`}
          >
            {/* Top Visual Mock Area */}
            <div>
              <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} p-5 relative flex flex-col justify-between border-b border-slate-800/80 overflow-hidden`}>
                
                {/* Visual Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                {/* Top Badges */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-[11px] font-mono text-amber-300 font-bold backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Center Visual Mock Identity */}
                <div className="relative z-10 flex items-center gap-3">
                  <div className="text-3xl p-3 bg-slate-950/70 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md">
                    {project.imageEmoji}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 line-clamp-1">{project.subtitle}</p>
                  </div>
                </div>

                {/* Bottom Key Metrics Strip */}
                <div className="relative z-10 flex items-center gap-2 text-[10px] font-mono">
                  {Object.entries(project.metrics).map(([key, val], idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-black/50 text-slate-200 border border-white/10 backdrop-blur-sm">
                      ⚡ {val}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4">
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {project.shortDesc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300 text-[11px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-800/60 gap-2">
              <button
                onClick={() => {
                  playClickSound();
                  setActiveCaseStudy(project);
                }}
                className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer py-1"
              >
                <span>Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all"
                  title="View Source Code"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  className="p-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 hover:text-cyan-300 border border-cyan-500/40 transition-all"
                  title="Open Live App"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Detail Modal */}
      {activeCaseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveCaseStudy(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#0d121f] border border-slate-700/80 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 glass-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2.5 bg-slate-800 rounded-2xl border border-slate-700">
                  {activeCaseStudy.imageEmoji}
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">{activeCaseStudy.category}</span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-100">{activeCaseStudy.title}</h3>
                </div>
              </div>
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center font-mono">
              {Object.entries(activeCaseStudy.metrics).map(([key, val], idx) => (
                <div key={idx}>
                  <div className="text-xs text-slate-400 uppercase">{key}</div>
                  <div className="text-sm sm:text-base font-bold text-cyan-300">{val}</div>
                </div>
              ))}
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/30 space-y-1.5">
                <h4 className="text-xs font-mono uppercase font-bold text-rose-400 flex items-center gap-1.5">
                  <X className="w-4 h-4" /> The Challenge
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{activeCaseStudy.problem}</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 space-y-1.5">
                <h4 className="text-xs font-mono uppercase font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> The Engineering Solution
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{activeCaseStudy.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold font-heading text-slate-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" /> Key Features & Technical Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeCaseStudy.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-400">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {activeCaseStudy.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href={activeCaseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
              <a
                href={activeCaseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 text-xs font-bold transition-all shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Application</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
