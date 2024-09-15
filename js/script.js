const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');
const navButtons = document.querySelector('.nav__buttons');
const navLogo = document.querySelector('.nav__logo');
const navLinksAll = document.querySelectorAll('.nav__links a');
console.log(navLinksAll);
const navButtonsAll = document.querySelectorAll('.nav__buttons button');
const categoriesButtonsAll = document.querySelectorAll('.categories__buttons button');
const body = document.querySelector('body');

const darkThemeMq = window.matchMedia('(prefers-color-scheme:dark)');

const buttonThemeToggle = document.querySelector('.button-theme-toggle');

let buttonThemeText;
let buttonThemeIcon;

// function showTheme() {
//     if (darkThemeMq.matches) {
        
//     } else {
        
//     }
// }

// showTheme();

function getTheme() {
    if (darkThemeMq.matches) {
        body.classList.add('dark-team');
    } else {
        body.classList.add('light-team');
    }
}

getTheme();




buttonThemeToggle.onclick = function () {
        body.classList.toggle('dark-team');
        body.classList.toggle('light-team');
}

function checkClassAvailability() {
    if (body.classList.contains('light-team')) {
        buttonThemeText = 'Светлая';
        buttonThemeIcon = 'fa-solid fa-sun';
    } else if (body.classList.contains('dark-team')) {
        buttonThemeText = 'Тёмная';
        buttonThemeIcon = 'fa-solid fa-moon';
    }
}

checkClassAvailability();


console.log(buttonThemeText);
console.log(buttonThemeIcon);



buttonThemeToggle.innerHTML = `
    <button class="button-theme-toggle">
          <i class="${buttonThemeIcon}"></i>
          <span>${buttonThemeText}</span>
    </button>
`



hamburger.onclick = function () {
    navLinks.classList.toggle('navLinks_active');
    hamburger.classList.toggle('hamburger_active');
    navButtons.classList.toggle('navButtons_active');
    navLogo.classList.toggle('navLogo_active');
    buttonThemeToggle.classList.toggle('buttonThemeToggle_active'); //Кнопка смены темы
}

navLogo.onclick = function () {
    navLinks.classList.remove('navLinks_active');
    hamburger.classList.remove('hamburger_active');
    navButtons.classList.remove('navButtons_active');
    navLogo.classList.remove('navLogo_active');
    buttonThemeToggle.classList.remove('buttonThemeToggle_active') //Кнопка смены темы
}

for (let i = 0; i < 4; i++) {
    navLinksAll[i].onclick = function () {
        navLinks.classList.remove('navLinks_active');
        hamburger.classList.remove('hamburger_active');
        navButtons.classList.remove('navButtons_active');
        navLogo.classList.remove('navLogo_active');
        buttonThemeToggle.classList.remove('buttonThemeToggle_active') //Кнопка смены темы
    }
}

for (let i = 0; i < 3; i++) {
    navButtonsAll[i].onclick = function () {
        navLinks.classList.remove('navLinks_active');
        hamburger.classList.remove('hamburger_active');
        navButtons.classList.remove('navButtons_active');
        navLogo.classList.remove('navLogo_active');
        buttonThemeToggle.classList.remove('buttonThemeToggle_active') //Кнопка смены темы
    }
}

for (let i = 0; i < 4; i++) {
    categoriesButtonsAll[i].onclick = function () {
        document.querySelector('.categories__buttons_active').classList.remove('categories__buttons_active');
        categoriesButtonsAll[i].classList.add('categories__buttons_active');
        if (i == 3) {      /**Сравниваем значение переменной i с числом 3, и если оно равно 3, показываем карточки с мужскими кроссовками.**/
            categoriesCardRender('man')
        }
        if (i == 2) {         /**Сравниваем значение переменной i с числом 2, и если оно равно 2, показываем карточки с женскими кроссовками.**/
            categoriesCardRender('woman')
        }
        if (i == 1) {             /**Сравниваем значение переменной i с числом 1, и если оно равно 1, показываем карточки с бутсами.**/
            categoriesCardRender('boots')
        }
        if (i == 0) {       /**Сравниваем значение переменной i с числом 0, и если оно равно 0, показываем все карточки.**/
            categoriesCardRender('all')
        }
    }
}




