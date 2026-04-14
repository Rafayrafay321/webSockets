# Real-Time Broadcast Application with WebSockets

This project is a simple yet powerful demonstration of real-time, bi-directional communication using WebSockets. It features a Node.js backend and a basic HTML/JavaScript frontend that allows multiple clients to connect and broadcast messages to everyone in real-time.

## How It Works

The application is composed of a server and a client that communicate over the WebSocket protocol.

### Backend (`server.js`)

The server is built with Node.js and the popular `ws` library.
- It initializes a WebSocket server on `ws://localhost:8080`.
- When a new client connects, the server registers the connection.
- When a message is received from any client, the server immediately broadcasts that message to **every** currently connected client.
- It also logs connection status, errors, and disconnections to the console.

### Frontend (`index.html`)

The client is a single HTML file with vanilla JavaScript.
- It establishes a WebSocket connection to the server.
- It provides a user interface that displays the current connection status (`Connecting...`, `Connected`, `Disconnected`).
- A message log displays system events and messages received from the server in real-time.
- A simple form allows the user to type and send messages, which are then broadcasted by the server.

## Features

- **Real-Time Communication:** Messages are sent and received instantly without needing to refresh the page.
- **Broadcast a message:** Every message sent by a client is broadcast to all other connected clients.
- **Simple Browser Client:** The frontend is lightweight and runs in any modern web browser.
- **Connection Status:** The UI clearly indicates whether the client is connected to the server.
- **Live Event Log:** See connection events and received messages in a clean, timestamped log.

## Getting Started

Follow these instructions to get the project running on your local machine.

### Prerequisites

You must have [Node.js](https://nodejs.org/) installed (which includes npm).

### 1. Installation

Clone the repository and install the project dependencies:

```bash
npm install
```

### 2. Running the Server

Start the WebSocket server using the provided `dev` script. This will use `node --watch` to automatically restart the server if you make any changes to the `server.js` file.

```bash
npm run dev
```

You should see a confirmation in your terminal:
`WebSocket Server is live on: ws://localhost:8080`

### 3. Using the Client

1.  Open the `index.html` file in your web browser.
2.  The status will change from `Connecting...` to `Connected`.
3.  Open `index.html` in another browser tab or window to simulate a second client.
4.  Type a message in the input field of one client and press "Deploy Message".
5.  The message will appear instantly in the log of **both** clients.

---

This project serves as a great starting point for understanding the fundamentals of WebSockets and building more complex real-time applications.
