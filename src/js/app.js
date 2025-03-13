/* eslint-disable no-undef */
import { swipe, sendTelegram, sendEmail, i18n } from './$/index.js';
// import { select } from './other/index.js';
// darkTheme,
// dragDrop,
// useDynamicAdapt
// anchors,
// animation,
// burger,
// form,
// ibg
// inputMusk,
// lazyLoading,
// more,
// pagination,
// paginationMin,
// parallax,
// popup,
// quantity,
// dataPicker,
// range,
// ratings,
// calculator,
// select,
// speedLine,
// spoiler,
// switchButton,
// tabs,
// toTop,
// tippyPopper,
// typed,
// video
// webp,
// form,
// zoom,

// import CryptoJS from 'crypto-js';

// isWebp()

window.addEventListener('load', () => {
    const pagination__selects = document.querySelectorAll('.pagination__select');
    const pagination__buttons = document.querySelectorAll('.pagination__button');
    const pagination__content = document.querySelector('.pagination__content');
    const pagination__number = document.querySelector('.pagination__number');
    const pagination__pages = document.querySelector('.pagination__pages');

    let arrayFromServer = [];
    let defaultSelectNumber = Number(pagination__number.textContent) + 1; // тут можно поставить 0
    let defaultArray = [];
    let numbersArray = [];

    let defaultPages = [];

    getPosts(numbersArray);

    // Здесь мы загружаем либо статические данные либо подключаемся к серверу
    async function getPosts(numbersArray) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        arrayFromServer = await response.json();
        const resultArray = numbersArray && numbersArray.length ? numbersArray : arrayFromServer;
        const formula = Math.ceil(arrayFromServer.length / defaultSelectNumber);

        arrayFromServer.forEach(info => {
            if (info.id < defaultSelectNumber) {
                defaultArray.push(info);
            }
        });

        // for (let index = 0; index < formula; index++) {
        //     const element = arrayFromServer[index];
        //     if (element) {
        //         defaultPages.push(element);
        //     }
        // }

        // Отображаем количество страниц после расчета формулы
        paginationPages(defaultPages);

        pagination__content.innerHTML = '';

        // Тут проверяем есть ли селект с цифрами
        if (defaultSelectNumber != 0) {
            paginationContent(defaultArray);
        } else {
            defaultSelectNumber = 0;
            paginationContent(resultArray);
        }
    }

    // Отображаем количество страниц
    function paginationPages(array) {
        array.forEach(page => {
            let paginationPage = `
                <li>
                    <a href="#" class="pagination__page">${page.id}</a>
                </li>`;

            pagination__pages.innerHTML += paginationPage;
        });
    }

    // Отображаем контент пагинации
    function paginationContent(array) {
        array.forEach(elementInformation => {
            let paginationContentInfo = `
            <div class="pagination__info">
                <span class="pagination__id">ID: ${elementInformation.id}</span>
                <hr />
                <span class="pagination__name">${elementInformation.title}</span>
                <p class="pagination__text">${elementInformation.body}</p>
            </div>`;

            pagination__content.innerHTML += paginationContentInfo;
        });
    }

    // Для корректного отображения в IE
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }

    // Делаем селект в пагинации
    pagination__selects.forEach(pagination__select => {
        const paginationSelectTop = pagination__select.querySelector('.pagination__top');
        const paginationSelectText = pagination__select.querySelector('.pagination__number');
        const paginationSelectArrow = pagination__select.querySelector('.pagination__arrow');
        const paginationSelectMenu = pagination__select.querySelector('.pagination__menu');
        const paginationSelectItems = pagination__select.querySelectorAll('.pagination__button');

        paginationSelectTop.addEventListener('click', () => {
            paginationSelectMenu.classList.toggle('active');
            paginationSelectArrow.classList.toggle('active');
        });

        if (paginationSelectMenu.offsetHeight < 150) {
            paginationSelectMenu.style.overflow = 'auto';
        }

        paginationSelectItems.forEach(paginationSelectItem => {
            paginationSelectItem.addEventListener('click', () => {
                paginationSelectText.innerHTML = paginationSelectItem.getAttribute('data-item');
                paginationSelectMenu.classList.remove('active');
                paginationSelectArrow.classList.toggle('active');
            });
        });

        document.addEventListener('click', e => {
            const paginationSelect__click = e.composedPath().includes(pagination__select);
            if (!paginationSelect__click) {
                paginationSelectMenu.classList.remove('active');
                paginationSelectArrow.classList.remove('active');
            }
        });
    });

    // Что происходит при нажатии на кнопку селекта
    pagination__buttons.forEach(pagination__button => {
        pagination__button.addEventListener('click', () => {
            if (pagination__button.textContent.trim() !== '' && arrayFromServer.length > 0) {
                defaultSelectNumber = 0; // Очищаем кнопку из селекте (к примеру было 10, а стало 0, чтоб при нажатии на другую кнопку высветило с 1 элемента)

                getNumbers(Array(Number(pagination__button.textContent))); // Создаем массив из чисел
                getPosts(numbersArray);
            }
        });
    });

    // Обрабатываем массив из чисел
    function getNumbers(numbers) {
        numbersArray.length = 0;
        for (let index = 0; index < numbers.length; index++) {
            const element = arrayFromServer[index];
            if (element) {
                numbersArray.push(element);
            }
        }
        // console.log('numbersArray:', numbersArray);
    }

    // const fondyBtn = document.querySelector('.fondyBtn');

    // var button = $ipsp.get('button');
    // button.setMerchantId(1396424);
    // button.setAmount('200', 'USD');
    // button.setHost('api.fondy.eu');

    // fondyBtn.addEventListener('click', function() {
    //     location.href = button.getUrl();
    //   });
});
