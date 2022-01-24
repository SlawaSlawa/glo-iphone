const getData = () => {
    const URL = 'https://glo-iphone-default-rtdb.firebaseio.com/db.json'
    const list = document.querySelector('.cross-sell__list ')
    const btn = document.querySelector('.cross-sell__add')

    let stack = 4
    let count = 1

    const render = (data) => {
        list.innerHTML = ''

        data.forEach(item => {
            const { name, photo, price } = item

            list.insertAdjacentHTML('beforeend', `
                <li>
                    <article class="cross-sell__item">
                        <img class="cross-sell__image" src="./${photo}" alt="${name}">
                        <h3 class="cross-sell__title">${name}</h3>
                        <p class="cross-sell__price">${price}₽</p>
                        <button type="button" class="button button_buy cross-sell__button">Купить</button>
                    </article>
                </li>
            `)
        })
    }

    const sliceArray = (data, index) => {
        return data.slice(0, index)
    }

    const changeData = (data) => {
        const newStack = stack * count
        render(sliceArray(data, newStack))

        if (data.length > newStack) {
            count++
        } else {
            btn.style.display = 'none'
        }
    }

    const getGoods = () => {
        fetch(URL)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Данные были получены с ошибкой!')
                }
            })
            .then(data => changeData(data))
            .catch(err => console.error(err.message))
    }

    btn.addEventListener('click', () => {
        getGoods()
    })

    getGoods()
}

getData()