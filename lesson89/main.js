const button = document.querySelector('.button')
const text = document.querySelector('.text')

button.addEventListener('click', () => {
    text.classList.toggle('red') 
    text.classList.toggle('move') 
    if (text.classList.contains('move')) {
        text.innerHTML = 'Clicked'
        text.classList.remove('dis')
    }
    else {
        text.classList.add('green')
        text.classList.remove('red')
        text.classList.add('dis')
    }
})
