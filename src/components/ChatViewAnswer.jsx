import ReactDOM from "react-dom/client";
import { useState, useCallback } from 'react';


const ChatViewAnswer = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [userid, setUserid] = useState("");


  return (
    <>
      <li className="clearfix">
        <div className="message-data">
          <img src="/static/img/chatGPT.png" alt="avatar" />
          <span className="message-data-time">10:12 AM, Today</span>
        </div>
        <div className="message my-message">우리나라에서 GDPR 가이드북을 발간하게 된 배경
          2016년 5월 유럽연합(이하 ‘EU’)에서 제정한 「일반 개인정보보호법(General Data Protection
          Regulation)」(이하 ‘GDPR’)이 2018년 5월 25일부터 시행되었습니다.
          GDPR은 기존의 EU 개인정보보호 지침인 「1995년 개인정보보호 지침(Data Protection Directive
          95/46/EC)」을 대체하며 보다 강력한 제재를 규정하고 있습니다.
          이에 한국인터넷진흥원은 『우리 기업을 위한 유럽 일반 개인정보보호법(GDPR) 안내서』(2017.04.)
          와 『우리 기업을 위한 유럽 일반 개인정보보호법(GDPR) 1차 가이드라인』(2017.11.)을 우선 발간하여
          GDPR 시행 이전에 기업들의 사전 조치 수준을 제고하는 데 도움을 드리고자 하였습니다. 이후 GDPR
          본격 시행에 따라 위 ‘안내서’와 ‘1차 가이드라인’의 내용을 통합하고, EU의 정책자문 기구 ‘The
          Article 29 Data Protection Working Party’1(이하 ‘제29조 작업반’)에서 발표한 보고서 내용을 포
          함해 『우리 기업을 위한 EU 일반 개인정보보호법(GDPR) 가이드북』(개정판, 2018.08)을 발간하였습
          니다.</div>
      </li>
    </>
  )
}
export default ChatViewAnswer;