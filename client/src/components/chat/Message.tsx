import React from 'react';

interface Props {
  message: string;
  username: string;
  fromMe: boolean;
}

export default function Message(props: Props) {
  const { message, username, fromMe } = props;
  const messageClass = fromMe ? 'from-me' : '';
  return (
    <div className={`message ${messageClass}`}>
      <div className='username'>{username}</div>
      <div className='message-body'>{message}</div>
    </div>
  );
}
