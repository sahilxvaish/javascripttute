//operators 
//used to perform some operations on data in js.
//arithmetic operators
// +, -, *, /, %, **

let a = 5;
let b = 2;

console.log(a+b);
console.log("a =", a, "& b = ", b);
console.log("a + b =", a+b);  //add
console.log("a - b =", a-b);  //sub
console.log("a * b =", a*b);  //multiply
console.log("a / b =", a/b);  //divide
console.log("a % b =", a%b);  //modulus
console.log("a ** b =", a**b); //exponential (power)

//unary operators 
//increment (++)
//decrement (--)

{
let a = 5;
let b = 2;
console.log("a =", a, "& b = ", b);
 a++;
console.log(a);
}

{
let a = 5;
let b = 2;
 a--;
console.log(a);
}

//assignment operators 
//used to assign values
//=, +=, -=, *=, %=, **=

{
    let a = 5;
    let b = 2;
     a += 4;
    console.log(a);
    }


    {
        let a = 5;
        let b = 2;
         a-= 4;
        console.log(a);
        }

        {
            let a = 5;
            let b = 2;
             a *= 4;
            console.log(a);
            }

            {
                let a = 5;
                let b = 2;
                 a%= 4;
                console.log(a);
                }

                {
                    let a = 5;
                    let b = 2;
                     a **= 4;
                    console.log(a);
                    }

//comparison operators 
// equal to (==)
// equal to & type (===)
// not equal to (!=)
// not equal to & type (!==)

{
    let a= 5;
    let b = 2;

    console.log(a == b);
    
}

{
    let a= 5;
    let b = 2;

    console.log(a != b);
    
}

{
    let a= 5;
    let b = 2;

    console.log(a === b);
    //strict version 
    //it also check the data type in js.
    
}

{
    let a= 5;
    let b = 2;

    console.log(a !== b);
    //strict version 
    //it also check the data type in js.
    
}

{
    let a= 5;
    let b = 2;

    console.log(a > b);
    
}

{
    let a= 5;
    let b = 2;

    console.log(a < b);
    
}

{
    let a= 5;
    let b = 2;

    console.log(a <= b);
    
}

{
    let a= 5;
    let b = 2;

    console.log(a >= b);
    
}

//logical operators

//logical AND (&&)
//logical OR (||)
//logical NOT (!)

{
    let a= 6;
    let b = 5;

    let cond1 = a < b;
    let cond2 = a === 6;

    console.log(cond1 && cond2);
    
    
}

{
    let a= 6;
    let b = 5;

    let cond1 = a < b;
    let cond2 = a === 6;

    console.log(cond1 || cond2);
    
    
}

{
    let a= 6;
    let b = 5;

    let cond1 = a < b;
    let cond2 = a === 6;

    console.log(!(a < b)); 
} 