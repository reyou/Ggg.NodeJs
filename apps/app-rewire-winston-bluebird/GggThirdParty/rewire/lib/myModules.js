// lib/myModules.js
// With rewire you can change all these variables
var fs = require("fs")
var path = "/somewhere/on/the/disk";

function readSomethingFromFileSystem(cb) {
    console.log("Reading from file system ...");
    fs.readFile(path, "utf8", cb);
}

exports.readSomethingFromFileSystem = readSomethingFromFileSystem;