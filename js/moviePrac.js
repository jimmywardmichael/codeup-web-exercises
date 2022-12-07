"use strict";

function getMovies (){
    return fetch('https://autumn-daffodil-ink.glitch.me/movies')
        .then(response => response.json())
}
getMovies().then( movies => {
    movies.forEach(title => {
        console.log(title)
    })
}).catch(error => console.log(error));

