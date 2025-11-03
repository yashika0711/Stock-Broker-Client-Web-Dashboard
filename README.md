# 📈 Real-Time Stock Dashboard

A **real-time stock dashboard** built with **React**, **Socket.io**, and **Node.js**, where users can subscribe/unsubscribe to live stock price updates.  
Prices update automatically without refreshing the page.

---

## 🚀 Features

- 🧠 **Live WebSocket Updates** — See real-time stock price changes via Socket.io  
- 💬 **User-Based Subscription** — Subscribe or unsubscribe from stocks dynamically  
- ⚡ **Instant UI Updates** — Frontend updates as soon as backend emits price changes  
- 🎨 **Beautiful UI** — Styled using `main.css` with gradient background and responsive design  


---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React (with Hooks) |
| Real-Time Communication | Socket.io Client |
| Backend | Node.js + Socket.io Server |
| Styling | Custom CSS (`main.css`) |
| Language | JavaScript (ES6+) |

---

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
### 2️⃣ Install Dependencies

For the frontend:
```bash
npm install
```

For the backend (if separate folder, run again there):
```bash
npm install socket.io
```
### 3️⃣ Start the Backend Server

In your project root:
```bash
node server.js
```

You should see:
```bash
✅ Socket.io server running on port 4000
```
### 4️⃣ Start the React App

In another terminal:
```bash
npm start
```
