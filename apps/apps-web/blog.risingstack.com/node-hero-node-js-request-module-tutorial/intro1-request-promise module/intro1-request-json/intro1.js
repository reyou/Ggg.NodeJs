const request = require("request-promise");
// Sending a GET request is as simple as
const options = {
  method: "GET",
  uri: "https://api.randomuser.me/",
  json: true
};

request(options)
  .then(function(response) {
    // Request was successful, use the response object at will
    let fs = require("fs");
    fs.writeFileSync(
      "./output/output1.json",
      JSON.stringify(response, null, 4)
    );
  })
  .catch(function(err) {
    // Something bad happened, handle the error
    debugger;
  });
