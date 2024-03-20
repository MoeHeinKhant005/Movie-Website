const apiKey = '531427db4c2df639e1c2babd568734c5';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w1280';

// Fetch movies data
async function fetchMovies(type){
    const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`);
    const data = await response.json();
    return data.results;
}

// Generate movies in hero section
function generateHeroPosters(movieList){
    const heroSec = document.querySelector('.hero-section-wrapper');
    for(let i = 0; i < 5; i++){
        heroSec.innerHTML += 
        `<div class="hero-item" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.5)),url(${imageBaseUrl + movieList[i].poster_path});">
            <span class="hero-item-name">${movieList[i].original_title}</span>
            <div class="hero-item-trailer">
                <i class="fa-solid fa-circle-play trailer-icon"></i>
                <a href="https://www.youtube.com/results?search_query=${movieList[i].original_title}" class="trailer-text">Click to watch the trailer.</a>
            </div>
        </div>`;
    }
}

// Movie types and movie sections list
const movieTypes = ['top_rated', 'now_playing', 'upcoming'];
const movieSections = ['trending', 'release', 'upcoming'];

// Generate movies in every movie sections
function generateMovies(section, movieData){
    movieData.forEach(data => {
        document.querySelector(`.${section}-section-wrapper`).innerHTML += 
        `<div class="movie-item">
            <img src="${imageBaseUrl + data.poster_path}" alt="${data.original_title}" class="movie-item-poster" onclick="redirectToDetails(${data.id})">
            <span class="movie-item-name">${data.original_title}</span>
            <span class="movie-item-date">${data.release_date.slice(0,4)}</span>
        </div>`;
    })
    
}

// Fetch and load movies on the page
// Load hero poster
fetchMovies('now_playing').then(response => generateHeroPosters(response));

// Load movies in every movie section
movieTypes.forEach((type, index) => {
    fetchMovies(type).then(response => generateMovies(movieSections[index], response));
});

// Redirect to movies detail page
function redirectToDetails(movieId){
    sessionStorage.setItem('clickedMovieId', movieId);
    location.href = "./pages/details.html";
}

// Clear session storage
sessionStorage.clear();
