const { Worker, isMainThread, workerData } = require('worker_threads');
let currentVal = 0;
let intervals = [8000, 8000, 8000];
function counter(id, i) {
    console.log("[", id, "]", i)
    return i;
}

if (isMainThread) {
    console.log("Main Thread started.")
    for (let i = 0; i < 2; i++) {
        let worker = new Worker(__filename, {
            workerData: i
        });
        console.log("Worked created. ThreadId:", worker.threadId);
    }
    setInterval((a) => {
        currentVal = counter(a, currentVal + 1)
    }, intervals[2], "MainThread");
} else {
    console.log("Worked Started: " + workerData)
    setInterval((a) => {
        currentVal = counter(a, currentVal + 1)
    }, intervals[workerData], "Worker " + workerData);
}
