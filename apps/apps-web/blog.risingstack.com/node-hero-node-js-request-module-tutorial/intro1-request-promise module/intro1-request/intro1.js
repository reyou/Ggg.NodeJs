const request = require("request-promise");
// Sending a GET request is as simple as
const options = {
  method: "GET",
  uri: "https://www.foodception.com"
};

request(options)
  .then(function(response) {
    // Request was successful, use the response object at will
    debugger;
  })
  .catch(function(err) {
    // Something bad happened, handle the error
    debugger;
  });
