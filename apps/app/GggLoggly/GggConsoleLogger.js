//=============================================================================
// https://github.com/winstonjs/winston/tree/2.x#adding-custom-transports
//=============================================================================
var util = require("util"),
  winston = require("winston");

var GggConsoleLogger = (winston.transports.CustomLogger = function(options) {
  //
  // Name this logger
  //
  this.name = "GggConsoleLogger";

  //
  // Set the level from your options
  //
  this.level = options.level || "info";

  //
  // Configure your storage backing as you see fit
  //
});

//
// Inherit from `winston.Transport` so you can take advantage
// of the base functionality and `.handleExceptions()`.
//
util.inherits(GggConsoleLogger, winston.Transport);

GggConsoleLogger.prototype.log = function(level, msg, meta, callback) {
  //
  // Store this message and metadata, maybe use some custom logic
  // then callback indicating success.
  //
  console.log(level, msg, meta);
  callback(null, true);
};
