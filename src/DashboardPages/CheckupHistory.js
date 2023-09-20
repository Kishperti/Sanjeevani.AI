import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard-Details/Dashboard';

const CheckupHistory = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const preUploadedData = [
    { name: 'Checkup1.pdf', size: '2MB', doctor: 'Dr. John Doe', conditionBefore: 'Fever', conditionAfter: 'Recovered' },
    { name: 'Checkup2.pdf', size: '1.5MB', doctor: 'Dr. Jane Smith', conditionBefore: 'Headache', conditionAfter: 'Improved' },
  ];

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
    setUploadedFiles([...preUploadedData, ...storedFiles]);
  }, []);

  const handleFileUpload = (e) => {
    const files = e.target.files;
    const updatedFiles = [...uploadedFiles, ...files];
    setUploadedFiles(updatedFiles);

    localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
  };

  const handleFileDownload = (fileName) => {
    // Implement file download logic here
    const handleFileDownload = (fileName) => {
      const fileToDownload = uploadedFiles.find(file => file.name === fileName);
    
      if (fileToDownload) {
        // Create a Blob from the file content
        const blob = new Blob([fileToDownload.content], { type: 'application/octet-stream' });
    
        // Create a URL for the Blob and trigger the download
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    
        // Revoke the URL to free up resources
        URL.revokeObjectURL(url);
      }
    };
    
  };

  return (
    <div className="flex bg-richblack-900 text-white">
      <Dashboard />
      <div className="flex-1 p-8">
        <h1 className="text-3xl mb-4">Checkup History</h1>

        <div className="mb-6">
          <label htmlFor="fileUpload" className="block text-lg mb-2">Upload Checkup Data</label>
          <input
            type="file"
            id="fileUpload"
            onChange={handleFileUpload}
            multiple
            className="py-2 px-4 border rounded bg-white text-richblack-900"
          />
        </div>

        {uploadedFiles.length > 0 && (
          <div>
            <h2 className="text-xl mb-4">Uploaded Files</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="bg-white p-4 rounded shadow-md text-richblack-900">
                  <p className="font-semibold text-lg mb-2">{file.name}</p>
                  <p className="mb-2">Size: {file.size}</p>
                  <p>Doctor: {file.doctor}</p>
                  <p>Condition Before: {file.conditionBefore}</p>
                  <p>Condition After: {file.conditionAfter}</p>
                  <img
                    src={`data:image/svg+xml,${encodeURIComponent(
                      `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="white"/><text x="10" y="50" font-size="12" font-weight="bold">Patient: ${file.name}</text></svg>`
                    )}`}
                    alt={`QR Code for ${file.name}`}
                    className="my-4"
                  />
                  <button
                    onClick={() => handleFileDownload(file.name)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckupHistory;
