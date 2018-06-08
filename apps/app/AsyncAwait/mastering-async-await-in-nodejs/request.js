let request = function (url) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let apiResponse = {
                body: {
                    user: {
                        firstName: "teoman",
                        lastName: "shipahi",
                    }
                }
            }
            resolve(apiResponse);
        }, 500)
    });
    return promise;
}

module.exports = request;