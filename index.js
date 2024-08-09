require("dotenv").config();
const { createServer } = require("http");
const { Server } = require("socket.io");

const port = process.env.PORT || 4000;
const secret = process.env.SECRET;

const server = createServer();
const io = new Server(server);

io.use((socket, next) => {
  const { secret } = socket.handshake.auth;

  if (secret === secret) {
    next();
  } else {
    next(new Error("Unauthorized: Invalid socket secret"));
  }
});

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (data) => {
    console.log("Message received: ", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => {
  console.log(`Socket server running on http://localhost:${port}`);
});
