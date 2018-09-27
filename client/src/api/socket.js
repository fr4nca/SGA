import openSocket from "socket.io-client";

export const createSocket = () => {
  return openSocket("http://localhost:5000");
};
