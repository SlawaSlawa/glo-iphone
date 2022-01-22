const scrollFunc = () => {
    const links = document.querySelectorAll('.header-menu__item a')
    const fullCharacteristicsBtn = document.querySelector('.card-details__link-characteristics')

    seamless.polyfill();

    const scrollToSection = (evt) => {
        const target = evt.target
        const id = target.getAttribute('href').substring(1)
        const sectionName = evt.target.textContent
        const section = document.getElementById(id)

        if (section) {
            seamless.elementScrollIntoView(section, {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        } else {
            console.warn('Секция: ' + '"' + sectionName + '"' + ' отсутствует')
        }
    }

    links.forEach(link => {
        link.addEventListener('click', evt => {
            evt.preventDefault()
            scrollToSection(evt)
        })
    })

    fullCharacteristicsBtn.addEventListener('click', evt => {
        evt.preventDefault()
        scrollToSection(evt)
    })
}

scrollFunc()