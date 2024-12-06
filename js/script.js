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

const searchButtonOpen = document.getElementById('search-button-open');
const searchDiv = document.querySelector('.search-div');
const searchButtonClose = document.querySelector('.search-button-close');
const searchInput = document.getElementById('searchInput');

const basketDiv = document.querySelector('.basket-div');
const basketButtonClose = document.querySelector('.basket-button-close');
const basketButtonOpen = document.querySelector('#basketButtonOpen');
const basketListDiv = document.querySelector('.basket__list');

const signupDiv = document.querySelector('.signup-div');
const buttonSignupOpen = document.getElementById('button-signup-open')
const signupButtonClose = document.querySelector('.signup-button-close');

const buttonLoginLink = document.querySelector('.button-login-link');
const loginDiv = document.querySelector('.login-div');
const loginButtonClose = document.querySelector('.login-button-close');
const buttonLogin = document.querySelector('.button-login');
const buttonSignupLink = document.querySelector('.button-signup-link');
const buttonSignup = document.querySelector('.button-signup');

const buttonLogOut = document.querySelector('.button-log-out');

const favoritesLink = document.querySelector('.favorites-link');
const basketLink = document.querySelector('.basket-link');
const favoritesDiv = document.querySelector('.favorites-div');
const favoritesButtonClose = document.querySelector('.favorites-button-close');
const favoritesListDiv = document.querySelector('.favorites__list');

const wraper = document.querySelector('.wraper');

const accountSettingsDiv = document.querySelector('.account-settings-div');
const accountSettingsButtonClose = document.querySelector('.account-settings-button-close');

const nameUserSpan = document.querySelector('.name-user');

const eyecon = document.querySelectorAll('.eyecon');
const signupPasswordInputEyecon = document.querySelectorAll('.signup-password-input-eyecon');
for (let i = 0; i < eyecon.length; i++) {
    eyecon[i].onclick = function () {
        if(signupPasswordInputEyecon[i].type === 'password') {
            signupPasswordInputEyecon[i].type = 'text'
            eyecon[i].classList.add('fa-eye');
            eyecon[i].classList.remove('fa-eye-slash');
        } else {
            signupPasswordInputEyecon[i].type = 'password'
            eyecon[i].classList.remove('fa-eye');
            eyecon[i].classList.add('fa-eye-slash');
        }
    }
}

const eyeconLogin = document.querySelector('.eyecon-login');
const loginPasswordInputEyecon = document.querySelector('.login-password-input-eyecon');
eyeconLogin.onclick = function () {
    if (loginPasswordInputEyecon.type === 'password') {
        loginPasswordInputEyecon.type = 'text'
        eyeconLogin.classList.add('fa-eye');
        eyeconLogin.classList.remove('fa-eye-slash');
    } else {
        loginPasswordInputEyecon.type = 'password'
        eyeconLogin.classList.add('fa-eye-slash');
        eyeconLogin.classList.remove('fa-eye');
    }
}


let categoriesCardStoreBasic = [
    {
        img: '1',
        name: 'Luka 1',
        price: '240',
        description: 'Баскетбольные кроссовки',
        rating: '4.9',
        type: 'woman',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '2',
        name: 'Phantom GX Pro',
        price: '180',
        description: 'Футбольные бутсы для игры на твердом грунте',
        rating: '4.2',
        type: 'boots',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '3',
        name: 'Nike Air Max Plus',
        price: '240',
        description: 'Мужские универсальные кросовки',
        rating: '4.9',
        type: 'man',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '4',
        name: 'LeBron XXI ‘Freshwater’',
        price: '210',
        description: 'Баскетбольные кроссовки',
        rating: '4.9',
        type: 'woman',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '5',
        name: 'Phantom GX Pro',
        price: '160',
        description: 'Низкие бутсы для искусственного покрытия',
        rating: '4.0',
        type: 'boots',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '6',
        name: 'Phantom GX Academy',
        price: '79',
        description: 'Низкие бутсы для мягкого грунта',
        rating: '4.9',
        type: 'boots',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '7',
        name: 'Luka 2 ‘Trick Shot’',
        price: '230',
        description: 'Баскетбольные кроссовки',
        rating: '4.9',
        type: 'man',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '8',
        name: 'Mercurial Superfly',
        price: '210',
        description: 'Футбольные бутсы для игры на твердом грунте',
        rating: '4.9',
        type: 'boots',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '9',
        name: 'Zion 2',
        price: '410',
        description: 'Баскетбольные кроссовки',
        rating: '4.9',
        type: 'man',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '10',
        name: 'Pegasus Trail 4',
        price: '290',
        description: 'Водонепроницаемые  женские кроссовки для бега',
        rating: '4.9',
        type: 'woman',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '11',
        name: 'Alphafly 3 Proto',
        price: '210',
        description: 'Женская обувь для шоссейных гонок',
        rating: '4.9',
        type: 'woman',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '12',
        name: 'Nike Air Max 270',
        price: '210',
        description: 'Мужские универсальные кросовки',
        rating: '4.9',
        type: 'man',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    }
]

