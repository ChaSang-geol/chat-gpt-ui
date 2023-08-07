import { useState, useCallback, useEffect, useRef } from "react";
import axios from "axios";

const FileDownload = () => {
  // Add the following code if you want the name of the file appear on select
  // $(".custom-file-input").on("change", function() {
  //   var fileName = $(this).val().split("\\").pop();
  //   $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  // });
  let fileName = "";
  const fileInputOnChange = (e) => {
    // setPrompt(e.target.value);
    fileName = e.target.value;
    console.log("fileName1 : " +  fileName);
  };

  const handleSubmit = async (e) => {

    // fileName = e.target.value;
    console.log("fileName : " +  fileName);

    let headersList = {
      "Authorization": "Bearer predefinedMyApiKey"
    }

    let formdata = new FormData();
    formdata.append("fileName", fileName);

    let bodyContent = formdata;

    let reqOptions = {
      url: "http://hunihome.ipdisk.co.kr:8080/api/files/download",
      method: "GET",
      headers: headersList,
      data: bodyContent,
    }

    let response = await axios.request(reqOptions);
    console.log(response.data);
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Input Download file name" id="downloadFileName" 
          onChange={fileInputOnChange}
          // value={fileName} 
          />
          <div className="input-group-append">
            <button className="btn btn-success" type="submit" >Download file</button>
          </div>
        </div>
      </form>
    </>
  );
};
export default FileDownload;