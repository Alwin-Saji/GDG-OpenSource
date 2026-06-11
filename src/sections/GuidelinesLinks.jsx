import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShapeParticles from '../components/ShapeParticles';

const GuidelinesLinks = () => {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contributors Section */}
          <div
            className="relative group overflow-hidden min-h-[400px] flex flex-col items-center justify-center text-center p-8 transition-all duration-300"
            onMouseEnter={() => setHoverLeft(true)}
            onMouseLeave={() => setHoverLeft(false)}
          >
            <div className="absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none">
              <ShapeParticles isHovered={hoverLeft} color="#4285F4" shape="angle" />
            </div>

            <div className="relative z-10 pointer-events-none flex flex-col items-center justify-center">
              <h2 className="text-2xl sm:text-4xl font-doto font-semibold tracking-tight text-[#E8D98A] mb-2">
                For Contributors
              </h2>
              <p className="text-xl sm:text-xl text-gray-100 mb-8">
                Start your open source journey
              </p>
              <Link
                to="/contributor-guidelines"
                className="pointer-events-auto px-8 py-3 bg-[#E8D98A] text-[#5A0F15] hover:bg-[#5A0F15] hover:text-[#E8D98A] border border-[#3f080d] rounded-full font-medium transition-colors"
              >
                View Guidelines
              </Link>
            </div>
          </div>

          {/* Maintainers Section */}
          <div
            className="relative group overflow-hidden min-h-[400px] flex flex-col items-center justify-center text-center p-8 transition-all duration-300"
            onMouseEnter={() => setHoverRight(true)}
            onMouseLeave={() => setHoverRight(false)}
          >
            <div className="absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none">
              <ShapeParticles isHovered={hoverRight} color="#34A853" />
            </div>

            <div className="relative z-10 pointer-events-none flex flex-col items-center justify-center">
              <h2 className="text-2xl sm:text-4xl font-doto font-semibold tracking-tight text-[#bff38c] mb-2">
                For Maintainers
              </h2>
              <p className="text-xl sm:text-xl text-gray-100 mb-8">
                Manage and grow your projects
              </p>
              <Link
                to="/maintainer-guidelines"
                className="pointer-events-auto px-8 py-3 bg-[#791a22] text-[#E8D98A] hover:bg-[#E8D98A] hover:text-[#5A0F15] border border-[#3f080d] rounded-full font-medium transition-colors"
              >
                View Guidelines
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GuidelinesLinks;
