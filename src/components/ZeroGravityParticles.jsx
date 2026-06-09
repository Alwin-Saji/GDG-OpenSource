import { useEffect, useRef } from 'react';

const ZeroGravityParticles = ({
  particleCount = 200,
  speedMultiplier = 1
}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true 
    });

    let width, height;

    // Google brand colors
    const colors = [
      '#4285F4',  // Blue
      '#EA4335',  // Red
      '#FBBC04',  // Yellow
      '#34A853',  // Green
      '#5F6368',  // Gray
      '#202124'   // Dark
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
        this.reset(true);
      }

      reset(randomY = false) {
        // Random position
        this.x = Math.random() * width;
        this.y = randomY ? Math.random() * height : height + 50;
        
        // Home position (where particle wants to return)
        this.homeX = this.x;
        this.homeY = this.y;
        
        // Velocity
        this.vx = (Math.random() - 0.5) * 0.5 * speedMultiplier;
        this.vy = -Math.random() * 0.8 * speedMultiplier; // Upward drift
        
        // Visual properties
        this.length = Math.random() * 15 + 10; // 10-25px long particles
        this.width = 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        
        // Physics
        this.depth = Math.random() * 0.5 + 0.5;
        this.opacity = 0.5 + Math.random() * 0.3;
        
        // Mouse interaction
        this.isRepelled = false;
      }

      update(mouseX, mouseY) {
        // Calculate distance to mouse
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // High responsiveness - strong repulsion when mouse is near
        const interactionRadius = 180;
        
        if (dist < interactionRadius && dist > 0) {
          // Strong repulsion force
          const force = (1 - dist / interactionRadius) * 3;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * force;
          this.vy += Math.sin(angle) * force;
          this.isRepelled = true;
        } else {
          this.isRepelled = false;
        }
        
        // Gentle return to home position
        const returnForce = 0.01;
        const homeDx = this.homeX - this.x;
        const homeDy = this.homeY - this.y;
        this.vx += homeDx * returnForce;
        this.vy += homeDy * returnForce;
        
        // Add slight upward drift
        this.vy -= 0.02 * this.depth;
        
        // Apply friction
        this.vx *= 0.95;
        this.vy *= 0.95;
        
        // Update position
        this.x += this.vx * this.depth;
        this.y += this.vy * this.depth;
        
        // Rotation
        this.rotation += this.rotationSpeed;
        
        // Wrap around edges
        if (this.x < -50) this.x = width + 50;
        if (this.x > width + 50) this.x = -50;
        if (this.y < -60) this.reset(false); // Reset at bottom when going off top
        if (this.y > height + 60) this.y = -50;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Draw elongated particle (capsule/dash shape)
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.width;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(-this.length / 2, 0);
        ctx.lineTo(this.length / 2, 0);
        ctx.stroke();
        
        ctx.restore();
      }
    }

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches[0]) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw all particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].update(mouseRef.current.x, mouseRef.current.y);
        particlesRef.current[i].draw();
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resize();
    animate();

    // Event listeners
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, speedMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ZeroGravityParticles;
