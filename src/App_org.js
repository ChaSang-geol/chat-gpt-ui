import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from "axios";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a request to the server with the prompt
    axios
      .post("http://localhost:8080/api/v1/chat", { prompt })
      .then((res) => {
        // Update the response state with the server's response
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="col-lg-12">
      <form onSubmit={handleSubmit}>
        <div className="chat-message clearfix">

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">질문 입력</span>
            </div>
            <textarea className="form-control" aria-label="질문 입력" placeholder="Enter your ask here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}></textarea>
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary btn-lg">Send</button>
            </div>
          </div>

        </div>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default App;
