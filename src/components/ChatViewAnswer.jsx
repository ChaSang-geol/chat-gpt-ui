// import ReactDOM from "react-dom/client";
import { useState, useCallback, memo} from 'react';

const ChatViewAnswer = ({asktime, answer, restime}) => {
  // const [prompt, setPrompt] = useState("");
  // const [response, setResponse] = useState("");
  // const [userid, setUserid] = useState("");

  return (
    <>
      <li className="clearfix">
        <div className="message-data text-right">
          <span className="message-data-time">{asktime}</span>
          <img src="/static/img/avatar/avatar7.png" alt="avatar" />
        </div>
        <div className="message other-message float-right"> {prompt}</div>
      </li>
      <li className="clearfix">
        <div className="message-data">
          <img src="/static/img/chatGPT.png" alt="avatar" />
          <span className="message-data-time">{restime}</span>
        </div>
        <div className="message my-message">{answer}</div>
      </li>
    </>
  );
};
export default memo (ChatViewAnswer);
