"use strict";
(function() {
    function showMultiplicationTable(num) {
        for (let i = 1; i <= 10; i++) {
            console.log(num + " x " + i + " = " + (num * i));
        }
    }
     showMultiplicationTable(7);

    for(let i  = 0; i < 10; i++) {
        var luckyNumber = Math.floor((Math.random() * (200 - 20) + 20));
        if (luckyNumber % 2 === 0) {
            console.log(luckyNumber + " is even");
            continue;
        } else {
            console.log(luckyNumber + " is odd")
        }
    }

    for(let i = 1; i < 10; i++){
        console.log(i.toString().repeat(i));
    }

    for(let i = 100; i >= 5; i-= 5)  {
        console.log(i)
    }


}());