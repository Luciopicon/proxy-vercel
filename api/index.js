import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { createProxyServer } from 'http-proxy';

const server = createServer();
const proxy = createProxyServer({ target: 'ws://185.194.204.52:8080', ws: true });

// WebSocket handler
const wss = new WebSocketServer({ noServer: true });
wss.on('connection', socket => {
  console.log('WebSocket conectado');
  socket.on('message', msg => {
    console.log('Recebido:', msg.toString());
  });
});

// Upgrade handler
server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head);
});

// Start
server.listen(8080, () => {
  console.log('Proxy WebSocket ativo na porta 8080');
});
