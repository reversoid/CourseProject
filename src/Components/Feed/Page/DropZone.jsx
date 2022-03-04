/* 
  filename: Dropzone.js 
*/

import React from "react";
// Import the useDropzone hooks from react-dropzone
import { useDropzone } from "react-dropzone";

export const DropZone= ({ onDrop, accept }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  /* 
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */

  return (
    <div {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <div className="dropzone-content mt-3">
            <div className="photo-ondrop my-1"></div>
          </div>
        ) : (
          <div className="dropzone-content mt-3">
            <div className="photo-add my-1"></div>
          </div>
        )}
      </div>
    </div>
  );
};
