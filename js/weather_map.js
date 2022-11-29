"use strict"
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weatherBox_Token,
    q:     "San Antonio, US",
    units: "Imperial"
}).done(function (data){
    console.log(data)
});