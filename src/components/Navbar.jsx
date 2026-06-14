import React, { useState, useEffect } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import gdgLogo from '../assets/gdg-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  useEffect(() => {
    let isLoaded = false;
    let lastKnownScrollY = window.scrollY || 0;
    
    // Track scroll position continuously but don't apply it to the UI until loaded
    const handleScroll = () => {
      lastKnownScrollY = window.scrollY;
      if (isLoaded) {
        setScrolled(lastKnownScrollY > 40);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Wait for the initial loader to finish and layout to settle (2.8s + buffer)
    const timer = setTimeout(() => {
      isLoaded = true;
      // Now safe to apply the background, using the real scroll position
      // instead of a potentially jumpy layout-shift reading
      setScrolled(lastKnownScrollY > 40);
    }, 3500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div className={`pointer-events-auto relative w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'max-w-4xl pt-6 px-4' : 'max-w-full pt-0 px-0'}`}>
        <nav className={`mx-auto flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled || isOpen 
            ? `bg-[#5A0F15]/80 backdrop-blur-xl border border-[#5A0F15]/50 shadow-xl shadow-black/5` 
            : 'bg-transparent border-transparent'
        } ${!isOpen ? 'rounded-[32px]' : 'rounded-[24px]'} ${scrolled ? 'px-6 py-2.5' : 'px-6 sm:px-8 lg:px-12 py-5'}`}>
          <div className="flex items-center justify-between">

            {/* Logo with playful hover */}
            <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2.5 group cursor-pointer">
              <img 
                src={gdgLogo} 
                alt="GDG Logo" 
                className="w-12 h-10 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="flex flex-col -space-y-1">
                <span className="text-base font-semibold tracking-tight text-white">
                  {scrolled ? 'GDG' : 'Google Developers Group'}
                </span>
                <span className="text-sm font-medium tracking-tight text-[#77a5ee]">
                  {scrolled ? 'CEC' : 'College of Engineering Chengannur'}
                </span>
              </div>
            </Link>

            {/* Desktop Links with simple text transition */}
            <div className="hidden md:flex items-center space-x-2">
              <Link
                to="/"
                onClick={scrollToTop}
                className="px-4 py-2 text-sm font-medium text-[#E8D98A]/70 hover:text-[#E8D98A] transition-all duration-300"
              >
                Home
              </Link>
              <Link
                to="/projects"
                onClick={scrollToTop}
                className="px-4 py-2 text-sm font-medium text-[#E8D98A]/70 hover:text-[#E8D98A] transition-all duration-300"
              >
                Projects
              </Link>
              {/* {['Workflow', 'Leaderboard', 'FAQs'].map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-[#E8D98A]/70 hover:text-[#E8D98A] transition-all duration-300"
                >
                  {item}
                </a>
              ))} */}
              {['About', 'Workflow','FAQs'].map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-[#E8D98A]/70 hover:text-[#E8D98A] transition-all duration-300"
                >
                  {item}
                </a>
              ))}

              {/* Resources Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 text-sm font-medium text-[#E8D98A]/70 hover:text-[#E8D98A] transition-all duration-300 flex items-center gap-1 outline-none">
                  Resources
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full right-0 mt-2 w-56 bg-[#4A0A0F] border border-[#4A0A0F] rounded-lg shadow-lg shadow-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    <Link to="/contributor-guidelines" className="block px-4 py-2.5 text-sm text-[#E8D98A]/70 hover:text-[#E8D98A] transition-colors">Contributor Guidelines</Link>
                    <Link to="/maintainer-guidelines" className="block px-4 py-2.5 text-sm text-[#E8D98A]/70 hover:text-[#E8D98A] transition-colors">Maintainer Guidelines</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button with scale & shadow hover */}
            <div className="hidden md:block">
              <a href="https://forms.gle/pc2TVDNfvtne535Q7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-black bg-yellow-50 rounded-full overflow-hidden shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/20 hover:bg-[#E8D98A] hover:text-[#300000] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                Register
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none flex items-center justify-center overflow-hidden relative w-10 h-10"
              >
                <div className={`absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
                  <MdClose size={20} />
                </div>
                <div className={`absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${!isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}>
                  <MdMenu size={20} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu inline extension */}
          <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
            <div className="overflow-hidden">
              <div className="flex flex-col space-y-1 pb-2">
                <Link
                  to="/"
                  onClick={() => { setIsOpen(false); scrollToTop(); }}
                  className="block px-4 py-3 text-base font-medium text-[#E8D98A]/70 hover:text-[#E8D98A] hover:bg-white/5 rounded-xl transition-all duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  onClick={() => { setIsOpen(false); scrollToTop(); }}
                  className="block px-4 py-3 text-base font-medium text-[#E8D98A]/70 hover:text-[#E8D98A] hover:bg-white/5 rounded-xl transition-all duration-300"
                >
                  Projects
                </Link>
                {['Workflow', 'Leaderboard', 'FAQs'].map((item) => (
                  <a
                    key={item}
                    href={`/#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-[#E8D98A]/70 hover:text-[#E8D98A] hover:bg-white/5 rounded-xl transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}

                <div className="px-4 py-2">
                  <p className="text-xs font-semibold text-[#E8D98A]/50 uppercase tracking-wider mb-2">Resources</p>
                  <div className="pl-2 space-y-1">
                    <Link to="/contributor-guidelines" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-[#E8D98A]/70 hover:text-[#E8D98A] transition-colors">Contributor Guidelines</Link>
                    <Link to="/maintainer-guidelines" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-[#E8D98A]/70 hover:text-[#E8D98A] transition-colors">Maintainer Guidelines</Link>
                  </div>
                </div>

                <div className="pt-2 pb-1 px-2">
                  <a href="https://forms.gle/pc2TVDNfvtne535Q7" onClick={() => setIsOpen(false)} className="block w-full text-center px-4 py-3 text-base font-medium text-[#4A0A0F] bg-[#E8D98A] rounded-xl hover:bg-white transition-colors shadow-md">
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
