const searchKeyword = sessionStorage.getItem('searchKeyword');

// Setting the titles
const windowTitle = document.querySelector('title');
const sectionTitle = document.querySelector('.movies-section-title');
windowTitle.textContent = `Search - ${searchKeyword}`;
sectionTitle.textContent = `Search results for '${searchKeyword}'`;

// Fetch movies from api using keyword
const apiKey = '531427db4c2df639e1c2babd568734c5';
const imagebaseurl = 'https://image.tmdb.org/t/p/w1280'
async function fetchSearchMovies(keyword, pageNum){
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&page=${pageNum}`)
    const data = await response.json();
    return data;
}

// Generating movie items inside movies section
const movieSection = document.querySelector('.movies-section-wrapper');
function generateSearchMovies(movieData){
    movieData.results.forEach(data => {
        movieSection.innerHTML += 
        `<div class="movie-item">
            <img src="${imagebaseurl + data.poster_path}" alt="${data.original_title}" class="movie-item-poster" onclick="redirectToDetails(${data.id})">
            <span class="movie-item-name">${data.original_title}</span>
            <span class="movie-item-date">${data.release_date.slice(0,4)}</span>
        </div>`;
    })
    // Hide the loadMoreBtn if the data length isn't more than one page
    if(movieData.results.length < 20){
        loadMoreBtn.style.display = "none";
    }
}

// Load more movies when the loadMore button is clicked
const loadMoreBtn = document.querySelector('.loadMoreBtn');
let currentDataPage = 1;
function loadMore(){
    currentDataPage++;
    fetchSearchMovies(searchKeyword , currentDataPage).then(response => generateSearchMovies(response));
}
loadMoreBtn.onclick = () => {
    loadMore();
}

// Query and load movies from the api data 
fetchSearchMovies(searchKeyword, currentDataPage).then(response => generateSearchMovies(response));

// Redirect to movies detail page
function redirectToDetails(movieId){
    sessionStorage.setItem('clickedMovieId', movieId);
    location.href = "./details.html";
}
