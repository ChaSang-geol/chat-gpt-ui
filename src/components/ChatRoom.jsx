import ReactDOM from "react-dom/client";
import { useState, useCallback } from "react";
import sendMessageService from "../service/sendmessage";
import UserLoginSet from "./UserLoginSet";
import ChatViewPrompt from "./ChatViewPrompt";
import ChatViewAnswer from "./ChatViewAnswer";
import PromptForm from "./PromptForm";

const ChatRoom = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [userid, setUserid] = useState("ia00966");
  const [messages, setMessages] = useState([]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(prompt);
      console.log(userid);

      // ChatViewPrompt(prompt);
      const newMessage = makeMessage(prompt); // makeMessage
      setMessages((messages) => [...messages, newMessage]);
      // moveScrollToReceiveMessage();
      // sendMessageService.sendmessage(prompt, userid);
    },
    [messages]
  );

  function makeMessage(prompt) {
    setMessages({
      asktime: "",
      prompt: prompt,
      restime: "",
      answer: "",
    });
  }

  return (
    <>
      <div className="chat-header clearfix">
        {/* UserLoginSet 영역 : 상단의 로그인 사용자 표시 */}
        <UserLoginSet userid={userid} />
      </div>
      <div className="chat-history">
        <ul className="m-b-0" id="chatroom">
          {/* ChatRoom 영역 : 질문에 대한 답변이 오면 질문과 답변을 순서대로 채팅창에 출력하여 보여주는 영역 */}
          <ChatViewPrompt />
          <ChatViewAnswer />
        </ul>
      </div>
      {/* 질문을 입력 */}
      <div className="chat-message clearfix">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-0">
            <div className="input-group-prepend">
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-send"></i>
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter text here..."
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default ChatRoom;
