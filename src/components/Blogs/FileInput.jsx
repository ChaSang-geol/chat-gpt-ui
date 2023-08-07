import { useState, useCallback, useEffect, useRef } from "react";

const FileInput = () => {
// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});


return (
  <>
    <form>
      <div class="custom-file">
        <input type="file" class="custom-file-input" id="customFile" />
        <label class="custom-file-label" for="customFile">Choose file</label>
      </div>
    </form>
  </>
);
};
export default FileInput;