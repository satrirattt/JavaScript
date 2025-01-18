// START //
// How do we represent real-world objects in code?
// They have PROPERTIES (attributes) and METHODS (actions)
// Objects are key-value pairs - like variables but in pairs
// Objects have associated ACTIONS - METHODS
// Objects have a special property called "THIS"
//*************************************************

// Let's define a simple object with its properties or methods
let obj = { key: "value", key2: "value2" };
console.log(obj);
console.log(obj.key); // "value"

// Let's define an object with PROPERTIES (attributes)
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
};
console.log(car);
console.log(car["make"]); // "Toyota"
console.log(car.make);    // "Toyota"

// Let's define an object with PROPERTIES and METHODS (actions)
let person = {
    name: "John",
    age: 30,
    sayHi: () => {
        console.log("Hi, I am John");
    },
};
console.log(person);
console.log(person.name); // "John"
person.sayHi();           // "Hi, I am John"
