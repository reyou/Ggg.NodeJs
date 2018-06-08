class Mongo {
    static findOne(user) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                user.Notes = "This is found by Mongo.";
                resolve(user);
            }, 300);
        });
    }
}

module.exports = Mongo;