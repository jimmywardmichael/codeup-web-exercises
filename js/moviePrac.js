"use strict";
////////////////////// Loading Function///////////////////
function onReady(callback) {
    var intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('html')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 3000);
}

function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
    setVisible('.page', true);
    setVisible('#loading', false);
})



//This promise below takes in a js object store it in a variable and returns function. This allows AJAX to talk to Glitch DB
function getMovies (){
    return fetch('https://autumn-daffodil-ink.glitch.me/movies')
        .then(response => response.json())
}
getMovies().then( movies => {
    movies.forEach(title => {
        console.log(title)
    })
}).catch(error => console.log(error));
//-------------------------------------------------------------grabs movies from db.json -----------------------------------------------------------------------//




const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))