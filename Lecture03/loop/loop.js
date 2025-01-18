const names = ['Justin', 'Sarah', 'Christopher'];

// While loop
console.log("-- while --");
let index = 0;
while (index < names.length) {
    const name = names[index];
    console.log(name);
    index++;
} //Justin
//Sarah
//Christopher

// For loop
console.log("-- for --");
for (let index = 0; index < names.length; index++) {
    const name = names[index];
    console.log(name);
}

// For of loop
console.log("-- for of --");
for (const name of names) {
    console.log(name);
}
