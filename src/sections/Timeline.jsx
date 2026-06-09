import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    {
      date: "Jun 15",
      event: "Applications Open",
      description: "Start of the registration period. Register your profile.",
      color: "bg-[#4285F4]",
      clip: "group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#4285F4] group-hover:to-[#8AB4F8]"
    },
    {
      date: "Jun 18 - Jun 21",
      event: "Contributor Onboarding",
      description: "Training sessions and introductions to the open source workflow.",
      color: "bg-[#34A853]",
      clip: "group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#34A853] group-hover:to-[#81C995]"
    },
    {
      date: "Jun 22",
      event: "Issues Released",
      description: "Contributions open. Start looking for issues matching your skills.",
      color: "bg-[#FBBC04]",
      clip: "group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FBBC04] group-hover:to-[#FCE8B2]"
    },
    {
      date: "Jun 22 - Jun 28",
      event: "Contribution Period",
      description: "Submit pull requests and collaborate with maintainers.",
      color: "bg-[#EA4335]",
      clip: "group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#EA4335] group-hover:to-[#F28B82]"
    },
    {
      date: "July 2",
      event: "Final Evaluation",
      description: "Results are announced and rewards are distributed.",
      color: "bg-[#4285F4]",
      clip: "group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#4285F4] group-hover:to-[#8AB4F8]"
    }
  ];

  return (
    <section id="timeline" className="py-16 sm:py-20 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
            Timeline.
          </h2>
          <p className="text-gray-500 text-base sm:text-lg font-medium">
            The schedule for the open source contribution period.
          </p>
        </div>

        <div className="relative overflow-x-auto pb-8 hide-scrollbar">
          <div className="min-w-[700px] sm:min-w-[900px] relative pt-6">
            {/* Horizontal Track */}
            <div className="absolute top-[31px] left-0 right-0 h-[2px] bg-gray-100 rounded-full"></div>

            <div className="flex justify-between gap-4 sm:gap-6 md:gap-8 relative z-10">
              {events.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-1 min-w-[140px] sm:min-w-[160px] relative group"
                >
                  {/* Node Dot */}
                  <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white shadow-sm mb-4 sm:mb-6 ${item.color} relative z-10 transition-transform duration-300 group-hover:scale-125`}></div>

                  {/* Content */}
                  <div className="pr-2 sm:pr-4">
                    <div className="text-xs sm:text-sm font-bold tracking-wider text-gray-400 mb-1.5 sm:mb-2 uppercase">
                      {item.date}
                    </div>
                    <h3 className={`text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 leading-tight transition-all duration-300 ${item.clip}`}>
                      {item.event}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Timeline;
