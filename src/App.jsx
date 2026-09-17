import React, { useState, useEffect } from "react";
import CanvasBackground from "./components/CanvasBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsRibbon from "./components/StatsRibbon";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import FrontendLab from "./components/FrontendLab";
import Terminal from "./components/Terminal";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import ResumeModal from "./components/ResumeModal";
import { getSoundEnabled, setSoundEnabled, playThemeSwitchSound } from "./utils/audio";

export default function App() {
  const [theme, setTheme] = useState("midnight");
  const [soundEnabled, setSoundEnabledState] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Initialize theme and sound from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio_theme") || "midnight";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    const sound = getSoundEnabled();
    setSoundEnabledState(sound);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio_theme", newTheme);
    playThemeSwitchSound();
  };

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabledState(nextState);
    setSoundEnabled(nextState);
  };

  // Keyboard shortcut for Command Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Smooth scroll to section
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const sections = ["hero", "skills", "projects", "lab", "terminal", "experience", "testimonials", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-main)] transition-colors duration-500 relative selection:bg-cyan-500 selection:text-black">
      {/* Dynamic Ambient Background Canvas */}
      <CanvasBackground theme={theme} />

      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        currentTheme={theme}
        onThemeChange={handleThemeChange}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="relative z-10 space-y-12 sm:space-y-16">
        <Hero onNavigate={handleNavigate} onOpenResume={() => setIsResumeOpen(true)} />
        <StatsRibbon />
        <TechStack />
        <Projects />
        <FrontendLab />
        <Terminal
          onThemeChange={handleThemeChange}
          onOpenResume={() => setIsResumeOpen(true)}
          onNavigate={handleNavigate}
        />
        <Experience onOpenResume={() => setIsResumeOpen(true)} />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
        onThemeChange={handleThemeChange}
        currentTheme={theme}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenResume={() => {
          setIsCommandPaletteOpen(false);
          setIsResumeOpen(true);
        }}
      />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
