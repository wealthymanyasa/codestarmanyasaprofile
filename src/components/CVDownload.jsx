import React from 'react';
import { motion } from 'framer-motion';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CVDownload = () => {
  const [cvs] = useLocalStorage('cvs', []);
  const activeCV = cvs.find(cv => cv.is_active);

  const handleDownload = () => {
    if (!activeCV?.file_url) return;

    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = activeCV.file_url;
    link.download = activeCV.title || 'CV.pdf';
    link.target = '_blank';
    
    // Handle both data URLs and regular URLs
    if (activeCV.file_url.startsWith('data:')) {
      // For data URLs, we need to convert them to blob
      fetch(activeCV.file_url)
        .then(res => res.blob())
        .then(blob => {
          const blobUrl = URL.createObjectURL(blob);
          link.href = blobUrl;
          link.download = activeCV.title || 'CV.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(blobUrl);
        })
        .catch(err => {
          console.error('Error downloading CV:', err);
          // Fallback for data URLs
          link.download = activeCV.title || 'CV.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    } else {
      // For regular URLs
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.section
      id="cv-download"
      className="py-16 md:py-20 text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900/30" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 20, 0] 
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Download My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">CV</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Get my comprehensive CV detailing my experience, skills, and projects
            </p>
          </motion.div>

          {/* CV Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl"
          >
            {activeCV ? (
              <>
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                  <div className="flex items-center space-x-4 mb-6 md:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      📄
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {activeCV.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Active CV
                        </span>
                        <span>Updated {formatDate(activeCV.upload_date)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download CV</span>
                  </motion.button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3">
                      🎯
                    </div>
                    <h4 className="text-white font-semibold mb-2">Professional Experience</h4>
                    <p className="text-gray-400 text-sm">
                      Detailed work history and achievements
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3">
                      💻
                    </div>
                    <h4 className="text-white font-semibold mb-2">Technical Skills</h4>
                    <p className="text-gray-400 text-sm">
                      Comprehensive list of technologies and tools
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3">
                      🚀
                    </div>
                    <h4 className="text-white font-semibold mb-2">Project Portfolio</h4>
                    <p className="text-gray-400 text-sm">
                      Key projects and their technical details
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/50">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Why Download My CV?</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        My CV provides a comprehensive overview of my professional journey, including detailed project descriptions, 
                        technical implementations, and measurable achievements. It's the perfect companion to my portfolio for 
                        understanding my full capabilities and experience.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">
                  📄
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">CV Coming Soon</h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  I'm currently updating my CV. Check back soon or contact me directly for my latest resume.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  <span>Contact Me</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CVDownload;
