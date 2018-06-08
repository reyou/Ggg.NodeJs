//=============================================================================
// https://github.com/winstonjs/winston/tree/2.x#custom-log-format
//=============================================================================
var winston = require("winston");
var logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      formatter: function(options) {
        console.log(options.message);
      }
    })
  ]
});
logger.info("Hello World from Node.js!");
