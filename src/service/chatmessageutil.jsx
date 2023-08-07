import { useCallback, useRef, useState } from "react";
import { } from "../components/ChatRoom";

// export default function ChatMessageUtil({ asktime }) {

const [messages, setMessages] = useState([]);
const [response, setResponse] = useState({});
const [userid, setUserid] = "ia00966";
let newMessage = {};
const [count, setCount] = 0;
const chatWindow = useRef(null);
// handleSubmitApiCallback

export const handleSubmitApiCallback = (response) => {
  // setResponse(response);
  setCount((count) => count + 1);
  // let varrestime = dayjs().format("h:mm A");
  if (response) {
    newMessage = {
      id: count,
      asktime: asktime,
      prompt: prompt,
      restime: response?.restime,
      answer: response?.answer,
    }; // prompt 를 전달하여 API로 부터 결과를 응답 받아 입력
    console.log("newMessage : ", newMessage);

    addMessage(newMessage);

  }

  moveScrollToReceiveMessage(); // 메시지 응답후 창을 스크롤

};

export const addMessage = useCallback((newMessage) => {
  setMessages((messages) => [...messages, newMessage]);
  console.log("messages : ", messages);
},
  [messages]
);

// 새 메시지를 받으면 스크롤을 이동하는 함수
export const moveScrollToReceiveMessage = useCallback(() => {
  if (chatWindow.current) {
    chatWindow.current.scrollTo({
      top: chatWindow.current.scrollHeight,
      behavior: "smooth",
    });
  }
}, []);
// }