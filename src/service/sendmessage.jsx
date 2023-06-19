import axios from "axios";
// import { useState } from 'react';

// import PromptForm, { prompt } from '../components/PromptForm';
const API_URL = "http://localhost:8080";
// SSO 로그인 처리
const sso = () => {
  return {};
};
// 질문 보내고 답변 수신하기
const sendmessage = (prompt, userid) => {
  // prompt (질문)를 받아서 OpenAI ChatGPT로 보내기 위해 Back-End API를 호출한다
  const dayjs = require("dayjs");
  let resdata = { restime: "", answer: "" };

  axios
    .post(API_URL + "/api/v1/chattest", {
      prompt: prompt,
      userid: userid,
    })
    .then((res) => {
      console.log("api respose : ", res.data);
      console.log(
        "api respose message : ",
        res.data.choices[0].message.content
      );
      let varrestime = dayjs().format("h:mm A");

      resdata = {
        restime: varrestime,
        answer: res.data.choices[0].message.content,
      };
      console.log("resdata : ", resdata);
      return resdata;
    })
    .catch((err) => {
      console.error(err);
    });
  // console.log("resdata : " , resdata);
};

const handleSubmitApi = async ({prompt, userid, callback}) => {
  const dayjs = require("dayjs");
  let resdata = { restime: "", answer: "" };
  try {
    const response = await axios.post(API_URL + "/api/v1/chattest", {
      prompt: prompt,
      userid: userid,
    });
    let varrestime = dayjs().format("h:mm A");
    
    console.log(response);

    resdata = {
      restime: varrestime,
      answer: response.data.choices[0].message.content,
    };
    console.log("resdata : ", resdata);

    if(typeof(callback) === 'function'){
      callback(resdata);
    }
    
    return resdata;
  } catch (error) {
    console.log(error);
  }
};

const sendMessageService = {
  sendmessage,
  sso,
  handleSubmitApi,
};

export const makeMessage = (messageData) => {
  const { prompt, userid } = messageData;

  let varrestime;
  let varasktime = new Date();
  let content = sendmessage(prompt, userid);
  varrestime = new Date();

  const dayjs = require("dayjs");
  return {
    prompt: prompt,
    asktime: dayjs(varasktime).format("HH:mm A"),
    answer: content,
    restime: dayjs(varrestime).format("HH:mm A"),
  };
};

export default sendMessageService;
