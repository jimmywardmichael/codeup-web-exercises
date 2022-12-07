"use strict";

const getMovies = fetch('https://autumn-daffodil-ink.glitch.me/movies')
Promise.all([getMovies])
    .then(function (data) {
        // data of the array goes here
    })
    .catch(function (error) {
// handles errors

    });// Ends function