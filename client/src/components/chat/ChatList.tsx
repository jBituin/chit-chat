import React from 'react';
import { Box } from '@chakra-ui/react';
import Chat from './Chat';

export default function ChatList() {
  const chatList = [
    {
      chatName: 'Ariane Nulud',
      chatImage: 'https://bit.ly/2Z4KKcF',
      latestChat: 'This is test',
    },
    {
      chatName: 'Yondudes',
      chatImage: 'https://bit.ly/ryan-florence',
      latestChat: 'Nakagastos ng 30k',
    },
  ];

  return (
    <Box maxW='sm' borderRadius='lg' overflow='hidden'>
      {chatList.map(({ chatName, chatImage, latestChat }) => {
        return (
          <Chat
            chatName={chatName}
            chatImage={chatImage}
            latestChat={latestChat}
            key={chatName}
          />
        );
      })}
    </Box>
  );
}
