import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaRegFolderOpen } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

const projects = [
  {
    id: 1,
    name: 'GDG Open Source Hub',
    description: 'The official GDG open source hub website where contributors can find guidelines, workflow, and projects to contribute to. Built with React and TailwindCSS.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/Alwin-Saji/Blog',
    stars: 128,
    forks: 34,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Event Manager CLI',
    description: 'A command-line tool for organizing and managing local GDG events, RSVPs, and speaker schedules efficiently.',
    tags: ['Node.js', 'CLI', 'Automation'],
    githubUrl: 'https://github.com/example/event-cli',
    stars: 85,
    forks: 12,
    color: 'bg-green-500'
  },
  {
    id: 3,
    name: 'DevFest App Template',
    description: 'A customizable open-source template for DevFest mobile applications. Features schedules, speaker bios, and real-time updates.',
    tags: ['React Native', 'Firebase', 'Mobile'],
    githubUrl: 'https://github.com/example/devfest-app',
    stars: 340,
    forks: 89,
    color: 'bg-yellow-500'
  },
  {
    id: 4,
    name: 'Community Dashboard',
    description: 'An interactive web dashboard for monitoring community engagement, membership growth, and event analytics.',
    tags: ['React', 'D3.js', 'Data Visualization'],
    githubUrl: 'https://github.com/example/community-dashboard',
    stars: 210,
    forks: 56,
    color: 'bg-red-500'
  }
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
      className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-4 sm:p-6 md:p-8 bg-white border border-transparent hover:border-gray-900 rounded-2xl transition-all duration-300"
    >
      {/* Color accent line on the left */}
      <div className={`absolute left-0 top-4 sm:top-6 bottom-4 sm:bottom-6 w-1 rounded-r-md ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="flex-1 pr-0 md:pr-8 lg:pr-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 sm:space-x-4 mb-3 gap-2 sm:gap-0">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
            {project.name}
          </h3>
          <div className="flex items-center space-x-2 sm:space-x-3 text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100 w-fit">
            <span className="flex items-center"><FaStar className="mr-1 sm:mr-1.5 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" size={12} /> {stats.stars}</span>
            <span className="w-px h-3 bg-gray-300"></span>
            <span className="flex items-center"><FaCodeBranch className="mr-1 sm:mr-1.5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" size={12} /> {stats.forks}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 sm:mb-6 font-light leading-relaxed max-w-3xl text-sm sm:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6 md:mb-0">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 sm:px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
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
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-gray-500 uppercase">Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] mb-4 sm:mb-6 tracking-tight">
            Projects & Initiatives
          </h1>
          <p className="text-base sm:text-lg text-gray-500 font-light leading-relaxed">
            Explore the open-source projects we are currently building. Dive into the codebase, suggest improvements, and collaborate with the community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden md:block text-right"
        >
          <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-widest mb-1">Total Repositories</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900">{projects.length}</p>
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
