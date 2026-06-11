import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const MaintainerGuidelines = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Responsibilities",
      content: (
        <>
          <p className="mb-4">As a maintainer, you are an ambassador for the project. Your core responsibilities include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reviewing and merging Pull Requests efficiently.</li>
            <li>Triage new issues and assign appropriate labels.</li>
            <li>Mentoring new contributors and fostering a welcoming environment.</li>
            <li>Ensuring the project's codebase remains healthy and performant.</li>
          </ul>
        </>
      ),
      color: "#34A853" // Green
    },
    {
      title: "The Art of Reviewing",
      content: (
        <>
          <p className="mb-4">When reviewing PRs, strive to be constructive and empathetic. Point out improvements clearly and explain *why* a change is needed.</p>
          <div className="pl-6 border-l-2 border-gray-100 my-8 py-2">
            <p className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-widest">Instead of</p>
            <p className="font-mono text-sm text-gray-800 mb-6 bg-gray-50 p-3 rounded-md">"This is wrong. Use a switch statement."</p>
            
            <p className="text-[#4285F4] text-xs font-medium mb-2 uppercase tracking-widest">Try saying</p>
            <p className="font-mono text-sm text-gray-200 bg-[#4285F4]/20 border border-[#4285F4]/10 p-3 rounded-md">"Thanks for this! I noticed we have a few nested conditionals here. What do you think about using a switch statement to make it a bit more readable?"</p>
          </div>
          <p>Always thank the contributor for their effort, regardless of whether the PR is accepted.</p>
        </>
      ),
      color: "#4285F4" // Blue
    },
    {
      title: "Handling Conflicts",
      content: (
        <>
          <p>Open source involves diverse opinions. When disagreements happen, refer immediately back to our Code of Conduct.</p>
          <p className="mt-4">Attempt to de-escalate discussions, focus on technical merits, and never hesitate to bring in the co-maintainers for a second opinion.</p>
        </>
      ),
      color: "#EA4335" // Red
    }
  ];

  return (
    <main className="min-h-screen pt-28 md:pt-40 pb-20 md:pb-32 selection:bg-gray-100 selection:text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="mb-20 md:mb-32"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tighter text-white font-doto font-bold mb-6">
            Maintainer Manual.
          </h1>
          <p className="text-lg md:text-xl text-[#E8D98A] max-w-xl leading-relaxed">
            Principles, practices, and expectations for the stewards of our open-source ecosystem.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-20">
          {sections.map((section, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="border-t border-gray-100 pt-8 group"
            >
              <div className="flex flex-col md:flex-row md:gap-16">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <h2 className="text-2xl font-medium text-[#B8C7A8] tracking-tight flex items-center gap-3">
                    <span 
                      className="w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover:scale-150" 
                      style={{ backgroundColor: section.color }} 
                    />
                    {section.title}
                  </h2>
                </div>
                <div className="md:w-2/3 text-gray-100 font-light text-sm md:text-lg leading-relaxed pl-5">
                  {section.content}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

      </div>
    </main>
  );
};

export default MaintainerGuidelines;
