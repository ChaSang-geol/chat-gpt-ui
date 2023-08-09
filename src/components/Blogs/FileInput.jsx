import { useState, useCallback, useEffect, useRef } from "react";
import axios from "axios";
// import * as fs from 'node:fs';

const FileInput = () => {

  const handleSubmit = async() => {

    // var fs = require('fs');
    
    let headersList = {
     "Authorization": "Bearer predefinedMyApiKey" 
    }
    let uploadFileName = document.getElementById("uploadFile").value;
    let formdata = new FormData();
    // formdata.append("file", fs.createReadStream("c:\workspace\chat-gpt-ui\public\logo512.png"));
    // formdata.append("file", fs.createReadStream(uploadFileName));
    formdata.append("file", uploadFileName);
    
    let bodyContent =  formdata;
    
    let reqOptions = {
      url: "http://hunihome.ipdisk.co.kr:8080/api/files/upload",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    }
    
    let response = await axios.request(reqOptions);
    console.log(response.data);
  };
  

return (
  <>
    <form onSubmit={handleSubmit}>
      <div class="custom-file">
        <input type="file" class="custom-file-input" id="uploadFile" />
        <label class="custom-file-label" for="uploadFile">Choose file</label>
      </div>
    </form>
  </>
);
};
export default FileInput;