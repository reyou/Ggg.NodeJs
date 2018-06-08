// https://blog.risingstack.com/mastering-async-await-in-nodejs/
function functionA() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("functionA resolved.");
        }, 300);
    });
}
function functionB() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("functionB resolved.");
        }, 300);
    });
}
function functionC() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("functionC resolved.");
        }, 300);
    });
}
function doSomethingWith(item) {
    console.log("doSomethingWith-1:", item);
}
function doSomethingElseWith(item) {
    console.log("doSomethingElseWith-2:", item);
}
function doAnotherThingWith(item) {
    console.log("doAnotherThingWith-3:", item);
}
/*Multiple parallel requests with async/await
In case you want to execute several asynchronous tasks at once and then 
use their values at different places, you can do it easily with async/await: */
async function executeParallelAsyncTasks() {
    const [valueA, valueB, valueC] = await Promise.all([functionA(), functionB(), functionC()])
    doSomethingWith(valueA)
    doSomethingElseWith(valueB)
    doAnotherThingWith(valueC)
}
console.log("Main program starts.");
executeParallelAsyncTasks();
console.log("Main program ends.");

