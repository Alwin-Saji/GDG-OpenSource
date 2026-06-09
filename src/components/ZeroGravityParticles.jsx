import { useEffect, useRef } from 'react';

const ZeroGravityParticles = ({
  particleCount = 150,
  minSize = 1,
  maxSize = 3,
  speedMultiplier = 1.5
}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true 
    });

    let width, height;

    // Google brand colors with transparency
    const colors = [
      'rgba(66, 133, 244, 0.6)',   // Blue
      'rgba(234, 67, 53, 0.6)',     // Red
      'rgba(251, 188, 4, 0.6)',     // Yellow
      'rgba(52, 168, 83, 0.6)',     // Green
      'rgba(95, 99, 104, 0.5)',     // Gray
      'rgba(32, 33, 36, 0.5)'       // Dark Gray
    ];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);
      
      // Reinitialize particles on resize
      initParticles();
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        // Random position across entire canvas
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        
        // Very slow, gentle velocities for zero-gravity feel
        this.vx = (Math.random() - 0.5) * 0.3 * speedMultiplier;
        this.vy = (Math.random() - 0.5) * 0.3 * speedMultiplier;
        
        // Slight drift/wobble properties
        this.wobbleSpeed = Math.random() * 0.02 + 0.01;
        this.wobbleAmount = Math.random() * 0.15 + 0.05;
        this.wobbleOffset = Math.random() * Math.PI * 2;
        
        // Visual properties
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Time tracker for wobble
        this.time = Math.random() * 1000;
      }

      update() {
        // Increment time for wobble calculation
        this.time += 1;
        
        // Apply wobble to velocities for non-linear movement
        const wobbleX = Math.sin(this.time * this.wobbleSpeed + this.wobbleOffset) * this.wobbleAmount;
        const wobbleY = Math.cos(this.time * this.wobbleSpeed + this.wobbleOffset * 1.3) * this.wobbleAmount;
        
        // Update position with base velocity + wobble
        this.x += this.vx + wobbleX;
        this.y += this.vy + wobbleY;
        
        // Wrap around edges seamlessly
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
        if (this.y < -10) this.y = height + 10;
        if (this.y > height + 10) this.y = -10;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw all particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].update();
        particlesRef.current[i].draw();
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resize();
    animate();

    // Event listeners
    window.addEventListener('resize', resize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, minSize, maxSize, speedMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ZeroGravityParticles;
