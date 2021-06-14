const body = document.querySelector('body');
const barre = document.getElementById('barre')

window.onload = body.classList.add('visible');

window.onscroll = function() {scrollFunc()}

scrollFunc = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    barre.style.height = scrolled + "%";
}