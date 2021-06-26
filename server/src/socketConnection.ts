import http from 'http';
import { Server } from 'socket.io';
import { Express } from 'express';

export default function (app: Express) {
  const server = http.createServer(app);
  const io = new Server(server);

  let users = [];

  const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
      users.push({ userId, socketId });
  };

  const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
  };

  const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
  };

  io.on('connection', (socket) => {
    //when connect
    console.log('a user connected.');

    //take userId and socketId from user
    socket.on('ADD_USER', (userId) => {
      addUser(userId, socket.id);
      io.emit('GET_USERS', users);
    });

    //send and get message
    socket.on('SEND_MESSAGE', ({ senderId, receiverId, text }) => {
      const user = getUser(receiverId);
      io.to(user.socketId).emit('GET_MESSAGE', {
        senderId,
        text,
      });
    });

    //when disconnect
    socket.on('disconnect', () => {
      console.log('a user disconnected!');
      removeUser(socket.id);
      io.emit('GET_USERS', users);
    });
  });
}
