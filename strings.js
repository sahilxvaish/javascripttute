//strings 
//strings is a sequence of char used to represent text 

let str = "Sahil";
let str2 = 'Sahil V';

str.length;
str2.length;

console.log(str[0]);

//template litrals
//template literals are used to create strings with embedded expressions
let sentence = `this is a template literals ${1+2+3}`;
console.log(sentence);

//escape char 
//escape char is used to escape special char in a string

console.log("Sahil\nVaish");
console.log("Sahil\tVaish");

let str3 = "Sahil\nVaish";
console.log(str3.length);


//string methods 
//string methods are used to perform operations on strings.

//1. str.toUpperCase()
let str4 = "Sahilvaish";
console.log(str4.toUpperCase());

//2. str.toLowerCase()
{
    let str4 = "Sahilvaish";
    console.log(str4.toLowerCase());
}


//3. str.trim
//trim is used to remove the leading and trailing spaces from a string.

{
    let str4 = "   Sahilvaish   ";
    console.log(str4.trim());
}

//str.slice(start, end?)
//slice is used to extract a part of a string.

let str5 = "01234567";
console.log(str.slice(1, 6));

//str.concat(str2)
//concat is used to concatenate two strings.

{
    let str5 = "sahil";
    let str = "vaish";

    let res = str5.concat(str);
    console.log(res);
    
}

//str.replace( searchVal, newVal) 
//replace is used to replace the search value with the new value.

{
    let str5 = "sahilvaish";
    console.log(str5.replace("s", "h"));
    
}

//str.charAt(idx)
//charAt is used to get the character at the specified index.

{
    let str5 = "sahilvaish";
    console.log(str5.charAt(7));
    
}