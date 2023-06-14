// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import { RecoilRoot } from 'recoil';
// import axios from "axios";
// import UserLoginSet from './components/UserLoginSet';
import ChatRoom from './components/ChatRoom';
// import Chat from './components/ChatViewAnswer';

function App() {

    // const [userid, setUserId] = useState("ia00966");
    // setUserId("ia00966");

    return (
        // <RecoilRoot>
        <div className="container">
            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card chat-app">
                        <div id="plist" className="people-list">
                            <div className="lnb-header">
                                <h2>Chat GPT test</h2>
                            </div>
                            <ul className="list-unstyled chat-list mt-2 mb-0">
                                <li className="clearfix active">
                                    {/* <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" /> */}

                                    <span><i className="fa fa-comments-o fa-2x" aria-hidden="true">&nbsp;</i></span>
                                    <div className="about">
                                        <div className="name">Ask Chat GPT</div>
                                        {/* <div className="status"> <i className="fa fa-circle offline"></i> left 7 mins ago </div> */}
                                    </div>
                                </li>
                                <li className="clearfix">
                                    {/* <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" /> */}
                                    {/* <i className="fa fa-bars fa-2x"></i> */}
                                    {/* <span><i className="fa fa-gear fa-2x" aria-hidden="true">&nbsp;</i></span> */}
                                    <div className="about">
                                        {/* <div className="name">Management</div> */}
                                        {/* <div className="status"> <i className="fa fa-circle online"></i> online </div> */}
                                    </div>
                                </li>
                                <li className="clearfix">
                                    {/* <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" /> */}
                                    <span><i className="fa fa-user-circle-o fa-2x" aria-hidden="true">&nbsp;</i></span>
                                    <div className="about">
                                        <div className="name">Users</div>
                                        {/* <div className="status"> <i className="fa fa-circle online"></i> online </div> */}
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="chat">
                            {/* ChatRoom 영역 : 질문을 입력하고 질문에 대한 답변이 오면 질문과 답변을 순서대로 채팅창에 출력하여 보여주는 영역 */}
                            <ChatRoom />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </RecoilRoot>
    );
}

export default App;
