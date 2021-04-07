import React, { useState } from 'react';
import { PreviewPDF } from './previewers/PreviewPDF/PreviewPDF.js';
import { PreviewDOCX } from './previewers/PreviewDOCX/PreviewDOCX.js';
import { PreviewXLSX } from './previewers/PreviewXLSX/PreviewXLSX.js';
import './style.css';


function App() {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState(null);

  const handleFileChange = ev => {
    const newFile = ev.target.files[0];
    setFile(newFile || null);
    setFileType(newFile ? newFile.name.split('.').slice(-1)[0] : null);
  }

  return (
    <div className='App'>
      <div>
        <input type='file' onChange={handleFileChange}></input>
      </div>
      {fileType === 'pdf' && <PreviewPDF file={file} />}
      {(fileType === 'doc' || fileType === 'docx') && <PreviewDOCX file={file} />}
      {(fileType === 'xls' || fileType === 'xlsx') && <PreviewXLSX file={file} />}
    </div>
  );
}

export default App;
