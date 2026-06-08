import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiUserPlus, FiTarget, FiGitPullRequest, FiMessageCircle, FiAward } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const Workflow = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const lineRef = useRef(null);
  const dotsRef = useRef([]);

  const steps = [
    {
      number: "01",
      title: "Registration",
      description: "Initialize your profile and explore the matrix of available repositories. Connect your GitHub account to begin.",
      icon: FiUserPlus,
      color: "text-[#4285F4]",
      bg: "bg-[#4285F4]/10",
      hex: "#4285F4",
      rgba: "rgba(66, 133, 244, 0.15)"
    },
    {
      number: "02",
      title: "Find Issue",
      description: "Target an anomaly or feature that matches your specific skill vector. Filter by language, difficulty, or project.",
      icon: FiTarget,
      color: "text-[#EA4335]",
      bg: "bg-[#EA4335]/10",
      hex: "#EA4335",
      rgba: "rgba(234, 67, 53, 0.15)"
    },
    {
      number: "03",
      title: "Submit PR",
      description: "Compile clean logic and inject your pull request into the core. Ensure all tests pass before submission.",
      icon: FiGitPullRequest,
      color: "text-[#FBBC04]",
      bg: "bg-[#FBBC04]/10",
      hex: "#FBBC04",
      rgba: "rgba(251, 188, 4, 0.15)"
    },
    {
      number: "04",
      title: "Review",
      description: "Synchronize with system maintainers to refine and optimize your payload. Address feedback iteratively.",
      icon: FiMessageCircle,
      color: "text-[#34A853]",
      bg: "bg-[#34A853]/10",
      hex: "#34A853",
      rgba: "rgba(52, 168, 83, 0.15)"
    },
    {
      number: "05",
      title: "Merged",
      description: "Integration complete. Your logic is live. Accrue system privileges and climb the global leaderboard.",
      icon: FiAward,
      color: "text-[#4285F4]",
      bg: "bg-[#4285F4]/10",
      hex: "#4285F4",
      rgba: "rgba(66, 133, 244, 0.15)"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Vertical Line filling animation
      gsap.to(lineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      });

      // 2. Highlight step dots as the line passes them
      dotsRef.current.forEach((dot, index) => {
        const step = steps[index];
        gsap.to(dot, {
          borderColor: step.hex,
          scale: 1.15,
          boxShadow: `0 0 25px ${step.rgba}`,
          scrollTrigger: {
            trigger: dot,
            start: "center center",
            toggleActions: "play none none reverse",
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="workflow" ref={sectionRef} className="py-32 bg-white relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-gray-900 mb-6">
            How it works.
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">
            A seamless, vertical integration process designed to get your code into the core as quickly as possible.
          </p>
        </motion.div>

        <div className="relative py-10" ref={trackRef}>
          {/* Base Vertical Track */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[4px] bg-gray-100 transform md:-translate-x-1/2 rounded-full overflow-hidden" />

          {/* Animated GSAP Vertical Fill */}
          <div
            ref={lineRef}
            className="absolute left-8 md:left-1/2 top-0 w-[4px] bg-gradient-to-b from-[#4285F4] via-[#EA4335] via-[#FBBC04] to-[#34A853] transform md:-translate-x-1/2 rounded-full origin-top"
            style={{ height: "0%" }}
          />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <div key={index} className="relative flex items-center w-full min-h-[100px]">

                  {/* Timeline Dot (Smaller) */}
                  <div
                    ref={el => dotsRef.current[index] = el}
                    className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-[4px] border-gray-100 rounded-full flex items-center justify-center shadow-sm z-20"
                  >
                    <span className={`text-sm font-black ${step.color}`}>{step.number}</span>
                  </div>

                  {/* Card Container */}
                  <div className={`w-full flex flex-col md:flex-row ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, type: "spring", bounce: 0.3, delay: 0.1 }}
                      className={`w-full md:w-[45%] pl-24 md:pl-0 ${isEven ? 'md:pr-16 text-left' : 'md:pl-16 text-left'}`}
                    >
                      {/* Compact Horizontal Card */}
                      <div className="relative group p-6 bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 flex items-start gap-5">

                        {/* Compact Icon */}
                        <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border border-white/50" style={{ backgroundColor: step.rgba }}>
                          <Icon className={`w-5 h-5 ${step.color}`} />
                        </div>

                        {/* Compact Typography */}
                        <div>
                          <div className="text-xs font-black tracking-widest uppercase mb-1" style={{ color: step.hex }}>
                            Phase {step.number}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                            {step.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed font-medium">
                            {step.description}
                          </p>
                        </div>

                      </div>
                    </motion.div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
