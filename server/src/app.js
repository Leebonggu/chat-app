const createError = require('http-errors');
const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes');
const chatRouter = require('./routes/chat');

const app = express();

app.ios = require('socket.io')();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));
app.use(cors())

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });

// soccer.on('connection', socket => {
//   const { id } = socket.client;
//   console.log(`Chat User: ${id}`);

//   socket.on('chat message', ({ nickname, msg }) => {
//     console.log(`${nickname}(${id}): ${msg}`);
//     soccer.emit('chat message', { nickname, msg });
//   });
// });

const rooms = []
app.get('/roomlist', (req, res) => {
  // 방연결
  res.send(rooms);
});


app.ios.on('connection', function(socket) {
  // console.log(socket.id);
  socket.on('input', (data) => {
    db.push({
      msg: data['text']
    });
    console.log(db);
    console.log(data);
    socket.emit('output', {
      msg: data['text']
    })
  });
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env' === 'development' ? err : {});

  res.status(err.status || 500).send(err.message);
});

module.exports = app;