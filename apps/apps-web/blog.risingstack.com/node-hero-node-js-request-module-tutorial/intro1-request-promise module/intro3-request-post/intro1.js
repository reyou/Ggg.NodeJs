const request = require("request-promise");
let fs = require("fs");
// Sending a GET request is as simple as
const options = {
  method: "POST",
  uri: "https://risingstack.com/login",
  body: {
    foo: "bar"
  },
  json: true
  // JSON stringifies the body automatically
};

request(options)
  .then(function(response) {
    // Request was successful, use the response object at will
    fs.writeFileSync(
      "./output/output1.json",
      JSON.stringify(response, null, 4)
    );
  })
  .catch(function(err) {
    // Something bad happened, handle the error
    fs.writeFileSync("./output/exception1.json", JSON.stringify(err, null, 4));
  });
