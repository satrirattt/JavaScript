const people = ["Aaron","Mel","John"];
const one = 1;
const str = "Hello World";
const b = true;
const employee = {
    firstName: "Aniranch",
    lastName: "Mingkhwan",
};

function sayHello(person){
    console.log("Hello " + person.firstName);
}

console.log(typeof people); //object
console.log(typeof sayHello) //function
console.log(employee instanceof Array); //false
sayHello(employee); //Hello Anirach