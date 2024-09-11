//conditional statements 
// to implement some condition in the code.
//if statement 
//used to check the condition.

let age = 25;

if(age > 18){
    console.log("you can drive!");   
}

let mode = "light";
let color;

if(mode ==="dark") {
    color = "black";
}

if(mode === "light"){
    color = "white";
}
console.log(color);

//if-else statements
//used to check the condition and execute the code block if the condition is true.

{
let mode = "dark";
let color;

if(mode ==="dark") {
    color = "black";
}else {
    color = "white";
}
console.log(color);
}


//else-if statement 
//used to check the condition and execute the code block if the condition is true.

{
    let mode = "dark";
    let color;
    
    if(mode ==="dark") {
        color = "black";
    }else if (mode === "blue") {
        color = "blue";
    }else if (mode === "pink" ) {
        color = "pink";
    } else {
        color = "white";
    }

    console.log(color);


 if(mode === "dark"){
    console.log(mode); 
 }  
}

//ternary operators
//used to check the condition and execute the code block if the condition is true.
//syntax: condition ? value_if_true : value_if_false
//example: let color = mode === "dark" ? "black" : "white";
// a ? b : c

let agee = 25;
let result = agee >= 18 ? "adult" : "not adult";
console.log(result);

//written in both ways ->

{
let agee = 25;
let result = agee >= 18 ? console.log("adult") : console.log("not adult");
}
