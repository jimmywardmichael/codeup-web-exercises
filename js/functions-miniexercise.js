"use strict"

// ================ !! Mini-exercises !!

// Write a function, returnFive, that returns the number five. No inputs should be defined.
function returnFive() {
    return 5;
}
console.log(returnFive());
// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
function isFive(number) {
return number === 5 || number === '5';
// or use return number == 5; both this and line 11 will output the same
 }
console.log(isFive('5'));

// how many inputs should the function have?
// what are the data types for the inputs?
// what is the data type of the output/return value?

const isShortWord1 = (string) => string.length < 5;
console.log(isShortWord1("Yes James"), "Expected: false");
console.log(isShortWord1("Yes"), "Expected: true");

// adding the => makes it a return statement without making a return statement
// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
 function isShortWord(string) {
     return string.length < 5;
 }
console.log(isShortWord("Hey, word is less than 5"), "expected false");
console.log(isShortWord("Hey"), "expected true");
// how many inputs?
// what data type for inputs?
// what is the return type?


// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
function isSameLength(aString, aString2) {
    return aString.length === aString2.length
}
    console.log(isSameLength("clean", "seven"), "expected true");// true because both strings are 5 letters therefore equal
    console.log(isSameLength("clean", "six"), "expected false");// false because both strings are not equal in length

// How many inputs?
// What type of input?
// What type of output?
