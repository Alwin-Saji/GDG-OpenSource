import React, { useState, useEffect } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div className={`pointer-events-auto relative w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'max-w-4xl pt-6 px-4' : 'max-w-full pt-0 px-0'}`}>
        <nav className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-xl shadow-black/5 rounded-full px-6 py-2.5' : 'bg-transparent border border-transparent px-6 sm:px-8 lg:px-12 py-5'}`}>
          <div className="flex items-center justify-between">

            {/* Logo with playful hover */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="flex -space-x-1.5 transition-transform duration-300 group-hover:scale-110">
                <span className="w-3 h-3 rounded-full bg-[#4285F4] mix-blend-multiply shadow-sm transition-transform duration-300 group-hover:-translate-y-1"></span>
                <span className="w-3 h-3 rounded-full bg-[#EA4335] mix-blend-multiply shadow-sm transition-transform duration-300 group-hover:translate-y-1"></span>
                <span className="w-3 h-3 rounded-full bg-[#FBBC04] mix-blend-multiply shadow-sm transition-transform duration-300 group-hover:-translate-y-1"></span>
                <span className="w-3 h-3 rounded-full bg-[#34A853] mix-blend-multiply shadow-sm transition-transform duration-300 group-hover:translate-y-1"></span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#171717]">GDG.</span>
            </div>

            {/* Desktop Links with simple text transition */}
            <div className="hidden md:flex items-center space-x-2">
              {['About', 'Workflow', 'Timeline', 'Leaderboard'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-[#171717] transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Action Button with scale & shadow hover */}
            <div className="hidden md:block">
              <a href="#register" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#171717] rounded-full overflow-hidden shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/20 hover:bg-black transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                Register
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 p-2.5 rounded-full bg-gray-100/50 hover:bg-gray-200/50 transition-colors focus:outline-none"
              >
                {isOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu with scale/fade transition */}
        <div className={`absolute top-full left-0 w-full mt-2 transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
          <div className={`mx-auto bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden p-3 space-y-1 border border-gray-200/50 ${scrolled ? 'w-full rounded-3xl' : 'w-full rounded-b-3xl border-t-0 shadow-sm'}`}>
            {['About', 'Workflow', 'Timeline', 'Leaderboard'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-500 hover:text-[#171717] hover:bg-gray-50 rounded-xl transition-all duration-300"
              >
                {item}
              </a>
            ))}
            <div className="pt-2 pb-1 px-2">
              <a href="#register" onClick={() => setIsOpen(false)} className="block w-full text-center px-4 py-3 text-base font-medium text-white bg-[#171717] rounded-xl hover:bg-black transition-colors shadow-md">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
