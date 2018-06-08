let Mongo = require("./Mongo");
let request = require("./request");
let executeLogic = require("./executeLogic");
function handler(req, res) {
    return request('https://user-handler-service')
        .catch((err) => {
            logger.error('Http error', err)
            error.logged = true
            throw err
        })
        .then((response) => Mongo.findOne({ user: response.body.user }))
        .catch((err) => {
            !error.logged && logger.error('Mongo error', err)
            error.logged = true
            throw err
        })
        .then((document) => executeLogic(req, res, document))
        .catch((err) => {
            !error.logged && console.error(err)
            res.status(500).send()
        })
}
let req;
let res;
handler(req, res);