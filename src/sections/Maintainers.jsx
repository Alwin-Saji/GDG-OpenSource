import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const Maintainers = () => {
  const maintainers = [
    { name: "Alex Rivera", github: "#", website: "#" },
    { name: "Sarah Chen", github: "#", website: "#" },
    { name: "Marcus Thorne", github: "#", website: "#" },
    { name: "Elena Volkov", github: "#", website: "#" }
  ];

  return (
    <section id="maintainers" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-doto md:text-8xl font-bold text-white mb-16 text-center">
          Maintainers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {maintainers.map((person, index) => (
            <div key={index} className="minimal-card rounded-2xl p-8 text-center group" style={{backgroundColor: "#E8D98A",borderStyle:"solid",borderWidth:"3px",borderColor:"#B8C7A8"}}>
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 border border-gray-200 group-hover:border-black transition-all overflow-hidden group-hover:-translate-y-1">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${person.name}`} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-serif text-[#40740a] mb-6">{person.name}</h3>
              <div className="flex justify-center space-x-4">
                <a href={person.github} className="text-gray-400 hover:text-black transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href={person.website} className="text-gray-400 hover:text-white transition-colors">
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
