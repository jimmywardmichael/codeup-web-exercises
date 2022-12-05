"use strict"
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weatherBox_Token,
    q:     "Dallas, US",
    units: "Imperial",
    cnt: 5,
    list: []


}).done(function(data) {
    console.log('5 day forecast', data);
});


//     let currentDateTime = new Date(Date.now())
//     let month = currentDateTime.getMonth()
//     let day = currentDateTime.getDate()
//     let year = currentDateTime.getFullYear()
//     console.log(month, day, year)
//     let currentDate = new Date(year, month, day)
//     let currentDateTotalSec = Date.parse(currentDate) / 1000
//
//     console.log(data.list.find((weatherDay)=> weatherDay.dt))
// });
//
//
// function buildDiv(temp, temp_min, temp_max, desc, humid, wind, pressure, image){
//     let html =  '<div class="card-body">';
//     html += '<li>' + Math.round(temp) + ' degrees </li>';
//     html += '<li> Weather: '+ desc + '</li>';
//     html += '<img src="http://openweathermap.org/img/w/'+ image + '.png">';
//     html += '<li> Humidity: ' + humid + '</li>';
//     html += '<li> Wind Speed: ' + wind + '</li>';
//     html += '<li> Pressure: ' + pressure + '</li>';
//     html += '</div>';
//     return html;
// }
// console.log(buildDiv())









