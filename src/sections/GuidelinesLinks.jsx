import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShapeParticles from '../components/ShapeParticles';

const GuidelinesLinks = () => {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
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
              <h2 className="text-2xl uppercase sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                For Contributors
              </h2>
              <p className="text-xl sm:text-xl font-light text-gray-700 dark:text-gray-400 mb-8">
                Start your open source journey
              </p>
              <Link
                to="/contributor-guidelines"
                className="pointer-events-auto px-8 py-3 bg-[#171717] dark:bg-white hover:bg-white dark:hover:bg-black hover:text-[#171717] dark:hover:text-white text-white dark:text-black rounded-2xl font-medium border-2 border-gray-700 dark:border-white/20 transition-colors"
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
              <h2 className="text-2xl uppercase sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                For Maintainers
              </h2>
              <p className="text-xl sm:text-xl font-light text-gray-700 dark:text-gray-400 mb-8">
                Manage and grow your projects
              </p>
              <Link
                to="/maintainer-guidelines"
                className="pointer-events-auto px-8 py-3 bg-gray-50 dark:bg-black text-gray-900 dark:text-white border dark:border-white/20 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black rounded-2xl font-medium transition-colors"
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
