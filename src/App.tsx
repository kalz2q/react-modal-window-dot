import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-modal-window-dot"
  })
  return (
    <div className="App">
      <div className="open">
        詳細を見る
      </div>

      <div className="mask" ></div >

      <section className="modal" >
        <p>こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。</p>
        <div className="close" >
          閉じる
        </div >
      </section >
    </div >
  );
}

export default App;
