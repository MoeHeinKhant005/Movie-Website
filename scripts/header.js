// Search functionalities in mobile
const searchIcon = document.querySelector('.search-icon');
const mobileSearchBar = document.querySelector('.search-popup');
let isShown = false;

// Showing and hiding the mobile searchbar
searchIcon.onclick = () => {
    if(isShown == false){
        isShown = true;
        mobileSearchBar.style.display = "flex";
        document.body.style.overflowY = "hidden";
        // Change the close icon
        searchIcon.classList.remove('fa-magnifying-glass');
        searchIcon.classList.add('fa-xmark');
    }else{
        isShown = false;
        mobileSearchBar.style.display = "none";
        document.body.style.overflowY = "scroll";
        // Change into menu icon
        searchIcon.classList.remove('fa-xmark');
        searchIcon.classList.add('fa-magnifying-glass');
    }
}

// Querying data with input keywords from the API
const mobileSearchBarInput = document.querySelector('.search-popup-input');
mobileSearchBarInput.onkeydown = (e) => {
    if(e.key == "Enter"){
        sessionStorage.setItem('searchKeyword', mobileSearchBarInput.value);
        sessionStorage.setItem('scriptToLoad', 'search.js');
        location.href = "/pages/movies.html";
    }else{
        return 0; 
    }
}

// Search functionalities in desktop
const desktopSearchInput = document.querySelector('.searchbar-input');
desktopSearchInput.onkeydown = (e) => {
    if(e.key == "Enter"){
        sessionStorage.setItem('searchKeyword', desktopSearchInput.value);
        sessionStorage.setItem('scriptToLoad', 'search.js');
        location.href = "/pages/movies.html";
    }else{
        return 0;
    }
}
