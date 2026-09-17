import React, { useState, useEffect } from "react";
import { Terminal, Volume2, VolumeX, Palette, Menu, X, Command, FileText, Sparkles } from "lucide-react";
import { playClickSound, playHoverSound, playThemeSwitchSound } from "../utils/audio";

export default function Navbar({
  activeSection,
  onNavigate,
  currentTheme,
  onThemeChange,
  soundEnabled,
  onToggleSound,
  onOpenCommandPalette,
  onOpenResume
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "lab", label: "Frontend Lab" },
    { id: "terminal", label: "Terminal" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  const themes = [
    { id: "midnight", name: "Midnight Obsidian", color: "bg-cyan-500" },
    { id: "cyber", name: "Cyber Neon", color: "bg-pink-500" },
    { id: "emerald", name: "Emerald Matrix", color: "bg-emerald-500" },
    { id: "sunset", name: "Sunset Amber", color: "bg-orange-500" },
    { id: "light", name: "Clean Light", color: "bg-sky-600" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090e]/80 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => {
            playClickSound();
            onNavigate("hero");
          }}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 transition-transform group-hover:scale-105 shadow-md shadow-cyan-500/20">
            <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
              <span className="font-mono-code font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 text-base">
                &lt;A/&gt;
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-lg text-slate-100 tracking-tight">Abinash</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-[10px] font-mono text-cyan-400/90 tracking-wider uppercase -mt-0.5">Frontend Dev</p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  playClickSound();
                  onNavigate(link.id);
                }}
                onMouseEnter={playHoverSound}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400 border border-cyan-500/30 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Controls & Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              playClickSound();
              onOpenCommandPalette();
            }}
            title="Open Command Palette (Ctrl+K)"
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 text-xs font-mono transition-all"
          >
            <Command className="w-3.5 h-3.5 text-cyan-400" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-[10px] rounded text-slate-300">
              ⌘K
            </kbd>
          </button>

          {/* Theme Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                playClickSound();
                setThemeDropdownOpen(!themeDropdownOpen);
              }}
              title="Change Theme"
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
            >
              <Palette className="w-4 h-4 text-cyan-400" />
            </button>

            {themeDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-[#0d121f] border border-slate-800 rounded-xl shadow-xl p-1.5 z-50 glass-panel animate-in fade-in zoom-in-95 duration-150"
                onClick={() => setThemeDropdownOpen(false)}
              >
                <div className="px-2.5 py-1 text-[11px] font-mono text-slate-400 uppercase tracking-wider border-b border-slate-800/80 mb-1">
                  Select Theme
                </div>
                {themes.map((th) => (
                  <button
                    key={th.id}
                    onClick={() => {
                      playThemeSwitchSound();
                      onThemeChange(th.id);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                      currentTheme === th.id
                        ? "bg-cyan-500/20 text-cyan-300 font-medium"
                        : "text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${th.color}`} />
                      <span>{th.name}</span>
                    </div>
                    {currentTheme === th.id && <span className="text-cyan-400 text-[10px]">Active</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sound FX Toggle */}
          <button
            onClick={() => {
              playClickSound();
              onToggleSound();
            }}
            title={soundEnabled ? "Mute UI sounds" : "Enable UI sounds"}
            className={`p-2 rounded-xl border transition-all ${
              soundEnabled
                ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                : "bg-slate-900/80 border-slate-800 text-slate-500 hover:text-slate-400"
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Resume Button */}
          <button
            onClick={() => {
              playClickSound();
              onOpenResume();
            }}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-cyan-500/20 hover:scale-102"
          >
            <FileText className="w-3.5 h-3.5 text-slate-950" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => {
              playClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e1a]/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    playClickSound();
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-left text-xs font-medium transition-all ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      : "text-slate-300 bg-slate-900/60 border border-slate-800"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                playClickSound();
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold text-xs shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Resume</span>
            </button>
            <button
              onClick={() => {
                playClickSound();
                onOpenCommandPalette();
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400"
              title="Search"
            >
              <Command className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

