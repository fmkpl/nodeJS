const http = require("http");
const options = {
  host: "localhost",
  port: "5000",
  path: "/09-04",
  method: "POST",
  headers: { "Content-Type": "applicatiom/json" },
};

const json = JSON.stringify({
  __comment: "Request",
  x: 1,
  y: 2,
  m: ["h", "e", "y"],
  o: { name: "Efim", surname: "Kopyl" },
  s: "Message: ",
});

const req = http.request(options, (res) => {
  console.log("Response status code: ", res.statusCode);
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log("Data: ", JSON.parse(data));
  });
});

req.write(json);
req.end();
