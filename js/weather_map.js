"use strict"
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weatherBox_Token,
    q:     "Dallas, US",
    units: "Imperial",
}).done(function (data){
    let currentDateTime = new Date(Date.now())
    let month = currentDateTime.getMonth()
    let day = currentDateTime.getDate()
    let year = currentDateTime.getFullYear()
    console.log(month, day, year)
    let currentDate = new Date(year, month, day)
    let currentDateTotalSec = Date.parse(currentDate) / 1000

    console.log(data.list.find((weatherDay)=> weatherDay.dt))
});


function buildDiv(temp, temp_min, temp_max, desc, humid, wind, pressure, image){
    var html =  ' ';
    html += '<div class="weatherBox">';
    html += '<h2>' + Math.round(temp) + ' degrees </h2>';
    // html += '<h3> Min/Max: ' + temp_min + '/' + temp_max + '</h3>';
    html += '<p> Weather: '+ desc + '</p>';
    html += '<img src="http://openweathermap.org/img/w/'+ image + '.png">';
    html += '<p> Humidity: ' + humid + '</p>';
    html += '<p> Wind Speed: ' + wind + '</p>';
    html += '<p> Pressure: ' + pressure + '</p>';
    html += '</div>';
    return html;
}









