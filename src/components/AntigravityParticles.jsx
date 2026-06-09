import { useEffect, useRef } from 'react';

const AntigravityParticles = ({
  particleCount = 45,
  speedFactor = 0.8,
  colors = ['#EA4335', '#FBBC05', '#34A853', '#4285F4', '#E8F0FE', '#DADCE0'],
  shape = 'mixed', // mixed, circle, square, triangle
  gravity = -0.05,
  usePattern = false,
  interactionRadius = 150,
  friction = 0.96
}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const spriteCacheRef = useRef({});
  const animationFrameRef = useRef(null);

  // Pre-render line/dash sprites for GPU optimization (Google Antigravity style)
  const getSprite = (color, length) => {
    const key = `${color}-${length}`;
    if (spriteCacheRef.current[key]) return spriteCacheRef.current[key];

    const c = document.createElement('canvas');
    const width = length + 10; // Add padding
    const height = 10;
    c.width = width;
    c.height = height;
    const cx = c.getContext('2d');

    // Draw thin line/dash
    cx.strokeStyle = color;
    cx.lineWidth = 2;
    cx.lineCap = 'round';
    cx.beginPath();
    cx.moveTo(5, height / 2);
    cx.lineTo(width - 5, height / 2);
    cx.stroke();

    spriteCacheRef.current[key] = c;
    return c;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true,
      willReadFrequently: false
    });

    let width, height;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    };

    resize();
    window.addEventListener('resize', resize);

    // Particle class
    class Particle {
      constructor(index) {
        this.index = index;
        this.init(true);
      }

      init(randomY = false) {
        this.x = Math.random() * width;
        this.y = randomY ? Math.random() * height : height + 50;
        
        // Line length variation
        this.lineLength = Math.random() * 15 + 8; // 8-23px lines
        
        this.vx = (Math.random() - 0.5) * 0.5 * speedFactor; // Slower, gentler movement
        this.vy = (Math.random() - 0.5) * 0.5 * speedFactor;

        if (!usePattern) {
          if (gravity < 0) {
            this.vy -= Math.random() * 0.3 * Math.abs(gravity); // Gentler upward drift
          } else {
            this.y = randomY ? Math.random() * height : -50;
          }
        } else if (!randomY) {
          this.x = width / 2;
          this.y = height / 2;
        }

        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.rotation = Math.random() * Math.PI * 2; // Random angle for lines
        this.rotationSpeed = (Math.random() - 0.5) * 0.01; // Very slow rotation
        this.sprite = getSprite(this.color, this.lineLength);
        this.depth = Math.random() * 0.5 + 0.5; // Less depth variation
        this.opacity = 0.5 + Math.random() * 0.3; // More visible opacity (50-80%)
      }



      getPatternTarget() {
        const cx = width / 2;
        const cy = height / 2;
        const r = Math.min(width, height) * 0.35;
        const total = particleCount;
        const t = this.index / total;
        let tx = cx, ty = cy;
        let patternType = shape === 'mixed' ? 'circle' : shape;

        if (patternType === 'circle') {
          const angle = t * Math.PI * 2 - Math.PI / 2;
          tx = cx + Math.cos(angle) * r;
          ty = cy + Math.sin(angle) * r;
        } else if (patternType === 'square') {
          const side = Math.floor(t * 4);
          const subT = (t * 4) % 1;
          switch (side) {
            case 0: tx = cx - r + (2 * r * subT); ty = cy - r; break;
            case 1: tx = cx + r; ty = cy - r + (2 * r * subT); break;
            case 2: tx = cx + r - (2 * r * subT); ty = cy + r; break;
            default: tx = cx - r; ty = cy + r - (2 * r * subT); break;
          }
        } else if (patternType === 'triangle') {
          const sides = 3;
          const sideIdx = Math.floor(t * sides);
          const subT = (t * sides) % 1;
          const angles = [-Math.PI / 2, -Math.PI / 2 + (Math.PI * 2 / 3), -Math.PI / 2 + (2 * Math.PI * 2 / 3)];
          const a1 = angles[sideIdx];
          const a2 = angles[(sideIdx + 1) % 3];
          const x1 = cx + Math.cos(a1) * r;
          const y1 = cy + Math.sin(a1) * r;
          const x2 = cx + Math.cos(a2) * r;
          const y2 = cy + Math.sin(a2) * r;
          tx = x1 + (x2 - x1) * subT;
          ty = y1 + (y2 - y1) * subT;
        }

        return { x: tx, y: ty };
      }

      update(mouseX, mouseY) {
        if (usePattern) {
          const target = this.getPatternTarget();
          const dx = target.x - this.x;
          const dy = target.y - this.y;
          this.vx += dx * 0.003;
          this.vy += dy * 0.003;
          this.vx += (Math.random() - 0.5) * 0.05;
          this.vy += (Math.random() - 0.5) * 0.05;
        } else {
          this.vy += gravity * 0.05 * this.depth;
        }

        this.x += this.vx * this.depth;
        this.y += this.vy * this.depth;
        this.rotation += this.rotationSpeed;

        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < interactionRadius) {
          const force = (interactionRadius - dist) / interactionRadius;
          const angle = Math.atan2(dy, dx);
          const push = force * 2; // Gentler push
          this.vx += Math.cos(angle) * push;
          this.vy += Math.sin(angle) * push;
        }

        this.vx *= friction;
        this.vy *= friction;

        if (!usePattern) {
          if (this.x < -50) this.x = width + 50;
          if (this.x > width + 50) this.x = -50;
          if (gravity < 0) {
            if (this.y < -60) this.init(false);
          } else {
            if (this.y > height + 60) this.init(false);
          }
        }
      }

      draw() {
        ctx.save();
        // Ensure minimum opacity so particles never fully disappear
        ctx.globalAlpha = Math.max(0.3, this.opacity);
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Scale the line based on depth
        const scale = this.depth;
        const renderWidth = (this.lineLength + 10) * scale;
        const renderHeight = 10 * scale;
        
        ctx.drawImage(this.sprite, -renderWidth / 2, -renderHeight / 2, renderWidth, renderHeight);
        ctx.restore();
      }
    }

    // Initialize particles
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle(i));
    }

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      mouseRef.current.x = e.touches[0].clientX;
      mouseRef.current.y = e.touches[0].clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Animation loop
    let lastTime = 0;
    const animate = (currentTime) => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].update(mouseRef.current.x, mouseRef.current.y);
        particlesRef.current[i].draw();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, speedFactor, colors, shape, gravity, usePattern, interactionRadius, friction]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};

export default AntigravityParticles;
