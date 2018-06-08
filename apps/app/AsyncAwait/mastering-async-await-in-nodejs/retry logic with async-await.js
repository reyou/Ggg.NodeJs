let request = require("./request");
function wait(timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, timeout)
    })
}

async function requestWithRetry(url) {
    const MAX_RETRIES = 10
    for (let i = 0; i <= MAX_RETRIES; i++) {
        try {
            let result = await request(url);
            console.log(result);
            return result;
        } catch (err) {
            const timeout = Math.pow(2, i)
            console.log('Waiting', timeout, 'ms')
            await wait(timeout)
            console.log('Retrying', err.message, i)
        }
    }
}

requestWithRetry('http://localhost:3000');
