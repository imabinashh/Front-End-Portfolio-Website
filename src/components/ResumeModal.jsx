import React, { useState } from "react";
import { X, Printer, Download, Copy, Check, FileText, Mail, Globe, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { personalInfo, experienceData, skillCategories, projectsData } from "../data/portfolioData";
import { playClickSound, playSuccessSound } from "../utils/audio";

export default function ResumeModal({ isOpen, onClose }) {
  const [copiedMd, setCopiedMd] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# ${personalInfo.name} - ${personalInfo.title}
Email: ${personalInfo.email} | Location: ${personalInfo.location} | GitHub: ${personalInfo.github}

## Professional Summary
${personalInfo.bio}

## Experience
${experienceData.map((e) => `### ${e.role} — ${e.company} (${e.period})
${e.description}
Achievements:
${e.achievements.map((a) => `- ${a}`).join("\n")}
Tech: ${e.skills.join(", ")}`).join("\n\n")}

## Featured Projects
${projectsData.map((p) => `### ${p.title} (${p.category})
${p.shortDesc}
Tech: ${p.tags.join(", ")}`).join("\n\n")}
`;

    navigator.clipboard.writeText(md);
    setCopiedMd(true);
    playSuccessSound();
    setTimeout(() => setCopiedMd(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d121f] border border-slate-700/80 rounded-3xl shadow-2xl p-6 sm:p-10 space-y-8 glass-panel text-slate-200 print:bg-white print:text-black print:p-0 print:border-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="font-heading font-bold text-lg text-slate-100">Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-mono transition-all"
            >
              {copiedMd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedMd ? "Copied MD" : "Copy Markdown"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-slate-950" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="space-y-8 print:text-black">
          
          {/* Header Profile */}
          <div className="space-y-2 border-b border-slate-800/80 pb-6 print:border-slate-300">
            <h1 className="text-3xl font-black font-heading text-white print:text-black">{personalInfo.name}</h1>
            <p className="text-base text-cyan-400 font-semibold print:text-slate-800">{personalInfo.title}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 print:text-slate-600 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.github}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold print:text-slate-900">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold print:text-slate-900">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 print:border-slate-300 print:bg-slate-50">
                  <div className="font-bold text-slate-200 print:text-black mb-1">{cat.category}</div>
                  <div className="text-[11px] text-slate-400 print:text-slate-700">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold print:text-slate-900">
              Work Experience
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-white print:text-black">
                      {exp.role} <span className="text-cyan-400 print:text-slate-700 font-normal">@ {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-600">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700">{exp.description}</p>
                  <div className="space-y-1 pt-1">
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300 print:text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5 print:text-slate-900" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-3 border-t border-slate-800/80 pt-6 print:border-slate-300">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold print:text-slate-900">
              Education & Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 print:border-slate-300">
                <div className="font-bold text-white print:text-black">Bachelor of Technology in Computer Science</div>
                <div className="text-[11px] text-slate-400 print:text-slate-600">First Class with Distinction • 2015 - 2019</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 print:border-slate-300">
                <div className="font-bold text-white print:text-black">Meta Frontend Developer Professional Certificate</div>
                <div className="text-[11px] text-slate-400 print:text-slate-600">Advanced React, UX Principles & Accessibility</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

