//
//
//
const start = Date.now();

console.log('string timer...');
//
setTimeout(() => {
    const millis = Date.now()- start;
    
        console.log(`seconds elapsed  = ${Math.floor(millis / 1000)}`);
    
    
},2000);