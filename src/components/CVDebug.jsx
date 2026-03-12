import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CVDebug = () => {
  const [cvs] = useLocalStorage('cvs', []);
  const activeCV = cvs.find(cv => cv.is_active);

  return (
    <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-xl z-50 max-w-sm">
      <h3 className="font-bold mb-2">CV Debug Info</h3>
      <div className="text-sm space-y-1">
        <p>Total CVs: {cvs.length}</p>
        <p>Active CV: {activeCV ? 'Yes' : 'No'}</p>
        {activeCV && (
          <>
            <p>Title: {activeCV.title}</p>
            <p>URL: {activeCV.file_url ? 'Present' : 'Missing'}</p>
            <p>Type: {activeCV.file_url?.startsWith('data:') ? 'Data URL' : 'Regular URL'}</p>
          </>
        )}
      </div>
      <button
        onClick={() => console.log('CVs:', cvs, 'Active CV:', activeCV)}
        className="mt-2 bg-white text-red-500 px-2 py-1 rounded text-xs"
      >
        Log to Console
      </button>
    </div>
  );
};

export default CVDebug;
