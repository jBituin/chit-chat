import React, { useEffect } from 'react';
import Message from './Message';
import IMessage from '../../interfaces/message';

interface Props {
  messages: IMessage[];
}

export default function Messages(props: Props) {
  useEffect(() => {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('messageList');
    if (!objDiv) return;
    objDiv.scrollTop = objDiv.scrollHeight;
  });
  const messages = () => {
    return props.messages.map((m, i) => {
      const { username, message, fromMe } = m;
      return (
        <Message
          username={username}
          message={message}
          fromMe={fromMe}
          key={i}
        ></Message>
      );
    });
  };

  return (
    <div className='messages' id='messageList'>
      {messages()}
    </div>
  );
}
