import { useState, useCallback, memo } from 'react';
import sendMessageService from '../service/sendmessage';

const PromptForm=({prompt, handleSubmit, userid}) =>{
  console.log("child render : PromptForm");
  const [input_prompt, setPrompt] = useState({prompt});

  return (

    <div className="chat-message clearfix">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-0">
          <div className="input-group-prepend">
            <button type="submit" className="btn btn-primary"><i className="fa fa-send"></i></button>
          </div>
          <input type="text" className="form-control"
            value={input_prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter text here..." />
        </div>
      </form>
    </div>

  );
}
export default memo(PromptForm);