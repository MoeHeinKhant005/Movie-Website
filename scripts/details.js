// Get the clicked movie's id from the session storage
const clickedMovieId = sessionStorage.getItem('clickedMovieId');

const apiKey = '531427db4c2df639e1c2babd568734c5';
const imgBaseUrl = 'https://image.tmdb.org/t/p/w1280';

// Fetch datas of the clicked movie
async function queryMovieDetails(movieId){
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
    const data = response.json();
    return data;
}

// Generate movie details in the detailsSection
const detailsSection = document.querySelector('.details-section-wrapper');
function generateMovieDetails(movieDetails){
    // Change the page title
    const pageTitle = document.querySelector('title');
    pageTitle.textContent = movieDetails.original_title;

    // Movie details template
    detailsSection.innerHTML = 
    `<img src="${imgBaseUrl + movieDetails.poster_path}" alt="${movieDetails.original_title}" class="details-movie-poster">
    <h3 class="details-movie-title">${movieDetails.original_title}</h3>
    <div class="details-movie-info">
        <span class="details-movie-date"><i class="fa-solid fa-calendar"></i> ${movieDetails.release_date}</span>
        <span class="details-movie-duration"><i class="fa-solid fa-clock"></i> ${movieDetails.runtime}min</span>
    </div>
    <span class="details-movie-genres">${printGenres(movieDetails.genres)}</span>
    <p class="details-movie-overview">${movieDetails.overview}</p>
    <div class="button-wrapper">
        <button class="view-trailer-btn" onclick="location.href='https://www.youtube.com/results?search_query=${movieDetails.original_title}'"><i class="fa-solid fa-clapperboard"></i> View Trailer</button>
        <button class="watch-movie-btn" onclick="location.href='${movieDetails.homepage}'"><i class="fa-solid fa-circle-play"></i> Watch Now</button>
    </div>`;
}

// Return genres one by one
function printGenres(genres){
    let genreText = "";
    for(let i = 0; i < Object.keys(genres).length; i++){
        genreText += `${genres[i].name}, `;
    }
    return genreText.substring(0, genreText.length - 2);
}

queryMovieDetails(clickedMovieId).then(response => generateMovieDetails(response))
