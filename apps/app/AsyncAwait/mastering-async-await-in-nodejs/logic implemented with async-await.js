let Mongo = require("./Mongo");
let request = require("./request");
let executeLogic = require("./executeLogic");
async function handler(req, res) {
    let response
    try {
        response = await request('https://user-handler-service')
    } catch (err) {
        logger.error('Http error', err)
        return res.status(500).send()
    }

    let document
    try {
        document = await Mongo.findOne({ user: response.body.user })
    } catch (err) {
        logger.error('Mongo error', err)
        return res.status(500).send()
    }

    executeLogic(req, res, document)
}
let req;
let res;
handler(req, res);