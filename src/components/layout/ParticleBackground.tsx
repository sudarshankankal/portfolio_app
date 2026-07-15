import { useEffect, useRef, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  twinkleSpeed: number;
  phase: number;
  opacity: number;
  color: string;
}

const STAR_COLORS = ['#38bdf8', '#818cf8', '#a78bfa', '#f472b6', '#ffffff'];
const CONSTELLATION_MAX_DIST = 140;

/**
 * Optimized Space Canvas Star Field with Constellation line rendering.
 * Stars dynamically twinkle and connect based on spatial proximity.
 */
export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);
  const dimensionsRef = useRef({ w: 0, h: 0 });

  const createStarField = useCallback((width: number, height: number): Star[] => {
    const density = Math.min(Math.floor((width * height) / 12000), 120);
    return Array.from({ length: density }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.05, // very slow movement
      vy: (Math.random() - 0.5) * 0.05,
      size: Math.random() * 1.8 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.8 + 0.2,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    }));
  }, []);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext('2d');
    ctx?.scale(dpr, dpr);

    dimensionsRef.current = { w, h };
    starsRef.current = createStarField(w, h);
  }, [createStarField]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    if (!ctx) return;

    resize();

    const animate = () => {
      const { w, h } = dimensionsRef.current;
      ctx.clearRect(0, 0, w, h);

      const stars = starsRef.current;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Update positions slowly
        s.x += s.vx;
        s.y += s.vy;

        // Wrap boundaries
        if (s.x < 0) s.x = w;
        else if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        else if (s.y > h) s.y = 0;

        // Twinkle calculation
        s.phase += s.twinkleSpeed;
        const currentOpacity = s.opacity * (0.4 + 0.6 * Math.sin(s.phase));

        // Draw Star node
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = currentOpacity;
        ctx.fill();

        // Constellation lines to neighboring stars
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const dx = s.x - s2.x;
          const dy = s.y - s2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONSTELLATION_MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s2.x, s2.y);
            // Dynamic alpha based on distance
            const alpha = 0.05 * (1 - dist / CONSTELLATION_MAX_DIST);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = 1;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize, { passive: true });
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [resize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
