//=============================================================================
// https://github.com/winstonjs/winston/tree/2.x
// https://github.com/winstonjs/winston/tree/2.x#custom-log-format
//=============================================================================
var winston = require("winston");
require("winston-loggly-bulk");
winston.clear();
winston.add(winston.transports.Console, {
  formatter: function(options) {
    console.log(options.message);
  }
});
winston.add(winston.transports.Loggly, {
  token: "4733362c-93a5-441e-9a05-e4d55d1d8793",
  subdomain: "fooception",
  tags: ["Winston-NodeJS"],
  json: true
});

winston.log("info", "Hello World from Node.js!");
winston.info(new Date().toString());
//=============================================================================
