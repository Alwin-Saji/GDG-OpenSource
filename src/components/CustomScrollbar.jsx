import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const CustomScrollbar = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [svgHeight, setSvgHeight] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      setIsVisible(document.documentElement.scrollHeight > window.innerHeight);
      // Reduce height to 70% of screen height
      setSvgHeight(window.innerHeight * 0.7);
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);

    // Automatically detect when page height changes
    const resizeObserver = new ResizeObserver(() => {
      checkScrollable();
    });
    resizeObserver.observe(document.body);

    // If user refreshed while already scrolled down, reveal it immediately
    if (window.scrollY > 40) {
      setHasScrolled(true);
    }

    return () => {
      window.removeEventListener('resize', checkScrollable);
      resizeObserver.disconnect();
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!hasScrolled && latest > 40) {
      setHasScrolled(true);
    }
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!isVisible || svgHeight <= 0) return null;

  // A "Circuit Board" inspired path that weaves back and forth
  const pathData = `
    M 18 0 
    V ${svgHeight * 0.15} 
    l -12 12 
    V ${svgHeight * 0.4} 
    l 12 12 
    V ${svgHeight * 0.7} 
    l -14 14 
    V ${svgHeight}
  `.replace(/\s+/g, ' ').trim();

  return (
    <motion.div
      className="hidden md:block fixed top-1/2 -translate-y-1/2 right-2 w-6 z-[100] pointer-events-none py-4 flex justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: hasScrolled ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <svg
        viewBox={`0 0 20 ${svgHeight}`}
        width="20"
        height={svgHeight}
        className="block"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gdg-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="33%" stopColor="#EA4335" />
            <stop offset="66%" stopColor="#FBBC04" />
            <stop offset="100%" stopColor="#34A853" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faint background track */}
        <path
          d={pathData}
          fill="none"
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="1.5"
        />

        {/* Glowing moving beam */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="url(#gdg-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{
            pathLength: smoothProgress,
          }}
        />
      </svg>
    </motion.div>
  );
};

export default CustomScrollbar;
