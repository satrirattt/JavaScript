function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
    
}

async function longRunningOperation() {
    //logic
    return 42;
}

async function run() {
    //logic
    console.log("Start!!");
    await promiseTimeout(2000);
    //try take of await and compare
    const response = await longRunningOperation();
    console.log(response);
    console.log("Stop!!");    
}

console.log('Before run');
run();
console.log('After run');