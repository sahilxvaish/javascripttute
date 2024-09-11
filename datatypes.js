//data types in js 
// there 7 primitive data types in js 
// to check datatype "type of"
// 1.number 
// 2.string
// 3.boolean 
// 4.null
// 5.undefined 
// 6.Bigint
// 7.symbol

//number 
let age = 24;
console.log(age);

//string
let fullName = "Sahil Vaish";
console.log(fullName);

//boolean
isFollow = true;
console.log(isFollow);

isFollow = false;
console.log(isFollow);

//undefined
let x;

//null
let y = null;

//bigint 
let big = 1000000000000000000n;
console.log(big);

//symbol
let z = Symbol("Hello!");

//non premitive datatypes 
//object - it is a collection of values.
//and in objects we have 
//arrays
//functions

//objects 
const student = {
    //keys       values
    fullName : "Sahil Vaish",
    age : 23,
    cgpa : 7.5,
    isPass : true,
};
console.log(student);
console.log(student.age);
console.log(student.fullName);

//change value in object in js 
student["age"] = student["age"] + 1;
student["fullName"] = "Sahil";