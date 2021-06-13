const link = document.getElementById('link')

const body = document.querySelector('body')

setTimeout(() => {
    body.classList.add('blank')
}, 4000)

setTimeout(() => {


    link.click()

},5000)