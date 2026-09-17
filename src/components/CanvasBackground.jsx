import React, { useEffect, useRef } from "react";

export default function CanvasBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle settings
    const particleCount = Math.min(Math.floor((width * height) / 18000), 70);
    const particles = [];

    const getThemeColors = () => {
      switch (theme) {
        case "cyber":
          return { dot: "rgba(6, 182, 212, 0.45)", line: "rgba(236, 72, 153, 0.12)" };
        case "emerald":
          return { dot: "rgba(52, 211, 153, 0.45)", line: "rgba(16, 185, 129, 0.12)" };
        case "sunset":
          return { dot: "rgba(251, 146, 60, 0.45)", line: "rgba(239, 68, 68, 0.12)" };
        case "light":
          return { dot: "rgba(14, 165, 233, 0.35)", line: "rgba(99, 102, 241, 0.08)" };
        default: // midnight
          return { dot: "rgba(56, 189, 248, 0.45)", line: "rgba(129, 140, 248, 0.12)" };
      }
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.8,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const colors = getThemeColors();

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse gentle interaction
        const dxMouse = p.x - mouseX;
        const dyMouse = p.y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 120) {
          const angle = Math.atan2(dyMouse, dxMouse);
          p.x += Math.cos(angle) * 0.8;
          p.y += Math.sin(angle) * 0.8;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors.dot;
        ctx.fill();

        // Connect lines to close neighbors
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = colors.line;
            ctx.lineWidth = 1 - dist / 130;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
      {/* Ambient gradient auras */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-aura" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-aura" style={{ animationDelay: "2s" }} />
      <div className="absolute -bottom-40 left-1/4 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-aura" style={{ animationDelay: "4s" }} />
    </div>
  );
}

