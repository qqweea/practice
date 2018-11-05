var btnOpenMenu = document.getElementsByClassName("menu__btn--closed")[0];
var wrapper = document.getElementsByClassName("wrapper")[0];
var btnCloseMenu = document.getElementsByClassName("menu__btn--open")[0];
var menu = document.getElementsByClassName("menu")[0];
var anchors = document.getElementsByClassName("menu__link");
let current;
let wBody, wMenu;


function updateW () {
    if (menu.style.width != 0) {
        wBody = window.innerWidth * 0.75;
        wMenu = window.innerWidth * 0.25;
        wrapper.style.width = wBody+"px";
        menu.style.width = wMenu+"px";
    }
    return wBody, wMenu;
}


function openMenu() {
    updateW();
    wrapper.style.width = window.innerWidth * 0.75+"px";
    btnOpenMenu.style.visibility = "hidden";
    menu.style.width = window.innerWidth * 0.25+"px";
    btnCloseMenu.style.visibility = "visible";
    btnCloseMenu.style.right = window.innerWidth * 0.27+"px";
    btnCloseMenu.style.opacity = "1";
}

function closeMenu() {
    wrapper.style.width = "";
    btnOpenMenu.style.visibility = "visible";
    menu.style.width = "";
    btnCloseMenu.style.visibility = "hidden";
    btnCloseMenu.style.right = "";
    btnCloseMenu.style.opacity = "";
}

function menuEscape(event) {
    if (event.key == "Escape"){
        closeMenu();
    }
    console.log(event.key);
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

function changeColor() {
    current = document.elementFromPoint(0, 30);
     if (current.id != "" && window.location.hash != "#"+current.id){
        // window.location.hash = current.id;
        history.replaceState(null, null, "#"+current.id);
    }

    if  (current == document.getElementById("services") || current == document.getElementById("portfolio")) {
        btnOpenMenu.style.filter = "invert(100%)";
        btnCloseMenu.style.filter = "invert(100%)";
    }
    else {
        btnOpenMenu.style.filter = "";
        btnCloseMenu.style.filter = "";
    }
}



btnOpenMenu.addEventListener("click", openMenu, false);
btnOpenMenu.addEventListener("click", updateAnchors, false);
btnCloseMenu.addEventListener("click", closeMenu, false);
window.onhashchange = function() {updateAnchors()};
window.onload = function () {updateAnchors()};
document.addEventListener("scroll", changeColor, false);
window.addEventListener("keydown", menuEscape, false);
window.addEventListener("resize", updateW, false);