function numberSplit(num) {
    const half = Math.floor(num/2);
    const re = num - half;
    return [half,re];
    
}
console.log(numberSplit(4)); // [2,2]
console.log(numberSplit(10));// [5,5]
console.log(numberSplit(11));// [5,6]
console.log(numberSplit(-9));// [-4,-5]


