function asyncThing(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), 100)
    })
}

async function main() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce    
    /**The reduce() method applies a function against an accumulator and each 
     * element in the array (from left to right) to reduce it to a single value. */
    return [1, 2, 3, 4].reduce(async (acc, value) => {
        return await acc + await asyncThing(value)
    }, Promise.resolve(0))
}
/**Reducing is pretty straightforward. Bear in mind though that 
 * you need to wrap the initial value into Promise.resolve, as 
 * the returned accumulator will be wrapped as well and has to 
 * be await-ed. */
main()
    .then(v => console.log(v))
    .catch(err => console.error(err))
