import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ImageUpload = ({ currentImage, onImageChange, label = "Project Image" }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(currentImage || '');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      setIsUploading(true);
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const result = e.target.result;
        setPreview(result);
        onImageChange(result);
        setIsUploading(false);
      };
      
      reader.onerror = () => {
        setIsUploading(false);
        alert('Failed to read image file');
      };
      
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setPreview(url);
    onImageChange(url);
  };

  const clearImage = () => {
    setPreview('');
    onImageChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      
      {/* Upload Area */}
      <motion.div
        className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all ${
          isDragging 
            ? 'border-cyan-500 bg-cyan-500/10' 
            : 'border-slate-600 hover:border-slate-500'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        whileHover={{ scale: 1.01 }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        {isUploading ? (
          <div className="space-y-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500 mx-auto"></div>
            <p className="text-gray-400">Uploading image...</p>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="text-3xl">📁</div>
            <p className="text-gray-300">
              Drop image here or <span className="text-cyan-400 font-medium">click to browse</span>
            </p>
            <p className="text-xs text-gray-500">
              Supports: JPG, PNG, GIF, WebP (Max 5MB)
            </p>
          </div>
        )}
      </motion.div>

      {/* URL Input */}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1">
          Or enter image URL:
        </label>
        <input
          type="url"
          value={preview && preview.startsWith('data:') ? '' : preview}
          onChange={handleUrlChange}
          placeholder="https://example.com/image.jpg"
          className="w-full px-3 py-2 bg-slate-600/50 border border-slate-500 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* Preview */}
      {preview && (
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-400">
            Preview:
          </label>
          <div className="relative inline-block">
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg border border-slate-600"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjMzMzIi8+CjxwYXRoIGQ9Ik00MCA4MEg4OFY0MEg0MFY4MFoiIGZpbGw9IiM2NjYiLz4KPGNpcmNsZSBjeD0iNjQiIGN5PSI2MCIgcj0iOCIgZmlsbD0iIzk5OSIvPgo8L3N2Zz4=';
              }}
            />
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={clearImage}
              className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
            >
              ×
            </motion.button>
          </div>
          {preview.startsWith('data:') && (
            <p className="text-xs text-green-400">
              ✓ Image uploaded successfully
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
