import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiUserPlus, FiTarget, FiGitPullRequest, FiMessageCircle, FiAward } from 'react-icons/fi';
import SectionDivider from '../components/SectionDivider';

gsap.registerPlugin(ScrollTrigger);

const Workflow = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const lineRef = useRef(null);
  const dotsRef = useRef([]);
  const timelineSectionRef = useRef(null);
  const timelineContentRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Registration",
      description: "Initialize your profile and explore the available repositories.",
      icon: FiUserPlus,
      color: "text-[#4285F4]",
      bg: "bg-[#4285F4]/10",
      hex: "#4285F4",
      rgba: "rgba(66, 133, 244, 0.15)",
      hoverText: "group-hover:text-[#4285F4]"
    },
    {
      number: "02",
      title: "Find Issue",
      description: "Target an issue or a feature that matches your specific skill vector. Filter by programming language, difficulty, or project.",
      icon: FiTarget,
      color: "text-[#EA4335]",
      bg: "bg-[#EA4335]/10",
      hex: "#EA4335",
      rgba: "rgba(234, 67, 53, 0.15)",
      hoverText: "group-hover:text-[#EA4335]"
    },
    {
      number: "03",
      title: "Submit PR",
      description: "Compile clean logic and add your pull request into the core. Ensure all tests pass before submission.",
      icon: FiGitPullRequest,
      color: "text-[#FBBC04]",
      bg: "bg-[#FBBC04]/10",
      hex: "#FBBC04",
      rgba: "rgba(251, 188, 4, 0.15)",
      hoverText: "group-hover:text-[#FBBC04]"
    },
    {
      number: "04",
      title: "Review",
      description: "Synchronize with system maintainers to refine and optimize your pull request. Address the feedbacks iteratively.",
      icon: FiMessageCircle,
      color: "text-[#34A853]",
      bg: "bg-[#34A853]/10",
      hex: "#34A853",
      rgba: "rgba(52, 168, 83, 0.15)",
      hoverText: "group-hover:text-[#34A853]"
    },
    {
      number: "05",
      title: "Merged",
      description: "Integration complete. Your logic is live and it becomes a part of the repository's permanent history",
      icon: FiAward,
      color: "text-[#4285F4]",
      bg: "bg-[#4285F4]/10",
      hex: "#4285F4",
      rgba: "rgba(66, 133, 244, 0.15)",
      hoverText: "group-hover:text-[#4285F4]"
    }
  ];

  const timelineEvents = [
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

      // 3. Horizontal scroll for Timeline on mobile
      let mm = gsap.matchMedia();
      mm.add("(max-width: 1023px)", () => {
        if (timelineContentRef.current && timelineSectionRef.current) {
          let getScrollAmount = () => {
            let amount = timelineContentRef.current.scrollWidth - timelineSectionRef.current.offsetWidth + 48;
            return amount > 0 ? amount : 0;
          };

          const timelineWrapper = timelineContentRef.current.parentElement;

          gsap.to(timelineContentRef.current, {
            x: () => -getScrollAmount(),
            ease: "none",
            scrollTrigger: {
              trigger: timelineWrapper,
              start: "center center",
              end: () => `+=${getScrollAmount()}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            }
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="workflow" ref={sectionRef} className="py-16 sm:py-24 md:py-32 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 sm:mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24 md:mb-32"
        >
          <h2 className="text-4xl md:text-7xl font-bold font-doto tracking-tighter text-white mb-6">
            How it works.
          </h2>
          <p className="text-[#E8D98A] text-md md:text-xl max-w-2xl mx-auto">
            A seamless, vertical integration process designed to get your code into the core as quickly as possible.
          </p>
        </motion.div>

        <div className="relative py-10" ref={trackRef}>
          {/* Base Vertical Track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-[#4A0A0F] transform md:-translate-x-1/2 rounded-full overflow-hidden" />

          {/* Animated GSAP Vertical Fill */}
          <div
            ref={lineRef}
            className="absolute left-6 md:left-1/2 top-0 w-[3px] bg-[linear-gradient(to_bottom,#4285F4,#EA4335,#FBBC04,#34A853)]  transform md:-translate-x-1/2 rounded-full origin-top"
            style={{ height: "0%" }}
          />

          <div className="space-y-10 md:space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <div key={index} className="relative flex items-center w-full min-h-[100px]">

                  {/* Timeline Dot (Smaller) */}
                  <div
                    ref={el => dotsRef.current[index] = el}
                    className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-11 md:h-11 bg-red-900 border-[2px] border-red-950 rounded-full flex items-center justify-center shadow-sm z-20"
                  >
                    <span className={`text-xs md:text-sm font-black ${step.color}`}>{step.number}</span>
                  </div>

                  {/* Card Container */}
                  <div className={`w-full flex flex-col md:flex-row ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, type: "spring", bounce: 0.3, delay: 0.1 }}
                      className={`w-full md:w-[45%] pl-16 sm:pl-20 md:pl-0 ${isEven ? 'md:pr-16 text-left' : 'md:pl-16 text-left'}`}
                    >
                      {/* Ultra-Minimalist Full-Border Design */}
                      <div className="relative group p-5 sm:p-6 rounded-xl flex flex-row items-center justify-between gap-4 sm:gap-6 cursor-pointer">

                        {/* Default Border */}
                        <div className="absolute inset-0 rounded-xl border border-orange-900 transition-colors duration-500 group-hover:border-transparent pointer-events-none" />

                        {/* Full Color Border on Hover */}
                        <div
                          className="absolute inset-0 rounded-xl border transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 pointer-events-none"
                          style={{ borderColor: step.hex, boxShadow: `inset 0 0 10px ${step.rgba}, 0 0 10px ${step.rgba}` }}
                        />

                        {/* Content */}
                        <div className="relative z-10 group">
                          <h3 className={`text-md uppercase font-doto font-semibold md:text-xl text-[#B8C7A8] ${step.hoverText} mb-1.5 tracking-tight transition-colors duration-300`}>
                            {step.title}
                          </h3>
                          <p className="text-[#E8D98A] group-hover:text-white text-[12px] md:text-sm leading-relaxed max-w-sm transition-colors duration-300">
                            {step.description}
                          </p>
                        </div>

                        {/* Icon */}
                        <div className="shrink-0 relative z-10">
                          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${step.color} grayscale group-hover:grayscale-0 transition-all duration-500`} />
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

      <SectionDivider />

      {/* Timeline Section integrated here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16" ref={timelineSectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-8xl font-doto font-bold tracking-tight text-white mb-6">
            The Timeline.
          </h2>
          <p className="text-[#E8D98A]  text-md md:text-xl max-w-2xl">
            A precise schedule orchestrating the open source contribution period from initiation to final evaluation.
          </p>
        </motion.div>

        <div className="relative overflow-hidden pb-12 hide-scrollbar">
          <div className="min-w-[1200px] relative pt-12 px-4" ref={timelineContentRef}>
            {/* Horizontal Track with Gradient */}
            <div className="absolute top-[55px] left-0 right-0 h-[1px] bg-gradient-to-r from-white/70 via-white to-white/70"></div>

            <div className="flex justify-between gap-12 relative z-10">
              {timelineEvents.map((item, index) => (
                <div
                  key={index}
                  className="flex-1 min-w-[200px] relative group cursor-pointer"
                >
                  {/* Immersive Node Dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15, type: "spring", bounce: 0.4 }}
                    className="flex justify-center mb-10 relative"
                  >
                    {/* Glowing backdrop on hover */}
                    <div className={`absolute inset-0 m-auto w-12 h-12 rounded-full ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                    <div className={`w-3 h-3 rounded-full shadow-md ${item.color} relative z-10 ring-4 ring-white transition-all duration-500 group-hover:scale-150 group-hover:ring-gray-50`}></div>
                  </motion.div>

                  {/* Timeline Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.15 + 0.1, ease: "easeOut" }}
                    className="relative transition-all duration-500 group-hover:-translate-y-2 pb-4"
                  >
                    {/* Animated Bottom Border */}
                    <div className={`absolute left-0 bottom-0 h-[2px] transition-all duration-500 w-0 group-hover:w-full ${item.color} rounded-full`}></div>

                    <div className="text-[10px] md:text-xs md:font-semibold tracking-widest text-gray-300 mb-4 uppercase flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full ${item.color}`}></span>
                      {item.date}
                    </div>
                    <h3 className={`text-md md:text-xl font-medium uppercase text-[#B8C7A8] mb-3 leading-snug transition-all duration-300 ${item.clip}`}>
                      {item.event}
                    </h3>
                    <p className="text-[#E8D98A] text-[12px] md:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
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

export default Workflow;
