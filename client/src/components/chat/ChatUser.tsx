import React from 'react';
import { Box, Avatar, Text, Wrap, WrapItem } from '@chakra-ui/react';

interface Props {
  chatName: string;
  chatImage?: string;
  latestChat: string;
}

export default function ChatUser(props: Props) {
  let { chatName, chatImage, latestChat } = props;
  return (
    <Box maxW='sm' borderRadius='lg' overflow='hidden' my={4}>
      <Wrap>
        <WrapItem>
          <Avatar name={chatName} src={chatImage}></Avatar>
          <Box textAlign='left' ml={3}>
            <Text> {chatName}</Text>
            <Text color='grey' fontSize='small'>
              {' '}
              {latestChat}
            </Text>
          </Box>
        </WrapItem>
      </Wrap>
    </Box>
  );
}
