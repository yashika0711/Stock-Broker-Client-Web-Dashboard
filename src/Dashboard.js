import React, { useState, useEffect } from "react";
import socket from "./socket";

const STOCKS = ["GOOG", "TSLA", "AMZN", "META", "NVDA"];

export default function Dashboard({ email }) {
  const [subscribed, setSubscribed] = useState([]);
  const [prices, setPrices] = useState({});

  useEffect(() => {
    socket.emit("join", email);

    socket.on("priceUpdate", ({ ticker, price }) => {
      setPrices((prev) => ({ ...prev, [ticker]: price }));
    });

    return () => {
      socket.off("priceUpdate");
    };
  }, [email]);

  const handleSubscribe = (ticker) => {
    if (!subscribed.includes(ticker)) {
      setSubscribed([...subscribed, ticker]);
      socket.emit("subscribe", { email, ticker });
    }
  };

  return (
    <div>
      <h2>Welcome, {email}</h2>
      <h3>Subscribe to Stocks:</h3>
      {STOCKS.map((ticker) => (
        <button key={ticker} onClick={() => handleSubscribe(ticker)}>
          {ticker}
        </button>
      ))}
      <h3>Live Prices:</h3>
      <ul>
        {subscribed.map((ticker) => (
          <li key={ticker}>
            {ticker}: ${prices[ticker] || "Loading..."}
          </li>
        ))}
      </ul>
    </div>
  );
}
