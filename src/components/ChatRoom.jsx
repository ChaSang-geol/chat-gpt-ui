import ReactDOM from "react-dom/client";
import { useState, useCallback, useEffect, useRef } from "react";
import sendMessageService from "../service/sendmessage";
import UserLoginSet from "./UserLoginSet";
import ChatViewPrompt from "./ChatViewPrompt";
import ChatViewAnswer from "./ChatViewAnswer";
import PromptForm from "./PromptForm";
import ChatHistory from "./ChatHistory";



const ChatRoom = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState({});
  const [userid, setUserid] = useState("ia00966");
  let newMessage = {};
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState(0);
  const chatWindow = useRef(null);

  // useEffect(() => {
  //   function fetchCarList() {
  //     ...
  //   }
  //   fetchCarList()
  // }, [])

  // 새 메시지를 받으면 스크롤을 이동하는 함수
  const moveScrollToReceiveMessage = useCallback(() => {
    if (chatWindow.current) {
      chatWindow.current.scrollTo({
        top: chatWindow.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  function makeMessage(prompt, userid) {
    setCount((count) => count + 1);
    console.log("Count : " + count);
    var now = new Date(); // 현재시간
    var nowTime =
      now.getFullYear() +
      "년" +
      (now.getMonth() + 1) +
      "월" +
      now.getDate() +
      "일" +
      now.getHours() +
      "시" +
      now.getMinutes() +
      "분" +
      now.getSeconds() +
      "초";
    console.log("현재시간 : " + nowTime);
    const dayjs = require("dayjs");
    let varasktime = dayjs().format("h:mm A");
    setResponse(sendMessageService.sendmessage(prompt, userid));
    let varrestime = dayjs().format("h:mm A");

    return {
      id: count,
      asktime: varasktime,
      prompt: prompt,
      restime: varrestime,
      answer: response,
    };
  }

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
      // alert("#1 : " + prompt);

      setCount((count) => count + 1);
      console.log("Count : " + count);
      var now = new Date(); // 현재시간
      var nowTime =
        now.getFullYear() +
        "년" +
        (now.getMonth() + 1) +
        "월" +
        now.getDate() +
        "일" +
        now.getHours() +
        "시" +
        now.getMinutes() +
        "분" +
        now.getSeconds() +
        "초";
      console.log("현재시간 : " + nowTime);
      const dayjs = require("dayjs");
      let varasktime = dayjs().format("h:mm A");
      // 질문 결과 받기
      // let content = {};
      // content = sendMessageService.sendmessage(prompt, userid);
      // console.log(sendMessageService.sendmessage(prompt, userid));
      // console.log("content: ", content);

      // let test_data = await sendMessageService.handleSubmitApi(prompt, userid);

      const handleSubmitApiCallback = (response) => {
        setResponse(response);
        let varrestime = dayjs().format("h:mm A");
        if (response) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          newMessage = {
            id: count,
            asktime: varasktime,
            prompt: prompt,
            restime: response?.restime,
            answer: response?.answer,
          }; // prompt 를 전달하여 API로 부터 결과를 응답 받아 입력
          console.log("newMessage : ", newMessage);
          // alert("#2 : " + toString(newMessage));
          addMessage(newMessage);
          // setMessages((messages) => [...messages, newMessage]);
        }
        // console.log(messages);
        moveScrollToReceiveMessage(); // 메시지 응답후 창을 스크롤
        // sendMessageService.sendmessage(prompt, userid);
        // alert("#3 : " + messages);
      }

      sendMessageService.handleSubmitApi({
        prompt, 
        userid, 
        callback : handleSubmitApiCallback
      });

     


      
    },
    [prompt, response]
  );

  // useEffect(() => {
  //   if (response) {
  //     console.log("response", response);
  //     // setResponse(response);
  //     // setNewMessage({
  //     //   id: newMessage.id,
  //     //   asktime: newMessage.asktime,
  //     //   prompt: newMessage.prompt,
  //     //   restime: response.restime,
  //     //   answer: response.answer,
  //     // });
  //   }
  //   console.log("response set");
  // }, [response, newMessage]);

  const addMessage = useCallback(
    (newMessage) => {
      setMessages((messages) => [...messages, newMessage]);
      console.log("messages : ", messages);
    },
    [messages]
  );

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
