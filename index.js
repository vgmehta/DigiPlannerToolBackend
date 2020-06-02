const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const redis = require('redis');
const path = require('path');
const socketio = require('socket.io');
const swaggerDoc = require('./swaggerDocs')
const userRouter = require('./routes/userRouter');
const boardRouter = require('./routes/boardRouter');
const roomRouter = require('./routes/roomRouter');

const hostname = 'localhost';
const port = 8080;

const app = express();
const host = "redis-digiplanner-digi-planner-tool.apps.123.252.203.195.nip.io";
const portRedis = 6379;
const pw1 = "ICxXmqVPg3bTjYRT";
var client = redis.createClient(portRedis, host);
client.auth(pw1);
const server = http.createServer(app);

var io = socketio(server);

app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));

swaggerDoc(app);
app.use(express.static(path.join(__dirname, '../Client/dist/digi-planner')));
app.use((req, res, next) => {
  req.redis = client;
  next();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

client.on('connect', function () {
  console.log('connected');
});

client.on('error', function (err) {
  console.error(err)
});

//User
app.use('/user', userRouter);
//Board
app.use('/board', boardRouter);
//Room
app.use('/room', roomRouter);

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../Client/dist/digi-planner/index.html'));
});

//Socket Part Added
io.on("connection", (socket) => {
  console.log("connection added");

  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
  });

  socket.on("groupAltered", (data) => {
    socket.broadcast.to(data[1]).emit("groupAltered", data[0]);
  });

  socket.on("deleteGroup", (data) => {
    socket.broadcast.to(data[1]).emit("deleteGroup", data[0]);
  });

  socket.on("colorChange", (data) => {
    socket.broadcast.to(data[2]).emit("colorChange", data.splice(0, 2));
  });

  socket.on("clearCanvas", (data) => {
    socket.broadcast.to(data[1]).emit("clearCanvas", data[0]);
  });

  socket.on("message", (msg) => {
    console.log(msg);
  });

  socket.on("addedObject", (data) => {
    socket.broadcast.to(data[2]).emit("addedObject", data.splice(0, 2));
  });

  socket.on("modifiedObject", (data) => {
    socket.broadcast.to(data[2]).emit("modifiedObject", data.splice(0, 2));
  });

  socket.on("regrouping", (data) => {
    socket.broadcast.to(data[2]).emit("regrouping", data.splice(0, 2));
  });

  socket.on("drawingLines", (data) => {
    socket.broadcast.to(data[2]).emit("drawingLines", data.splice(0, 2));
  });
});