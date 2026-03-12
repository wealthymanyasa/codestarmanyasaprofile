import { useLocalStorage } from './useLocalStorage';

export const useCVDownload = () => {
  const [cvs] = useLocalStorage('cvs', []);
  const activeCV = cvs.find(cv => cv.is_active);

  const handleDownloadCV = () => {
    // Check if there's an active CV
    if (!activeCV?.file_url) {
      alert('No CV available for download. Please check back later.');
      return;
    }

    // Clear any existing download links
    const existingLinks = document.querySelectorAll('a[data-cv-download]');
    existingLinks.forEach(link => link.remove());

    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = activeCV.file_url;
    link.download = activeCV.title || 'CV.pdf';
    link.target = '_blank';
    link.setAttribute('data-cv-download', 'true'); // Mark for cleanup
    
    // Handle both data URLs and regular URLs
    if (activeCV.file_url.startsWith('data:')) {
      // For data URLs, we need to convert them to blob
      fetch(activeCV.file_url)
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch CV');
          return res.blob();
        })
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
          alert('Failed to download CV. Please try again.');
        });
    } else {
      // For regular URLs
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const hasActiveCV = !!activeCV;
  const cvTitle = activeCV?.title || 'CV';
  const cvUploadDate = activeCV?.upload_date;

  return {
    handleDownloadCV,
    hasActiveCV,
    cvTitle,
    cvUploadDate,
    activeCV
  };
};
