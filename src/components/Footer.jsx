import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaQuoteLeft } from 'react-icons/fa';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
      },
    },
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                <FaEnvelope className="w-6 h-6" />
                <a 
                  href="mailto:omanyasa@yahoo.com" 
                  className="text-white hover:text-cyan-500 transition-colors"
                >
                  Send Email
                </a>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                <FaGithub className="w-6 h-6" />
                <a 
                  href="https://github.com/wealthymanyasa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-500 transition-colors"
                >
                  GitHub Profile
                </a>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                <FaLinkedin className="w-6 h-6" />
                <a 
                  href="https://www.linkedin.com/in/obertmanyasa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-500 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3"
              >
                <span className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-white text-sm font-medium"
                  >
                    W
                  </motion.span>
                </span>
                <span className="text-gray-400">
                  Web Development
                </span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3"
              >
                <span className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-white text-sm font-medium"
                  >
                    M
                  </motion.span>
                </span>
                <span className="text-gray-400">
                  Mobile App Development
                </span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3"
              >
                <span className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-white text-sm font-medium"
                  >
                  AI
                  </motion.span>
                </span>
                <span className="text-gray-400">
                  AI and Machine Learning 
                </span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3"
              >
                <span className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-white text-sm font-medium"
                  >
                    M
                  </motion.span>
                </span>
                <span className="text-gray-400">
                  Mobile App Development
                </span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3"
              >
                <span className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-white text-sm font-medium"
                  >
                    T
                  </motion.span>
                </span>
                <span className="text-gray-400">
                  Technical Consulting
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Inspiration</h3>
            <div className="space-y-4">
              <motion.div 
                className="relative p-5 bg-gray-800 rounded-lg border border-gray-700"
                whileHover={{ 
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  y: -2
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <FaQuoteLeft className="text-gray-400 text-4xl absolute top-3 left-3" />
                
                <motion.p 
                  className="text-gray-300 text-sm italic pl-6 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  "Code is like humor. When you have to explain it, it's bad."
                </motion.p>
                
                <motion.p 
                  className="text-gray-300 text-right mt-2 text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 1 }}
                >
                  — Cory House
                </motion.p>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                I'm passionate about creating elegant solutions to complex problems through clean, efficient code.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <motion.div 
            variants={itemVariants}
            className="text-center text-gray-400 mt-10"
          >
            <p className="text-sm">
              &copy; {new Date().getFullYear()} <a href='http://obertmanyasa.web.app/'>CodeStar</a>. All rights reserved.
            </p>
            <motion.div 
              className="mt-4 flex justify-center space-x-4"
            >
              <motion.a 
                href="https://github.com/wealthymanyasa" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/obertmanyasa" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="mailto:omanyasa@yahoo.com" 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <FaEnvelope className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://x.com/ManyasaObert" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Wave Background */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <svg className="absolute bottom-0 left-0 w-full h-32" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path 
              d="M0 100 V0 Q30 20 50 0 T100 0 V100"
              fill="url(#gradient)"
              fillOpacity="0.1"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;