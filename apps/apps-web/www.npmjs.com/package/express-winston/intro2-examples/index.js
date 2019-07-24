let express = require("express");
let expressWinston = require("express-winston");
let winston = require("winston"); // for transports.Console
let bodyParser = require("body-parser");
let methodOverride = require("method-override");

let app = (module.exports = express());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride("X-HTTP-Method-Override"));

// Let's make our express `Router` first.
let router = express.Router();
router.get("/error", function(req, res, next) {
  // here we cause an error in the pipeline so we see express-winston in action.
  return next(
    new Error("This is an error and it should be logged to the console")
  );
});

router.get("/", function(req, res, next) {
  res.write("This is a normal request, it should be logged to the console too");
  res.end();
});

// express-winston logger makes sense BEFORE the router
app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
  })
);

// Now we can tell the app to use our routing code:
app.use(router);

// express-winston errorLogger makes sense AFTER the router.
app.use(
  expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
  })
);

// Optionally you can include your custom error handler after the logging.
// app.use(
//   express.errorLogger({
//     dumpExceptions: true,
//     showStack: true
//   })
// );

app.listen(3000, function() {
  console.log(
    "express-winston demo listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
