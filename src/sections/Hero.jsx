import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Antigravity from '../components/Antigravity';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-10">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={3}
          particleSize={.85}
          lerpSpeed={0.05}
          color={'#4285F4'}
          autoAnimate={true}
          particleVariance={1}
        />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center pointer-events-none">
        
        {/* Subtle Top Badge/Logo */}
        <div className="flex items-center space-x-2 mb-8">
          <div className="flex -space-x-1">
            <span className="w-3 h-3 rounded-full bg-[#4285F4] mix-blend-multiply"></span>
            <span className="w-3 h-3 rounded-full bg-[#EA4335] mix-blend-multiply"></span>
            <span className="w-3 h-3 rounded-full bg-[#FBBC04] mix-blend-multiply"></span>
          </div>
          <span className="text-xl font-medium tracking-tight text-gray-900">
            Google <span className="text-gray-500 font-light">Developer Groups</span>
          </span>
        </div>
        
        {/* Massive Centered Typography */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#171717] mb-12 leading-[1.2] max-w-3xl">
          Open Source <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC04,#34A853)]">Contribution</span>
        </h1>
        
        {/* Pill Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pointer-events-auto">
          <a href="#register" className="w-full sm:w-auto px-8 py-3.5 bg-[#171717] text-white rounded-full font-medium hover:bg-black transition-colors flex items-center justify-center shadow-lg shadow-black/10">
            <FaGithub className="mr-2" size={18} />
            Join the Network
          </a>
          <a href="#workflow" className="w-full sm:w-auto px-8 py-3.5 bg-gray-50 text-gray-900 border border-gray-200 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
            Explore projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