let newModelsCardStoreBasic = [
    {
        bgColorNewModels: '#B7A997',
        imgPath: 'new-models',
        name: 'Jumpman',
        img: '1',
        description: 'Мужские беговые кросовки',
        rating: '4.9',
        price: '170',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        bgColorNewModels: '#D6B895',
        imgPath: 'new-models',
        name: 'AIR-MAX',
        img: '2',
        description: 'Женские городские кросовки',
        rating: '4.9',
        price: '260',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        bgColorNewModels: '#7DB3B9',
        imgPath: 'new-models',
        name: 'CityMax',
        img: '3',
        description: 'Мужские городские кросовки',
        rating: '3.6',
        price: '160',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        bgColorNewModels: '#DD7916',
        imgPath: 'new-models',
        name: 'K-Swiss',
        img: '4',
        description: 'Мужские городские кросовки',
        rating: '4.4',
        price: '230',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    }
]

let basketList = [

]

let accountStatus = false;

favoritesLink.onclick = function () {
    wraper.classList.add('wraper_active');
    body.classList.add('wraper_scroll-none');
    basketDiv.classList.remove('basket-div_active');
    favoritesDiv.classList.add('favorites-div_active');
}

basketLink.onclick = function () {
    wraper.classList.add('wraper_active');
    body.classList.add('wraper_scroll-none');
    basketDiv.classList.add('basket-div_active');
    favoritesDiv.classList.remove('favorites-div_active');
}

favoritesButtonClose.onclick = function () {
    wraper.classList.remove('wraper_active');
    body.classList.remove('wraper_scroll-none');
    favoritesDiv.classList.remove('favorites-div_active');
}



searchButtonOpen.onclick = function () {
    searchDiv.classList.toggle('div_active');
    signupDiv.classList.remove('div_active');
    loginDiv.classList.remove('div_active');
    basketDiv.classList.remove('basket-div_active');

    wraper.classList.add('wraper_active');
    body.classList.add('wraper_scroll-none');
}

searchButtonClose.onclick = function () {
    searchDiv.classList.remove('div_active');
    wraper.classList.remove('wraper_active');
    body.classList.remove('wraper_scroll-none');
}

basketButtonOpen.onclick = function () {

    if (accountStatus === true) {
        basketDiv.classList.toggle('basket-div_active');
        signupDiv.classList.remove('div_active');
        searchDiv.classList.remove('div_active');
        loginDiv.classList.remove('div_active');

        wraper.classList.add('wraper_active');
        body.classList.add('wraper_scroll-none');
    } else {
        signupDiv.classList.toggle('div_active');
        searchDiv.classList.remove('div_active');
        loginDiv.classList.remove('div_active');
        basketDiv.classList.remove('basket-div_active');

        wraper.classList.add('wraper_active');
        body.classList.add('wraper_scroll-none');
    }

}

basketButtonClose.onclick = function () {
    basketDiv.classList.remove('basket-div_active');

    wraper.classList.remove('wraper_active');
    body.classList.remove('wraper_scroll-none');
}

buttonSignupOpen.onclick = function () {
    if (accountStatus === false) {
        signupDiv.classList.toggle('div_active');
        searchDiv.classList.remove('div_active');
        loginDiv.classList.remove('div_active');
        basketDiv.classList.remove('basket-div_active');

        wraper.classList.add('wraper_active');
        body.classList.add('wraper_scroll-none');
    } else {
        accountSettingsDiv.classList.toggle('account-settings-div_active');
        wraper.classList.add('wraper_active');
        body.classList.add('wraper_scroll-none');
    }
}

