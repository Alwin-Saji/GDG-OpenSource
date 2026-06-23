import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaRegFolderOpen } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

const projects = [
  {
    id: 1,
    name: 'AgriScope',
    description: "Real-time Agricultural Intelligence Web Dashboard for Kerala's 14 districts. Combines live weather, crop health scoring, market prices, flood risk, disease alerts, NASA satellite imagery, and Gemini AI advisory in a single browser app.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/vvramxcec/agriscope',
    stars: 0,
    forks: 0,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Bunkmate',
    description: 'Smart Attendance Tracker Mobile Application for Students',
    tags: ['React Native', 'Expo'],
    githubUrl: 'https://github.com/kichu12348/BunkMate',
    stars: 0,
    forks: 1,
    color: 'bg-green-500'
  },
  {
    id: 3,
    name: 'PharmaNear',
    description: 'Full-stack web application designed to bridge the gap between users searching for specific medicines and nearby pharmacies that stock them. It offers an intuitive search experience for users and a secure admin dashboard for pharmacy owners to manage inventory and profile details efficiently.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS', 'Render'],
    githubUrl: 'https://github.com/Foces-core/PharmaNear-by-Foces',
    stars: 0,
    forks: 2,
    color: 'bg-yellow-500'
  },
  // {
  //   id: 4,
  //   name: 'Media Authentication Platform',
  //   description: 'Dual-layer invisible watermarking and perceptual fingerprinting for robust image provenance, tamper detection, and Watermarking-as-a-Service (WaaS).',
  //   tags: ['Go', 'React'],
  //   githubUrl: 'https://github.com/JacobGeorgeMathew/MiniProject_Media_Authentication_Platform-',
  //   stars: 1,
  //   forks: 0,
  //   color: 'bg-red-500'
  // },
  // {
  //   id: 5,
  //   name: 'Viora AI',
  //   description: 'Advanced health, fitness, and diet companion web platform. Powered by the Google Gemini API, it provides users with real-time, context-aware insights, AI-driven food scanning, and personalized wellness plans to elevate their lifestyle',
  //   tags: ['React', 'Vite', 'TypeScript', 'Radix', 'Gemini API'],
  //   githubUrl: 'https://github.com/VismayaGawriKrishnan/VIORA-AI',
  //   stars: 1,
  //   forks: 1,
  //   color: 'bg-blue-500'
  // },
  // {
  //   id: 6,
  //   name: 'RavenEye',
  //   description: 'A browser extension that extracts selectable text from images and web content using OCR, making captured text searchable and copyable. Built as a lightweight client-sidle extension for fast, on-page text extraction. ',
  //   tags: ['TypeScript', 'JavaScript', 'CSS', 'HTML'],
  //   githubUrl: 'https://github.com/devadarshmay-eng/RavenEye',
  //   stars: 1,
  //   forks: 0,
  //   color: 'bg-green-500'
  // },
  {
    id: 7,
    name: 'Lost and Found',
    description: 'Full-stack web application built to simplify reporting, discovering, and claiming lost items within the college campus. The platform provides a secure and organized workflow where students can upload found/lost items, browse listings, claim belongings, and track item ownership using student authentication.',
    tags: ['HTML', 'Django'],
    githubUrl: 'https://github.com/AswathyyM/lost_and_found_portal',
    stars: 0,
    forks: 0,
    color: 'bg-yellow-500'
  },
  {
    id: 8,
    name: 'ARC (Auto-Real-time Capture)',
    description: 'Web application designed to facilitate real-time photo sharing and capture.',
    tags: ['React','TailwindCSS','Supabase','JavaScript'],
    githubUrl: 'https://github.com/Alwin-Saji/QR',
    stars: 0,
    forks: 0,
    color: 'bg-red-500'
  },
  {
    id: 9,
    name: 'Smart Mess',
    description: 'Web application that provides a centralized platform to manage hostel mess operations.',
    tags: ['Java','PostgreSQL','React', 'CSS'],
    githubUrl: 'https://github.com/rinpoche-06/hms',
    stars: 0,
    forks: 0,
    color: 'bg-blue-500'
  },
  {
    id: 10,
    name: 'SPARE',
    description: 'SPARE is a location-based mobile application built with React Native (Expo) and Firebase. It digitizes the unorganized two-wheeler service sector by connecting riders with real-time local spare parts inventory, nearby mechanics, and DIY repair tutorials.',
    tags: ['React Native','Expo','Firebase'],
    githubUrl: 'https://github.com/Naveen-2255/SPARE',
    stars: 0,
    forks: 0,
    color: 'bg-yellow-500'
  },
];

const ProjectCard = ({ project }) => {
  const [stats, setStats] = useState({ stars: project.stars, forks: project.forks });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const url = new URL(project.githubUrl);
        if (url.hostname === 'github.com') {
          const pathParts = url.pathname.split('/').filter(Boolean);
          if (pathParts.length >= 2) {
            const owner = pathParts[0];
            const repo = pathParts[1];
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
            if (response.ok) {
              const data = await response.json();
              setStats({ stars: data.stargazers_count, forks: data.forks_count });
            }
          }
        }
      } catch (error) {
        console.error('Error fetching repo stats:', error);
      }
    };

    if (project.githubUrl) {
      fetchStats();
    }
  }, [project.githubUrl]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
      }}
      className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-4 sm:p-6 md:p-8 border-2 border-white/60 hover:border-orange-700 rounded-2xl transition-all duration-300"
    >
      {/* Color accent line on the left */}
      <div className={`absolute left-0 top-4 sm:top-6 bottom-4 sm:bottom-6 w-1 rounded-r-md ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="flex-1 pr-0 md:pr-8 lg:pr-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 sm:space-x-4 mb-3 gap-2 sm:gap-0">
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            {project.name}
          </h3>
        </div>

        <p className="text-[#E8D98A] mb-4 sm:mb-6 leading-relaxed max-w-3xl text-sm sm:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6 md:mb-0">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 sm:px-3 py-1 bg-gray-100 text-black text-xs font-medium rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 md:mt-0 w-full md:w-auto flex-shrink-0">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full md:w-auto px-5 sm:px-6 py-3 sm:py-3.5 bg-white hover:bg-gray-900 text-gray-900 hover:text-white border border-gray-200 hover:border-gray-900 rounded-xl transition-all duration-300 font-medium group/btn shadow-sm hover:shadow-xl hover:shadow-gray-900/20 text-sm sm:text-base">
          <FaGithub className="mr-2" size={16} />
          View Source
          <MdArrowForward className="ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" size={16} />
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto selection:bg-gray-900 selection:text-white">

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <div className="p-2 bg-gray-100 rounded-lg">
              <FaRegFolderOpen className="text-gray-700" size={20} />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-gray-100 uppercase">Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white font-doto mb-4 sm:mb-6 tracking-tight">
            Projects
          </h1>
          <p className="text-base sm:text-lg text-[#E8D98A] leading-relaxed">
            Explore the open-source projects. Dive into the codebase
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden md:block text-right"
        >
        </motion.div>
      </div>

      {/* Projects List */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="space-y-4"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
