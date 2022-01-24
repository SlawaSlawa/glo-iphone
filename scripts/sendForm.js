const sendForm = () => {
    const modal = document.querySelector('.modal')
    const btnOpenModal = document.querySelector('.card-details__button_delivery')
    const btnCloseModal = document.querySelector('.modal__close')
    const cardDetailsTitle = document.querySelector('.card-details__title')
    const modalTitle = modal.querySelector('.modal__title')
    const modalForm = document.querySelector('form')

    btnOpenModal.addEventListener('click', () => {
        modal.style.display = 'flex'
        modalTitle.textContent = cardDetailsTitle.textContent
    })

    btnCloseModal.addEventListener('click', () => {
        modal.style.display = ''
    })

    modalForm.addEventListener('submit', evt => {
        evt.preventDefault()
        const labels = document.querySelectorAll('.modal__label')
        const sendMessage = {}

        labels.forEach(label => {
            const span = label.querySelector('span')
            const input = label.querySelector('input')

            sendMessage[span.textContent] = input.value
        })

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendMessage),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(() => {
                console.log('Send')
                modal.style.display = ''
                labels.forEach(label => {
                    label.querySelector('input').value = ''
                })
            })
    })
}

sendForm()