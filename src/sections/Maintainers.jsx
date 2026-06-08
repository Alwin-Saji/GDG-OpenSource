import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const Maintainers = () => {
  const maintainers = [
    { name: "Alex Rivera", role: "Project Lead", github: "#", website: "#" },
    { name: "Sarah Chen", role: "Frontend Architect", github: "#", website: "#" },
    { name: "Marcus Thorne", role: "Backend Lead", github: "#", website: "#" },
    { name: "Elena Volkov", role: "Developer Advocate", github: "#", website: "#" }
  ];

  return (
    <section id="maintainers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-16 text-center">
          Maintainers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {maintainers.map((person, index) => (
            <div key={index} className="minimal-card rounded-2xl p-8 text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 border border-gray-200 group-hover:border-black transition-all overflow-hidden group-hover:-translate-y-1">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${person.name}`} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
              <p className="text-gray-500 text-sm mb-6 font-mono">{person.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={person.github} className="text-gray-400 hover:text-black transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href={person.website} className="text-gray-400 hover:text-black transition-colors">
                  <FaGlobe size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Maintainers;
