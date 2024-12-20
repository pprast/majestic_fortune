// let gifts // Глобальный массив с данными

let gifts = [ // глобальный массив с данными
    {
        "color": "#d53831",
        "image_url": "./web/assets/gifts/8.png",
        "prize": "Бальзам для губ"
    },
    {
        "color": "#fff",
        "image_url": "./web/assets/gifts/8.png",
        "prize": "Крем для лица"
    },
    {
        "color": "#f2c682",
        "image_url": "./web/assets/gifts/8.png",
        "prize": "Сыворотка для лица"
    },
    {
        "color": "#d53831",
        "image_url": "./web/assets/gifts/8.png",
        "prize": "Процедура «Массаж»"
    },
    {
        "color": "#fff",
        "image_url": "./web/assets/gifts/8.png",
        "prize": "Процедура «Массаж LPG»"
    },
    {
        "color": "#f2c682",
        "image_url": "./web/assets/gifts/8.png",
        "prize": "Процедура «Химический пилинг»"
    },
    {
        "color": "#d53831",
        "image_url": "./web/assets/gifts/8.png",
        "prize": "Скидка 10% на любую процедуру"
    },
    {
        "color": "#fff",
        "image_url": "./web/assets/gifts/8.png",
        "prize": "Тоник для лица"
    },
    {
        "color": "#f2c682",
        "image_url": "./web/assets/gifts/8.png",
        "prize": "Умывалка для лица"
    }
]

// Отрисовываем секцию с подарками
renderGiftsSection()

// Отрисовываем колесо
renderFortuneWheel()


// Рендер секции и призами
function renderGiftsSection() {
    for (let gift of gifts) {
        $(".gifts__container").append(`
            <div class="gifts__gift">
                <img class="gifts__gift-image" src="${gift.image_url}" alt="gift">
                <p class="gifts__gift-text">${gift.prize}</p>
            </div>
        `)
    }
}