const tabsFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change')
    const tabsTitle = document.querySelector('.card-details__title')
    const tabsPrice = document.querySelector('.card-details__price')
    const tabsImage = document.querySelector('.card__image_item')
    const descriptionList = document.querySelector('.card-details__description-list')

    const tabsOptions = [
        {
            name: 'Gaphite',
            memory: '128',
            price: 60000,
            image: 'img/iPhone-graphite.webp',
            description: [
                {
                    text: 'Экран 6.1"/2532x1170 Пикс',
                    class: 'description__screen'
                },
                {
                    text: 'Технология экрана OLED',
                    class: 'description__tech'
                },
                {
                    text: 'Тип процессора A15 Bionic',
                    class: 'description__processor'
                },
                {
                    text: 'Встроенная память(ROM) 128 ГБ',
                    class: 'description__memory'
                },
                {
                    text: 'Основная камера МПикс 12/12/12 / LiDAR',
                    class: 'description__camera'
                }]
        },
        {
            name: 'Silver',
            memory: '256',
            price: 65000,
            image: 'img/iPhone-silver.webp',
            description: [
                {
                    text: 'Экран 6.1"/2532x1170 Пикс',
                    class: 'description__screen'
                },
                {
                    text: 'Технология экрана OLED',
                    class: 'description__tech'
                },
                {
                    text: 'Тип процессора A15 Bionic',
                    class: 'description__processor'
                },
                {
                    text: 'Встроенная память(ROM) 256 ГБ',
                    class: 'description__memory'
                },
                {
                    text: 'Основная камера МПикс 12/12/12 / LiDAR',
                    class: 'description__camera'
                }]
        },
        {
            name: 'Siera Blue',
            memory: '512',
            price: 70000,
            image: 'img/iPhone-sierra_blue.webp',
            description: [
                {
                    text: 'Экран 6.1"/2532x1170 Пикс',
                    class: 'description__screen'
                },
                {
                    text: 'Технология экрана OLED',
                    class: 'description__tech'
                },
                {
                    text: 'Тип процессора A15 Bionic',
                    class: 'description__processor'
                },
                {
                    text: 'Встроенная память(ROM) 512 ГБ',
                    class: 'description__memory'
                },
                {
                    text: 'Основная камера МПикс 12/12/12 / LiDAR',
                    class: 'description__camera'
                }]
        }
    ]

    const createElemet = (tag, className, text) => {
        const elem = document.createElement(tag)
        elem.classList.add(className)
        elem.textContent = text

        return elem
    }

    const changeContent = (index) => {
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`
        tabsPrice.textContent = `${tabsOptions[index].price}₽`
        tabsImage.src = `${tabsOptions[index].image}`
        document.title = `iPhone - ${tabsOptions[index].name}`

        descriptionList.textContent = ''

        tabsOptions[index].description.forEach((item, i) => {
            liElem = createElemet('li', tabsOptions[index].description[i].class, tabsOptions[index].description[i].text)
            descriptionList.append(liElem)
        })
    }

    const changeActiveTabs = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active')

            if (index === indexClickedTab) {
                tab.classList.add('active')
            }
        })

        changeContent(indexClickedTab)
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActiveTabs(index)
        })
    })

    changeContent(0)
}

tabsFunc()