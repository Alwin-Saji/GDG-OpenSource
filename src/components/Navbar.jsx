import React, { useState, useEffect } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';
import gdgLogo from '../assets/GDG-Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div className={`pointer-events-auto relative w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'max-w-5xl pt-6 px-4' : 'max-w-full pt-0 px-0'}`}>
        <nav className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'bg-white dark:bg-black border border-gray-200/50 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/20 rounded-full px-6 py-2.5' : 'bg-white dark:bg-black border border-transparent px-6 sm:px-8 lg:px-12 py-5'}`}>
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" onClick={scrollToTop} className="flex items-center space-x-3 group cursor-pointer shrink-0">
              <img src={gdgLogo} alt="GDG Logo" className="h-7 md:h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="text-lg font-semibold tracking-tight text-[#171717] dark:text-gray-100 whitespace-nowrap">GDG on Campus</span>
            </Link>

            {/* Desktop Links with simple text transition */}
            <div className="hidden md:flex items-center space-x-2">
              <Link
                to="/"
                onClick={scrollToTop}
                className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-[#171717] dark:text-gray-400 dark:hover:text-white transition-all duration-300"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-[#171717] dark:text-gray-400 dark:hover:text-white transition-all duration-300"
              >
                Projects
              </Link>
              {['Workflow', 'Leaderboard', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-[#171717] dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                >
                  {item}
                </a>
              ))}

              {/* Resources Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-[#171717] dark:text-gray-400 dark:hover:text-white transition-all duration-300 flex items-center gap-1 outline-none">
                  Resources
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-[#111] border border-gray-100 dark:border-white/10 rounded-lg shadow-lg shadow-black/5 dark:shadow-black/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    <Link to="/contributor-guidelines" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white transition-colors">Contributor Guidelines</Link>
                    <Link to="/maintainer-guidelines" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white transition-colors">Maintainer Guidelines</Link>
                    {/* <a href="#" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors">Documentation</a>
                    <a href="#" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors">API Reference</a> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button & Theme Toggle */}
            <div className="hidden md:flex items-center space-x-2">
              <button onClick={toggleTheme} className="p-2.5 rounded-full text-gray-500 hover:text-[#171717] dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a href="/#register" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#171717] dark:bg-white dark:text-black rounded-full overflow-hidden shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/20 hover:bg-black dark:hover:bg-gray-200 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                Register
              </a>
            </div>

            {/* Mobile Toggle & Theme */}
            <div className="md:hidden flex items-center space-x-2">
              <button onClick={toggleTheme} className="p-2.5 rounded-full text-gray-500 hover:text-[#171717] dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 dark:text-white p-2.5 rounded-full bg-gray-100/50 dark:bg-white/10 hover:bg-gray-200/50 dark:hover:bg-white/20 transition-colors focus:outline-none"
              >
                {isOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu with scale/fade transition */}
        <div className={`absolute top-full left-0 w-full mt-2 transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
          <div className={`mx-auto bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl shadow-2xl overflow-hidden p-3 space-y-1 border border-gray-200/50 dark:border-white/10 ${scrolled ? 'w-full rounded-3xl' : 'w-full rounded-b-3xl border-t-0 shadow-sm'}`}>
            <Link
              to="/"
              onClick={() => { setIsOpen(false); scrollToTop(); }}
              className="block px-4 py-3 text-base font-medium text-gray-500 hover:text-[#171717] dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-500 hover:text-[#171717] dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              Projects
            </Link>
            {['Workflow', 'Leaderboard', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-500 hover:text-[#171717] dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                {item}
              </a>
            ))}

            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Resources</p>
              <div className="pl-2 space-y-1">
                <Link to="/contributor-guidelines" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-gray-500 hover:text-[#171717] dark:text-gray-400 dark:hover:text-white transition-colors">Contributor Guidelines</Link>
                <Link to="/maintainer-guidelines" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-gray-500 hover:text-[#171717] dark:text-gray-400 dark:hover:text-white transition-colors">Maintainer Guidelines</Link>
                {/* <a href="#" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-gray-500 hover:text-[#171717] transition-colors">Documentation</a>
                <a href="#" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-gray-500 hover:text-[#171717] transition-colors">API Reference</a> */}
              </div>
            </div>

            <div className="pt-2 pb-1 px-2">
              <a href="/#register" onClick={() => setIsOpen(false)} className="block w-full text-center px-4 py-3 text-base font-medium text-white bg-[#171717] dark:bg-white dark:text-black rounded-xl hover:bg-black dark:hover:bg-gray-200 transition-colors shadow-md">
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
