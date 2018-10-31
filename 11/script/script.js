var btnOpenMenu = document.getElementsByClassName("menu__btn--closed")[0];
var wrapper = document.getElementsByClassName("wrapper")[0];
var btnCloseMenu = document.getElementsByClassName("menu__btn--open")[0];
var menu = document.getElementsByClassName("menu")[0];
var anchors = document.getElementsByClassName("menu__link");


function openMenu() {
    wrapper.style.width = "75vw";
    btnOpenMenu.style.visibility = "hidden";
    menu.style.width = "25vw";
    btnCloseMenu.style.visibility = "visible";
    btnCloseMenu.style.right = "26vw";
    btnCloseMenu.style.opacity = "1";
}

function closeMenu() {
    wrapper.style.width = "100%";
    btnOpenMenu.style.visibility = "visible";
    menu.style.width = "0";
    btnCloseMenu.style.visibility = "hidden";
    btnCloseMenu.style.right = "15vw";
    btnCloseMenu.style.opacity = "0";
}

function updateAnchors() {
    var anchorsLen = anchors.length;
    var newActive = document.getElementById('a_' + location.hash.replace('#',""));
    for (var i = 0; i < anchorsLen; i++) {
        anchors[i].classList.remove('menu__link--active');
    } 
    if (location.hash == "") {
        anchors[0].classList.add("menu__link--active");
        window.location.hash = 'home';
    } else {
        newActive.classList.add("menu__link--active");
        window.onhashchange = function() {updateAnchors()};
        window.onhashchange = function() {closeMenu()};
    }
    
}

btnOpenMenu.addEventListener("click", openMenu, false);
btnOpenMenu.addEventListener("click", updateAnchors, false);
btnCloseMenu.addEventListener("click", closeMenu, false);
window.onhashchange = function() {updateAnchors()};
window.onload = function () {updateAnchors()};