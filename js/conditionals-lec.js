"use strict";
(function(){

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


})();