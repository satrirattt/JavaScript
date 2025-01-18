let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

let commonElements = values1.filter(item => values2.includes(item) || values3.includes(item));

console.log('Common Elements:', commonElements);
