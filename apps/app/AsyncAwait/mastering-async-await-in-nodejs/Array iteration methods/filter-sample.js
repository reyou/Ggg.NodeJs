function asyncThing(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), 100)
    })
}

async function main() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    /**The filter() method creates a new array with all elements that 
     * pass the test implemented by the provided function. */
    return [1, 2, 3, 4].filter(async (value) => {
        const v = await asyncThing(value)
        let result = v % 2 === 0
        return result;
    })
}
/**What about filter? Something is clearly wrong...
Well, you guessed it: even though the returned values are 
[ false, true, false, true ], they will be wrapped in promises, 
which are truthy, so you'll get back all the values from the 
original array. Unfortunately, all you can do to fix this is to 
resolve all the values and then filter them. */
main()
    .then(v => console.log(v))
    .catch(err => console.error(err))
