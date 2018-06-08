// https://stackoverflow.com/questions/27688804/how-do-i-debug-error-spawn-enoent-on-node-js
(function () {
    // child_process.spawn(command[, args][, options])
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();

const { spawn } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']);j
// https://nodejs.org/api/child_process.html#child_process_spawning_bat_and_cmd_files_on_windows
const ls = spawn('cmd.exe', ['dir']);

ls.stdout.on('data', (data) => {
    console.log(`stout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
});