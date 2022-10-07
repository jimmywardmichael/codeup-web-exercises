"use strict";
(function () {

 if("boolean" === "boolean") {
     console.log("Run this code!");
 }
 if("") {
     console.log("Run this code!");
 }

 //IF/ELSE STATEMENT - in addition to IF statements, ELSE will block run if condition of IF is not MET!!!!

 if(false){
     //condition if met
     console.log("The condition evaluates to true")
 }  else {
     //condition if not met
     console.log("condition evaluates to false")
 };

 let currentShow = prompt("What show are you currently watching?");
 if (currentShow.toLowerCase() === "house of dragons") {
     console.log("Whoa, I love that show!")
 } else {
     console.log("Hey I haven't seen that show yet, I'll have to give it a try!")
 };

 //IF/ELSE IF/ELSe


 let shoes = 'red';
 let shirt = 'hawaiian'
 let jeans = 'denim'
 let jacket = true;

 if(shoes === 'red'){
     console.log("If you're wearing red shoes, you're dismissed.")
 } else if(shirt === 'hawaiian') {
     console.log("If you're wearing a hawaiian shirt, you're dismissed.")
 } else if(jeans === 'denim') {
     console.log("If you're wearing denim jeans, you're dismissed.")
 } else if (jacket) {
     console.log("If you're wearing a jacket, you're dismissed.")
 } else {
     console.log("Everyone else is dismissed!!!")
 };
 let num = 3;
 if(num % 2 === 0 && num % 5 === 0){
     console.log("The number is divisible 5, 2, and is an even number");
 } else if(num % 2 === 0) {
     console.log("The number is even and divisible by 2");
 } else if(num % 5 === 0){
     console.log("The number is divisible by 5");
 } else {
     console.log("The number is odd, and not divisible by 5.");
 };
let myName = "Codeup";

myName === "Codeup" ? console.log("Hello, " + myName) : console.log("Hello stranger!");

let compsFavShow = (currentShow.toLowerCase() ===
    "house of dragons" || currentShow.toLowerCase() ===
    'rick and morty') ? "Sick!" : "I don't like that show.";

alert(compsFavShow);

let menu = prompt("Please type in which number you would like to order:\n1. Cheeseburger \n2. Chicken Sandwich \n3. Chili Cheese \n4. Philly Cheesesteak");
switch (menu) {
    case '1':
        alert("The Cheeseburger costs: $5.99")
        break;
    case '2' :
        alert("The chicken sandwich comes with pickles and is $4.99");
        break;
    case '3' :
        alert("chili cheese fries 2.99")
        break;
    case '4' :
        alert("The philly cheesesteak has mushrooms and is $7.99")
        break;
    default:
        alert("Sorry, that item is not on the menu")
}

if(menu === '1'){
    alert("The Cheeseburger costs: $5.99")
} else if(menu === '2'){
    alert("The chicken sandwich comes with pickles and is $4.99");
} else if(menu === '3'){
    alert("chili cheese fries 2.99")
} else if(menu === '4'){
    alert("The philly cheesesteak has mushrooms and is $7.99")
} else{
    alert("That selection is invalid and not on the menu!")
    }
})();