import React, { useState } from 'react'

const FileUpload = () => {


  return (
    <div>
        <label htmlFor="singleFile">Upload File</label>
        <input type='file' id='singleFile' />
        
        <label htmlFor='multipleFiles'>Upload multiple files</label>
        <input type='file' id='multipleFiles' multiple />

        {/* {uploadedFiles.map(file => (
            <p>
                {file.name}
            </p>
        ))} */}
    </div>
  )
}

export default FileUpload