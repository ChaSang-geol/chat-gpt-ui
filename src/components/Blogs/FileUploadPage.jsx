import React, { useState } from "react";

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const headersList = {
    // "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Authorization": "Bearer predefinedMyApiKey",
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("file", selectedFile);

    // fetch("http://hunihome.ipdisk.co.kr:8080/api/files/upload", {
    fetch("http://localhost:8080/api/files/upload", {
      method: "POST",
      headers: headersList,
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      setSelectedFile("");
  };

  return (
    <div>
      <div className="custom-file">
        <input type="file" name="file" id="file" onChange={changeHandler} className="custom-file-input"/>
        <label className="custom-file-label" htmlFor="file">
            업로드할 파일을 선택하십시오.
            </label>
        {isSelected ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{" "}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
      </div>
      <div className="input-group">
        <button onClick={handleSubmission} className="btn btn-outline-primary" type="button" >
          Submit
        </button>
      </div>
    </div>
  );
}

export default FileUploadPage;
