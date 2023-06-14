// import { useState } from "react";
// import ReactDOM from "react-dom/client";

function ChatViewPrompt(props) {
  // const [prompt, setPrompt] = useState(props.prompt);
console.log(props);

  return (
    <>
      <li className="clearfix">
        <div className="message-data text-right">
          <span className="message-data-time">10:10 AM, 6/11</span>
          <img src="/static/img/avatar/avatar7.png" alt="avatar" />
        </div>
        <div className="message other-message float-right"> {prompt}</div>
      </li>
    </>
  )
}

// const chat_prompt = ReactDOM.createRoot(document.getElementById('chatroom'));
// chat_prompt.render(<ChatViewPrompt />);

export default ChatViewPrompt;
