const link = document.getElementById('link')

const body = document.querySelector('body')

console.log(link);

setTimeout(() => {
    body.classList.add('blank')
}, 4000)

setTimeout(() => {


    link.click()

},5000)