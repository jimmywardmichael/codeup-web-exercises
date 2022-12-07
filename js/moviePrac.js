"use strict";
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
