"use strict";

let greeting = ("Hello from external JavaScript");
console.log(greeting);

alert("Welcome to my website!");
let userName = prompt("Whats your favorite color?");
alert(userName + " is my favorite color too!");
console.log(userName);
let littleMermaid = prompt("How many days are you reserving Little Mermaid for?");
console.log(parseFloat(littleMermaid))
let brotherBear = prompt("How many days are you reserving the Brother Bear for?");
console.log(brotherBear)
let hercules = prompt("How many days are you reserving the Hercules for?");
console.log(hercules);
let pricePerDay = 3;
console.log(pricePerDay);
let finalPrice = (parseFloat(littleMermaid) + parseFloat(brotherBear) + parseFloat(hercules)) * pricePerDay;
console.log(finalPrice);
alert("Cost of your movie rental is " + finalPrice + ".00 Dollars. " + "Your favorite color was " + userName);

//instead of using parsefloat doing (littleMermaid * pricePerday) or (littleMermaid * 3) use that instead of parse float

let googlePay = prompt("How much does Google pay per hour?");

let amazonPay = prompt("How much does Amazon pay per hour?");

let facebookPay = prompt("How much does Facebook pay per hour?");

let googleHours = prompt("How many hours did you work for Google?");

let amazonHours = prompt("How many hours did you work for Amazon?");

let facebookHours = prompt("How many hours did you work for Facebook?");

let payment = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);
alert("Your payment is: " + payment);

let isFull = confirm("Is the class full?");
let hasConflict = confirm("Do you have a conflict with your schedule?");
alert(!isFull && !hasConflict);

let itemsBought = prompt("How many items did you buy?")
let offer = confirm("Has the offered expired?")
let isPremium = confirm("Are you a premium member?")

alert((parseFloat(itemsBought) > 2 || isPremium) && !offer);

//parsefloat itemsbought because its a string and NAN . adding parse float makes it a number


