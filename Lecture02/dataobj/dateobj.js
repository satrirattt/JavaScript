//
//
//
const start = Date.now();

console.log('string timer...');
//string timer...
setTimeout(() => {
    const millis = Date.now()- start;
    
        console.log(`seconds elapsed  = ${Math.floor(millis / 1000)}`);
    // seconds elapsed  = 2
    
},2000);