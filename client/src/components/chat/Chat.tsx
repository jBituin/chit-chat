import React, { useState } from 'react';
import Messages from './Messages';
import IMessage from '../../interfaces/message';
import ChatInput from './ChatInput';
import { Box } from '@chakra-ui/react';

interface Props {
  username: string;
}

export default function Chat(props: Props) {
  const [messages, setMessages] = useState<IMessage[]>([
    {
      username: 'Joms',
      message: 'Hakdog',
      fromMe: false,
    },
  ]);

  const sendHandler = (message: string) => {
    const messageObject: IMessage = {
      username: props.username,
      message,
      fromMe: true,
    };

    addMessage(messageObject);
  };

  const addMessage = (message: IMessage) => {
    // Append the message to the component state
    const newMessages = [...messages, message];
    setMessages(newMessages);
  };

  return (
    <Box className='container'>
      <h3>Chit-Chat</h3>
      <Messages messages={messages} />
      <ChatInput onSend={sendHandler} />
    </Box>
  );
}
