const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const redis = require('redis');
const path = require('path');
const socketio = require("socket.io");
const userRouter = require('./routes/userRouter');
const boardRouter = require('./routes/boardRouter');
const drawingRouter = require('./routes/drawingRouter');
const drawingUserViewRouter = require('./routes/drawingUserViewRouter');
const roomExistenceRouter = require('./routes/roomExistenceRouter');
const addJoinedRoomRouter = require('./routes/addJoinedRoomRouter');

const hostname = 'localhost';
const port = '4200';

const app = express();
const client = redis.createClient();
const server = http.createServer(app);

var io = socketio(server);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'../Client/dist/digi-planner')));
app.use((req, res, next) => {
  req.redis = client;
  next();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

client.on('connect', function() {
  console.log('connected');
});

//getUsers
app.use('/users', userRouter); 
//View Existing Boards in Admin View, User View
app.use('/boards', boardRouter); 
//Edit Drawing Board Admin
app.use('/drawing', drawingRouter);
//Edit and get Room Data(Json)
app.use('/drawingUserView', drawingUserViewRouter);
//Check if room code is valid
app.use('/roomIdExists', roomExistenceRouter); 
//Add room id to the userid's set
app.use('/addJoinedRoom', addJoinedRoomRouter); 

app.get('/*', (req,res,next) => {
  res.sendFile(path.join(__dirname,'../Client/dist/digi-planner/index.html'));
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
     socket.broadcast.to(data[1]).emit("modifiedObject", data[0]);
  });

  socket.on("regrouping", (data) => {
     socket.broadcast.to(data[1]).emit("regrouping", data[0]);
  });

  socket.on("drawingLines", (data) => {
     socket.broadcast.to(data[2]).emit("drawingLines", data.splice(0, 2));
  });
});

client.hmset("users", {
   'khanolkarketan@gmail.com':'1',
   'dilipkhanolkar1966@gmai.com':'0',
   "kits41999@gmail.com":'0'
},(err, reply) => {
   if(!reply){
      console.log('0');
   }else{
      console.log(reply.toString());
   }
});