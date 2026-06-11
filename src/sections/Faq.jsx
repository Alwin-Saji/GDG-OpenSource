import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "Who can participate in the open-source program?",
    answer: "Anyone! Whether you're a beginner looking to make your first contribution or an experienced developer, our community welcomes everyone.",
    color: "#669DF6" // Medium Blue
  },
  {
    question: "What do I need before I can start contributing?",
    answer: "You need three things: a GitHub account, Git installed on your machine, and a code editor. Once set up, fork the repository you want to contribute to, clone it locally, and follow the setup instructions in the README. Make sure the project runs on your machine before picking up any issue.",
    color: "#EE675C" // Medium Red
  },
  {
    question: "What counts as a valid contribution for scoring?",
    answer: "Only merged pull requests count. A PR that is submitted but not merged does not contribute to your score. Focus on doing the work well rather than submitting as many PRs as possible.",
    color: "#FCC936" // Medium Yellow
  },
  {
    question: "Can I use AI tools like ChatGPT or GitHub Copilot?",
    answer: "AI assistance may be permitted.Maintainers may ask you to explain your implementation. Blindly pasting generated code you do not understand is not acceptable",
    color: "#5BB974" // Medium Green
  },
  {
    question: "Do I need to know specific programming languages?",
    answer: "No specific language is strictly required, but familiarity with JavaScript, Python and so on can be very helpful depending on the project you choose.",
    color: "#669DF6" // Medium Blue
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-32 relative">
      <div className="w-[80vw] md:w-full max-w-3xl mx-auto md:px-6 lg:px-8">
        
        <div className="mb-10 md:mb-16">
          <h2 className="text-4xl font-doto md:text-8xl font-bold text-center text-white tracking-tight">
            FAQs
          </h2>
        </div>

        <div className="border-t border-gray-400/40">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="border-b border-gray-300/40 group"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 md:py-8 flex items-center justify-between text-left focus:outline-none"
                >
                  <span 
                    className="text-md md:text-2xl font-light transition-colors duration-500"
                    style={{ color: isOpen ? faq.color : '#E8D98A' }}
                  >
                    {faq.question}
                  </span>
                  
                  {/* Custom Minimalist Plus/Minus Icon */}
                  <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ml-4 sm:ml-6 flex items-center justify-center">
                    <motion.div 
                      className="absolute w-full h-[1.5px]"
                      style={{ backgroundColor: isOpen ? faq.color : '#9CA3AF' }}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    />
                    <motion.div 
                      className="absolute w-[1.5px] h-full"
                      style={{ backgroundColor: isOpen ? faq.color : '#9CA3AF' }}
                      animate={{ 
                        rotate: isOpen ? 180 : 0,
                        opacity: isOpen ? 0 : 1,
                        scaleY: isOpen ? 0 : 1
                      }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
                        opacity: { duration: 0.4, delay: 0.1 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 md:pb-8 text-white font-[400] text-sm md:text-lg leading-relaxed pr-6 md:pr-12">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
