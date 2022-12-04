"use strict"
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weatherBox_Token,

}).done(function (data){
    console.log(data)
});
fetch('http://api.openweathermap.org/data/2.5/forecast')
    .then((response) => response.json())
    .then((data) => console.log(data));








