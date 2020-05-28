const express = require("express"),
   http = require("http"),
   socketIo = require("socket.io"),
   bodyParser = require("body-parser"),
   redis = require("redis"),
   path = require("path"),
   app = express();

const server = http.createServer(app);
const io = socketIo(server);

const hostname = "localhost";
const port = "3000";
const client = redis.createClient();

const userRouter = require("./routes/userRouter");
const boardRouter = require("./routes/boardRouter");
const drawingRouter = require("./routes/drawingRouter");
const roomExistenceRouter = require("./routes/roomExistenceRouter");
const addJoinedRoomRouter = require("./routes/addJoinedRoomRouter");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../Client/dist/digi-planner")));
app.use((req, res, next) => {
   req.redis = client;
   next();
});

client.on("connect", function () {
   console.log("connected");
});

io.on("connection", (socket) => {
   // socket.on("joinRoom", (roomId) => {
   //    socket.join(roomId);
   // });

   socket.on("canvas", (data) => {
      socket.broadcast.emit("canvas", data);
   });
   socket.on("addedObject", (data) => {
      socket.broadcast.emit("addedObject", data);
   });

   socket.on("modifiedObject", (data) => {
      socket.broadcast.emit("modifiedObject", data);
   });

   socket.on("deleteGroup", (data) => {
      socket.broadcast.emit("deleteGroup", data);
   });

   socket.on("changeColor", (data) => {
      socket.broadcast.emit("changeColor", data);
   });

   socket.on("regrouping", (data) => {
      socket.broadcast.emit("regrouping", data);
   });

   socket.on("colorChange", (data) => {
      socket.broadcast.emit("colorChange", data);
   });

   socket.on("clearCanvas", (data) => {
      socket.broadcast.emit("clearCanvas", data);
   });
});

//getUsers
app.use("/users", userRouter);
//View Existing Boards in Admin View, User View
app.use("/boards", boardRouter);
//Edit Drawing Board User and Admin
app.use("/drawing", drawingRouter);
//Check if room code is valid
app.use("/roomIdExists", roomExistenceRouter);
//Add room id to the userid's set
app.use("/addJoinedRoom", addJoinedRoomRouter);

app.get("/*", (req, res, next) => {
   res.sendFile(path.join(__dirname, "../Client/dist/digi-planner/index.html"));
});

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
