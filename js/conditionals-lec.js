"use strict";
(function(){

// if("boolean" === "boolean") {
//     console.log("Run this code!");
// }
// if("") {
//     console.log("Run this code!");
// }
//
// //IF/ELSE STATEMENT - in addition to IF statements, ELSE will block run if condition of IF is not MET!!!!
//
// if(false){
//     //condition if met
//     console.log("The condition evaluates to true")
// }  else {
//     //condition if not met
//     console.log("condition evaluates to false")
// };
//
// let currentShow = prompt("What show are you currently watching?");
// if (currentShow.toLowerCase() === "house of dragons") {
//     console.log("Whoa, I love that show!")
// } else {
//     console.log("Hey I haven't seen that show yet, I'll have to give it a try!")
// };
//
// //IF/ELSE IF/ELSe
//
// if(condition){
//     // if condition is true, run this code
// } else if(condition2) {
//     //if the second condition is met, run this code
// } else {
//     // if no condition is met, run this code
// };

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


})();