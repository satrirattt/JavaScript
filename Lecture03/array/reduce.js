const arrayOfNumber = [1,2,3,4];

const sum = arrayOfNumber.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum); //10

const arrayOfMin = [1,2,3,4];

const min = arrayOfMin.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue;
});

console.log(min); //4 MIN

