const accordeon = () => {
    const chItems = document.querySelectorAll('.characteristics__item')

    chItems.forEach(item => {
        const chButton = item.querySelector('.characteristics__title')
        const chContent = item.querySelector('.characteristics__description')
        chButton.classList.remove('active')
        chContent.classList.remove('open')
        chContent.style.height = ''

        chButton.addEventListener('click', (evt) => {

            const target = evt.target
            console.log(target)
            chItems.forEach((item) => {
                const chButton = item.querySelector('.characteristics__title')
                const chContent = item.querySelector('.characteristics__description')
                console.log(item)
                if (chButton !== target) {
                    chButton.classList.remove('active')
                    chContent.classList.remove('open')
                    chContent.style.height = ''
                }
            })

            if (chContent.classList.contains('open')) {
                chContent.style.height = ''
            } else {
                chContent.style.height = chContent.scrollHeight + 'px'
            }

            chButton.classList.toggle('active')
            chContent.classList.toggle('open')
        })
    })
}

accordeon()