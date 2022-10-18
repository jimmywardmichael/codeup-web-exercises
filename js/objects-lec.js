"use strict";
(function (){

    // var car = new Object();
    // let cup = new Object();
// let car = {};

    // let book = {};
    // book.Title = "Berserk";
    // book.Author = "Ron James";
    // book.Publisher_Date = "1998";
    // book['volume'] = 4;
    // console.log(book.title);
    // console.log(book);
    // console.log(book["title"]);
    // let publishedWorks {
    //     bookTitles:["Berserk", "Vagabond"]
    // }
    // let authorObj =  {
    //     name: "Kentaro Miura"
    // }
    // let bookTitle = prompt("Enter book title")
    // let book = {
    //     title: bookTitle,
    //     author: authorObj,
    //     volume: 4
    // }
    //     var cars = [
    //         {
    //             make: "Toyota",
    //             model: "Camry",
    //             features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
    //             owner: {
    //                 name: "Jane Doe",
    //                 age: 30
    //             }
    //         },
    //         {
    //             make: "Honda",
    //             model: "Accord",
    //             features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
    //             owner: {
    //                 name: "John Doe",
    //                 age: 31
    //             }
    //         }
    //     ];
    //
    //     console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
    //     console.log("The owner of the second car is " + cars[1].owner.name + ".");
    //
    //     console.log("Here are all the features of all the cars:");
    //     cars.forEach(function(car) {
    //         car.features.forEach(function(feature) {
    //             console.log(feature);
    //         });
    //     });
    //
    //
    // console.log(book.title);
    // console.log(book["title"])
    // console.log(book.author.name)
    // console.log(book);

//     "use strict";
//
//     var car = {};
//     car.make = "Toyota";
//     car.model = "Camry";
//
// // create a honk method on the car object
//     car.honk = function () {
//         alert("Honk! Honk!");
//     };
//
// // honk the horn
//     car.honk();
    "use strict";

    var car = {};
    car.make = "Toyota";
    car.model = "Camry";

// create a logMakeModel method on the car object
    car.logMakeModel = function () {
        console.log("Car make/model is: " + this.make + " " + this.model);
    };

// log the make/model
    car.logMakeModel();
})();