//functions 
//block of code that performs a specific task, can be invoked whenever needed.

function myFunction() {           //defining a function
    console.log("Hello, World!");
    console.log("Sahil Vaish");
}
myFunction();     //calling a function 

//functions protects us by minimizing redudency.

function myFunction2(msg) { 
    //parameter -> input       
    console.log(msg);
}
myFunction2("Sahil");  //arguments

//functions can be reused.


function myFunction3 (a, b) {
    console.log(a + b); 
}

function myFunction4 (a, b) {
    sum= a + b;
    return sum;
}
let val = sum(3, 4);
console.log(val); //output: 7

//Arrow functions 
//arrow functions are a shorthand for writing functions in JavaScript. 

//modern js.
const arrowSum = (a, b) => {
    console.log(a + b);
};

const arrowMul = (x, y) => {
    console.log(x * y);
}

const printHello = () => console.log("Hello, World!");


