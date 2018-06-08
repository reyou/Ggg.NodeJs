function asyncThing(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value * 2), 100)
    })
}

async function main() {
    return [1, 2, 3, 4].map(async (value) => {
        const v = await asyncThing(value)
        return v;
    })
}
/*If you log the returned values of the iteratee with map you 
will see the array we expect: [ 2, 4, 6, 8 ]. The only problem 
is that each value is wrapped in a Promise by the AsyncFunction.
So if you want to get your values, you'll need to unwrap them by 
passing the returned array to a Promise.all: */
main()
    .then(v => console.log(v))
    .catch(err => console.error(err));
