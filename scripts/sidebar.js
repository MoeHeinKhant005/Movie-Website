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
