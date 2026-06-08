import React from 'react';
import { MdEmail, MdChevronRight } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const Register = () => {
  return (
    <section id="register" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-3xl p-12 md:p-20 text-center shadow-sm">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-6">
            Ready to Build?
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed font-normal">
            Join the community and start contributing to high-impact open source projects today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center space-x-3 px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors group">
              <FaGithub size={20} className="mr-2" />
              <span>Register via GitHub</span>
              <MdChevronRight size={22} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center space-x-3 px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-300 transition-all">
              <MdEmail size={20} className="text-gray-500" />
              <span>Subscribe Updates</span>
            </button>
          </div>
          
          <p className="mt-10 text-gray-400 text-sm font-mono">
            // No spam. Open source updates only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
