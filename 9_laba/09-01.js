const http = require("http");
const options = {
  host: "localhost",
  port: "5000",
  path: "/09-01",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log("Response status code: ", res.statusCode);
  console.log("Response status message: ", res.statusMessage);
  console.log("Server adress: ", res.socket.localAddress);
  console.log("Server port: ", res.socket.localPort);
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log("Data: ", data);
  });
});

req.end();
