# Socket Server

## Getting started

Install the project:

```bash
pnpm install
```

Create an `.env` file with the following contents:

```
PORT=4000
SOCKET_SECRET=your-randomly-generated-secret
```

Start the server:

```bash
pnpm start
```

Connect to the server (JavaScript example):

```javascript
import { io } from "socket.io-client";

const socket = io("http://localhost:4000", {
  auth: {
    secret: "your-randomly-generated-secret",
  },
});

socket.on("connect", () => {
  console.log("Connected to socket server");
});
```

## License

This project is licensed under the MIT License.
