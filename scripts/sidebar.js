const sidebar = document.querySelector('.sidebar');
const menuIcon = document.querySelector('.header-wrapper > .menu-icon');
const closeIcon = document.querySelector('.sidebar > .sidebar-close-icon');

// Expanding sidebar
menuIcon.onclick = function(){
    sidebar.style.transform = "translateX(0%)";
}

// Closing sidebar
closeIcon.onclick = function(){
    sidebar.style.transform = "translateX(-100%)";
}

// Redirecting functionalities on mainLinks 
const mainLinks = document.querySelectorAll('.main-list .sidebar-item')
mainLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        if(e.target.textContent == "Home"){
            location.href = "../index.html";
        }else{
            sessionStorage.setItem('movieTopic', e.target.textContent);
            sessionStorage.setItem('movieTopicId', e.target.getAttribute('data-movieId'));
            sessionStorage.setItem('scriptToLoad', 'movies.js');
            location.href = "../pages/movies.html";
        }
    })
})

// Redirecting functionalities on genreLinks
const genreLinks = document.querySelectorAll('.genre-list .sidebar-item');
genreLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        sessionStorage.setItem('movieGenre', e.target.textContent);
        sessionStorage.setItem('movieGenreId', e.target.getAttribute('data-genreId'));
        sessionStorage.setItem('scriptToLoad', 'genre.js');
        location.href = "../pages/movies.html";
    })
})
