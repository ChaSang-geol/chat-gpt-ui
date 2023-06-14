// import { useState } from "react";
// import ReactDOM from "react-dom/client";

function ChatViewPrompt(prompt, asktime) {
  // const [prompt, setPrompt] = useState(props.prompt);
  console.log(prompt);
  if (prompt === "" || prompt == null) {
    return null;
  } else {
    return (
      <>
        <li className="clearfix">
          <div className="message-data text-right">
            <span className="message-data-time">{asktime}</span>
            <img src="/static/img/avatar/avatar7.png" alt="avatar" />
          </div>
          <div className="message other-message float-right"> {prompt}</div>
        </li>
      </>
    );
  }
}

// const chat_prompt = ReactDOM.createRoot(document.getElementById('chatroom'));
// chat_prompt.render(<ChatViewPrompt />);

export default ChatViewPrompt;
