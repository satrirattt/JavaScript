/*function removeDups(arr) {
    const remove = arr.filter((item,index) => arr.indexOf(item) === index);
    return remove;

    
}
console.log(removeDups([1,0,1,0])); // [1,0]
console.log(removeDups(["The","big","cat"])); //["The","big","cat"]
console.log(removeDups(["John","Taylor","John"])); //["John","Taylor"]  */

function removeDups(n) {
    var array = [];
    for(var  value of n) {
        if(array.indexOf(value) === -1) {
            array.push(value);
        }
    }
    return array;

    
}
console.log(removeDups([1,0,1,0])); // [1,0]
console.log(removeDups(["The","big","cat"])); //["The","big","cat"]
console.log(removeDups(["John","Taylor","John"])); //["John","Taylor"]  