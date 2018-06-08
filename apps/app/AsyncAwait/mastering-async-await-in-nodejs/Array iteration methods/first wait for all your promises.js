function asyncThing(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), 100)
    })
}

function main() {
    return Promise.all([1, 2, 3, 4].map((value) => asyncThing(value)))
}

main()
    .then(values => values.map((value) => value * 2))
    .then(v => console.log(v))
    .catch(err => console.error(err))
