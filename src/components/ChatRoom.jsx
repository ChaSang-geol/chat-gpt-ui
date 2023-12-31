// import ReactDOM from "react-dom/client";
import { useState, useCallback, useEffect, useRef } from "react";
import sendMessageService from "../service/sendmessage";
import UserLoginSet from "./UserLoginSet";
// import ChatViewPrompt from "./ChatViewPrompt";
// import ChatViewAnswer from "./ChatViewAnswer";
// import PromptForm from "./PromptForm";
// import ChatHistory from "./ChatHistory";
// import { handleSubmitApiCallback } from "../service/chatmessageutil";
import dayjs from "dayjs";

const ChatRoom = () => {
  const [prompt, setPrompt] = useState("");
  // const [response, setResponse] = useState({});
  const [userid] = useState("ia00966");
  let newMessage = {};
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState(0);
  const chatWindow = useRef(null);
  let varasktime = dayjs().format("h:mm A");

  const onChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(prompt);
      console.log(userid);
      if (prompt === "" || prompt == null) {
        alert("질문을 입력하여 주십시오!");
        return null;
      }
      // 현재시간을 출력하는 방법
      // var now = new Date(); // 현재시간
      // var nowTime =
      //   now.getFullYear() +
      //   "년" +
      //   (now.getMonth() + 1) +
      //   "월" +
      //   now.getDate() +
      //   "일" +
      //   now.getHours() +
      //   "시" +
      //   now.getMinutes() +
      //   "분" +
      //   now.getSeconds() +
      //   "초";
      // console.log("현재시간 : " + nowTime);

      varasktime = dayjs().format("h:mm:ss A");
      setCount((count) => count + 1);

      // 질문 결과 받기
      // let test_data = await sendMessageService.handleSubmitApi(prompt, userid);
      sendMessageService.handleSubmitApi({
        prompt,
        userid,
        callback: handleSubmitApiCallback,
      });

      moveScrollToReceiveMessage(); // 메시지 응답후 창을 스크롤하기
      setPrompt("");
    },
    [prompt]
  );

  const handleSubmitApiCallback = (response) => {

    if (response) {
      newMessage = {
        id: count,
        asktime: varasktime,
        prompt: prompt,
        restime: response?.restime,
        answer: response?.answer,
      }; // prompt 를 전달하여 API로 부터 결과를 응답 받아 입력
      console.log("newMessage : ", newMessage);

      addMessage(newMessage);
    }
  };

  // const addMessage = (newMessage) => {
  //     setMessages((messages) => [...messages, newMessage]);
  //     console.log("messages : ", messages);
  //   };
  // 화면에 출력할 메시지를 만든다
  const addMessage = useCallback(
    (newMessage) => {
      setMessages((messages) => [...messages, newMessage]);
      console.log("messages : ", messages);
    },
    [messages]
  );

  // 새 메시지를 받으면 스크롤을 이동하는 함수
  const moveScrollToReceiveMessage = useCallback(() => {
    if (chatWindow.current) {
      chatWindow.current.scrollTo({
        top: chatWindow.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      <div className="chat-header clearfix">
        {/* UserLoginSet 영역 : 상단의 로그인 사용자 표시 */}
        <UserLoginSet userid={userid} />
      </div>
      {/* ChatRoom 영역 : 질문에 대한 답변이 오면 질문과 답변을 순서대로 채팅창에 출력하여 보여주는 영역 */}
      {/* <ChatHistory messages={messages} handleSubmit={handleSubmit} /> */}
      <div className="chat-history" ref={chatWindow}>
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
              // onChange={(e) => setPrompt(e.target.value)}
              onChange={onChange}
              placeholder="Enter text here..."
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default ChatRoom;
