const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const chat = io.of('/chat');
const soccer = io.of('/축구방');
const baseball = io.of('/야구방');
const basketball = io.of('/농구방');

// const rooms = [];
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'))

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Listen on: ${PORT}`));

// io.on("connection", socket => {
//   const { id } = socket.client;
//   console.log(`User: ${id}`);

//   socket.on('chat message', ({nickname, msg}) => {
//     console.log(`${nickname}(${id}): ${msg}`);
//     io.emit('chat message', { nickname, msg });
//   })
// })

const db = [];

chat.on('connection', function(socket) {
  // console.log(socket.id);
  const { id } = socket.client;
  console.log(`Chat User: ${id}`);
  socket.on('input', (data) => {
    db.push({
      msg: data['text']
    });
    socket.broadcast.emit('input', {
      msg: data['text']
    })
  });
});

soccer.on('connection', socket => {
  const { id } = socket.client;
  console.log(`Chat User: ${id}`);

  socket.on('chat message', ({ nickname, msg }) => {
    console.log(`${nickname}(${id}): ${msg}`);
    soccer.emit('chat message', { nickname, msg });
  });
});

baseball.on('connection', socket => {
  const { id } = socket.client;
  console.log(`Chat User: ${id}`);

  socket.on('chat message', ({ nickname, msg }) => {
    console.log(`${nickname}(${id}): ${msg}`);
    baseball.emit('chat message', { nickname, msg });
  });
});

basketball.on('connection', socket => {
  const { id } = socket.client;
  console.log(`Chat User: ${id}`);

  socket.on('chat message', ({ nickname, msg }) => {
    console.log(`${nickname}(${id}): ${msg}`);
    basketball.emit('chat message', { nickname, msg });
  });
});