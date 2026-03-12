import { useLocalStorage } from './useLocalStorage';

export const useCVDownload = () => {
  const [cvs] = useLocalStorage('cvs', []);
  const activeCV = cvs.find(cv => cv.is_active);

  const handleDownloadCV = () => {
    console.log('CV Download clicked');
    console.log('Active CV:', activeCV);
    console.log('All CVs:', cvs);
    
    // Check if there's an active CV
    if (!activeCV?.file_url) {
      console.log('No active CV found');
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
    
    console.log('Download URL:', activeCV.file_url);
    console.log('Download filename:', activeCV.title || 'CV.pdf');
    
    // Handle both data URLs and regular URLs
    if (activeCV.file_url.startsWith('data:')) {
      console.log('Processing data URL...');
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
          console.log('Data URL download completed successfully');
        })
        .catch(err => {
          console.error('Error downloading CV:', err);
          alert('Failed to download CV. Please try again.');
        });
    } else {
      console.log('Processing regular URL...');
      // For regular URLs
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('Regular URL download completed');
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
