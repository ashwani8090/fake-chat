import React from 'react';
import ChatBar from '../chat-bar';
import './styles.css';

export default function ChatBox() {
  return (
    <div className='chat-box'>


      <ChatBar customStyle={{
        position: 'absolute',
        bottom: 0,
        left: 2,
        width: "97%",
      }} />
    </div>
  )
}
