import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css.css';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('/upload', formData);

      // Update the state with the newly uploaded file
      setUploadedFiles([...uploadedFiles, response.data]);

      // Clear the selected file
      setSelectedFile(null);
    } catch (error) {
      console.error('Error uploading file: ', error);
    }
  };

  useEffect(() => {
    fetch('/filer').then((res) => res.json()).then((data) => setUploadedFiles(data));
  }, []);

  return (
    <div className='ben'>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      <div className='ben'>
        <h2>Uploaded Files</h2>
        <ul>
          {uploadedFiles.map((file) => (
            <li key={file}>
              {file} -{' '}
              <a href={`/fil/${file}`} download>
                Download
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileUpload;
