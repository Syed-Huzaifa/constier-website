import { useEffect, useRef } from 'react';

export default function ParticleGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 80; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(11, 12, 29, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Move particle naturally
        particle.baseX += particle.vx;
        particle.baseY += particle.vy;

        // Bounce off edges
        if (particle.baseX < 0 || particle.baseX > canvas.width) particle.vx *= -1;
        if (particle.baseY < 0 || particle.baseY > canvas.height) particle.vy *= -1;

        // Mouse interaction - particles follow mouse slowly
        const dx = mouseRef.current.x - particle.baseX;
        const dy = mouseRef.current.y - particle.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Apply mouse attraction with smooth easing
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.x = particle.baseX + (dx * force * 0.15);
          particle.y = particle.baseY + (dy * force * 0.15);
        } else {
          // Smoothly return to base position
          particle.x += (particle.baseX - particle.x) * 0.05;
          particle.y += (particle.baseY - particle.y) * 0.05;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(250, 175, 30, 0.6)';
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(250, 175, 30, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