accountSettingsButtonClose.onclick = function () {
    accountSettingsDiv.classList.remove('account-settings-div_active');
    wraper.classList.remove('wraper_active');
    body.classList.remove('wraper_scroll-none');
}

signupButtonClose.onclick = function () {
    signupDiv.classList.remove('div_active');

    wraper.classList.remove('wraper_active');
    body.classList.remove('wraper_scroll-none');
}

buttonLoginLink.onclick = function () {
    loginDiv.classList.add('div_active');
    signupDiv.classList.remove('div_active');

    wraper.classList.add('wraper_active');
    body.classList.add('wraper_scroll-none');
}

loginButtonClose.onclick = function () {
    loginDiv.classList.remove('div_active');

    wraper.classList.remove('wraper_active');
    body.classList.remove('wraper_scroll-none');
}

buttonSignupLink.onclick = function () {
    loginDiv.classList.remove('div_active');
    signupDiv.classList.add('div_active');

    wraper.classList.add('wraper_active');
    body.classList.add('wraper_scroll-none');
}




const signupNameInput = document.getElementById('signup-name-input');
const signupEmailInput = document.getElementById('signup-email-input');
const signupPasswordInput = document.getElementById('signup-password-input');
const signupPasswordRepitInput = document.getElementById('signup-password-repit-input');
const loginEmailInput = document.getElementById('login-email-input');
const loginPasswordInput = document.getElementById('login-password-input');

const signupButtonClear = document.querySelector('.signup-button-clear');
signupButtonClear.onclick = function () {
    signupNameInput.value = '';
    signupEmailInput.value = '';
    signupPasswordInput.value = '';
    signupPasswordRepitInput.value = '';
    labelUpRemove();
}

function labelUpRemove() {
    const labelsSignup = document.querySelectorAll('.signup-label');
    for (let i = 0; i < labelsSignup.length; i++) {
        labelsSignup[i].classList.remove('label-up');
    }
}

const plaseholderMoveInputs = document.querySelectorAll('.plaseholder-move');

for (let i = 0; i < plaseholderMoveInputs.length; i++) {
    plaseholderMoveInputs[i].onfocus = function () {
        plaseholderMoveInputs[i].parentNode.querySelector('label').classList.add('label-up');               //**parentNode выходим в элемент внутри которого находится инпут**//
    }
}

for (let i = 0; i < plaseholderMoveInputs.length; i++) {
    plaseholderMoveInputs[i].onblur = function () {
        if (plaseholderMoveInputs[i].value == '') {
            plaseholderMoveInputs[i].parentNode.querySelector('label').classList.remove('label-up');
        }
    }
}




buttonSignup.onclick = function () {
    if (signupNameInput.value != '') {
        if (signupEmailInput.value != '') {
            if (signupPasswordInput.value.length > 7) {
                if (signupPasswordInput.value === signupPasswordRepitInput.value) {
                    const savedEmail = localStorage.getItem(signupEmailInput.value);
                    if (savedEmail == null) {
                        const userInfo = {
                            email: signupEmailInput.value,
                            name: signupNameInput.value,
                            password: signupPasswordInput.value
                        }
                        alert('Вы успешно зарегистрировались')
                        localStorage.setItem(signupEmailInput.value, JSON.stringify(userInfo));
                        signupNameInput.value = '';
                        signupEmailInput.value = '';
                        signupPasswordInput.value = '';
                        signupPasswordRepitInput.value = '';
                        accountStatus = true;
                        nameUserSpan.innerText = userInfo.name;
                        signupDiv.classList.remove('div_active');
                        wraper.classList.remove('wraper_active');
                        body.classList.remove('wraper_scroll-none');
                    } else {
                        alert('Эл. почта уже используется');
                    }
                } else {
                    alert('Пароли не совпадают');
                }
            } else {
                alert('Ваш пароль слишком короткий');
            }
        } else {
            alert('Введите электронную почту');
        }
    } else {
        alert('Введите ваше имя');
    }
}

