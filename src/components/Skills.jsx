import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { initialSkills } from "../data/initialData";

const Skills = () => {
  const [skills] = useLocalStorage('skills', initialSkills);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Get unique categories
  const categories = ['All', ...new Set(skills.map(skill => skill.category))];
  
  // Filter skills by category
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  // Group skills by category
  const skillsByCategory = categories.slice(1).map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category)
  }));

  // Temporary debug
  console.log('Skills data:', skills.length, skills);
  console.log('Selected:', selectedCategory, 'Filtered:', filteredSkills.length);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const SkillCard = ({ skill, index }) => (
    <div
      key={`${skill.id}-${selectedCategory}`}
      className="group relative"
    >
      <div className={`bg-gradient-to-br ${skill.color || 'from-slate-800 to-slate-900'} rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}>
        {/* Icon and Name */}
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <div className="flex items-center space-x-2 md:space-x-3 flex-1 min-w-0">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl overflow-hidden border border-slate-600 shadow-lg group-hover:scale-110 transition-transform bg-gradient-to-br ${skill.color || 'from-cyan-500 to-blue-600'} flex-shrink-0`}>
              {skill.icon && (skill.icon.startsWith('http') || skill.icon.startsWith('data:')) ? (
                // Uploaded image
                <>
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain bg-white"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={`w-full h-full bg-gradient-to-br ${skill.color || 'from-cyan-500 to-blue-600'} flex items-center justify-center text-lg md:text-2xl text-white font-bold group-hover:scale-110 transition-transform`} style={{ display: 'none' }}>
                    {skill.name.charAt(0).toUpperCase()}
                  </div>
                </>
              ) : (
                // Emoji or text icon
                <div className={`w-full h-full flex items-center justify-center text-lg md:text-2xl group-hover:scale-110 transition-transform`}>
                  {skill.icon || skill.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <h3 className="text-sm md:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors break-words">
                {skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}
              </h3>
              <span className="text-xs text-gray-400 block">
                {skill.category}
              </span>
            </div>
          </div>
          <div className="text-lg md:text-2xl font-bold text-white flex-shrink-0 ml-2">
            {skill.level}%
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1 md:space-y-2 mt-auto">
          <div className="flex justify-between text-xs text-gray-400">
            <span>Proficiency</span>
            <span>{skill.level}%</span>
          </div>
          <div className="bg-slate-700/50 rounded-full h-2 md:h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ 
                duration: 1, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 50
              }}
              className={`h-full bg-gradient-to-r ${skill.color || 'from-cyan-500 to-blue-600'} rounded-full relative overflow-hidden`}
            >
              <motion.div
                animate={{ x: [0, 100, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatDelay: 1
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </motion.div>
          </div>
        </div>

        {/* Hover Details */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/95 rounded-xl md:rounded-2xl p-4 md:p-6 flex items-center justify-center border border-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center w-full">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl overflow-hidden border border-slate-600 shadow-lg mx-auto mb-2 md:mb-3 bg-gradient-to-br from-slate-800 to-slate-900">
              {skill.icon && (skill.icon.startsWith('http') || skill.icon.startsWith('data:')) ? (
                // Uploaded image
                <>
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain bg-white"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={`w-full h-full bg-gradient-to-br ${skill.color || 'from-cyan-500 to-blue-600'} flex items-center justify-center text-2xl md:text-3xl text-white font-bold`} style={{ display: 'none' }}>
                    {skill.name.charAt(0).toUpperCase()}
                  </div>
                </>
              ) : (
                // Emoji or text icon
                <div className={`w-full h-full bg-gradient-to-br ${skill.color || 'from-cyan-500 to-blue-600'} flex items-center justify-center text-2xl md:text-3xl`}>
                  {skill.icon || skill.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 break-words px-2">
              {skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}
            </h4>
            <p className="text-gray-300 text-xs md:text-sm mb-2 md:mb-3 px-2">
              {skill.category}
            </p>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
              {skill.level}%
            </div>
            <p className="text-xs text-gray-400 px-2">
              {skill.level >= 80 ? 'Expert' : skill.level >= 60 ? 'Advanced' : skill.level >= 40 ? 'Intermediate' : 'Beginner'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <motion.section
      id="skills"
      className="py-12 md:py-20 text-white relative overflow-hidden min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900/30" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-5 right-5 w-32 h-32 md:w-64 md:h-64 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-5 left-5 w-40 h-40 md:w-80 md:h-80 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Skills</span>
          </motion.h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-8 md:mb-12 overflow-x-auto pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-600 rounded-full p-1 flex space-x-1 md:space-x-2 min-w-max">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={`${skill.id}-${selectedCategory}`} skill={skill} index={index} />
          ))}
        </div>

        {/* Category Breakdown */}
        {selectedCategory === 'All' && (
          <div className="mt-12 md:mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white">
              Skills by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Category</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {skillsByCategory.map((categoryGroup, categoryIndex) => (
                <div
                  key={categoryGroup.category}
                  className="bg-slate-800/30 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-700/50"
                >
                  <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center">
                    <span className="text-xl md:text-2xl mr-2 md:mr-3">
                      {categoryGroup.category === 'Frontend' ? '🎨' :
                       categoryGroup.category === 'Backend' ? '⚙️' :
                       categoryGroup.category === 'Database' ? '🗄️' :
                       categoryGroup.category === 'Machine Learning' ? '🤖' :
                       categoryGroup.category === 'Natural Language Processing' ? '🧠' :
                       categoryGroup.category === 'DevOps' ? '🔧' :
                       categoryGroup.category === 'Cloud' ? '☁️' :
                       categoryGroup.category === 'Tools' ? '🔧' : '📦'}
                    </span>
                    {categoryGroup.category}
                  </h4>
                  <div className="space-y-3 md:space-y-4">
                    {categoryGroup.skills.map((skill, skillIndex) => (
                      <div key={skill.id} className="flex items-center space-x-3 md:space-x-4">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg overflow-hidden border border-slate-600">
                          {skill.icon && (skill.icon.startsWith('http') || skill.icon.startsWith('data:')) ? (
                            // Uploaded image
                            <>
                              <img 
                                src={skill.icon} 
                                alt={skill.name}
                                className="w-full h-full object-contain bg-white"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                              <div className={`w-full h-full bg-gradient-to-br ${skill.color || 'from-cyan-500 to-blue-600'} flex items-center justify-center text-sm md:text-lg text-white font-bold`} style={{ display: 'none' }}>
                                {skill.name.charAt(0).toUpperCase()}
                              </div>
                            </>
                          ) : (
                            // Emoji or text icon
                            <div className={`w-full h-full bg-gradient-to-br ${skill.color || 'from-cyan-500 to-blue-600'} flex items-center justify-center text-sm md:text-lg text-white`}>
                              {skill.icon || skill.name.charAt(0).toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-white text-sm md:text-base font-medium truncate">{skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}</span>
                            <span className="text-cyan-400 text-sm md:text-base font-bold flex-shrink-0 ml-2">{skill.level}%</span>
                          </div>
                          <div className="bg-slate-700/50 rounded-full h-1.5 md:h-2 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${skill.color || 'from-cyan-500 to-blue-600'} rounded-full`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Skills;
