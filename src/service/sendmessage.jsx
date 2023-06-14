import axios from "axios";
// import { useState } from 'react';

// import PromptForm, { prompt } from '../components/PromptForm';
const API_URL = "https://localhost:8080";
// SSO 로그인 처리
const sso = () => {

  return {}
}
// 질문 보내고 답변 수신하기
const sendmessage = (prompt, userid) => {
  // prompt (질문)를 받아서 OpenAI ChatGPT로 보내기 위해 Back-End API를 호출한다
  return axios
    .post(API_URL + "/api/v1/chat", {
      prompt: prompt
      , userid: userid
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};
const sendMessageService = {
  sendmessage
  , sso
};
export default sendMessageService;