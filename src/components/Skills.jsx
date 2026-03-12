import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { initialSkills } from "../data/initialData";

const Skills = () => {
  const [skills] = useLocalStorage('skills', initialSkills);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Debug: Log skills data
  console.log('Skills data:', skills);

  // Get unique categories
  const categories = ['All', ...new Set(skills.map(skill => skill.category))];
  console.log('Categories:', categories);
  
  // Filter skills by category
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);
  console.log('Filtered skills:', filteredSkills);

  // Group skills by category
  const skillsByCategory = categories.slice(1).map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category)
  }));

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
    <motion.div
      key={skill.id}
      variants={skillVariants}
      whileHover={{ 
        y: -8,
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 15 }
      }}
      onHoverStart={() => setHoveredSkill(skill.id)}
      onHoverEnd={() => setHoveredSkill(null)}
      className="group relative"
    >
      <div className={`bg-gradient-to-br ${skill.color || 'from-slate-800 to-slate-900'} rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-full`}>
        {/* Icon and Name */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-xl overflow-hidden border border-slate-600 shadow-lg group-hover:scale-110 transition-transform`}>
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
                  <div className={`w-full h-full bg-gradient-to-br ${skill.color || 'from-cyan-500 to-blue-600'} flex items-center justify-center text-2xl text-white font-bold group-hover:scale-110 transition-transform`} style={{ display: 'none' }}>
                    {skill.name.charAt(0).toUpperCase()}
                  </div>
                </>
              ) : (
                // Emoji or text icon
                <div className={`w-full h-full bg-gradient-to-br ${skill.color || 'from-cyan-500 to-blue-600'} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                  {skill.icon || skill.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </h3>
              <span className="text-xs text-gray-400">
                {skill.category}
              </span>
            </div>
          </div>
          <div className="text-2xl font-bold text-white">
            {skill.level}%
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-gray-400">
            <span>Proficiency</span>
            <span>{skill.level}%</span>
          </div>
          <div className="bg-slate-700/50 rounded-full h-3 overflow-hidden">
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
        <AnimatePresence>
          {hoveredSkill === skill.id && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/95 rounded-2xl p-6 flex items-center justify-center border border-slate-600"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-600 shadow-lg mx-auto mb-3">
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
                      <div className={`w-full h-full bg-gradient-to-br ${skill.color || 'from-cyan-500 to-blue-600'} flex items-center justify-center text-3xl text-white font-bold`} style={{ display: 'none' }}>
                        {skill.name.charAt(0).toUpperCase()}
                      </div>
                    </>
                  ) : (
                    // Emoji or text icon
                    <div className={`w-full h-full bg-gradient-to-br ${skill.color || 'from-cyan-500 to-blue-600'} flex items-center justify-center text-3xl`}>
                      {skill.icon || skill.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{skill.name}</h4>
                <p className="text-gray-300 text-sm mb-3">{skill.category}</p>
                <div className="text-3xl font-bold text-white mb-1">
                  {skill.level}%
                </div>
                <p className="text-xs text-gray-400">
                  {skill.level >= 80 ? 'Expert' : skill.level >= 60 ? 'Advanced' : skill.level >= 40 ? 'Intermediate' : 'Beginner'}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );

  return (
    <motion.section
      id="skills"
      className="py-20 text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900/20" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
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
        className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Skills</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A comprehensive overview of my technical expertise across frontend, backend, databases, and development tools.
            Each skill represents practical experience and real-world application.
          </motion.p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-cyan-400">{skills.length}</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-blue-400">{categories.length - 1}</div>
              <div className="text-sm text-gray-400">Categories</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-purple-400">
                {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
              </div>
              <div className="text-sm text-gray-400">Avg. Proficiency</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-600 rounded-full p-1 flex space-x-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Category Breakdown */}
        {selectedCategory === 'All' && (
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              Skills by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Category</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillsByCategory.map((categoryGroup, categoryIndex) => (
                <motion.div
                  key={categoryGroup.category}
                  variants={categoryVariants}
                  className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50"
                >
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                    <span className="text-2xl mr-3">
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
                  <div className="space-y-4">
                    {categoryGroup.skills.map((skill, skillIndex) => (
                      <div key={skill.id} className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-600">
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
                              <div className={`w-full h-full bg-gradient-to-br ${skill.color || 'from-cyan-500 to-blue-600'} flex items-center justify-center text-lg text-white font-bold`} style={{ display: 'none' }}>
                                {skill.name.charAt(0).toUpperCase()}
                              </div>
                            </>
                          ) : (
                            // Emoji or text icon
                            <div className={`w-full h-full bg-gradient-to-br ${skill.color || 'from-cyan-500 to-blue-600'} flex items-center justify-center text-lg text-white`}>
                              {skill.icon || skill.name.charAt(0).toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-white font-medium">{skill.name}</span>
                            <span className="text-cyan-400 font-bold">{skill.level}%</span>
                          </div>
                          <div className="bg-slate-700/50 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ 
                                duration: 0.8, 
                                delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                                type: "spring",
                                stiffness: 50
                              }}
                              className={`h-full bg-gradient-to-r ${skill.color || 'from-cyan-500 to-blue-600'} rounded-full`}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Skills;
