import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { initialAbout } from '../../data/initialData';

const AboutManager = () => {
  const [about, setAbout] = useLocalStorage('about', initialAbout);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(about);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAbout(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(about);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">About Section</h2>
        {!isEditing && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEditing(true)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Edit About
          </motion.button>
        )}
      </div>

      {!isEditing ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-slate-700/30 rounded-lg p-6 border border-slate-600"
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-1">Title</h3>
              <p className="text-xl font-semibold text-white">{about.title}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-1">Description</h3>
              <p className="text-gray-300">{about.description}</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Experience</h3>
                <p className="text-cyan-400 font-semibold">{about.experience}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Projects</h3>
                <p className="text-cyan-400 font-semibold">{about.projects}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Clients</h3>
                <p className="text-cyan-400 font-semibold">{about.clients}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-700/50 rounded-lg p-6 border border-slate-600"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Edit About Section</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-2 bg-slate-600/50 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={4}
                className="w-full px-4 py-2 bg-slate-600/50 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Experience
                </label>
                <input
                  type="text"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-4 py-2 bg-slate-600/50 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Projects
                </label>
                <input
                  type="text"
                  value={formData.projects}
                  onChange={(e) => setFormData({...formData, projects: e.target.value})}
                  className="w-full px-4 py-2 bg-slate-600/50 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Clients
                </label>
                <input
                  type="text"
                  value={formData.clients}
                  onChange={(e) => setFormData({...formData, clients: e.target.value})}
                  className="w-full px-4 py-2 bg-slate-600/50 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Save Changes
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Cancel
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default AboutManager;
