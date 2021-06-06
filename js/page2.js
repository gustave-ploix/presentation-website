const body = document.querySelector('body')

window.onload = body.classList.add('visible')

body.addEventListener("scroll",(e) => {
    console.log(e);
})