const categoriesCardStore = [                    /**Создаем базу данных, куда попадают все данные карточек с кроссовками.**/
    {
        img: '1',
        name: 'Luka 1',
        price: '240',
        description: 'Баскетбольные кроссовки',
        rating: '4.9',
        type: 'woman'
    },

    {
        img: '2',
        name: 'Phantom GX Pro',
        price: '180',
        description: 'Футбольные бутсы для игры на твердом грунте',
        rating: '4.2',
        type: 'boots'
    },

    {
        img: '3',
        name: 'Nike Air Max Plus',
        price: '240',
        description: 'Мужские универсальные кросовки',
        rating: '4.9',
        type: 'man'
    },

    {
        img: '4',
        name: 'LeBron XXI ‘Freshwater’',
        price: '210',
        description: 'Баскетбольные кроссовки',
        rating: '4.9',
        type: 'woman'
    },

    {
        img: '5',
        name: 'Phantom GX Pro',
        price: '160',
        description: 'Низкие бутсы для искусственного покрытия',
        rating: '4.0',
        type: 'boots'
    },

    {
        img: '6',
        name: 'Phantom GX Academy',
        price: '79',
        description: 'Низкие бутсы для мягкого грунта',
        rating: '4.9',
        type: 'boots',
    },

    {
        img: '7',
        name: 'Luka 2 ‘Trick Shot’',
        price: '230',
        description: 'Баскетбольные кроссовки',
        rating: '4.9',
        type: 'man'
    },

    {
        img: '8',
        name: 'Mercurial Superfly',
        price: '210',
        description: 'Футбольные бутсы для игры на твердом грунте',
        rating: '4.9',
        type: 'boots'
    },

    {
        img: '9',
        name: 'Zion 2',
        price: '410',
        description: 'Баскетбольные кроссовки',
        rating: '4.9',
        type: 'man'
    },

    {
        img: '10',
        name: 'Pegasus Trail 4',
        price: '290',
        description: 'Водонепроницаемые  женские кроссовки для бега',
        rating: '4.9',
        type: 'woman'
    },

    {
        img: '11',
        name: 'Alphafly 3 Proto',
        price: '210',
        description: 'Женская обувь для шоссейных гонок',
        rating: '4.9',
        type: 'woman',
    },

    {
        img: '12',
        name: 'Nike Air Max 270',
        price: '210',
        description: 'Мужские универсальные кросовки',
        rating: '4.9',
        type: 'man'
    }
]

const categoriesListDiv = document.querySelector('.categories__list');
function categoriesCardRender(type) {       /**Создается функция, которая отвечает за рендеринг карт, распределяет их по типам.**/
    categoriesListDiv.innerHTML = '';
    if (type == 'all') {        /**Проверяем, равно ли значение тип 'все'**/
        for (let i = 0; i < categoriesCardStore.length; i++) {
            const cardInfo = categoriesCardStore[i]
            const categoriesCardDiv = document.createElement('div');
            categoriesCardDiv.className = 'categories__card card';

            categoriesCardDiv.innerHTML = `
            <div class="card__photo">
                <img src="./img/categories/${cardInfo.img}.png" alt="">
                <svg class="heart" width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 6.76466V6.96606C0.5 8.78643 1.21424 10.53 2.48915 11.7571C2.48917 11.7571 2.48919 11.7571 2.48922 11.7571L9.55383 18.559C9.94943 18.9625 10.4854 19.107 11 19.107C11.4826 19.107 12.0152 18.9587 12.4071 18.559L19.4717 11.7571C19.4717 11.7571 19.4718 11.7571 19.4718 11.7571C20.741 10.5355 21.5 8.79447 21.5 6.96606V6.76466C21.5 3.71422 19.3448 1.07926 16.3981 0.592522C14.4709 0.240837 12.4703 0.905049 11.0708 2.34827L10.9847 2.43698L10.8825 2.34031C9.48323 0.902607 7.48646 0.241484 5.5628 0.592522C2.6113 1.08006 0.5 3.71936 0.5 6.76466Z" stroke="#FEFFF7"/>
                </svg>
            </div>
            <div class="card__info">
                <div class="card__description">
                    <div class="card__name">
                        <h3>${cardInfo.name}</h3>
                        <p><span>${cardInfo.price}</span> $</p>
                    </div>
                    <p>
                        ${cardInfo.description}
                    </p>
                    <div class="card__rating">
                        <span>${cardInfo.rating}</span>
                        <hr>
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <button>Купить сейчас</button>
            </div>
            `
            categoriesListDiv.appendChild(categoriesCardDiv)
        }
    } else {
        for (let i = 0; i < categoriesCardStore.length; i++) {     /**Цикл, задаем переменной i значение 0. Пока значение i меньше длины **/
            const cardInfo = categoriesCardStore[i]     /**Создаем константу, куда попадет значение i из базы данных.**/
            if (cardInfo.type == type) {
                const categoriesCardDiv = document.createElement('div');
                categoriesCardDiv.className = 'categories__card card';

                categoriesCardDiv.innerHTML =  /**Открываем html в джава скрипт**/`       
            <div class="card__photo">
                <img src="./img/categories/${cardInfo.img  /**Взять с переменной, куда попало значение i из базы данных, картинку и вставить в карточку.**/}.png" alt="">
                <svg class="heart" width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 6.76466V6.96606C0.5 8.78643 1.21424 10.53 2.48915 11.7571C2.48917 11.7571 2.48919 11.7571 2.48922 11.7571L9.55383 18.559C9.94943 18.9625 10.4854 19.107 11 19.107C11.4826 19.107 12.0152 18.9587 12.4071 18.559L19.4717 11.7571C19.4717 11.7571 19.4718 11.7571 19.4718 11.7571C20.741 10.5355 21.5 8.79447 21.5 6.96606V6.76466C21.5 3.71422 19.3448 1.07926 16.3981 0.592522C14.4709 0.240837 12.4703 0.905049 11.0708 2.34827L10.9847 2.43698L10.8825 2.34031C9.48323 0.902607 7.48646 0.241484 5.5628 0.592522C2.6113 1.08006 0.5 3.71936 0.5 6.76466Z" stroke="#FEFFF7"/>
                </svg>
                </div>
            <div class="card__info">
                <div class="card__description">
                    <div class="card__name">
                        <h3>${cardInfo.name /**Взять с переменной, куда попало значение i из базы данных, имя карты и вставить в карту.**/}</h3>
                        <p><span>${cardInfo.price}</span> $</p>
                    </div>
                    <p>
                        ${cardInfo.description /**Взять с переменной, куда попало значение i из базы данных, описание и вставить в карточку.**/}
                    </p>
                    <div class="card__rating">
                        <span>${cardInfo.rating /**Взять с переменной, куда попало значение i из базы данных, значение рейтинга и вставить в карточку.**/}</span> 
                        <hr>
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <button>Купить сейчас</button>
            </div>
            `
                categoriesListDiv.appendChild(categoriesCardDiv)   // Сгенирированную карточку добавить в див категориес лист
            }
        }
    }
    heartsClick();
}

