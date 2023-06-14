// import ReactDOM from "react-dom/client";
// import { useState, useCallback } from 'react';


const ChatViewAnswer = (answer, restime) => {
  // const [prompt, setPrompt] = useState("");
  // const [response, setResponse] = useState("");
  // const [userid, setUserid] = useState("");


  return (
    <>
      <li className="clearfix">
        <div className="message-data">
          <img src="/static/img/chatGPT.png" alt="avatar" />
          <span className="message-data-time">{restime}</span>
        </div>
        <div className="message my-message">{answer}</div>
      </li>
    </>
  )
}
export default ChatViewAnswer;