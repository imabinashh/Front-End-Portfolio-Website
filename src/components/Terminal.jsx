import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Maximize2, Minimize2, Trash2 } from "lucide-react";
import { personalInfo, terminalCommandsHelp, projectsData, skillCategories, experienceData } from "../data/portfolioData";
import { playTerminalBeep, playSuccessSound, playClickSound } from "../utils/audio";

export default function Terminal({ onThemeChange, onOpenResume, onNavigate }) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "⚡ Welcome to Abinash Interactive Dev Console [Version 5.4.0-prod]",
    },
    {
      type: "system",
      text: "Type 'help' for available commands, or click any quick command chip below.",
    },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    playTerminalBeep();

    if (!cmd) return;

    // Add to history list
    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIdx(-1);

    // Append user command to display history
    const newHistory = [...history, { type: "input", text: rawCmd }];

    // Handle commands
    if (cmd === "help") {
      newHistory.push({
        type: "output",
        text: (
          <div className="space-y-1 py-1">
            <p className="text-cyan-400 font-bold">Available Commands:</p>
            {terminalCommandsHelp.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-2 text-xs">
                <span className="col-span-4 text-emerald-300 font-mono">{item.command}</span>
                <span className="col-span-8 text-slate-400">{item.desc}</span>
              </div>
            ))}
          </div>
        ),
      });
    } else if (cmd === "about") {
      newHistory.push({
        type: "output",
        text: (
          <div className="space-y-2 py-1 text-slate-300">
            <p className="text-cyan-400 font-bold">Abinash — Frontend Web Developer & UI Engineer</p>
            <p>{personalInfo.bio}</p>
            <p className="text-slate-400">📍 Location: {personalInfo.location}</p>
            <p className="text-emerald-400">💼 Status: {personalInfo.status}</p>
          </div>
        ),
      });
    } else if (cmd === "skills") {
      newHistory.push({
        type: "output",
        text: (
          <div className="space-y-3 py-1">
            <p className="text-cyan-400 font-bold">Skills Matrix:</p>
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">{cat.category}:</span>
                <p className="text-slate-300 text-xs pl-2">
                  {cat.skills.map((s) => `${s.name} (${s.level}%)`).join(" • ")}
                </p>
              </div>
            ))}
          </div>
        ),
      });
    } else if (cmd === "projects") {
      newHistory.push({
        type: "output",
        text: (
          <div className="space-y-2 py-1">
            <p className="text-cyan-400 font-bold">Featured Projects:</p>
            {projectsData.map((p, idx) => (
              <div key={idx} className="p-2 rounded bg-slate-900/60 border border-slate-800 text-xs">
                <span className="text-emerald-400 font-bold">{p.title}</span> — <span className="text-slate-400">{p.subtitle}</span>
                <div className="text-[11px] text-cyan-300 font-mono mt-0.5">Tags: {p.tags.join(", ")}</div>
              </div>
            ))}
          </div>
        ),
      });
    } else if (cmd === "experience") {
      newHistory.push({
        type: "output",
        text: (
          <div className="space-y-2 py-1">
            <p className="text-cyan-400 font-bold">Work Experience Timeline:</p>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="text-xs text-slate-300 pl-2 border-l-2 border-cyan-500 py-1">
                <span className="text-emerald-300 font-bold">{exp.role}</span> at <span className="text-white font-semibold">{exp.company}</span> ({exp.period})
                <p className="text-slate-400 text-[11px] mt-0.5">{exp.description}</p>
              </div>
            ))}
          </div>
        ),
      });
    } else if (cmd === "contact" || cmd === "hire") {
      playSuccessSound();
      newHistory.push({
        type: "output",
        text: (
          <div className="space-y-2 py-1 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs">
            <p className="text-cyan-300 font-bold text-sm">🚀 Let's Build Something Great Together!</p>
            <p className="text-slate-300">Email: <span className="text-emerald-400 font-mono">{personalInfo.email}</span></p>
            <p className="text-slate-300">GitHub: <a href={personalInfo.github} target="_blank" className="text-cyan-400 underline">{personalInfo.github}</a></p>
            <p className="text-slate-300">LinkedIn: <a href={personalInfo.linkedin} target="_blank" className="text-cyan-400 underline">{personalInfo.linkedin}</a></p>
            <p className="text-amber-300">⚡ Status: Open for full-time roles & high-impact contracts.</p>
          </div>
        ),
      });
    } else if (cmd === "cat resume.txt" || cmd === "resume") {
      onOpenResume();
      newHistory.push({
        type: "output",
        text: "Opening visual resume modal preview and credentials...",
      });
    } else if (cmd === "stats") {
      newHistory.push({
        type: "output",
        text: (
          <div className="grid grid-cols-2 gap-2 text-xs py-1">
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400">Experience:</span> <span className="text-cyan-400 font-bold">{personalInfo.yearsExperience} Years</span>
            </div>
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400">Projects:</span> <span className="text-cyan-400 font-bold">{personalInfo.projectsCompleted} Delivered</span>
            </div>
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400">Avg Lighthouse:</span> <span className="text-emerald-400 font-bold">{personalInfo.averageLighthouse}/100</span>
            </div>
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400">Satisfaction:</span> <span className="text-emerald-400 font-bold">100% Verified</span>
            </div>
          </div>
        ),
      });
    } else if (cmd === "matrix") {
      setIsMatrixMode(!isMatrixMode);
      newHistory.push({
        type: "output",
        text: `Matrix cyber mode ${!isMatrixMode ? "ENABLED [Green Matrix Active]" : "DISABLED"}.`,
      });
    } else if (cmd.startsWith("theme ")) {
      const themeName = cmd.replace("theme ", "").trim();
      if (["midnight", "cyber", "emerald", "sunset", "light"].includes(themeName)) {
        onThemeChange(themeName);
        newHistory.push({
          type: "output",
          text: `Switched active design theme to '${themeName}'.`,
        });
      } else {
        newHistory.push({
          type: "output",
          text: `Invalid theme. Available: midnight, cyber, emerald, sunset, light`,
        });
      }
    } else if (cmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    } else {
      newHistory.push({
        type: "error",
        text: `Command not found: '${cmd}'. Type 'help' to see all valid commands.`,
      });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIdx + 1 < commandHistory.length ? historyIdx + 1 : historyIdx;
      setHistoryIdx(nextIdx);
      setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || "");
      } else {
        setHistoryIdx(-1);
        setInputVal("");
      }
    }
  };

  return (
    <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>Developer Command Line</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100">
          Interactive <span className="gradient-text">CLI Terminal</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Prefer the keyboard? Explore Abinash's background, inspect code repositories, and query system stats directly from this shell.
        </p>
      </div>

      {/* Terminal Container */}
      <div
        className={`max-w-4xl mx-auto rounded-3xl border ${
          isMatrixMode ? "border-emerald-500 bg-[#020d06] shadow-emerald-500/20" : "border-slate-800 bg-[#090d16] shadow-2xl"
        } shadow-2xl overflow-hidden transition-all duration-300 ${isExpanded ? "scale-102" : ""}`}
      >
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={() => setHistory([])} className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity" title="Clear screen" />
            <button onClick={() => setIsMatrixMode(!isMatrixMode)} className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity" title="Toggle Matrix" />
            <button onClick={() => setIsExpanded(!isExpanded)} className="w-3 h-3 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity" title="Expand view" />
            <span className="text-xs font-mono text-slate-400 ml-2">abinash@frontend-core: ~ (zsh)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                playClickSound();
                setHistory([]);
              }}
              className="p-1 text-slate-500 hover:text-slate-300 rounded"
              title="Clear terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 text-slate-500 hover:text-slate-300 rounded"
              title="Toggle size"
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          className={`p-5 font-mono-code text-xs space-y-3 overflow-y-auto ${
            isExpanded ? "h-[32rem]" : "h-96"
          } ${isMatrixMode ? "text-emerald-400" : "text-slate-300"}`}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === "system" && (
                <div className="text-slate-400 opacity-90">{item.text}</div>
              )}
              {item.type === "input" && (
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <span className="text-slate-500">➜</span>
                  <span className="text-slate-400">~</span>
                  <span>{item.text}</span>
                </div>
              )}
              {item.type === "output" && (
                <div className="pl-4 text-slate-300">{item.text}</div>
              )}
              {item.type === "error" && (
                <div className="pl-4 text-rose-400">{item.text}</div>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-slate-500">➜</span>
            <span className="text-slate-400">~</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className={`flex-1 bg-transparent border-0 outline-none p-0 ${
                isMatrixMode ? "text-emerald-300" : "text-cyan-300"
              }`}
              placeholder="Type command (e.g. help, skills, hire)..."
              autoFocus
            />
          </div>

          <div ref={terminalEndRef} />
        </div>

        {/* Quick Suggestion Command Chips */}
        <div className="px-4 py-3 bg-slate-950 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-[11px] font-mono">
          <span className="text-slate-500">Quick:</span>
          {["help", "skills", "projects", "experience", "hire", "stats", "cat resume.txt", "matrix", "clear"].map((cmd, idx) => (
            <button
              key={idx}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

