const button = document.querySelector('.button');
button.addEventListener('click', event => {
    event.target.classList.toggle('red');
})