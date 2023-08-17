// import { useState, useCallback, useEffect, useRef } from "react";
import axios from "axios";
// import * as fs from 'node:fs';

const FileInput = () => {
  const handleSubmit = async () => {
    // var fs = require('fs');

    let headersList = {
      // "Content-Type": "multipart/form-data", // multipart 로 하면 단일 파일은 업로드 안됨
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer predefinedMyApiKey",
    };
    // let uploadFileName = document.getElementById("uploadFile").value;
    const inputFileUpload = document.querySelector("#uploadFile");
    let formdata = new FormData();
    // formdata.append("file", uploadFileName);
    formdata.append("file", inputFileUpload.files[0]);

    let bodyContent = formdata;

    await axios({
      headers: headersList,
      url: "http://localhost:8080/api/files/upload", // 파일 업로드 요청 URL
      method: "POST",
      data: bodyContent,
    })
      // .then((response) => {
      //   inputFileUpload.value = "";
      //   console.log(response.data);
      //   alert(response.data);
      // });
      // .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        if (result.status === "200") console.log("DATA:", result.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    inputFileUpload.value = "";
    // Location.href("/upload");
  };

  return (
    <>
      <form
        // onSubmit={handleSubmit}
        // encType="multipart/form-data"
        // method="post"
        name="fileInputElement"
        className="input-group mb-3"
      >
        <div className="input-group mb-3 mt-3">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="uploadFile"
              name="uploadFile"
              required
              placeholder="업로드할 파일을 선택하십시오."
            />
            <label className="custom-file-label" htmlFor="uploadFile">
              업로드할 파일을 선택하십시오.
            </label>
          </div>
          <div className="input-group-append">
            <button
              className="btn btn-success"
              type="button"
              id="button-addon2"
              onClick={handleSubmit}
            >
              Upload
            </button>
          </div>
        </div>
        {/* Custom file input */}
        <div className="input-group">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile04"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile04">
              업로드할 파일을 선택하십시오.
            </label>
          </div>
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={handleSubmit}
            >
              업로드 하기
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default FileInput;
