"use strict";

////////////////////// Loading Function///////////////////
function onReady(callback) {
    var intervalId = window.setInterval(function () {
        if (document.getElementsByTagName('html')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 3000);
}

function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function () {
    setVisible('.page', true);
    setVisible('#loading', false);
})


//This promise below takes in a js object store it in a variable and returns function. This allows AJAX to talk to Glitch DB
function getMovies() {
    return fetch('https://autumn-daffodil-ink.glitch.me/movies')
        .then(response => response.json())
}

getMovies().then(movies => {
    movies.forEach(title => {
        console.log(title)
    })
}).catch(error => console.log(error));
//-------------------------------------------------------------grabs movies from db.json -----------------------------------------------------------------------//
setTimeout(() => {
    let html = ""
    fetch('https://autumn-daffodil-ink.glitch.me/movies').then((data) => {
        return data.json();
    }).then((data) => {
        for (let movies of data) {
            $(".movie-list-container").append(
                `<div class="movie-list-wrapper">
    <div class="movie-list">
        <div class="movie-list-item">
            <img class="movie-list-item-img" src="${movies.poster}" alt=""/>
            <div class="movieInfo" id="movieInfo">
            <span class="movie-list-item-title">Title: ${movies.title}</span>
            <p class="movie-list-item-desc">Genre: ${movies.genre}</p>
            <p class="movie-list-item-desc">Rating: ${movies.rating}</p>
            <p class="movie-list-item-desc">Plot: ${movies.plot}</p>
            </div>
             <a href="#" type="button"  id="movieInfo" class="btn btn-dark" data-bs-toggle="popover" data-bs-title="Transformers" data-bs-content="">Movie Info</a>
            <a href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#editBtn">Edit</a>
        <a href="#" class="btn btn-danger">Delete</a>
            </div>
    </div>
    </div>
</div>`
            )
        }
    });
});
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


/////////////////////////////////////Event Listeners///////////////////////////////////////////////////
let hideInfo = document.getElementById('movieInfo')
hideInfo.addEventListener("click", function (e){
    $('.movieInfo').css('display', 'none')
})
