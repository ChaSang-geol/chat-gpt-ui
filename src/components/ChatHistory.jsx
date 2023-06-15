// import ReactDOM from "react-dom/client";
import { useState, useCallback, memo } from "react";

const ChatHistory = ({ messages, handleSubmit }) => {
  // const [prompt, setPrompt] = useState("");
  // const [response, setResponse] = useState("");
  // const [userid, setUserid] = useState("");

  return (
    <>
      <div className="chat-history">
        {messages.map((message, index) => {
          return (
            <ul className="m-b-0" id="chatroom" key={index}>
              {/* ChatRoom 영역 : 질문에 대한 답변이 오면 질문과 답변을 순서대로 채팅창에 출력하여 보여주는 영역 */}
              <li className="clearfix">
                <div className="message-data text-right">
                  <span className="message-data-time">{message.asktime}</span>
                  <img src="/static/img/avatar/avatar7.png" alt="avatar" />
                </div>
                <div className="message other-message float-right">
                  {message.prompt}
                </div>
              </li>
              <li className="clearfix">
                <div className="message-data">
                  <img src="/static/img/chatGPT.png" alt="avatar" />
                  <span className="message-data-time">{message.restime}</span>
                </div>
                <div className="message my-message">{message.answer}</div>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};
export default memo(ChatHistory);
