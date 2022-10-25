"use strict";
(function(){
    //
    //
    // function multiplyBy5(inputNum){
    //     if(typeof(inputNum !== "number")){
    //         console.log("This is not a number");
    //         return 0;
    //     } else {
    //         return inputNum * 5;
    //     }
    // }
    //
    // const multFive = (x) => {
    //     if (parseFloat(x) !== true){
    //         return 0;
    //     }
    //     return x*5;
    // }
    // console.log(multiplyBy5(5));
    // console.log(multiplyBy5('5'));
    // console.log(multiplyBy5('five'));
    // console.log(multiplyBy5(true));
    //
    // console.log((multFive(5)));
    // console.log((multFive('5')));
    // console.log((multFive('five')));
    // console.log((multFive(true)));

//     let arr = [true, "Icon", 25, "66", false, 0];
// // arr.forEach(function (typePrinter){
// //     console.log(typePrinter);
// //
//     function typePrinter(userArr){
//         for(let i = 0; i < userArr.length; i++){
//             console.log(typeof userArr[i])
//         }
//     }
//     typePrinter(arr);
//     Warm-Up:
//
//     Create a function named "average" that takes in an array of numeric values, and returns the average. If any of the elements in the array are non-numeric, the function should return false.
//
//         Ex:
//     average(["6", 5, 3, 2, 9])                       // returns 5
//     average([true, 6, 9, 3, 10])                     // returns false
//     average([{name: "Codey the Duck}, 10, 3, false]) // returns false
//         average([1, 2, 3, 4, 5])                         // returns 3
//         average(["5.5", "five", 3, 6, 7])                // returns false
//     function isNumeric(input){
//         return !isNaN(parseFloat(input))
//     }
//
//     function average(array){
//         let i=0;
//         let sum = 0;
//         while(i < array.length) {
//             if (isNumeric(array[i])) {
//                 sum += parseFloat(array[i]);
//                 i++;
//             } else {
//                 return false;
//             }
//         }
//         return sum / array.length
//     }
//
//     console.log(average(["6", 5, 3, 2, 9]));
//     console.log(average([true, 6, 9, 3, 10]));
//     console.log(average(["Codey the Duck", 10, 3, false]));
//     console.log(average([1, 2, 3, 4, 5]));
//     console.log(average(["5.5", "five", 3, 6, 7]));
//
//    // Warm-up:

    //Create a function named "filterNegativity" that accepts an array of numbers, and returns an array with only positive numbers.

       // Ex: filterNegativity([5, -6, 2, 0, -5, -13]) // returns [5, 2, 0,]
    const filterNegativity = (arr) => {
        let positiveArr = [];
        for (let i = 0; i < arr.length; i++){
            if(arr[i] >= 0){
                positiveArr.push(arr[i]);
            }
        }
        return positiveArr;
    }
console.log(filterNegativity([5, -6, 2, 0, -5, -13]))

})();




