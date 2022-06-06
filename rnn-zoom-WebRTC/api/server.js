const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const morgan = require("morgan");

const { ExpressPeerServer } = require("peer");

const app = express();
const server = http.createServer(app);
const io = socketio(server).sockets;

app.use(express.json());

const customGenerationFunction = () => {
  (Math.random().toString(36) + "000000000000000000").substr(2, 16);
};

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/",
  generateClientId: customGenerationFunction,
});

app.use("/mypeer", peerServer);

io.on("connection", function (socket) {
  console.log("conneted");
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log("server on ${5000}"));
