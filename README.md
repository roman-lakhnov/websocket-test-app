# REST+WebSocket Test App

This is a study project demonstrating real-time data synchronization between a
server and client using both REST API and WebSockets.

## Project Structure

- **client-websocket**: React+TypeScript frontend application
- **server-websocket**: Express.js backend server

## Features

- Server maintains a counter that increments every second
- Client fetches initial counter value via REST API
- WebSocket connection provides real-time counter updates to client
- Simple but effective demonstration of real-time data sync patterns

## How to Run

### Server

```bash
cd server-websocket
npm install
npm start
```

The server will run on <http://localhost:4000>

### Client

```bash
cd client-websocket
npm install
npm run dev
```

Visit the URL shown in your terminal (typically <http://localhost:5173>) to see
the counter updating in real-time.

## Technologies Used

- **Frontend**: React 19, TypeScript, Vite
- **Backend**: Express.js, WebSockets (ws library)
- **Communication**: REST API, WebSockets
