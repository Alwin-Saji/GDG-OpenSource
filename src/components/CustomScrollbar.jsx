import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const CustomScrollbar = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    const checkScrollable = () => {
      setIsVisible(document.documentElement.scrollHeight > window.innerHeight);
      // Subtract top/bottom padding (py-4 is 16px * 2 = 32px)
      setSvgHeight(window.innerHeight - 32); 
    };
    
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    
    // Automatically detect when page height changes (e.g. after loading animation finishes)
    const resizeObserver = new ResizeObserver(() => {
      checkScrollable();
    });
    resizeObserver.observe(document.body);
    
    return () => {
      window.removeEventListener('resize', checkScrollable);
      resizeObserver.disconnect();
    };
  }, []);

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
    <div className="fixed top-0 right-2 w-6 h-screen z-[100] pointer-events-none py-4 flex justify-end">
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
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
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
    </div>
  );
};

export default CustomScrollbar;
