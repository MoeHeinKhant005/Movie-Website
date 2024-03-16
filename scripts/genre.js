const movieGenre = sessionStorage.getItem('movieGenre');
const movieGenreId = sessionStorage.getItem('movieGenreId');

// Setting the titles
const windowTitle = document.querySelector('title');
const sectionTitle = document.querySelector('.movies-section-title');
windowTitle.textContent = `${movieGenre} Movies`;
sectionTitle.textContent = movieGenre;

// Fetch movies from API
const apiKey = '531427db4c2df639e1c2babd568734c5';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w1280';

async function fetchMovies(genreId){
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`);
    const data = response.json();
    return data;
}

// Generate movies in movies section
const moviesSection = document.querySelector('.movies-section-wrapper');
function generateMovies(movieData){
    movieData.results.forEach(data => {
        moviesSection.innerHTML += 
        `<div class="movie-item">
            <img src="${imageBaseUrl + data.poster_path}" alt="${data.original_title}" class="movie-item-poster">
            <span class="movie-item-name">${data.original_title}</span>
            <span class="movie-item-date">${data.release_date.slice(0,4)}</span>
        </div>`;
    })
}

// Load movies
fetchMovies(movieGenreId).then(response => generateMovies(response));