buttonLogin.onclick = function () {
    const savedEmailLogin = localStorage.getItem(loginEmailInput.value);
    if (savedEmailLogin == null) {
        alert('Аккаунт не найден');
    } else {
        if (loginPasswordInput.value == JSON.parse(savedEmailLogin).password) {
            alert('Вы успешно вошли в аккаунт');
            loginEmailInput.value = '';
            loginPasswordInput.value = '';
            loginDiv.classList.remove('div_active');
            wraper.classList.remove('wraper_active');
            body.classList.remove('wraper_scroll-none');
            accountStatus = true;
            nameUserSpan.innerText = JSON.parse(savedEmailLogin).name;
        } else {
            alert('Пароль неверный')
        }
    }
}

buttonLogOut.onclick = function () {
    accountStatus = false;
    nameUserSpan.innerText = 'Войти';
    accountSettingsDiv.classList.remove('account-settings-div_active');
    wraper.classList.remove('wraper_active');
    body.classList.remove('wraper_scroll-none');

    basketList = [];

    categoriesCardStore = categoriesCardStoreBasic;
    categoriesCardRender('all');

    newModelsCardStore = newModelsCardStoreBasic;
    newModelsCardRender();
}



const searchList = document.querySelector('.search__list');
searchCards = []
searchInput.oninput = function () {
    searchCards.splice(0, searchCards.length);
    let searchValue = searchInput.value.trim();
    if (searchValue.length >= 3) {
        for (let i = 0; i < categoriesCardStore.length; i++) {
            const categoriesCard = categoriesCardStore[i];
            if (categoriesCard.name.toLowerCase().search(searchValue.toLowerCase()) != -1) {
                searchCards.unshift(categoriesCard);
            }
        }
        for (let i = 0; i < newModelsCardStore.length; i++) {
            const cardInfoNewModels = newModelsCardStore[i];
            if (cardInfoNewModels.name.toLowerCase().search(searchValue.toLowerCase()) != -1) {
                searchCards.unshift(cardInfoNewModels);
            }
        }
        if (searchCards.length > 0) {
            searchList.classList.add('search__list_active');
            searchCardRender()
        } else {
            searchList.classList.remove('search__list_active');
        }
    } else {
        searchCards.splice(0, searchCards.length);
        searchList.classList.remove('search__list_active');
    }
}

console.log(searchCards);

function searchCardRender() {
    searchList.innerHTML = '';
    for (let i = 0; i < searchCards.length; i++) {
        const searchCardDiv = document.createElement('div');
        const searchCardInfo = searchCards[i];
        console.log(searchCards[i]);

        searchCardDiv.innerHTML = `
        <div class="search-card">
            <div class="search-card__photo">
                <img src="./img/${searchCardInfo.imgPath}/${searchCardInfo.img}.png" alt="">
            </div>
            <div class="search-card__info">
                <h3>${searchCardInfo.name}</h3>
                <p>${searchCardInfo.description}</p>
            <div>
                <p><span>${searchCardInfo.price}</span> $</p>
                <hr>
                <div class="card__rating">
                    <i class="fa-solid fa-star"></i>
                    <span>${searchCardInfo.rating}</span>
                </div>
                </div>
                <button class="${searchCardInfo.stateButton}">${searchCardInfo.textButton}</button>
            </div>
        </div>
    `
        searchList.appendChild(searchCardDiv)
    }
    buttonsAddTobasketClick();
}



let buttonThemeIcon;
function getTheme() {
    console.log(buttonThemeToggle)
    if (darkThemeMq.matches) {
        body.classList.add('dark-team');
        body.classList.remove('light-team');
    } else {
        body.classList.add('light-team');
        body.classList.remove('dark-team');
    }
}

function checkClassAvailability() {
    console.log(buttonThemeToggle)
    if (body.classList.contains('light-team')) {
        buttonThemeIcon = 'fa-solid fa-sun';
    } else if (body.classList.contains('dark-team')) {
        buttonThemeIcon = 'fa-solid fa-moon';
    }

    buttonThemeToggle.innerHTML = `
          <i class="${buttonThemeIcon}"></i>
`
}

getTheme();
checkClassAvailability();

buttonThemeToggle.onclick = function () {
    console.log(buttonThemeToggle)
    body.classList.toggle('dark-team');
    body.classList.toggle('light-team');
    navLinks.classList.remove('navLinks_active');
    hamburger.classList.remove('hamburger_active');
    navButtons.classList.remove('navButtons_active');
    navLogo.classList.remove('navLogo_active');
    body.classList.remove('scroll-none');

    checkClassAvailability();
}




