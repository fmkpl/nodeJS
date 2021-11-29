const http = require("http");
const query = require("querystring");
const path = "/09-02?" + query.stringify({ x: 6, y: 4 });
const options = {
  host: "localhost",
  port: "5000",
  path: path,
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log("Response status code: ", res.statusCode);
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log("Data: ", data);
  });
});

req.end();
