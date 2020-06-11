const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const cors = require('cors');
const { resolve } = require('path');
const routes = require('./routes');

// Conexão com MongoDB
require('./database/index').connection();

io.on("connection", socket => {

  socket.on("connectRoom", box => {
    socket.join(box);
  })

});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(resolve(__dirname, '..', 'uploads')));
app.use((request, response, next) => {
  request.io = io;
  next();
})
app.use(routes);

server.listen(3333);