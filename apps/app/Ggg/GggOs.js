// https://nodejs.org/api/os.html
const os = require("os");
console.log("os.EOL", os.EOL);
console.log("os.arch()", os.arch());
console.log("os.constants", JSON.stringify(os.constants, null, 4));
console.log("os.cpus()", JSON.stringify(os.cpus(), null, 4));
console.log("os.endianness()", JSON.stringify(os.endianness(), null, 4));
console.log("os.freemem()", JSON.stringify(os.freemem(), null, 4));
console.log("os.homedir()", JSON.stringify(os.homedir(), null, 4));
console.log("os.hostname()", JSON.stringify(os.hostname(), null, 4));
console.log("os.loadavg()", JSON.stringify(os.loadavg(), null, 4));
console.log("os.networkInterfaces()", JSON.stringify(os.networkInterfaces(), null, 4));
console.log("os.platform()", JSON.stringify(os.platform(), null, 4));
console.log("os.release()", JSON.stringify(os.release(), null, 4));
console.log("os.tmpdir()", JSON.stringify(os.tmpdir(), null, 4));
console.log("os.totalmem()", JSON.stringify(os.totalmem(), null, 4));
console.log("os.type()", JSON.stringify(os.type(), null, 4));
console.log("os.uptime()", JSON.stringify(os.uptime(), null, 4));
console.log("os.userInfo([options])", JSON.stringify(os.userInfo(), null, 4));
