let request = require("./request");
function requestWithRetry(url, retryCount) {
    if (retryCount) {
        return new Promise((resolve, reject) => {
            const timeout = Math.pow(2, retryCount)

            setTimeout(() => {
                console.log('Waiting', timeout, 'ms')
                _requestWithRetry(url, retryCount)
                    .then(resolve)
                    .catch(reject)
            }, timeout)
        })
    } else {
        return _requestWithRetry(url, 0)
    }
}

function _requestWithRetry(url, retryCount) {
    return request(url, retryCount)
        .catch((err) => {
            if (err.statusCode && err.statusCode >= 500) {
                console.log('Retrying', err.message, retryCount)
                return requestWithRetry(url, ++retryCount)
            }
            throw err
        })
}

requestWithRetry('http://localhost:3000', 3)
    .then((res) => {
        console.log(res)
    })
    .catch(err => {
        console.error(err)
    })
