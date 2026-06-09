import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaArrowRight, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col items-start max-w-sm w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
                <span className="w-2 h-2 rounded-full bg-[#EA4335]"></span>
                <span className="w-2 h-2 rounded-full bg-[#FBBC04]"></span>
                <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
              </div>
                Season of Code
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Empowering developers to build the open-source ecosystem together. Join thousands of contributors making a difference.
            </p>
            <a href="/projects" className="inline-flex items-center gap-2 border border-transparent hover:border-black rounded-xl py-2 px-4 text-xs sm:text-sm font-semibold text-black/60 hover:text-black transition-colors group">
              Start Contributing <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Links grid */}
          <div className="flex flex-wrap gap-12 sm:gap-20">
            {/* Nav Links */}
            <div>
              <h4 className="text-black font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">Navigation</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="/#about" className="text-xs sm:text-sm text-gray-500 hover:text-black transition-colors">About</a></li>
                <li><a href="/#workflow" className="text-xs sm:text-sm text-gray-500 hover:text-black transition-colors">Workflow</a></li>
                <li><a href="/#leaderboard" className="text-xs sm:text-sm text-gray-500 hover:text-black transition-colors">Leaderboard</a></li>
                <li><a href="/#faq" className="text-xs sm:text-sm text-gray-500 hover:text-black transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-black font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">Resources</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link to="/contributor-guidelines" className="text-xs sm:text-sm text-gray-500 hover:text-black transition-colors">Contributors</Link></li>
                <li><Link to="/maintainer-guidelines" className="text-xs sm:text-sm text-gray-500 hover:text-black transition-colors">Maintainers</Link></li>
                {/* <li><a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">API Reference</a></li> */}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-black font-semibold mb-4 text-sm">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+18001234567" className="flex items-start gap-2 sm:gap-3 group">
                    <FaPhoneAlt className="text-gray-400 mt-0.5 group-hover:text-black transition-colors" size={12} />
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-medium text-black">Phone</span>
                      <span className="text-xs sm:text-sm text-gray-500 group-hover:text-black transition-colors">+1 (800) 123-4567</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://maps.google.com/?q=College+of+Engineering+Chengannur" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 sm:gap-3 group">
                    <FaMapMarkerAlt className="text-gray-400 mt-0.5 group-hover:text-black transition-colors" size={12} />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-black">Email</span>
                      <span className="text-sm text-gray-500 group-hover:text-black transition-colors">hello@gdg-opensource.com</span>
                    </div>
                  </a> */}
                </li>
                <li>
                  <a href="https://maps.google.com/?q=College+of+Engineering+Chengannur" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                    <FaMapMarkerAlt className="text-gray-400 mt-0.5 group-hover:text-black transition-colors" size={14} />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-black">Location</span>
                      <span className="text-sm text-gray-500 group-hover:text-black transition-colors">College of Engineering Chengannur,<br/>Alappuzha, Kerala - 689121</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-6 sm:pt-8 border-t border-gray-100 flex flex-col-reverse sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} GDG CEC. All rights reserved.
          </p>
          
          <div className="flex gap-5">
            <a href="#" className="text-gray-400 hover:text-[#E1306C] transition-colors" aria-label="Instagram">
              <FaInstagram size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#0077B5] transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
