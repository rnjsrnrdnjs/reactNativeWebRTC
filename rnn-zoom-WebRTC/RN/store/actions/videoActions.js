import IO from "socket.io-client";
import Peer from "react-native-peerjs";

import { ADD_REMOTE_STREAM, ADD_STREAM, MY_STREAM, JOIN_CHAT } from "./types";

/*API_URI*/
export const API_URI = "http://192.168.0.41:5000";

/* socket */

export const socket = IO(`${API_URI}`, {
  forceNew: true,
});

socket.on("connection", () => {
  console.log("connected");
});

/* peer */
const peerServer = new Peer(undefined, {
  host: "192.168.0.41",
  secure: false,
  port: 5000,
  path: "/mypeer", //서버 경로랑 같게 만들어 줘야함
});
peerServer.on("error", (err) => {
  console.log(err);
});

export const joinRoom = (stream) => async (dispatch) => {
  const roomID = "123123";
  dispatch({ type: MY_STREAM, payload: stream });
};

function connectToNewUser() {}
