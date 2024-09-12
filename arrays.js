//arrays
//collection of items 

let mark1 = [97, 82, 75, 64, 36];
console.log(mark1);
console.log(mark1.length);

//array indices

console.log(mark1[0]);
console.log(mark1[1]);

//change value in an array
mark1[1] = 45;
mark1[3] = 12;

//looping over an array
//using for loop
let hero =  ["ironman", "thor", "spiderman", "bp"];
for(let idx = 0; idx < hero.length; idx++ ){
    console.log(hero[idx]);  
}

//for-of loop
for(let el of hero){
    console.log(el);
}

//question 
let marks2 = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let value of marks2){
    sum = sum + value;
}
let avg = sum / marks2.length;
console.log(avg);


//array methods
//push() - add an element to the end of an array
//pop() : delete from end and return 
//toString() : converts array to string
//concat() : joins  multiple arrays and returns result
//unshift() : add to starting of an array 
//shift() : delete from start and return
//splice() : delete and add elements at a specific index
//slice() : returns the piece of the array

//push()
let marks3 = [85, 97, 44, 37, 76];
marks3.push(45);
marks3.push(78, 45, 27);

//pop()
marks3.pop();

//toString 
console.log(marks3.toString());

//concat 
let marks4 = [4,5,6,23]
let marks5 = [1,2,3,4];

console.log(marks4.concat(marks5))

//unshift method 
{
    let marks6= [1,2,3,4];
    console.log(marks6.unshift(5,6,7));
}

//shift method 
{
    let marks6= [1,2,3,4];
    console.log(marks6.shift(5,6,7));
}

//slice method
{
    let marks6= [1,2,3,4];
    console.log(marks6);
    console.log(marks6.slice(1, 3));
    
}

//splice method
{
    let marks6= [1,2,3,4,5,6,7];
    console.log(marks6);
    console.log(marks6.splice(2, 2, 0, 102, 103));
}

