import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "Who can participate in the open-source program?",
    answer: "Anyone! Whether you're a beginner looking to make your first contribution or an experienced developer, our community welcomes everyone.",
    color: "#4285F4" // Google Blue
  },
  {
    question: "What kind of projects are available?",
    answer: "We have a diverse range of projects including web applications, machine learning models, mobile apps, and developer tools. You can choose based on your interests and skill set.",
    color: "#EA4335" // Google Red
  },
  {
    question: "How do I get started?",
    answer: "Start by registering for the program, joining our community channels, and checking out the 'Good First Issues' on our GitHub repositories.",
    color: "#FBBC04" // Google Yellow
  },
  {
    question: "Is there any mentorship provided?",
    answer: "Yes, we pair contributors with experienced mentors who will guide you through the process, help with code reviews, and provide technical support.",
    color: "#34A853" // Google Green
  },
  {
    question: "Do I need to know specific programming languages?",
    answer: "No specific language is strictly required, but familiarity with JavaScript, Python, or Go can be very helpful depending on the project you choose.",
    color: "#4285F4" // Google Blue
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-32 bg-white relative">
      <div className="w-[80vw] md:w-full max-w-3xl mx-auto md:px-6 lg:px-8">
        
        <div className="mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 tracking-tight">
            FAQ
          </h2>
        </div>

        <div className="border-t border-gray-200">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="border-b border-gray-200 group"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 md:py-8 flex items-center justify-between text-left focus:outline-none"
                >
                  <span 
                    className="text-md md:text-2xl font-light transition-colors duration-500"
                    style={{ color: isOpen ? faq.color : '#111827' }}
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
                      <div className="pb-6 md:pb-8 text-gray-500 font-light text-sm md:text-lg leading-relaxed pr-6 md:pr-12">
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
