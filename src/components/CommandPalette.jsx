import React, { useState, useEffect, useRef } from "react";
import { Search, Compass, Terminal, FileText, Palette, Volume2, Sparkles, X, ArrowRight, Check } from "lucide-react";
import { playClickSound, playHoverSound, playSuccessSound } from "../utils/audio";
import confetti from "canvas-confetti";

export default function CommandPalette({ isOpen, onClose, onNavigate, onThemeChange, currentTheme, soundEnabled, onToggleSound, onOpenResume }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef(null);

  const actions = [
    { id: "nav-hero", title: "Go to Home / Hero", category: "Navigation", icon: Compass, action: () => onNavigate("hero") },
    { id: "nav-skills", title: "Explore Tech Stack & Skills", category: "Navigation", icon: Sparkles, action: () => onNavigate("skills") },
    { id: "nav-projects", title: "View Featured Projects & Case Studies", category: "Navigation", icon: Compass, action: () => onNavigate("projects") },
    { id: "nav-lab", title: "Open Frontend Developer Lab (CSS & A11y Tools)", category: "Interactive", icon: Sparkles, action: () => onNavigate("lab") },
    { id: "nav-terminal", title: "Open Interactive CLI Terminal", category: "Interactive", icon: Terminal, action: () => onNavigate("terminal") },
    { id: "nav-exp", title: "View Career Timeline & Experience", category: "Navigation", icon: Compass, action: () => onNavigate("experience") },
    { id: "nav-testimonials", title: "Read Client & Peer Testimonials", category: "Navigation", icon: Compass, action: () => onNavigate("testimonials") },
    { id: "nav-contact", title: "Get in Touch / Contact Abinash", category: "Actions", icon: ArrowRight, action: () => onNavigate("contact") },
    { id: "action-resume", title: "View Full Resume & Credentials", category: "Actions", icon: FileText, action: onOpenResume },
    {
      id: "action-email",
      title: copiedEmail ? "Email Copied to Clipboard!" : "Copy Email (abinash.dev.official@gmail.com)",
      category: "Actions",
      icon: copiedEmail ? Check : FileText,
      action: () => {
        navigator.clipboard.writeText("abinash.dev.official@gmail.com");
        setCopiedEmail(true);
        playSuccessSound();
        setTimeout(() => setCopiedEmail(false), 2500);
      }
    },
    {
      id: "action-confetti",
      title: "Launch Celebration Confetti ✨",
      category: "Interactive",
      icon: Sparkles,
      action: () => {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        playSuccessSound();
      }
    },
    { id: "theme-midnight", title: "Set Theme: Midnight Obsidian", category: "Themes", icon: Palette, action: () => onThemeChange("midnight") },
    { id: "theme-cyber", title: "Set Theme: Cyber Neon", category: "Themes", icon: Palette, action: () => onThemeChange("cyber") },
    { id: "theme-emerald", title: "Set Theme: Emerald Matrix", category: "Themes", icon: Palette, action: () => onThemeChange("emerald") },
    { id: "theme-sunset", title: "Set Theme: Sunset Amber", category: "Themes", icon: Palette, action: () => onThemeChange("sunset") },
    { id: "theme-light", title: "Set Theme: Clean Modern Light", category: "Themes", icon: Palette, action: () => onThemeChange("light") },
    {
      id: "action-sound",
      title: soundEnabled ? "Mute UI Sound Effects" : "Enable UI Sound Effects",
      category: "Settings",
      icon: Volume2,
      action: onToggleSound
    }
  ];

  const filteredActions = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        playHoverSound();
        setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        playHoverSound();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
      } else if (e.key === "Enter" && filteredActions[selectedIndex]) {
        e.preventDefault();
        playClickSound();
        filteredActions[selectedIndex].action();
        onClose();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-[#0e131f] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, section, or theme (or navigate with ↑↓)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-base focus:outline-none"
          />
          <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-mono bg-slate-800 text-slate-400 rounded border border-slate-700">
            ESC
          </span>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200 p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-800/40">
          {filteredActions.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <Compass className="w-8 h-8 mx-auto mb-2 opacity-40 text-slate-400" />
              <p>No matching commands found for "{query}"</p>
            </div>
          ) : (
            filteredActions.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    playClickSound();
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => {
                    setSelectedIndex(idx);
                  }}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? "bg-cyan-500/15 border border-cyan-500/30 text-white translate-x-1"
                      : "text-slate-300 hover:bg-slate-800/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-800 text-slate-400"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <span className="text-xs text-slate-500 uppercase tracking-wider">{item.category}</span>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                      <span>Select</span>
                      <kbd className="px-1.5 py-0.5 bg-cyan-950 border border-cyan-800 rounded">↵</kbd>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2.5 bg-slate-950/60 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <span className="text-cyan-400">Abinash Command Engine</span>
        </div>
      </div>
    </div>
  );
}