hamburger.onclick = function () {
    navLinks.classList.toggle('navLinks_active');
    hamburger.classList.toggle('hamburger_active');
    navButtons.classList.toggle('navButtons_active');
    navLogo.classList.toggle('navLogo_active');
    body.classList.toggle('scroll-none');
}

navLogo.onclick = function () {
    navLinks.classList.remove('navLinks_active');
    hamburger.classList.remove('hamburger_active');
    navButtons.classList.remove('navButtons_active');
    navLogo.classList.remove('navLogo_active');
    body.classList.remove('scroll-none');
}

for (let i = 0; i < 4; i++) {
    navLinksAll[i].onclick = function () {
        navLinks.classList.remove('navLinks_active');
        hamburger.classList.remove('hamburger_active');
        navButtons.classList.remove('navButtons_active');
        navLogo.classList.remove('navLogo_active');
        body.classList.remove('scroll-none');
    }
}

for (let i = 0; i < 4; i++) {
    if (i != 0) {
        navButtonsAll[i].onclick = function () {
            navLinks.classList.remove('navLinks_active');
            hamburger.classList.remove('hamburger_active');
            navButtons.classList.remove('navButtons_active');
            navLogo.classList.remove('navLogo_active');
            body.classList.remove('scroll-none');
        }
    }
}

for (let i = 0; i < 4; i++) {
    categoriesButtonsAll[i].onclick = function () {
        document.querySelector('.categories__buttons_active').classList.remove('categories__buttons_active');
        categoriesButtonsAll[i].classList.add('categories__buttons_active');
        if (i == 3) {
            categoriesCardRender('man')
        }
        if (i == 2) {
            categoriesCardRender('woman')
        }
        if (i == 1) {
            categoriesCardRender('boots')
        }
        if (i == 0) {       /**Сравниваем значение переменной i с числом 0, и если оно равно 0, показываем все карточки.**/
            categoriesCardRender('all')
        }
    }
}



