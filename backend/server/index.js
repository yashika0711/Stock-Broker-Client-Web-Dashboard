const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { STOCKS, prices } = require("./stocks");

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

let userSubscriptions = {};

iio.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("join", (email) => {
    console.log(`User joined: ${email}`);
    userSubscriptions[email] = userSubscriptions[email] || [];
  });

  socket.on("subscribe", ({ email, ticker }) => {
    if (!userSubscriptions[email]) userSubscriptions[email] = [];
    if (!userSubscriptions[email].includes(ticker)) {
      userSubscriptions[email].push(ticker);
      console.log(`${email} subscribed to ${ticker}`);
    }
  });

  
  socket.on("unsubscribe", ({ email, ticker }) => {
    if (userSubscriptions[email]) {
      userSubscriptions[email] = userSubscriptions[email].filter(
        (t) => t !== ticker
      );
      console.log(`${email} unsubscribed from ${ticker}`);
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});
