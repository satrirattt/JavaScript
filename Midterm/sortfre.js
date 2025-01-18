function frequencySort(value) {
    const reversedValue = value.split('').reverse().join('');
    return reversedValue;
    
}
console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));

