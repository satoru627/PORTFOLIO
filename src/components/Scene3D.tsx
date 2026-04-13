import { useRef, useEffect } from 'react';

export default function Scene3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    // Particles
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * 1200,
        y: Math.random() * 800,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    const draw = () => {
      t += 0.008;
      const W = w();
      const H = h();
      ctx.clearRect(0, 0, W, H);

      // Draw rotating rings
      const cx = W * 0.65;
      const cy = H * 0.5;

      // Ring 1
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.5);
      ctx.scale(1, 0.35);
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(W, H) * 0.22, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(230, 57, 70, 0.7)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      // Ring 2
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-t * 0.3 + 1);
      ctx.scale(0.4, 1);
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(W, H) * 0.28, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(155, 28, 28, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Ring 3
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.7 + 2);
      ctx.scale(1, 0.5);
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(W, H) * 0.33, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(230, 57, 70, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Center sphere glow
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(W, H) * 0.15);
      grad.addColorStop(0, 'rgba(230, 57, 70, 0.4)');
      grad.addColorStop(0.5, 'rgba(155, 28, 28, 0.2)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, Math.min(W, H) * 0.15, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Sphere outline with distortion
      ctx.save();
      ctx.translate(cx, cy);
      const radius = Math.min(W, H) * 0.12;
      ctx.beginPath();
      for (let a = 0; a < Math.PI * 2; a += 0.05) {
        const r = radius + Math.sin(a * 3 + t * 2) * 4;
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;
        a === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(230, 57, 70, 0.9)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Orbiting dots
      const numDots = 8;
      for (let i = 0; i < numDots; i++) {
        const angle = (i / numDots) * Math.PI * 2 + t * 0.8;
        const orbitR = Math.min(W, H) * 0.2;
        const dx = Math.cos(angle) * orbitR;
        const dy = Math.sin(angle) * orbitR * 0.35;
        ctx.beginPath();
        ctx.arc(cx + dx, cy + dy, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 57, 70, ${0.4 + Math.sin(angle) * 0.3})`;
        ctx.fill();
      }

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 57, 70, ${p.opacity * (0.5 + Math.sin(t + p.x) * 0.3)})`;
        ctx.fill();
      });

      // Grid lines (subtle)
      ctx.strokeStyle = 'rgba(230, 57, 70, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 50;
      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
}
