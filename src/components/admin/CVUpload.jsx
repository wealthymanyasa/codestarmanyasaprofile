import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CVUpload = ({ currentCV, onCVChange, label = "CV File (PDF)" }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(currentCV || '');
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleFileSelect = (file) => {
    if (file && file.type === 'application/pdf') {
      setIsUploading(true);
      setFileName(file.name);
      
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const result = e.target.result;
        setPreview(result);
        onCVChange(result);
        setIsUploading(false);
      };
      
      reader.onerror = () => {
        setIsUploading(false);
        alert('Failed to read PDF file');
      };
      
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid PDF file');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleURLInput = (url) => {
    if (url) {
      // Validate if it's a PDF URL
      if (url.toLowerCase().includes('.pdf')) {
        setPreview(url);
        onCVChange(url);
        setFileName(url.split('/').pop() || 'CV.pdf');
      } else {
        alert('Please enter a valid PDF URL');
      }
    }
  };

  const clearFile = () => {
    setPreview('');
    setFileName('');
    onCVChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      
      {/* Drag and Drop Area */}
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
          isDragging
            ? 'border-cyan-500 bg-cyan-500/10'
            : 'border-slate-600 bg-slate-800/30 hover:border-slate-500'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        {isUploading ? (
          <div className="space-y-4">
            <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-gray-300">Uploading PDF...</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center text-3xl mx-auto">
              📄
            </div>
            <div>
              <p className="text-white font-medium mb-2">
                {fileName || 'Drop your PDF here or click to browse'}
              </p>
              <p className="text-gray-400 text-sm">
                Supports PDF files up to 10MB
              </p>
            </div>
          </div>
        )}
      </div>

      {/* URL Input */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Or paste PDF URL
        </label>
        <div className="flex space-x-2">
          <input
            type="url"
            placeholder="https://example.com/cv.pdf"
            className="flex-1 px-4 py-2 bg-slate-700/50 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onChange={(e) => handleURLInput(e.target.value)}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleURLInput(document.querySelector('input[type="url"]').value)}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Set URL
          </motion.button>
        </div>
      </div>

      {/* Preview */}
      {preview && (
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-600">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center text-xl">
                📄
              </div>
              <div>
                <p className="text-white font-medium">PDF Ready</p>
                <p className="text-gray-400 text-sm">{fileName || 'CV.pdf'}</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearFile}
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors"
            >
              🗑️
            </motion.button>
          </div>
          
          {/* PDF Preview Info */}
          <div className="bg-slate-700/30 rounded-lg p-3">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              <span>PDF file uploaded successfully</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CVUpload;
