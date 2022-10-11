"use strict";
(function(){
    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message which relates to the
     * color stated in the argument of the function. For colors you do not have
     * responses written for, return a string stating so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *
     *
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */
    // 1. Function name analyzeColor/
        // 2. Establish a parameter named 'color'
        // 3. Need to return a string
        // 4. Return a string depending on input that is passed.

    function analyzeColor(color) {
        //return some string
        if(color === 'red') {
            return 'Red is good';
        } else if (color === 'blue') {
            return 'blue is better than red';
        } else if (color === 'yellow'){
            return 'Yellow is the best choice'
        } else {
            return 'Never heard of that one, that color is no good'
        }
    };
    console.log(analyzeColor('blue'));
    console.log(analyzeColor('red'));
    console.log(analyzeColor('cyan'));
    console.log(analyzeColor('yellow'));
    console.log(analyzeColor('marigold'));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
console.log(analyzeColor(randomColor));

     /* TODO:
    * Comment out the code above, and refactor your function to use a switch-case statement
    */
//return will exit out of code no break needed after it

    function analyzeColor(color){
        switch (color) {
            case 'red':
                return 'Red is good';
            case 'blue':
                return 'Blue is better choice';
            case 'yellow':
                return 'Yellow is the best choice'
            default:
                return 'Never heard of that one, that color is no good';
        }
    }
    console.log(analyzeColor('blue'));
    console.log(analyzeColor('red'));
    console.log(analyzeColor('cyan'));
    console.log(analyzeColor('yellow'));
    console.log(analyzeColor('marigold'));

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    alert(analyzeColor(prompt("Choose a color!")));

/* TODO:
        * Suppose there's a promotion in Walmart, each customer is given a randomly
    * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
    * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
* the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
    * everything for free!.
*
* Write a function named `calculateTotal` which accepts a lucky number and total
    * amount, and returns the discounted price.
    *
    * Example:
* calculateTotal(0, 100) // returns 100
    * calculateTotal(4, 100) // returns 50
    * /calculateTotal(5, 100) // returns 0
*/
    // 1. function named calculateTotal
    // 2. establish two paramters , one for luckyNum, one for totalAmt
    // 3. return discPrice
    // 4. Discounts
        // 0 = no discount
        // 1 = 0.1
        // 2 = 0.25
        // 3 = 0.35
        // 4 = 0.5
        // 5 = 1
    // Depending on luckyNumber, a discount is applied!!!

    function calculateTotal(luckyNum, totalAmount) {
        if(luckyNum === 0){
            return totalAmount;
        } else if(luckyNum === 1) {
            return totalAmount - (0.10 * totalAmount);
        } else if(luckyNum === 2){
            return totalAmount - (0.25 * totalAmount);
        } else if(luckyNum === 3){
            return totalAmount - (0.35 * totalAmount);
        } else if(luckyNum === 4){
            return  totalAmount - (0.5 * totalAmount);
        } else if(luckyNum === 5){
            return 0;
        }
    }
    console.log(calculateTotal(0, 100));// returns 100
    console.log(calculateTotal(4, 100));// returns 100
    console.log(calculateTotal(5, 100));// returns 100

  // * TODO:
     // * Uncomment the line below to generate a random number between 0 and 5.
     // * (In this line of code, 0 is inclusive, and 6 is exclusive)
     // * Prompt the user for their total bill, then use your `calculateTotal` function
     // * and alerts to display to the user what their lucky number was, what their
     // * price before the discount was, and what their price after the discount is.
     // */
     // Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);
    let userBill = prompt("What was the total amount of your bill?");
    alert("Your lucky number is: " + luckyNumber + ". Your total before discount $" + userBill + '. Your total after the discount: $' + calculateTotal(luckyNumber, userBill));

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * Do *NOT* display any of the above information
     * if the user enters a value that is not of the number data type.
     * Instead, use an alert to inform them of the incorrect input data type.
     *
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */
    // 1. need to use a confirm()
    // 2. need to use a prompt()
    // 3. needs to be a number datatype input from user must be a number
        //if it is:
            // alert if even or odd
            // alert input + 100
            // alert positive or negative
        //if it is not:
            // alert user incorrect data type
    // 4. If possible, refactor to function

    let doesUserConfirm = confirm("Do you want to play a game?")
    //confirm built in method will always pass a true or false boolean
    if (doesUserConfirm) {
        let userNum = parseFloat(prompt("Pick a number!"));
        if (!isNaN(userNum)){
            alert(userNum % 2 === 0 ? "Number is even" : "Number is odd. ")
            alert(userNum > 0 ? "Number is positive " : "Number is negative.")
            alert("Your number + 100 = " + (userNum + 100))
        } else {
            alert("Sorry, what you entered is not a number!")
        }
    }

}());