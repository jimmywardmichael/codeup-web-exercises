"use strict"
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weatherBox_Token,
    q:     "San Antonio, US",
    units: "Imperial"
}).done(function (data){
    console.log(data)
});

let weather = {
    description: "Sunny",
    humidity: "20" ,
    pressure: "10" ,
    wind: "14mph"
}
console.log(weather)

// let readWeather = var index = colors.indexOf('green');