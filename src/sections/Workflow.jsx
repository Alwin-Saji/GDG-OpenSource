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
  const timelineSectionRef = useRef(null);
  const timelineContentRef = useRef(null);

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
    <section id="workflow" ref={sectionRef} className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 sm:mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24 md:mb-32"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6">
            How it works.
          </h2>
          <p className="text-gray-500 text-md md:text-xl max-w-2xl mx-auto">
            A seamless, vertical integration process designed to get your code into the core as quickly as possible.
          </p>
        </motion.div>

        <div className="relative py-10" ref={trackRef}>
          {/* Base Vertical Track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-gray-100 transform md:-translate-x-1/2 rounded-full overflow-hidden" />

          {/* Animated GSAP Vertical Fill */}
          <div
            ref={lineRef}
            className="absolute left-6 md:left-1/2 top-0 w-[3px] bg-gradient-to-b from-[#4285F4] via-[#EA4335] via-[#FBBC04] to-[#34A853] transform md:-translate-x-1/2 rounded-full origin-top"
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
                    className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-white border-[2px] border-gray-100 rounded-full flex items-center justify-center shadow-sm z-20"
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
                      {/* Minimalist Card */}
                      <div className="relative group py-4 transition-all border border-transparent hover:border-black px-2 sm:px-4 rounded-xl duration-500 flex flex-row items-start justify-between gap-4 sm:gap-6 opacity-80 hover:opacity-100">

                        <div>
                          {/* <div className="text-xs font-semibold tracking-wider text-gray-600 mb-2 uppercase">
                            Phase {step.number}
                          </div> */}
                          <h3 className="text-md uppercase font-bold md:text-xl text-gray-900 mb-2 tracking-tight">
                            {step.title}
                          </h3>
                          <p className="text-gray-900 text-[12px] md:text-sm leading-relaxed max-w-sm">
                            {step.description}
                          </p>
                        </div>

                        <div className="shrink-0 mt-1">
                          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${step.color}`} />
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

      {/* Timeline Section integrated here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16" ref={timelineSectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            The Timeline.
          </h2>
          <p className="text-gray-500 text-md md:text-xl font-light max-w-2xl">
            A precise schedule orchestrating the open source contribution period from initiation to final evaluation.
          </p>
        </motion.div>

        <div className="relative overflow-hidden pb-12 hide-scrollbar">
          <div className="min-w-[1000px] relative pt-12 px-4" ref={timelineContentRef}>
            {/* Horizontal Track with Gradient */}
            <div className="absolute top-[55px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

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

                  {/* Luxurious Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.15 + 0.1, ease: "easeOut" }}
                    className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] group-hover:-translate-y-2 group-hover:border-gray-100"
                  >
                    <div className="text-[10px] md:text-xs md:font-semibold tracking-widest text-gray-400 mb-4 uppercase flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full ${item.color}`}></span>
                      {item.date}
                    </div>
                    <h3 className={`text-md md:text-xl font-medium text-gray-900 mb-3 leading-snug transition-all duration-300 ${item.clip}`}>
                      {item.event}
                    </h3>
                    <p className="text-gray-500 text-[12px] md:text-sm font-light leading-relaxed">
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
