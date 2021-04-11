const WebSocketServer = require('ws').Server;

const webSocketServer = new WebSocketServer({ port: 8080 });
const HashMap = require('hashmap');

// record the client
const userConnectionMap = new HashMap();
let connectNum = 0;

// connection
webSocketServer.on('connection', (ws) => {
  connectNum += 1;
  console.log(`A client has connected. current connect num is : ${connectNum}`);
  ws.on('message', (message) => {
    const objMessage = JSON.parse(message);
    const strType = objMessage.type;

    switch (strType) {
      case 'online':
        userConnectionMap.set(objMessage.from, ws);
        break;
      default:
        const targetConnection = userConnectionMap.get(objMessage.to);
        if (targetConnection) {
          targetConnection.send(message);
        }
    }
  });

  ws.on('close', (message) => {
    const objMessage = JSON.parse(message);
    userConnectionMap.remove(objMessage.from);
  });
});
