import './App.css';
import ChatUserList from './components/chat/ChatUserList';
import Chat from './components/chat/Chat';
import { Grid, GridItem, Box } from '@chakra-ui/react';

function App() {
  return (
    <Box className='App'>
      <header />
      <Grid h='100vh' templateColumns='repeat(5, 1fr)'>
        <GridItem bg='#43d3c5' colSpan='1' p={2}>
          <ChatUserList></ChatUserList>
        </GridItem>
        <GridItem bg='#fff' colSpan='4'>
          <Chat></Chat>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
