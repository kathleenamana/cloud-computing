import React, { useEffect, useState, useRef } from 'react';

export default function ChatPanel(){
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const wsRef = useRef(null);

  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8000/ws/chat');
    wsRef.current = ws;
    ws.onmessage = (e)=>{
      setMessages(m => [...m, e.data]);
    }
    ws.onopen = ()=> console.log('ws open');
    ws.onclose = ()=> console.log('ws closed');
    return ()=> ws.close();
  },[])

  function send(){
    if(!text) return;
    wsRef.current.send(text);
    setText('');
  }

  return (
    <div>
      <h2>Chat</h2>
      <div className="chatbox">
        {messages.map((m,i)=>(<div key={i} className="msg">{m}</div>))}
      </div>
      <div className="chat-input">
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Say something" />
        <button onClick={send}>Send</button>
      </div>
    </div>
  )
}
