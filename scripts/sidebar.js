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

// Redirecting to movies.html when clicked
const links = document.querySelectorAll('.sidebar-item');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        if(e.target.textContent != "Home"){
            sessionStorage.setItem('clickedLink', e.target.textContent);
            sessionStorage.setItem('clickedLinkId', e.target.getAttribute('data-movieId'))
            location.href = "/pages/movies.html";
        }else if(e.target.textContent == "Home"){
            location.href = "../index.html";
        }
    })
})
