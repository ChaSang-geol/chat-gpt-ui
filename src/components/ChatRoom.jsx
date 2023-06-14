import ReactDOM from "react-dom/client";
import { useState, useCallback, useEffect } from "react";
import sendMessageService from "../service/sendmessage";
import UserLoginSet from "./UserLoginSet";
import ChatViewPrompt from "./ChatViewPrompt";
import ChatViewAnswer from "./ChatViewAnswer";
import PromptForm from "./PromptForm";

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
  let count = 0;
  // useEffect(() => {
  //   function fetchCarList() {
  //     ...
  //   }
  //   fetchCarList()
  // }, [])

  
  function makeMessage(prompt) {
    count  =count+1 ;
    return ({
      id: messages.id+1,
      asktime: "",
      prompt: prompt,
      restime: "",
      answer: "답변 입니다. "+count,
    });
  };

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(prompt);
      console.log(userid);

      // ChatViewPrompt(prompt);
      const newMessage = makeMessage(prompt); // makeMessage
      console.log(newMessage);
      setMessages((messages) => [...messages, newMessage]);
      console.log(messages);
      // moveScrollToReceiveMessage();
      // sendMessageService.sendmessage(prompt, userid);
    }, [messages, makeMessage, prompt, userid]); // eslint-disable-line react-hooks/exhaustive-deps

  

  return (
    <>
      <div className="chat-header clearfix">
        {/* UserLoginSet 영역 : 상단의 로그인 사용자 표시 */}
        <UserLoginSet userid={userid} />
      </div>
      <div className="chat-history">
      {messages.map((message, index) => {
        <ul className="m-b-0" id="chatroom" key={index} >
          {/* ChatRoom 영역 : 질문에 대한 답변이 오면 질문과 답변을 순서대로 채팅창에 출력하여 보여주는 영역 */}
          <ChatViewPrompt prompt={message.prompt} asktime={message.asktime} />
          <ChatViewAnswer answer={message.answer} restime={message.restime} />
        </ul>
      })}
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
