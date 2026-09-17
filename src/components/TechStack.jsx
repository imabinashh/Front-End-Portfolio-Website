import React, { useState } from "react";
import { Code2, Sparkles, Database, Wrench, Atom, Globe, FileCode2, Terminal, Flame, Palette, Wind, Move3d, Component, MonitorSmartphone, Eye, Layers, Cpu, RefreshCw, Network, Radio, CheckCircle2, Zap, GitBranch, Gauge, TestTube2, Send, Search } from "lucide-react";
import { skillCategories } from "../data/portfolioData";
import { playClickSound, playHoverSound } from "../utils/audio";

const iconMap = {
  Code2, Sparkles, Database, Wrench, Atom, Globe, FileCode2, Terminal, Flame,
  Palette, Wind, Move3d, Component, MonitorSmartphone, Eye, Layers, Cpu,
  RefreshCw, Network, Radio, CheckCircle2, Zap, GitBranch, Gauge, TestTube2, Send
};

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...skillCategories.map((c) => c.category)];

  const allSkills = skillCategories.flatMap((c) =>
    c.skills.map((s) => ({ ...s, categoryName: c.category }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory = selectedCategory === "All" || skill.categoryName === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <Code2 className="w-3.5 h-3.5" />
          <span>Technical Expertise</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100">
          Skills & Modern <span className="gradient-text">Tech Arsenal</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          A battle-tested stack honed over 5+ years of shipping enterprise web apps, high-throughput dashboards, and interactive creative frontend experiences.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-slate-900/60 p-3 rounded-2xl border border-slate-800 backdrop-blur-md">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playClickSound();
                  setSelectedCategory(cat);
                }}
                onMouseEnter={playHoverSound}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skill (e.g. React)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-950/80 border border-slate-700/80 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, idx) => {
          const IconComponent = iconMap[skill.icon] || Code2;
          return (
            <div
              key={idx}
              onMouseEnter={playHoverSound}
              className="group relative p-4 rounded-2xl bg-[#0d121f]/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-md hover:shadow-cyan-500/10 hover:-translate-y-1 backdrop-blur-md overflow-hidden"
            >
              {/* Subtle gradient highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all" />

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-cyan-400 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400">{skill.categoryName}</span>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-300">
                  {skill.experience}
                </span>
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-slate-400">Proficiency</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-700`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Stack Highlights */}
      <div className="mt-8 p-4 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Core Philosophies: Semantic HTML, Zero Layout Shifts, SSR/SSG, WCAG AAA Compliance</span>
        </div>
        <div className="text-cyan-400">
          Updated for 2026 Production Standards
        </div>
      </div>
    </section>
  );
}

