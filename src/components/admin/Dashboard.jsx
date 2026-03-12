import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import ProjectManager from './ProjectManager';
import SkillsManager from './SkillsManager';
import CVManager from './CVManager';
import HeroManager from './HeroManager';
import AboutManager from './AboutManager';

const Dashboard = () => {
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'skills', label: 'Skills', icon: '🎯' },
    { id: 'cv', label: 'CV', icon: '📄' },
    { id: 'hero', label: 'Hero Section', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' }
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <nav className="bg-slate-800/50 backdrop-blur-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Admin <span className="text-cyan-500">Dashboard</span>
            </motion.h1>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </motion.button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-1 mb-8 bg-slate-700/30 p-1 rounded-lg">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-slate-600/50'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="font-medium">{tab.label}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700 p-6"
        >
          {activeTab === 'projects' && <ProjectManager />}
          {activeTab === 'skills' && <SkillsManager />}
          {activeTab === 'cv' && <CVManager />}
          {activeTab === 'hero' && <HeroManager />}
          {activeTab === 'about' && <AboutManager />}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
