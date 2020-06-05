const express = require('express');
//const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');
const redis = require('redis');
const path = require('path');
const socketio = require('socket.io');
const swaggerDoc = require('./swaggerDocs');
const userRouter = require('./routes/userRouter');
const boardRouter = require('./routes/boardRouter');
const roomRouter = require('./routes/roomRouter');

const hostname = '0.0.0.0';
const port = 8080;

const app = express();
//app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-requested-width,Origin,Content-Type,Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST');
  next();
});

const host = "redis-digi-planner-tool.apps.123.252.203.195.nip.io";
const portRedis = 6379;
const password = "digiplanner";
var client = redis.createClient(portRedis, '172.30.25.223');
//var client = redis.createClient();
client.auth(password);
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
app.use(express.static(path.join(__dirname, './public/dist/digi-planner')));
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
  res.sendFile(path.join(__dirname, './public/dist/digi-planner/index.html'));
});

client.hmset("users", {
    'vruddhigmehta@gmail.com': '1',
    'seno.29.11.gupta@gmail.com': '0',
    'vgmehta@ce.vjti.ac.in': '0',
    'kiranambokar6@gmail.com': '1',
    'kdambokar_b17@it.vjti.ac.in': '0',
    'bhaleraoshubham99@gmail.com': '1',
    'khanolkarketan@gmail.com': '1',
    'asrarul97@gmail.com': '1',
    'dikshagupta2012@gmail.com': '1',
    'helloworldmanit@gmail.com': '0',
    'vedantmathe@gmail.com': '1',
    'sdbhalerao_b17@ce.vjti.ac.in': '0',
    'mathevedant@gmail.com': '0',
    'kits41999@gmail.com': '0'
  }, (err, reply) => {
    if (!reply) {
      console.log(err);
    } else {
      console.log(reply);
    }
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
