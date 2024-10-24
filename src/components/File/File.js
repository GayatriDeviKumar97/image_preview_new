import React, { useState } from "react";

const File = () => {
  const [file, setFile] = useState({});
  const [imageViewer, setImageViewer] = useState("");
  const handleFileClick = (e) => {
    const reader = new FileReader();
    const Selectfile = e.target.files[0];

    if (Selectfile) {
      setFile(Selectfile);
      reader.onload = () => {
        setImageViewer(reader.result);
      };
    }
    console.log("file:", Selectfile, "img:", imageViewer);
    reader.readAsDataURL(Selectfile);
  };

  return (
    <div>
      <input type="file" onChange={handleFileClick} />
      {imageViewer && <img alt="Selected File" src={imageViewer} />}
      {file && (
        <>
          <p>Name: {file.name}</p>
          <p>Type: {file.type}</p>
          <p>Size: {(file.size / 1024).toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default File;
