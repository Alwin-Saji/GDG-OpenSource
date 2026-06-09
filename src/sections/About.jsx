import React from 'react';
import { MdAdsClick, MdGroups, MdBolt } from 'react-icons/md';

const About = () => {
  const features = [
    {
      icon: <MdAdsClick className="text-gray-400 group-hover:text-[#4285F4] transition-colors duration-300" size={24} />,
      title: "Hands-On Contribution",
      description: "Pick real issues from curated open source projects, work directly with maintainers, and get your pull requests reviewed and merged into production codebases.",
      gradientClass: "group-hover:bg-gradient-to-r group-hover:from-[#4285F4] group-hover:to-[#EA4335]"
    },
    {
      icon: <MdGroups className="text-gray-400 group-hover:text-[#EA4335] transition-colors duration-300" size={24} />,
      title: "Guided by Maintainers",
      description: "Every project comes with a dedicated maintainer who knows the codebase inside out — they'll assign issues, review your PRs, and help you grow as a contributor.",
      gradientClass: "group-hover:bg-gradient-to-r group-hover:from-[#EA4335] group-hover:to-[#FBBC04]"
    },
    {
      icon: <MdBolt className="text-gray-400 group-hover:text-[#34A853] transition-colors duration-300" size={24} />,
      title: "Build Your GitHub Profile",
      description: "Every merged PR is a permanent mark on your GitHub. Walk away from GDG Season of Code with real contributions, real experience, and a profile that speaks for itself.",
      gradientClass: "group-hover:bg-gradient-to-r group-hover:from-[#FBBC04] group-hover:to-[#34A853]"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center border-y border-gray-100 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">

        {/* Left Side: Sticky/Static Header */}
        <div className="md:w-1/3 flex flex-col justify-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight mb-4 sm:mb-6 leading-tight">
            Why <br className="hidden sm:block" />
            <span className="font-medium text-transparent bg-clip-text bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC04,#34A853)]">Contribute?</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg font-light leading-relaxed">
            GDG Season of Code is a community-run open source program by GDG on Campus CEC, designed to break down the barrier between writing code and contributing to real-world projects. Beginner or experienced — you'll find a project that fits. Maintainers guide you, the community supports you, and your pull requests actually matter.
          </p>
        </div>

        {/* Right Side: Typographic List (No Cards) */}
        <div className="md:w-2/3 flex flex-col">
          <div className="border-t border-gray-200">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 md:gap-10 py-6 sm:py-8 md:py-10 border-b border-gray-200 hover:bg-gray-50/50 transition-colors duration-500 cursor-default"
              >
                <div className="mt-1 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>

                <div className="flex-1">
                  <h3 className={`text-xl sm:text-2xl font-medium text-gray-900 mb-2 sm:mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300 ${feature.gradientClass}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-light text-base sm:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
