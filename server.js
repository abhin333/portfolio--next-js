const { createServer } = require('http');
const next = require('next');
const { Server } = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Store active users: socket.id -> username
const users = new Map();

// Helper to send updated user list to everyone
function broadcastUsers(io) {
  const activeUsers = Array.from(users.values());
  io.emit('update_users', activeUsers);
}

app.prepare().then(() => {
  const server = createServer((req, res) => handle(req, res));
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('A client connected:', socket.id);

    // When a user enters their name and joins
    socket.on('join_chat', (username) => {
      const cleanName = username || 'Anonymous';
      users.set(socket.id, cleanName);

      // 1. Broadcast join system notification
      io.emit('system_message', {
        id: `sys-${Date.now()}-${Math.random()}`,
        text: `${cleanName} joined the chat`,
        timestamp: new Date().toLocaleTimeString(),
      });

      // 2. Broadcast updated active user list
      broadcastUsers(io);
    });

    // Handle regular chat messages
    socket.on('message', (data) => {
      const senderName = users.get(socket.id) || 'Anonymous';
      io.emit('message', {
        id: socket.id,
        username: senderName,
        text: data.text,
        timestamp: new Date().toLocaleTimeString(),
      });
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
      const username = users.get(socket.id);
      if (username) {
        users.delete(socket.id);

        // 1. Broadcast leave system notification
        io.emit('system_message', {
          id: `sys-${Date.now()}-${Math.random()}`,
          text: `${username} left the chat`,
          timestamp: new Date().toLocaleTimeString(),
        });

        // 2. Broadcast updated active user list
        broadcastUsers(io);
      }
      console.log('Client disconnected:', socket.id);
    });
  });

  server.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
});