let categoriesCardStore = [                    /**Создаем базу данных, куда попадают все данные карточек с кроссовками.**/
    {
        img: '1',
        name: 'Luka 1',
        price: '240',
        description: 'Баскетбольные кроссовки',
        rating: '4.9',
        type: 'woman',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '2',
        name: 'Phantom GX Pro',
        price: '180',
        description: 'Футбольные бутсы для игры на твердом грунте',
        rating: '4.2',
        type: 'boots',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '3',
        name: 'Nike Air Max Plus',
        price: '240',
        description: 'Мужские универсальные кросовки',
        rating: '4.9',
        type: 'man',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '4',
        name: 'LeBron XXI ‘Freshwater’',
        price: '210',
        description: 'Баскетбольные кроссовки',
        rating: '4.9',
        type: 'woman',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '5',
        name: 'Phantom GX Pro',
        price: '160',
        description: 'Низкие бутсы для искусственного покрытия',
        rating: '4.0',
        type: 'boots',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '6',
        name: 'Phantom GX Academy',
        price: '79',
        description: 'Низкие бутсы для мягкого грунта',
        rating: '4.9',
        type: 'boots',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '7',
        name: 'Luka 2 ‘Trick Shot’',
        price: '230',
        description: 'Баскетбольные кроссовки',
        rating: '4.9',
        type: 'man',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '8',
        name: 'Mercurial Superfly',
        price: '210',
        description: 'Футбольные бутсы для игры на твердом грунте',
        rating: '4.9',
        type: 'boots',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '9',
        name: 'Zion 2',
        price: '410',
        description: 'Баскетбольные кроссовки',
        rating: '4.9',
        type: 'man',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '10',
        name: 'Pegasus Trail 4',
        price: '290',
        description: 'Водонепроницаемые  женские кроссовки для бега',
        rating: '4.9',
        type: 'woman',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '11',
        name: 'Alphafly 3 Proto',
        price: '210',
        description: 'Женская обувь для шоссейных гонок',
        rating: '4.9',
        type: 'woman',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        img: '12',
        name: 'Nike Air Max 270',
        price: '210',
        description: 'Мужские универсальные кросовки',
        rating: '4.9',
        type: 'man',
        imgPath: 'categories',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
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
                <button class="${cardInfo.stateButton}">${cardInfo.textButton}</button>
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
                <button class="${cardInfo.stateButton}">${cardInfo.textButton}</button>
            </div>
            `
                categoriesListDiv.appendChild(categoriesCardDiv)   // Сгенирированную карточку добавить в див категориес лист
            }
        }
    }
    function categoriesHeartClick() {
        let categoriesHearts = document.querySelectorAll('.categories-heart');
        categoriesHearts.forEach(categoriesHeart => {
            categoriesHeart.addEventListener('click', function () {
                categoriesHeart.classList.toggle('heart-active');
            });
        });
        buttonsAddTobasketClick();
    }
    categoriesHeartClick();
    buttonsAddTobasketClick();
}

categoriesCardRender('all'); /**При обновлении страницы показывает все карточки**/


let newModelsCardStore = [
    {
        bgColorNewModels: '#B7A997',
        imgPath: 'new-models',
        name: 'Jumpman',
        img: '1',
        description: 'Мужские беговые кросовки',
        rating: '4.9',
        price: '170',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        bgColorNewModels: '#D6B895',
        imgPath: 'new-models',
        name: 'AIR-MAX',
        img: '2',
        description: 'Женские городские кросовки',
        rating: '4.9',
        price: '260',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        bgColorNewModels: '#7DB3B9',
        imgPath: 'new-models',
        name: 'CityMax',
        img: '3',
        description: 'Мужские городские кросовки',
        rating: '3.6',
        price: '160',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    },

    {
        bgColorNewModels: '#DD7916',
        imgPath: 'new-models',
        name: 'K-Swiss',
        img: '4',
        description: 'Мужские городские кросовки',
        rating: '4.4',
        price: '230',
        stateButton: 'buttons-add-to-basket',
        textButton: 'В корзину',
        stateHeart: 'heart'
    }
]

function newModelsCardRender() {
    const newModelsListDiv = document.querySelector('.new-models__list');
    newModelsListDiv.innerHTML = ``
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
            <img src="./img/new-models/${cardInfo.img}.png" alt="">
            <div class="new-models-card__info">
                <h3>${cardInfo.name}</h3>
                <p>${cardInfo.description}</p>
                <div class="new-models-card__rating">
                    <span>${cardInfo.rating}</span>
                    <hr>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <button class="buttons-add-to-basket" style="color: ${cardInfo.bgColorNewModels}">В корзину</button>
        </div>
        `
        buttonsAddTobasketClick();

        newModelsListDiv.appendChild(cardDiv)
    }
}

newModelsCardRender()





heartsList = [];

function heartsToggleCard(heart, cardName, item) {
    if (heart.className.baseVal === 'heart') {
        heartsList = heartsList.filter(favorites => favorites.name !== cardName);
    } else {
        heartsList.push(item);
    }
    heartsListRender();
}


function heartsClick() {
    const hearts = document.querySelectorAll('.heart');
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].onclick = function () {

            if (accountStatus === true) {
                hearts[i].classList.toggle('heart-active');

                const favoritesCardName = hearts[i].parentNode.parentNode.querySelector('h3').innerText;

                for (let j = 0; j < categoriesCardStore.length; j++) {
                    if (categoriesCardStore[j].name === favoritesCardName) {
                        categoriesCardStore[j].stateHeart = hearts[i].className;
                        heartsToggleCard(hearts[i], favoritesCardName, categoriesCardStore[j]);
                        return;
                    }
                }

                for (let t = 0; t < newModelsCardStore.length; t++) {
                    if (newModelsCardStore[t].name === favoritesCardName) {
                        newModelsCardStore[t].stateHeart = hearts[i].className;
                        heartsToggleCard(hearts[i], favoritesCardName, newModelsCardStore[t]);
                        return;
                    }
                }
            } else {
                signupDiv.classList.toggle('div_active');
                searchDiv.classList.remove('div_active');
                loginDiv.classList.remove('div_active');
                basketDiv.classList.remove('basket-div_active');

                wraper.classList.add('wraper_active');
                body.classList.add('wraper_scroll-none');
            }
        }
    }
}
heartsClick();





