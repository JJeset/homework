const btn = document.querySelector('.modal-open')
const modal = document.querySelector('.modal')

    btn.addEventListener('click', () => {
        modal.classList.remove('hide__modal')
    })

    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal') || event.target.classList.contains('modal__close-btn')) {
            modal.classList.add('hide__modal')
        }
    })

    document.addEventListener('keydown', event => {
        if (event.key == 'Escape' && !modal.classList.contains('hide__modal')) {
            modal.classList.toggle('hide__modal')
        }
    }) 
