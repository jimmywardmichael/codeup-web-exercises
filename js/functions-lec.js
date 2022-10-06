"use strict";
// ***************command / will comment out all lines highlighted ******************
// Function - a reusable block of code that performs a specified t ask,
// usually taking an input and producing an output.

//functions we've b een exposed to: all below are considered Functions!!!Functions will have the () at the end of it
//console.log()
//prompt()
//alert()
//confirm()
// .startsWith()
// .endsWith()
// Number - constructor

//can accept a number of arguments
// someFunctions(arguments)

// Arguments are optional? see below user can answer however they want
//prompt("What did you have for breakfast")

//storing return value of prompt to variable named littleMermaid

// let littleMermaid = prompt("How many days did you rent little Mermaid?");
// // prompts () <<<<return a string
// // by using parseInt or parseFloat
// let littleMermaidDays = parseInt(littleMermaid);
//     //<<<< this will return a
// // number instead of string!
//
// // Executing functions - definition vs execution
// console.log(parseInt);
// console.log(parseInt("11"));

//Defining functions
//Arguments are values we pass to a function when executing.
// Parameters are placeholders for our function definition.
// function add(num, num2) {
//     // return the output of num + num2
//     return num + num2;
//     console.log("finished the function execution");
//     return num -num2;
// }
// console.log(add('5' , '5'));
//
// let ten = add(3,7);
//
// console.log(ten);
//
// //Arrow function expression
//
const addition = (num, num2) => num + num2;

console.log(addition(6,4));
//
// //Executing a function with function arguments.
// console.log(add(add(5,6), add(10,7)));
// ***************command / will comment out all lines highlighted ******************


//Anonymous Functions
let increment = function(x) {
    return x + 1;
};

let two = increment(1);
console.log(addition(two, 6));

function shout(message) {
    alert(message.toUpperCase() + "!!!")
}
shout("codeup");
console.log(shout('codeup'));
