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

async function fetchMovies(genreId, pageNum){
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${pageNum}`);
    const data = response.json();
    return data;
}

// Generate movies in movies section
const moviesSection = document.querySelector('.movies-section-wrapper');
function generateMovies(movieData){
    movieData.results.forEach(data => {
        moviesSection.innerHTML += 
        `<div class="movie-item">
            <img src="${imageBaseUrl + data.poster_path}" alt="${data.original_title}" class="movie-item-poster" onclick="redirectToDetails(${data.id})">
            <span class="movie-item-name">${data.original_title}</span>
            <span class="movie-item-date">${data.release_date.slice(0,4)}</span>
        </div>`;
    })
}

// Load more movies when the loadMore button is clicked
const loadMoreBtn = document.querySelector('.loadMoreBtn');
let currentDataPage = 1;
function loadMore(){
    currentDataPage++;
    fetchMovies(movieGenreId, currentDataPage).then(response => generateMovies(response));
}

loadMoreBtn.onclick = function(){
    loadMore();
}

// Load movies
fetchMovies(movieGenreId, currentDataPage).then(response => generateMovies(response));

// Redirect to movies detail page
function redirectToDetails(movieId){
    sessionStorage.setItem('clickedMovieId', movieId);
    location.href = "./details.html";
}
