import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import CVUpload from './CVUpload';

const CVManager = () => {
  const [cvs, setCvs] = useLocalStorage('cvs', []);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    file_url: '',
    upload_date: new Date().toISOString(),
    is_active: false
  });

  const resetForm = () => {
    setFormData({
      title: '',
      file_url: '',
      upload_date: new Date().toISOString(),
      is_active: false
    });
    setIsAdding(false);
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const cvData = {
      ...formData,
      id: editingId || Date.now(),
      upload_date: new Date().toISOString()
    };

    // If this CV is set as active, deactivate all others
    if (cvData.is_active) {
      setCvs(cvs.map(cv => ({
        ...cv,
        is_active: cv.id === editingId ? cvData.is_active : false
      })));
    }

    if (editingId) {
      setCvs(cvs.map(cv => cv.id === editingId ? cvData : cv));
    } else {
      setCvs([...cvs, cvData]);
    }
    
    resetForm();
  };

  const handleEdit = (cv) => {
    setFormData({
      title: cv.title,
      file_url: cv.file_url,
      upload_date: cv.upload_date,
      is_active: cv.is_active
    });
    setEditingId(cv.id);
    setIsAdding(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this CV?')) {
      setCvs(cvs.filter(cv => cv.id !== id));
    }
  };

  const handleSetActive = (id) => {
    setCvs(cvs.map(cv => ({
      ...cv,
      is_active: cv.id === id
    })));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getFileIcon = (fileUrl) => {
    if (fileUrl.includes('.pdf') || fileUrl.toLowerCase().includes('pdf')) {
      return '📄';
    }
    return '📄';
  };

  const getFileName = (fileUrl) => {
    if (fileUrl.startsWith('data:')) {
      return 'CV (Uploaded)';
    }
    return fileUrl.split('/').pop() || 'CV Document';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            CV <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Management</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Manage your CV documents. The active CV will be available for employers to download.
          </p>
        </motion.div>

        {/* Add CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAdding(true)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-cyan-500/25"
          >
            + Upload New CV
          </motion.button>
        </motion.div>

        {/* Add/Edit Form */}
        {isAdding && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-slate-600"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              {editingId ? 'Edit CV' : 'Upload New CV'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  CV Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="e.g., Software Developer CV 2024"
                  required
                />
              </div>

              <CVUpload
                currentCV={formData.file_url}
                onCVChange={(file) => setFormData({...formData, file_url: file})}
                label="CV File (PDF only)"
              />

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="is_active"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                  className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-500 rounded focus:ring-cyan-500"
                />
                <label htmlFor="is_active" className="text-sm text-gray-300">
                  Set as active CV (employers will download this one)
                </label>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  {editingId ? 'Update' : 'Upload'} CV
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetForm}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}

        {/* CVs List */}
        <div className="space-y-4">
          {cvs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-12 text-center border border-slate-700"
            >
              <div className="text-6xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-white mb-2">No CVs Uploaded</h3>
              <p className="text-gray-400 mb-6">
                Upload your first CV to get started
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAdding(true)}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Upload CV
              </motion.button>
            </motion.div>
          ) : (
            cvs.map((cv, index) => (
              <motion.div
                key={cv.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-600"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="text-4xl">{getFileIcon(cv.file_url)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-white truncate">
                          {cv.title}
                        </h3>
                        {cv.is_active && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/50">
                            Active
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{getFileName(cv.file_url)}</span>
                        <span>•</span>
                        <span>Uploaded {formatDate(cv.upload_date)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    {!cv.is_active && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSetActive(cv.id)}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                      >
                        Set Active
                      </motion.button>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleEdit(cv)}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
                    >
                      ✏️
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDelete(cv.id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors"
                    >
                      🗑️
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Active CV Info */}
        {cvs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-6 border border-cyan-500/30"
          >
            <h3 className="text-lg font-semibold text-white mb-3">Employer Download Info</h3>
            <p className="text-gray-300 text-sm">
              Employers will download the CV marked as <span className="text-cyan-400 font-medium">"Active"</span>. 
              Make sure your most recent and best CV is set as active.
            </p>
            <div className="mt-3 text-xs text-gray-400">
              Current active CV: {cvs.find(cv => cv.is_active)?.title || 'None set'}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CVManager;
