const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const redis = require('redis');
const path = require('path');
const socketio = require("socket.io");
const userRouter = require('./routes/userRouter');
const boardRouter = require('./routes/boardRouter');
const drawingRouter = require('./routes/drawingRouter');
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
//Edit Drawing Board User and Admin
app.use('/drawing', drawingRouter); 
//Check if room code is valid
app.use('/roomIdExists', roomExistenceRouter); 
//Add room id to the userid's set
app.use('/addJoinedRoom', addJoinedRoomRouter); 

app.get('/*', (req,res,next) => {
  res.sendFile(path.join(__dirname,'../Client/dist/digi-planner/index.html'));
});

//Socket Part Added
io.on("connection", socket =>{
    console.log("connection added");

    // socket.on("joinRoom", (roomId) => {
   //    socket.join(roomId);
   //  });

   socket.on("canvas", (data) => {
      socket.broadcast.emit("canvas", data);
   });

   socket.on("deleteGroup", (data) => {
      socket.broadcast.emit("deleteGroup", data);
   });

   socket.on("colorChange", (data) => {
      socket.broadcast.emit("colorChange", data);
   });

   socket.on("clearCanvas", (data) => {
      socket.broadcast.emit("clearCanvas", data);
   });

    socket.on("message", msg => {
        console.log(msg);
    });
    
    socket.on("addedObject", (c) =>{
        socket.broadcast.emit('addedObject', c);
    });

    socket.on("modifiedObject", (c) =>{
        console.log("Hello");
        socket.broadcast.emit('modifiedObject', c);
    });

    socket.on("regrouping", (c) =>{
        socket.broadcast.emit('regrouping', c);
    });
    
    socket.on("drawingLines", (c) =>{
        socket.broadcast.emit('drawingLines', c);
    });
});
