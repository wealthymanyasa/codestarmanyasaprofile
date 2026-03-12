import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { initialProjects } from '../../data/initialData';
import ImageUpload from './ImageUpload';

const ProjectManager = () => {
  const [projects, setProjects] = useLocalStorage('projects', initialProjects);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    github_link: '',
    live_link: '',
    tech: '',
    img: ''
  });

  const resetForm = () => {
    setFormData({
      name: '',
      github_link: '',
      live_link: '',
      tech: '',
      img: ''
    });
    setIsAdding(false);
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const projectData = {
      ...formData,
      tech: formData.tech.split(',').map(t => t.trim()).filter(t => t),
      id: editingId || Date.now()
    };

    if (editingId) {
      setProjects(projects.map(p => p.id === editingId ? projectData : p));
    } else {
      setProjects([...projects, projectData]);
    }
    
    resetForm();
  };

  const handleEdit = (project) => {
    setFormData({
      name: project.name,
      github_link: project.github_link,
      live_link: project.live_link,
      tech: project.tech.join(', '),
      img: project.img || ''
    });
    setEditingId(project.id);
    setIsAdding(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Manage Projects</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsAdding(true)}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add Project
        </motion.button>
      </div>

      {isAdding && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-700/50 rounded-lg p-6 mb-6 border border-slate-600"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            {editingId ? 'Edit Project' : 'Add New Project'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 bg-slate-600/50 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  GitHub Link
                </label>
                <input
                  type="url"
                  value={formData.github_link}
                  onChange={(e) => setFormData({...formData, github_link: e.target.value})}
                  className="w-full px-4 py-2 bg-slate-600/50 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Live Link
                </label>
                <input
                  type="url"
                  value={formData.live_link}
                  onChange={(e) => setFormData({...formData, live_link: e.target.value})}
                  className="w-full px-4 py-2 bg-slate-600/50 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <ImageUpload
                currentImage={formData.img}
                onImageChange={(image) => setFormData({...formData, img: image})}
                label="Project Image"
              />
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Technologies (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.tech}
                  onChange={(e) => setFormData({...formData, tech: e.target.value})}
                  placeholder="React, Tailwind, JavaScript"
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
                {editingId ? 'Update' : 'Add'} Project
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetForm}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Cancel
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}

      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-700/30 rounded-lg p-4 border border-slate-600"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-start space-x-4">
                  {project.img && (
                    <div className="flex-shrink-0">
                      <div className="relative group">
                        <img 
                          src={project.img} 
                          alt={project.name} 
                          className="w-20 h-20 object-cover rounded-lg border-2 border-slate-600 transition-all group-hover:border-cyan-500"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMzMzIi8+CjxwYXRoIGQ9Ik0yNSA1MEg1NVYzMEgyNVY1MFoiIGZpbGw9IiM2NjYiLz4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNSIgZmlsbD0iIzk5OSIvPgo8L3N2Zz4=';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs">🖼️</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1 text-center">
                        {project.img.startsWith('data:') ? '📁 Local' : '🌐 URL'}
                      </div>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-2 truncate">{project.name}</h3>
                    {project.img && (
                      <p className="text-xs text-gray-400 mb-2 truncate">
                        {project.img.startsWith('data:') ? '� Uploaded image' : `🌐 ${project.img}`}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-cyan-600/30 text-cyan-300 text-xs rounded-full border border-cyan-600/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="text-gray-300">
                        <span className="text-gray-400">GitHub:</span> 
                        <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 ml-2 truncate block">
                          {project.github_link}
                        </a>
                      </div>
                      <div className="text-gray-300">
                        <span className="text-gray-400">Live:</span> 
                        <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 ml-2 truncate block">
                          {project.live_link}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 ml-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleEdit(project)}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
                >
                  ✏️
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDelete(project.id)}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors"
                >
                  🗑️
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectManager;
