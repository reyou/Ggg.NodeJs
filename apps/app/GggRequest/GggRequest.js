//=============================================================================
// https://www.npmjs.com/package/request
//=============================================================================
var request = require('request');
// The following environment variables are respected by request:
// HTTP_PROXY / http_proxy
// HTTPS_PROXY / https_proxy
// NO_PROXY / no_proxy
// process.env.HTTP_PROXY = "http://127.0.0.1:8888";
//=============================================================================
// Send Content-Type: application/json post with node.js
// https://stackoverflow.com/questions/8675688/send-content-type-application-json-post-with-node-js
//=============================================================================
let requestFun = function () {
    request('http://www.google.com', function (error, response, body) {
        // Print the error if one occurred 
        console.log('error:', error);
        // Print the response status code if a response was received 
        console.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage. 
        console.log('body:', body);
    });
}
// 
requestFun();
//=============================================================================