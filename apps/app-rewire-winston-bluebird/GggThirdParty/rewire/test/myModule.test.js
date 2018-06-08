//=============================================================================
const chai = require('chai');
const expect = chai.expect;
//=============================================================================
// test/myModule.test.js
const path = require("path");
var rewire = require("rewire");
// rewire acts exactly like require. With just one difference: Your module 
// will now export a special setter and getter for private variables.
var myModule = rewire(path.join(__dirname, "../lib/myModules.js"));
// set path 1. time
myModule.__set__("path", "/dev/null");
let pathq = myModule.__get__("path"); // = '/dev/null'
console.log("pathq", pathq);
// set path 2. time
myModule.__set__("path", "/somewhere/on/the/disk");
//=============================================================================
// This allows you to mock everything in the top-level scope of the module,
// like the fs module for example. Just pass the variable name as first
// parameter and your mock as second.
let mockTopLevelFun = function () {
    var fsMock = {
        readFile: function (path, encoding, cb) {
            expect(path).to.equal("/somewhere/on/the/disk");
            cb(null, "Success!");
        }
    };
    myModule.__set__("fs", fsMock);
    myModule.readSomethingFromFileSystem(function (err, data) {
        console.log("readSomethingFromFileSystem:", data); // = Success!
    });
}
//
mockTopLevelFun();
//=============================================================================
// You can also set multiple variables with one call.
let setMultiVariablesFun = function () {
    myModule.__set__({
        fs: fsMock,
        path: "/dev/null"
    });
}
//=============================================================================
// You may also override globals. These changes are only within the module, 
// so you don't have to be concerned that other modules are influenced 
// by your mock.
let overrideGlobalsFun = function () {
    myModule.__set__({
        console: {
            log: function () { /* be quiet */ }
        },
        process: {
            argv: ["testArg1", "testArg2"]
        }
    });
}
//=============================================================================
// __set__ returns a function which reverts the changes introduced by this
// particular __set__ call
var revertFun = function () {
    var revert = myModule.__set__("port", 3000);

    // port is now 3000
    revert();
    // port is now the previous value

}
//=============================================================================
// For your convenience you can also use the __with__ method which reverts 
// the given changes after it finished.
var withFun = function () {
    myModule.__with__({
        port: 3000
    })(function () {
        // within this function port is 3000
    });
    // now port is the previous value again
}
//=============================================================================
// The __with__ method is also aware of promises. If a thenable is returned 
// all changes stay until the promise has either been resolved or rejected.
var withAwarePromises = function () {
    myModule.__with__({
        port: 3000
    })(function () {
        return new Promise((resolve, reject) => {
            console.log('Initial');
            resolve();
        });
    }).then(function () {
        // now port is the previous value again
    });
    // port is still 3000 here because the promise hasn't been resolved yet
}
// 
withAwarePromises();
//=============================================================================
var promiseFun = function () {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
    console.log("promiseFun:", "promiseFun");
    new Promise((resolve, reject) => {
        console.log('Initial');
        resolve();
    })
        .then(() => {
            throw new Error('Something failed');
            console.log('Do this');
        })
        .catch(() => {
            console.log('catch => Do that');
        })
        .then(() => {
            console.log('finally => Do this whatever happened before');
        });
}
// promiseFun();
// A Promise can be created from scratch using its constructor. 
// This should be needed only to wrap old APIs.
//=============================================================================
var promiseConstructorFun = function () {
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    var failureCallback = function (e) {
        console.log("promiseConstructorFun:", "I am failed.", e);
    }
    var saySomething = function (message) {
        console.log("promiseConstructorFun:", "saySomething:", message);
    }
    wait(1000)
        .then(() => saySomething("1 seconds"))
        .catch(failureCallback);
} //promiseConstructorFun();
//=============================================================================