function totalVolume(...arrays) {
    return arrays.reduce((total,[length,width,height]) => {
        return total + (length * width * height);
    },0);
    
}
console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1])); //63
console.log(totalVolume([2,2,2],[2,1,1])); //10
console.log(totalVolume([1,1,1])); //1

