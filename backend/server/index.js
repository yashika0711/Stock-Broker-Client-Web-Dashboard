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

io.on("connection", (socket) => {
  socket.on("join", (email) => {
    socket.email = email;
    userSubscriptions[email] = userSubscriptions[email] || [];
  });

  socket.on("subscribe", ({ email, ticker }) => {
    if (!userSubscriptions[email].includes(ticker)) {
      userSubscriptions[email].push(ticker);
    }
  });
});

setInterval(() => {
  STOCKS.forEach((ticker) => {
    prices[ticker] = (Math.random() * 1000 + 100).toFixed(2);
  });

  for (const [email, tickers] of Object.entries(userSubscriptions)) {
    tickers.forEach((ticker) => {
      io.emit("priceUpdate", { ticker, price: prices[ticker] });
    });
  }
}, 1000);

server.listen(4000, () => console.log("Server running on port 4000"));
