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
function simpleCard(movie){
    let output = `
            <div class="movie-card card">
                <div class="card-body m-3">
                    <div class="card-img-top">
                        <img src="img/transformers.jpg" alt="Movie Poster">
                    </div>
                    Title: ${movie.title} <br>
                    Rating: ${movie.rating} <br>
                    Description: ${movie.plot} <br>
                    Genre: ${movie.genre}<br>
                    Year: ${movie.year}<br>
                    Director: ${movie.director}<br>
                    Actors/Actresses: ${movie.actors}<br>
                    ID: ${movie.id}<br>
                </div>
                <div class="card-footer">
                    <button>Delete</button>
                    <button class="edit-btn">Edit</button>
                </div>
            </div>
            ${addJSButtons()}
          
    `

    console.log(output)
}