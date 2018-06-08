//=============================================================================
// https://github.com/winstonjs/winston
//=============================================================================
var winston = require('winston');
//=============================================================================
console.log("__dirname:", __dirname);
console.log("__filename:", __filename);
//=============================================================================
// The log method provides the same string interpolation methods like util.format.
// This allows for the following log messages.
let stringInterpolationFun = function () {
    console.log("stringInterpolationFun");
    let logger = winston;
    logger.log('info', '1- test message %s', 'my string');
    // info: test message my string

    logger.log('info', '2- test message %d', 123);
    // info: test message 123

    logger.log('info', '3- test message %j', { number: 123 }, {});
    // info: test message {"number":123}
    // meta = {}

    logger.log('info', '4- test message %s, %s', 'first', 'second', { number: 123 });
    // info: test message first, second
    // meta = {number: 123}

    logger.log('info', '5- test message', 'first', 'second', { number: 123 });
    // info: test message first second
    // meta = {number: 123}

    logger.log('info', '6- test message %s, %s', 'first', 'second', { number: 123 }, function () {
        console.log("6- callback.");
     });
    // info: test message first, second
    // meta = {number: 123}
    // callback = function(){}

    logger.log('info', '7- test message', 'first', 'second', { number: 123 }, function () { 
        console.log("7- callback.");
    });
    // info: test message first second
    // meta = {number: 123}
    // callback = function(){}
}
stringInterpolationFun();
//=============================================================================
let timerFun = function () {
    console.log("timerFun");
    // Returns an object corresponding to a specific timing. When done
    // is called the timer will finish and log the duration. e.g.:    
    var timer = winston.startTimer()
    setTimeout(function () {
        timer.done("Logging message");
    }, 1000);
}
// timerFun();
//=============================================================================
/*In addition to logging messages and metadata, winston also has a simple
 profiling mechanism implemented for any logger: */
let profilingFun = function () {
    console.log("profilingFun");
    // Start profile of 'test'
    // Remark: Consider using Date.now() or winston.startTimer() with async operations
    winston.profile('test');
    setTimeout(function () {
        // Stop profile of 'test'. Logging will now take place:
        //   "17 Jan 21:00:00 - info: test duration=1000ms"
        winston.profile('test');
    }, 1000);
}
// profilingFun();
//=============================================================================
let multipleTransportsFun = function () {
    console.log("multipleTransportsFun");
    var logger = new (winston.Logger)({
        transports: [
            new (winston.transports.File)({
                name: 'info-file',
                filename: 'filelog-info.log',
                level: 'info'
            }),
            new (winston.transports.File)({
                name: 'error-file',
                filename: 'filelog-error.log',
                level: 'error'
            })
        ]
    });
    logger.info("multipleTransportsFun");
    logger.error("multipleTransportsFun");
    // If you later want to remove one of these transports you can do so by using the string name. e.g.:
    logger.remove('info-file');
    /*In this example, one could also remove by passing in the instance of 
    the Transport itself. e.g. this is equivalent to the string example above: */
    // Notice it was first in the Array above
    // var infoFile = logger.transports[0];
    // logger.remove(infoFile);
}
// multipleTransportsFun();
//=============================================================================
let metadataFun = function () {
    console.log("metadataFun");
    winston.log('info', 'Test Log Message',
        {
            anything: 'This is metadata'
        });
}
// metadataFun();
//=============================================================================
/*You can also wholesale reconfigure a winston.Logger instance using the 
configure method: */
let reconfigureFun = function () {
    console.log("reconfigureFun");
    var logger = new winston.Logger({
        level: 'info',
        transports: [
            new (winston.transports.Console)(),
            new (winston.transports.File)({ filename: 'somefile.log' })
        ]
    });
    let opts = {
        filename: './log',
        datePattern: 'yyyy-MM-dd.',
        prepend: true,
        level: process.env.ENV === 'development' ? 'debug' : 'info'
    };
    // Replaces the previous transports with those in the
    // new configuration wholesale.
    // https://github.com/winstonjs/winston-daily-rotate-file
    logger.configure({
        level: 'verbose',
        transports: [
            new (require('winston-daily-rotate-file'))(opts)
        ]
    });
    logger.info("reconfigureFun");
}
// reconfigureFun();
//=============================================================================
var addRemoveTransportsFun = function () {
    console.log("addRemoveTransportsFun");
    var logger = new (winston.Logger)({
        transports: [
            new (winston.transports.Console)(),
            new (winston.transports.File)(
                {
                    filename: 'defaultLoggerFun.log'
                })
        ]
    });
    // Adding / Removing Transports
    //   (Yes It's chainable)
    logger.info("log this into console 1.");
    logger
        .remove(winston.transports.File)
        .remove(winston.transports.Console);
    logger.info("do not log this into console 2.");
}
// addRemoveTransportsFun();
//=============================================================================
/*You can work with this logger in the same way that you work with the 
default logger: */
var defaultLoggerFun = function () {
    var logger = new (winston.Logger)({
        transports: [
            new (winston.transports.Console)(),
            new (winston.transports.File)(
                {
                    filename: 'defaultLoggerFun.log'
                })
        ]
    });
    // Logging
    logger.log('info', 'Hello distributed log files!');
    logger.info('Hello again distributed logs');

}
// defaultLoggerFun();
//=============================================================================
/*If you would prefer to manage the object lifetime of loggers you are free
 to instantiate them yourself: */
var lifeTimeFun = function () {
    var logger = new (winston.Logger)({
        transports: [
            new (winston.transports.Console)(),
            new (winston.transports.File)(
                {
                    filename: 'lifeTimeFun.log'
                })
        ]
    });
    logger.info("message", "lifeTimeFun");
}
// lifeTimeFun();
//=============================================================================
var configureFun = function () {
    winston.configure({
        transports: [
            new (winston.transports.File)({ filename: 'somefile.log' })
        ]
    });
    winston.log('info', 'Hello distributed log files!');
}
// configureFun();
//=============================================================================
/*By default, only the Console transport is set on the default logger. 
You can add or remove transports via the add() and remove() methods: */
var transportsFun = function () {
    console.log("transportsFun");
    winston.add(winston.transports.File, {
        filename: 'somefile.log'
    });
    winston.log('info', 'transportsFun!');
    winston.remove(winston.transports.Console);

}
// transportsFun();
//=============================================================================
// The default logger is accessible through the winston module directly. 
// Any method that you could call on an instance of a logger is available 
// on the default logger:
var levelFun = function () {
    winston.level = 'debug';
    winston.log('debug', 'Now my debug messages are written to console!');
}
// levelFun();
//=============================================================================
var logFun = function () {
    winston.log('info', 'Hello distributed log files!');
    winston.info('Hello again distributed logs');
}
//logFun();
//=============================================================================