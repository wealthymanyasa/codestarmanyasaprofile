import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { initialProjects } from "../data/initialData";

const Projects = () => {
  const [projects] = useLocalStorage('projects', initialProjects);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const observerRef = useRef();
  const PROJECTS_PER_PAGE = 6;

  // Generate infinite projects by cycling through existing ones with variations
  const generateProjectVariation = (project, index) => {
    const variations = [
      { suffix: "Pro", color: "from-blue-500 to-purple-600" },
      { suffix: "Plus", color: "from-green-500 to-teal-600" },
      { suffix: "X", color: "from-orange-500 to-red-600" },
      { suffix: "Advanced", color: "from-pink-500 to-rose-600" },
      { suffix: "Enterprise", color: "from-indigo-500 to-blue-600" },
    ];
    
    const variation = variations[index % variations.length];
    return {
      ...project,
      id: `${project.id}-${index}`,
      name: `${project.name} ${variation.suffix}`,
      gradient: variation.color,
      orderIndex: index
    };
  };

  // Load more projects
  const loadMoreProjects = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const startIndex = page * PROJECTS_PER_PAGE;
      const endIndex = startIndex + PROJECTS_PER_PAGE;
      
      // Generate projects for this page
      const newProjects = [];
      for (let i = 0; i < PROJECTS_PER_PAGE; i++) {
        const projectIndex = (startIndex + i) % projects.length;
        const variation = generateProjectVariation(projects[projectIndex], startIndex + i);
        newProjects.push(variation);
      }
      
      setDisplayedProjects(prev => [...prev, ...newProjects]);
      setPage(prev => prev + 1);
      setIsLoading(false);
      
      // Simulate infinite - never actually run out
      setHasMore(true);
    }, 800);
  }, [page, isLoading, hasMore, projects]);

  // Intersection Observer for infinite scroll
  const lastProjectRef = useCallback((node) => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();
    
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreProjects();
      }
    }, {
      threshold: 0.1,
      rootMargin: '200px'
    });
    
    if (node) observerRef.current.observe(node);
  }, [isLoading, hasMore, loadMoreProjects]);

  // Stop infinite scroll when user wants to navigate away
  const [isScrollPaused, setIsScrollPaused] = useState(false);

  // Pause infinite scroll when user scrolls to other sections
  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const isInProjectsSection = rect.top <= window.innerHeight && rect.bottom >= 0;
        
        if (!isInProjectsSection && !isScrollPaused) {
          setIsScrollPaused(true);
          if (observerRef.current) observerRef.current.disconnect();
        } else if (isInProjectsSection && isScrollPaused) {
          setIsScrollPaused(false);
          // Re-observe last project
          const lastProject = document.querySelector('[data-last-project="true"]');
          if (lastProject && lastProjectRef.current) {
            lastProjectRef.current(lastProject);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrollPaused, lastProjectRef]);

  // Initial load
  useEffect(() => {
    loadMoreProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.section
      id="projects"
      className="py-20 text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900/20" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -100, 0],
          y: [0, 50, 0] 
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Explore my portfolio of innovative web applications and system designs. 
            Each project demonstrates expertise in modern technologies and scalable architecture.
          </motion.p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-cyan-400">{displayedProjects.length}+</div>
              <div className="text-sm text-gray-400">Projects Showcased</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-blue-400">∞</div>
              <div className="text-sm text-gray-400">Infinite Scroll</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-purple-400">100%</div>
              <div className="text-sm text-gray-400">Responsive</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          className="sticky bottom-8 left-1/2 transform -translate-x-1/2 z-50 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-slate-800/90 backdrop-blur-lg border border-slate-600 rounded-full px-6 py-3 flex items-center space-x-4 shadow-xl">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsScrollPaused(!isScrollPaused);
                if (isScrollPaused) {
                  // Resume scrolling
                  const lastProject = document.querySelector('[data-last-project="true"]');
                  if (lastProject && lastProjectRef.current) {
                    lastProjectRef.current(lastProject);
                  }
                } else {
                  // Pause scrolling
                  if (observerRef.current) observerRef.current.disconnect();
                }
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isScrollPaused 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'bg-red-500 hover:bg-red-600 text-white'
              }`}
            >
              {isScrollPaused ? '▶️ Resume Scroll' : '⏸️ Pause Scroll'}
            </motion.button>
            
            <div className="h-4 w-px bg-slate-600"></div>
            
            <motion.a
              href="#testimonials"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full text-sm font-medium transition-all"
            >
              ↓ Next Section
            </motion.a>
            
            <motion.a
              href="#skills"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition-all"
            >
              ↑ Previous Section
            </motion.a>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                ref={index === displayedProjects.length - 3 ? lastProjectRef : undefined}
                data-last-project={index === displayedProjects.length - 3 ? "true" : undefined}
                variants={projectVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
                className="group"
              >
                <div className={`h-full bg-gradient-to-br ${project.gradient || 'from-slate-800 to-slate-900'} rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    {project.img ? (
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    {/* Fallback gradient */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient || 'from-slate-700 to-slate-800'} flex items-center justify-center`}
                      style={{ display: project.img ? 'none' : 'flex' }}
                    >
                      <div className="text-6xl opacity-20">🚀</div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Tech badges on hover */}
                    <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex gap-2">
                        {project.github_link && (
                          <motion.a
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </motion.a>
                        )}
                        {project.live_link && (
                          <motion.a
                            href={project.live_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200 text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Code
                      </motion.a>
                      <motion.a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 text-center px-4 py-2 bg-gradient-to-r ${project.gradient || 'from-cyan-500 to-blue-600'} rounded-lg text-white font-medium transition-all duration-200 text-sm hover:shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Loading Indicator */}
        {isLoading && (
          <motion.div
            className="flex justify-center items-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
              <span className="text-gray-400">Loading more amazing projects...</span>
            </div>
          </motion.div>
        )}

        {/* Scroll Indicator */}
        {!isLoading && displayedProjects.length > 0 && (
          <motion.div
            className="text-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center space-x-3 text-gray-500">
                <div className="animate-bounce">⬇️</div>
                <span className="text-sm">
                  {isScrollPaused ? 'Scroll paused - use navigation below' : 'Scroll for more projects'}
                </span>
                <div className="animate-bounce">⬇️</div>
              </div>
              <div className="text-xs text-gray-600">
                {displayedProjects.length} projects loaded • Scroll to other sections to pause
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
