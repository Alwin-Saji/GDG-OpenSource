import React, { useRef, useState } from 'react';
import Antigravity from '../components/Antigravity';

const Hero = () => {
  const titleRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!titleRef.current) return;
    const rect = titleRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-white overflow-hidden">
      {/* Whisper-quiet background effect */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Antigravity
          count={400}
          magnetRadius={2}
          ringRadius={6}
          waveSpeed={0.2}
          waveAmplitude={2}
          particleSize={0.5}
          lerpSpeed={0.02}
          color={'#4285F4'}
          autoAnimate={true}
          particleVariance={0.5}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center pointer-events-none mt-4">

        <p className="text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.2em] sm:tracking-[0.25em] text-gray-900 uppercase mb-8 sm:mb-12">
          Google Developer Groups Presents
        </p>

        {/* Layered Stroke Typography Title */}
        <div className="relative mb-16 sm:mb-20 md:mb-24 flex flex-col items-center justify-center w-full">
          {/* Background Gradient Outline Text */}
          <span
            className="text-[5rem] xs:text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-black tracking-tighter select-none leading-none opacity-60 bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC04,#34A853)]"
            style={{
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'white',
              WebkitTextStroke: '2px transparent'
            }}
          >
            GDG
          </span>

          {/* Spotlight Reveal Hover Text */}
          <h1 className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-auto px-2">
            <div 
              ref={titleRef}
              className="relative cursor-none px-2 sm:px-4 py-2"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Base Text (Solid Black) */}
              <span className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight text-gray-900 block select-none">
                Season of Code
              </span>
              
              {/* Reveal Text (Gradient clipped by a circle) */}
              <span 
                className="absolute inset-0 px-2 sm:px-4 py-2 text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight text-transparent bg-clip-text bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC04,#34A853)] block pointer-events-none transition-opacity duration-300 select-none"
                style={{
                  opacity: isHovered ? 1 : 0,
                  clipPath: `circle(80px at ${mousePos.x}px ${mousePos.y}px)`
                }}
              >
                Season of Code
              </span>
            </div>
          </h1>
        </div>

        {/* Minimal Animated Buttons v7 */}
        <div className="flex flex-col sm:flex-row items-center gap-8 pointer-events-auto mt-6">
          
          {/* Primary: Expanding Arrow Pop */}
          <a href="#register" className="group relative h-[52px] px-8 bg-[#111] text-white rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:pr-14 hover:shadow-lg flex items-center overflow-hidden">
            <span className="relative z-10 whitespace-nowrap">Register Now</span>
            <div className="absolute right-5 opacity-0 -translate-x-6 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-hover:translate-x-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
          
          {/* Secondary: Center-Out Underline */}
          <a href="/projects" className="group relative py-2 text-sm font-medium tracking-wide text-gray-500 transition-colors duration-300 hover:text-gray-900">
            Explore projects
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gray-900 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
