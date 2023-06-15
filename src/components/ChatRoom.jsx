import ReactDOM from "react-dom/client";
import { useState, useCallback, useEffect } from "react";
import sendMessageService from "../service/sendmessage";
import UserLoginSet from "./UserLoginSet";
import ChatViewPrompt from "./ChatViewPrompt";
import ChatViewAnswer from "./ChatViewAnswer";
import PromptForm from "./PromptForm";
import ChatHistory from "./ChatHistory";

const ChatRoom = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [userid, setUserid] = useState("ia00966");

  const initialMessages = {
    id: 0,
    asktime: "",
    prompt: "",
    restime: "",
    answer: "",
  };
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   function fetchCarList() {
  //     ...
  //   }
  //   fetchCarList()
  // }, [])

  function makeMessage(prompt) {
    setCount((c) => c + 1);
    return {
      id: count,
      asktime: "15:00 AM",
      prompt: prompt,
      restime: "15:01 AM",
      answer: "답변 입니다. " + count,
    };
  }

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(prompt);
      console.log(userid);

      //if (prompt === "" || prompt == null) return null;
      const newMessage = makeMessage(prompt); // makeMessage
      console.log(newMessage);
      setMessages((m) => [...m, newMessage]);
      console.log(messages);
      // moveScrollToReceiveMessage();
      // sendMessageService.sendmessage(prompt, userid);
    },
    [messages]
  ); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="chat-header clearfix">
        {/* UserLoginSet 영역 : 상단의 로그인 사용자 표시 */}
        <UserLoginSet userid={userid} />
      </div>
      {/* ChatRoom 영역 : 질문에 대한 답변이 오면 질문과 답변을 순서대로 채팅창에 출력하여 보여주는 영역 */}
      {/* <ChatHistory messages={messages} handleSubmit={handleSubmit} /> */}
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
      {/* 질문을 입력 */}
      {/* <PromptForm
        prompt={prompt}
        setPrompt={setPrompt}
        handleSubmit={handleSubmit}
      /> */}
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
