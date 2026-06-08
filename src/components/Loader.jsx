import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [phase, setPhase] = useState('dots');

  useEffect(() => {
    // Spin as 4 dots for 1.2s, then stretch them into the solid 'G'
    const timer = setTimeout(() => {
      setPhase('draw');
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const segments = [
    // Red (Top arc)
    { c: '#EA4335', d: 'M 14.14 -14.14 A 20 20 0 0 0 -14.14 -14.14' },
    // Yellow (Left arc)
    { c: '#FBBC04', d: 'M -14.14 -14.14 A 20 20 0 0 0 -14.14 14.14' },
    // Green (Bottom arc)
    { c: '#34A853', d: 'M -14.14 14.14 A 20 20 0 0 0 14.14 14.14' },
    // Blue (Right arc & crossbar)
    { c: '#4285F4', d: 'M 14.14 14.14 A 20 20 0 0 0 20 0 L 0 0' },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div 
        className="relative w-28 h-28 flex items-center justify-center mb-6"
        animate={
          phase === 'dots' 
            ? { rotate: 360 } 
            : { rotate: 720 }
        }
        transition={
          phase === 'dots'
            ? { duration: 1.5, repeat: Infinity, ease: "linear" }
            : { duration: 1.2, ease: "backOut" }
        }
      >
        <svg viewBox="-30 -30 60 60" className="w-full h-full overflow-visible">
          {segments.map((seg, index) => (
            <motion.path
              key={index}
              d={seg.d}
              fill="none"
              stroke={seg.c}
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0.001 }}
              animate={
                phase === 'dots' 
                  ? { pathLength: 0.001 } 
                  : { pathLength: 1 }
              }
              transition={
                phase === 'dots'
                  ? { duration: 0 }
                  : { 
                      pathLength: { duration: 0.8, ease: "easeInOut", delay: 0.1 }
                    }
              }
            />
          ))}
        </svg>
      </motion.div>
      
      <motion.div className="overflow-hidden h-10 flex items-center mt-2">
        <motion.h1 
          className="text-3xl font-black text-black tracking-tight"
          initial={{ y: 40 }}
          animate={{ y: phase === 'draw' ? 0 : 40 }}
          transition={{ duration: 0.6, ease: "backOut", delay: 0.3 }}
        >
          GDG CEC<span className="text-gray-400">.</span>
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
