import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold tracking-tight text-black mb-2">GDG.</span>
            <p className="text-gray-500 max-w-xs text-center md:text-left text-sm">Building the future of open source, one contribution at a time.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all">
              <FaGithub size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-gray-100">
          <p>&copy; {new Date().getFullYear()} GDG. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
