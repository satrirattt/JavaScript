let str = "Hello";

//does the same as
for (let char of "test") {console.log(char);}

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); //outputs characters one by one
} // 