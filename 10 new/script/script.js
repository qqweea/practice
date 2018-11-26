function fillBar(id, x) {
    var fill = document.getElementById(id);
    var width = 0;
    var id = setInterval(filler, 1);
    function filler() {
        if (width < x) {
            width += 2;
            fill.style.width = width + 'px';
        } else {
            clearInterval(id);
        }
    }

}
var seen = false;

function onDisplay(){
    if (window.pageYOffset >= 650 && seen == false){
        fillBar("fillPs", 242);
        fillBar("fillAi", 216);
        fillBar("fillCdr", 192);
        fillBar("fillFl", 96);
        fillBar("fillDw", 216);
        fillBar("fillPr", 36);
        seen = true;
    }
}

window.addEventListener ("scroll", onDisplay); 