function heartsListRender() {
    favoritesListDiv.innerHTML = ``
    for (let i = 0; i < heartsList.length; i++) {
        const favoritesListCard = document.createElement('div');
        favoritesListCard.className = 'favorites-list-card';
        favoritesListCard.innerHTML = `
            <div class="favorites-card__photo">
                    <img src="./img/${heartsList[i].imgPath}/${heartsList[i].img}.png" alt="">
                </div>
                <div class="favorites-list-card__info">
                    <h3>${heartsList[i].name}</h3>
                    <p>${heartsList[i].description}</p>
                    <div>
                        <p><span>${heartsList[i].price}</span> $</p>
                        <hr>
                        <div class="card-list__rating">
                            <i class="fa-solid fa-star"></i>
                            <span>${heartsList[i].rating}</span>
                        </div>
                    </div>
                    <button class="${heartsList[i].stateButton}">${heartsList[i].textButton}</button>
                </div>
        `
        favoritesListDiv.appendChild(favoritesListCard);
    }
}




function basketToggleCard(button, cardName, item) {
    if (button.className === 'buttons-add-to-basket') {
        basketList = basketList.filter(basket => basket.name !== cardName);
    } else {
        basketList.push(item);
    }
    basketListRender();
}

function buttonsAddTobasketClick() {
    const buttonsAddTobasket = document.querySelectorAll('.buttons-add-to-basket');
    for (let i = 0; i < buttonsAddTobasket.length; i++) {
        buttonsAddTobasket[i].onclick = function () {
            if (accountStatus === true) {
                buttonsAddTobasket[i].classList.toggle('buttons_active');

                if (buttonsAddTobasket[i].className === 'buttons-add-to-basket') {
                    buttonsAddTobasket[i].innerText = 'В корзину';
                } else {
                    buttonsAddTobasket[i].innerText = 'Уже в корзине';
                }

                const cardName = buttonsAddTobasket[i].parentNode.parentNode.querySelector('h3').innerText;

                // Обновляем `categoriesCardStore`
                for (let j = 0; j < categoriesCardStore.length; j++) {
                    if (categoriesCardStore[j].name === cardName) {
                        categoriesCardStore[j].stateButton = buttonsAddTobasket[i].className;
                        categoriesCardStore[j].textButton = buttonsAddTobasket[i].innerText;

                        // Вызываем функцию с правильным элементом
                        basketToggleCard(buttonsAddTobasket[i], cardName, categoriesCardStore[j]);
                        return;
                    }
                }

                // Обновляем `newModelsCardStore`
                for (let t = 0; t < newModelsCardStore.length; t++) {
                    if (newModelsCardStore[t].name === cardName) {
                        newModelsCardStore[t].stateButton = buttonsAddTobasket[i].className;
                        newModelsCardStore[t].textButton = buttonsAddTobasket[i].innerText;

                        // Вызываем функцию с правильным элементом
                        basketToggleCard(buttonsAddTobasket[i], cardName, newModelsCardStore[t]);
                        return;
                    }
                }
            } else {
                signupDiv.classList.toggle('div_active');
                searchDiv.classList.remove('div_active');
                loginDiv.classList.remove('div_active');
                basketDiv.classList.remove('basket-div_active');

                wraper.classList.add('wraper_active');
                body.classList.add('wraper_scroll-none');
            }


        };
    }
}




function basketListRender() {
    basketListDiv.innerHTML = ``
    for (let i = 0; i < basketList.length; i++) {
        const basketListCard = document.createElement('div');
        basketListCard.className = 'basket-list-card';
        basketListCard.innerHTML = `
                <div class="basket-card__photo">
                    <img src="./img/${basketList[i].imgPath}/${basketList[i].img}.png" alt="">
                </div>
                <div class="basket-list-card__info">
                    <h3>${basketList[i].name}</h3>
                    <p>${basketList[i].description}</p>
                    <div>
                        <p><span>${basketList[i].price}</span> $</p>
                        <hr>
                        <div class="card-list__rating">
                            <i class="fa-solid fa-star"></i>
                            <span>${basketList[i].rating}</span>
                        </div>
                    </div>
                    <button class="${basketList[i].stateButton}">${basketList[i].textButton}</button>
                </div>
        `
        basketListDiv.appendChild(basketListCard);
    }
}