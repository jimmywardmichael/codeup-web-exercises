"use strict";
(function(){


    function multiplyBy5(inputNum){
        if(typeof(inputNum !== "number")){
            console.log("This is not a number");
            return 0;
        } else {
            return inputNum * 5;
        }
    }

    const multFive = (x) => {
        if (parseFloat(x) !== true){
            return 0;
        }
        return x*5;
    }
    console.log(multiplyBy5(5));
    console.log(multiplyBy5('5'));
    console.log(multiplyBy5('five'));
    console.log(multiplyBy5(true));

    console.log((multFive(5)));
    console.log((multFive('5')));
    console.log((multFive('five')));
    console.log((multFive(true)));
})();




