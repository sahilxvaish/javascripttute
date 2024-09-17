//methods in js 
//----------------------->
//map arrays method
let nums = [1, 2, 3, 4, 5];
nums.map((val) => {
    console.log(val * 2);
});

let newArr = nums.map((val) => {
    return val;
});
console.log(newArr);

//filter method 
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((val) => {
    return val % 2 === 0;
});
console.log(evenNumbers);

//reduce method
let numbers1 = [1, 2, 3, 4, 5];
let sum = numbers1.reduce((acc, val) => {
    return acc + val;
    }, 0);
console.log(sum);

