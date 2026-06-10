import React from 'react';
import { MdAdsClick, MdGroups, MdBolt } from 'react-icons/md';

const About = () => {
  const features = [
    {
      id: "01",
      icon: <MdAdsClick className="text-[#4285F4] w-6 h-6 md:w-8 md:h-8" />,
      title: "Precision Targeting",
      description: "Contribute to high-impact algorithms that solve real-world complexities. Your code directly powers the next generation of solutions.",
      borderColor: "group-hover:bg-[#4285F4]",
      textColor: "group-hover:text-[#4285F4]"
    },
    {
      id: "02",
      icon: <MdGroups className="text-[#EA4335] w-6 h-6 md:w-8 md:h-8" />,
      title: "Collective Intelligence",
      description: "Interface with a diverse network of developers and mentors who are actively pushing the boundaries of open-source architecture.",
      borderColor: "group-hover:bg-[#EA4335]",
      textColor: "group-hover:text-[#EA4335]"
    },
    {
      id: "03",
      icon: <MdBolt className="text-[#34A853] w-6 h-6 md:w-8 md:h-8" />,
      title: "Velocity Acceleration",
      description: "Exponentially increase your technical capabilities through high-velocity iteration and deep code reviews.",
      borderColor: "group-hover:bg-[#34A853]",
      textColor: "group-hover:text-[#34A853]"
    }
  ];

  return (
    <section id="about" className="min-h-[100dvh] lg:h-screen flex items-center justify-center py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full">

        {/* Header */}
        <div className="mb-12 lg:mb-20 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 lg:gap-8 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-white tracking-tighter leading-tight md:leading-none">
           <span className="font-doto font-bold text-8xl">Why</span> <br className="hidden md:block" />
            <span className="font-medium text-transparent bg-clip-text bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC04,#34A853)]">Contribute?</span>
          </h2>
          <p className="text-gray-200 text-lg md:text-base lg:text-lg font-light max-w-md leading-relaxed pb-1 md:pb-2">
            An environment built for developers to dominate the open-source ecosystem. We engineer the bridge between raw potential and scalable contribution.
          </p>
        </div>

        {/* Features in 1 Row */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex-1 flex flex-col cursor-default"
            >
              {/* Colored Line Indicator */}
              {/* <div className={`h-[2px] w-full bg-gray-100 mb-6 lg:mb-8 transition-colors duration-500 ${feature.borderColor}`}></div> */}

              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg md:text-lg lg:text-xl font-medium text-white tracking-tight transition-colors duration-300 ${feature.textColor}`}>
                  {feature.title}
                </h3>
                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              <p className="text-white text-[14px] md:text-sm lg:text-base font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
