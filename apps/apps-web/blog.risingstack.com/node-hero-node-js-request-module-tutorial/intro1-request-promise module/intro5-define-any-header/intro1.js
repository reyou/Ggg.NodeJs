const request = require("request-promise");
let fs = require("fs");
// Sending a GET request is as simple as

const options = {
  method: "GET",
  uri: "https://risingstack.com",
  headers: {
    "User-Agent": "Request-Promise",
    Authorization: "Basic QWxhZGRpbjpPcGVuU2VzYW1l"
  }
};

request(options)
  .then(function(response) {
    // Request was successful, use the response object at will
    fs.writeFileSync(
      "./output/output1.json",
      JSON.stringify(response, null, 4)
    );
    console.log("SUCCESS");
  })
  .catch(function(err) {
    // Something bad happened, handle the error
    fs.writeFileSync("./output/exception1.json", JSON.stringify(err, null, 4));
    console.log("ERROR");
  });
