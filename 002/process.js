process.on('exit', (code) => {
    console.log(`The process id is ${process.pid}`);
    console.log(`The process has ended, exiting with code: ${code}`);
});