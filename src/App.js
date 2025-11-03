import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard"; 
import style from"./App.css";

function App() {
  const [email, setEmail] = useState(null);
  return email ? <Dashboard email={email} /> : <Login onLogin={setEmail} />;
}

export default App;
