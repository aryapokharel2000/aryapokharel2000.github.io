"use client";

import { useEffect, useRef } from "react";

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const isDark = () => document.documentElement.classList.contains("dark");

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      
      ctx.clearRect(0, 0, w, h);

      const dark = isDark();
      const accentAlpha = dark ? 0.35 : 0.08;
      const dotColor = dark ? "rgba(180, 190, 255," : "rgba(91, 99, 211,";
      const lineColor = dark ? "rgba(180, 190, 255," : "rgba(91, 99, 211,";

      // Concentric rings
      const cx = w * 0.5;
      const cy = h * 0.45;
      const maxR = Math.min(w, h) * 0.4;

      for (let i = 0; i < 5; i++) {
        const r = maxR * (0.3 + i * 0.175);
        const alpha = accentAlpha * (1 - i * 0.15);
        ctx.beginPath();
        ctx.arc(cx, cy, r + Math.sin(time * 0.5 + i) * 3, 0, Math.PI * 2);
        ctx.strokeStyle = `${lineColor} ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Orbital dots
      const numDots = 12;
      for (let i = 0; i < numDots; i++) {
        const angle = (i / numDots) * Math.PI * 2 + time * 0.2;
        const orbitR = maxR * (0.3 + (i % 4) * 0.175);
        const x = cx + Math.cos(angle) * orbitR;
        const y = cy + Math.sin(angle) * orbitR;
        const dotSize = 2 + (i % 3);
        const alpha = 0.15 + Math.sin(time + i) * 0.08;

        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `${dotColor} ${alpha})`;
        ctx.fill();
      }

      // Connecting lines between nearby dots
      const dots: [number, number][] = [];
      for (let i = 0; i < numDots; i++) {
        const angle = (i / numDots) * Math.PI * 2 + time * 0.2;
        const orbitR = maxR * (0.3 + (i % 4) * 0.175);
        dots.push([
          cx + Math.cos(angle) * orbitR,
          cy + Math.sin(angle) * orbitR,
        ]);
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i][0] - dots[j][0];
          const dy = dots[i][1] - dots[j][1];
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxR * 0.5) {
            const alpha = (1 - dist / (maxR * 0.5)) * 0.06;
            ctx.beginPath();
            ctx.moveTo(dots[i][0], dots[i][1]);
            ctx.lineTo(dots[j][0], dots[j][1]);
            ctx.strokeStyle = `${lineColor} ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Central glow
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR * 0.5);
      gradient.addColorStop(0, `${dotColor} ${accentAlpha * 0.5})`);
      gradient.addColorStop(1, `${dotColor} 0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      time += 0.008;
      animationId = requestAnimationFrame(draw);
    };

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      time = 1;
      draw();
      cancelAnimationFrame(animationId!);
    } else {
      draw();
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