categoriesCardRender('all'); /**При обновлении страницы показывает все карточки**/


const newModelsCardStore = [
    {
        bgColorNewModels: '#B7A997',
        nameNewModels: 'Jumpman',
        descriptionNewModels: 'Мужские беговые кросовки',
        ratingNewModels: '4.9',
        imgNewModels: '1'
    },

    {
        bgColorNewModels: '#D6B895',
        nameNewModels: 'AIR-MAX',
        descriptionNewModels: 'Женские городские кросовки',
        ratingNewModels: '4.9',
        imgNewModels: '2'
    },

    {
        bgColorNewModels: '#7DB3B9',
        nameNewModels: 'CityMax',
        descriptionNewModels: 'Мужские городские кросовки',
        ratingNewModels: '3.6',
        imgNewModels: '3'
    },

    {
        bgColorNewModels: '#DD7916',
        nameNewModels: 'K-Swiss',
        descriptionNewModels: 'Мужские городские кросовки',
        ratingNewModels: '4.4',
        imgNewModels: '4'
    }
]

function newModelsCardRender() {
    const newModelsListDiv = document.querySelector('.new-models__list');
    for (let i = 0; i < newModelsCardStore.length; i++) {
        const cardInfo = newModelsCardStore[i];
        const cardDiv = document.createElement('div'); //оболочка карточки
        cardDiv.className = 'new-models-card';
        cardDiv.innerHTML = `
        <div class="new-models-card__bg" style="background-color: ${cardInfo.bgColorNewModels};">
            <svg class="heart" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.5 6.76466V6.96606C0.5 8.78643 1.21424 10.53 2.48915 11.7571C2.48917 11.7571 2.48919 11.7571 2.48922 11.7571L9.55383 18.559C9.94943 18.9625 10.4854 19.107 11 19.107C11.4826 19.107 12.0152 18.9587 12.4071 18.559L19.4717 11.7571C19.4717 11.7571 19.4718 11.7571 19.4718 11.7571C20.741 10.5355 21.5 8.79447 21.5 6.96606V6.76466C21.5 3.71422 19.3448 1.07926 16.3981 0.592522C14.4709 0.240837 12.4703 0.905049 11.0708 2.34827L10.9847 2.43698L10.8825 2.34031C9.48323 0.902607 7.48646 0.241484 5.5628 0.592522C2.6113 1.08006 0.5 3.71936 0.5 6.76466Z"
                    stroke="#FEFFF7" />
            </svg>
            <img src="./img/new-models/${cardInfo.imgNewModels}.png" alt="">
            <div class="new-models-card__info">
                <h3>${cardInfo.nameNewModels}</h3>
                <p>${cardInfo.descriptionNewModels}</p>
                <div class="new-models-card__rating">
                    <span>${cardInfo.ratingNewModels}</span>
                    <hr>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <button style="color: ${cardInfo.bgColorNewModels}">В корзину</button>
        </div>
        `
        newModelsListDiv.appendChild(cardDiv)
    }
}

newModelsCardRender()
function heartsClick() {
    let hearts = document.querySelectorAll('.heart');
    console.log(hearts);
    hearts.forEach(heart => {
        heart.addEventListener('click', function () {     //**addEventListener */
            heart.classList.toggle('heart-active');
        });
    });
}

