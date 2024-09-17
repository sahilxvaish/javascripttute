//loops
//for loop

//print 1 to 5 
for (let count = 1; count <=5 ; count++) {
    console.log("Sahil Vaish");  
}

//sum of 1 to 5
let sum = 0;
for (let count = 1; count <=5 ; count++) {
    sum = sum + count;
}
console.log("sum = ", sum);

//sum of 1 to n
let summ = 0;
let n = 7;
for (let count = 1; count <=n ; count++) {
    summ = summ + count;   
}
console.log("sum = ", summ);


{
    for (let count = 1; count <=5 ; count++) {
        console.log("count = ", count);  
    }
}

//infinte loop
//a loop that never ends. 

// for (let i = 1; i >= 0; i++) {
//     console.log("i = ", i);
    
// }
 
//while loop 
//while loop is used when we don't know how many times the loop will run.

let i = 1;
while (i <= 5) {
    console.log("i =", i);
    i++;
}

//do-while loop
//do-while loop is used when we want to run the loop at least once.

// let j = 20;
// do {
//     console.log("sahil");
//     j++;
    
// } while (i <= 10);


let k = 1;
do{
    console.log(" i -", k);
    k++;
    
} while  (i <= 5);

//for-of loop
//for-of loop is used to iterate over arrays and strings.

// helps to apply loop on strings and arrays.

let str = "Sahil";
let size =0;

for (let i of str) {
    console.log(i);
    size++;
}

console.log("size = " ,size);

//for-in loop
//for-in loop is used to iterate over objects.
//used for objects 

//An object
let student = {
    name: "sahil",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

for (let i in student ) {
    console.log(i, student[i] );
    
}


//print all even number from 0 to 100
for (let num = 0; num <=100; num++){
    if(num%2 === 0){
       console.log(num);
       }
}

//guess number game
let gameNum = 25;
let userNum = prompt("Guess the game number: ");
console.log(userNum);

while (userNum != gameNum) {
     userNum = prompt("You entered wrong number, Guess Again:")
}

console.log("congratulations, you entered the right number!");

//forEach loop 
//forEach loop is used to iterate over arrays.

let arr = [1, 2, 3, 4,];

arr.forEach(function printVal(val){
    console.log(val);
    
})