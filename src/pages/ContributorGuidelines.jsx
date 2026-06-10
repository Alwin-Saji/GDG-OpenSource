import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CodeTerminal = () => {
  const [activeTab, setActiveTab] = useState('terrible'); // 'terrible' or 'standard'

  const terribleCode = `def sum(a):
    t=0
    for i in range(len(a)):
        t=t+a[i]['p']
    return t

result = sum(cart)
print(result)


`;

  const standardCode = `def calculate_total(cart):
    # Calculates the total price
    total_price = 0
    
    for item in cart:
        total_price = total_price + item['price']
        
    return total_price

total = calculate_total(shopping_cart)
print("Total:", total)`;

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/10 border border-gray-800 bg-[#0d1117] text-gray-300 font-mono text-sm mt-8">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex bg-[#0d1117] rounded-md p-1 border border-gray-800">
          <button 
            onClick={() => setActiveTab('terrible')}
            className={`px-3 py-1 rounded text-xs transition-colors ${activeTab === 'terrible' ? 'bg-red-500/10 text-red-400 font-medium' : 'text-gray-500 hover:text-gray-300'}`}
          >
            bad_code.py
          </button>
          <button 
            onClick={() => setActiveTab('standard')}
            className={`px-3 py-1 rounded text-xs transition-colors ${activeTab === 'standard' ? 'bg-green-500/10 text-green-400 font-medium' : 'text-gray-500 hover:text-gray-300'}`}
          >
            clean_code.py
          </button>
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 relative h-[340px] md:h-[280px] overflow-hidden text-[13px] leading-relaxed">
        <AnimatePresence mode="wait">
          <motion.pre
            key={activeTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="m-0 whitespace-pre-wrap break-words"
          >
            <code className={activeTab === 'terrible' ? 'text-red-300' : 'text-[#a5d6ff]'}>
              {activeTab === 'terrible' ? terribleCode : standardCode}
            </code>
          </motion.pre>
        </AnimatePresence>
      </div>
    </div>
  );
};

const ContributorGuidelines = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Code of Conduct",
      content: (
        <>
          <p className="mb-4">We are committed to providing a welcoming and inspiring community for all. Please be respectful and considerate in all interactions.</p>
          <p>Harassment and exclusionary behavior aren't acceptable. This includes threats of violence, discriminatory language, and personal insults.</p>
        </>
      ),
      color: "#4285F4" // Blue
    },
    {
      title: "How to Contribute",
      content: (
        <>
          <p className="mb-4">There are many ways to contribute, and we appreciate all of them. You can:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Report bugs and suggest new features.</li>
            <li>Improve documentation or translate it.</li>
            <li>Write code to fix bugs or add features.</li>
            <li>Help answer questions in the community.</li>
          </ul>
        </>
      ),
      color: "#EA4335" // Red
    },
    {
      title: "Code Standards",
      content: (
        <>
          <p>We enforce a strict standard of code quality. Submissions should be readable, well-documented, and efficient.</p>
          <p className="mt-4">Avoid 'magic numbers', poorly named variables, and overly complex logic blocks. Use the interactive terminal below to see what we expect:</p>
          <CodeTerminal />
        </>
      ),
      color: "#FBBC04" // Yellow
    },
    {
      title: "Pull Request Process",
      content: (
        <>
          <p className="mb-4">Follow these steps to ensure a smooth integration:</p>
          <ol className="list-decimal pl-5 space-y-3">
            <li>Fork the repo and create your branch from <code className="bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 px-1.5 py-0.5 rounded text-sm text-gray-800 dark:text-gray-300 font-mono">main</code>.</li>
            <li>If you've added code that should be tested, add tests.</li>
            <li>Ensure the test suite passes locally before pushing.</li>
            <li>Make sure your code lints and adheres to the code standards.</li>
            <li>Submit your PR with a clear, descriptive summary of changes!</li>
          </ol>
        </>
      ),
      color: "#34A853" // Green
    }
  ];

  return (
    <main className="min-h-screen pt-28 md:pt-40 pb-20 md:pb-32 bg-white dark:bg-black selection:bg-gray-100 dark:selection:bg-white/10 selection:text-black dark:selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="mb-20 md:mb-32"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-gray-900 dark:text-white mb-6">
            Contributor Guide.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-light max-w-xl leading-relaxed">
            Everything you need to know to start contributing high-quality code to our ecosystem.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {sections.map((section, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="border-t border-gray-100 dark:border-white/10 pt-8 group"
            >
              <div className="flex flex-col md:flex-row md:gap-16">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <h2 className="text-2xl font-medium text-gray-900 dark:text-white tracking-tight flex items-center gap-3">
                    <span 
                      className="w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover:scale-150" 
                      style={{ backgroundColor: section.color }} 
                    />
                    {section.title}
                  </h2>
                </div>
                <div className="md:w-2/3 text-gray-500 dark:text-gray-400 font-light text-sm md:text-lg leading-relaxed pl-5">
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

export default ContributorGuidelines;
