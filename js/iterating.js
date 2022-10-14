(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let peoplesName = ['John', 'Jack', 'Jill', 'Jane'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(peoplesName.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(peoplesName[0]);
    console.log(peoplesName[1]);
    console.log(peoplesName[2]);
    console.log(peoplesName[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
 // loop through the array and log the values
    for (var i = 0; i < peoplesName.length; i++) {
        console.log('The first name ' + i + ' is: ' + peoplesName[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
peoplesName.forEach(function (name ){
    console.log(name)
    })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
console.log(peoplesName[0]);
console.log(peoplesName[1]);
console.log(peoplesName[2]);

})();
