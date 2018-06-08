process.on('unhandledRejection', (err) => {
    console.log("Ggg unhandledRejection captured!")
    console.error(err)
    console.log("Ggg Exiting the process.")
    process.exit(1)
});


function IWillThrowException() {
    return Promise.reject(new Error("Throwing exception!"));
}
IWillThrowException().catch(err => {
    console.log("I catch the exception here!\n\n");
});
IWillThrowException();