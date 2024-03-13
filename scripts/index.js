const apiKey = '531427db4c2df639e1c2babd568734c5';

// Fetch movies data
async function fetchMovies(type){
    const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`);
    const data = await response.json();
    return data.results;
}
