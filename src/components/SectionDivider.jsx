import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SectionDivider = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1000);

  useEffect(() => {
    const checkWidth = () => {
      setWidth(window.innerWidth);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const pathData = `
    M 0 12 
    H ${width * 0.1} 
    l 10 -10 
    H ${width * 0.25} 
    l 12 18 
    H ${width * 0.4} 
    l 10 -18 
    H ${width * 0.6} 
    l 10 10 
    H ${width * 0.75} 
    l 12 10 
    H ${width * 0.85} 
    l 10 -10 
    H ${width}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className="w-full flex justify-center py-6 overflow-hidden pointer-events-none select-none">
      <motion.svg 
        width={width} 
        height="24" 
        viewBox={`0 0 ${width} 24`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <defs>
          <linearGradient id="div-gdg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="33%" stopColor="#EA4335" />
            <stop offset="66%" stopColor="#FBBC04" />
            <stop offset="100%" stopColor="#34A853" />
          </linearGradient>
        </defs>
        
        {/* Faint background track */}
        <path
          d={pathData}
          fill="none"
          stroke="rgba(0,0,0,0.05)"
          strokeWidth="1.5"
        />

        {/* Glowing track */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="url(#div-gdg-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
};

export default SectionDivider;
