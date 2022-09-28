const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("successfully connected to game server");
    conn.write('Name: EEV');
    // conn.write("Move: up");
  });

  return conn;
};


module.exports = { connect };