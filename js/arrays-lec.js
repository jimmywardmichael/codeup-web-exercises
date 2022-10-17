"use strict";
(function(){
let names = ['john', 'jim', 'will'];
// console.log(names.length);
let arr = [true, 1, 'hello'];
// console.log(arr.length);

console.log(names[0])

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(newArr[4]);

for(let i = 0; i < names.length; i++){
    console.log(names[i])
}

names.forEach(function (name){
    console.log(name);
})

    let daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

    console.log(daysOfTheWeek);
// ['Monday', 'Tuesday', 'Wednesday', 'Thursday']

// let's add 'Sunday' to the beginning of the week
    daysOfTheWeek.unshift('Sunday');

    console.log(daysOfTheWeek);
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

// let's add 'Friday' and 'Saturday' to the end of the week
    daysOfTheWeek.push('Friday', 'Saturday');

    console.log(daysOfTheWeek);
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

}());