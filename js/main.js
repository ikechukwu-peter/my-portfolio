const btn = document.querySelector('.menu')


btn.addEventListener('click', (e)=> {
btn.classList.toggle('is-active')
document.querySelector('.link-container').classList.toggle('open')
})

