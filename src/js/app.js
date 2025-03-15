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

const data = [
    {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
    },
    {
        userId: 1,
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
    },
    {
        userId: 1,
        id: 4,
        title: 'eum et est occaecati',
        body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
    },
    {
        userId: 1,
        id: 5,
        title: 'nesciunt quas odio',
        body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
    },
    {
        userId: 1,
        id: 6,
        title: 'dolorem eum magni eos aperiam quia',
        body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
    },
    {
        userId: 1,
        id: 7,
        title: 'magnam facilis autem',
        body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas'
    },
    {
        userId: 1,
        id: 8,
        title: 'dolorem dolore est ipsam',
        body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
    },
    {
        userId: 1,
        id: 9,
        title: 'nesciunt iure omnis dolorem tempora et accusantium',
        body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'
    },
    {
        userId: 1,
        id: 10,
        title: 'optio molestias id quia eum',
        body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error'
    },
    {
        userId: 2,
        id: 11,
        title: 'et ea vero quia laudantium autem',
        body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi'
    },
    {
        userId: 2,
        id: 12,
        title: 'in quibusdam tempore odit est dolorem',
        body: 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio'
    },
    {
        userId: 2,
        id: 13,
        title: 'dolorum ut in voluptas mollitia et saepe quo animi',
        body: 'aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam'
    },
    {
        userId: 2,
        id: 14,
        title: 'voluptatem eligendi optio',
        body: 'fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum'
    },
    {
        userId: 2,
        id: 15,
        title: 'eveniet quod temporibus',
        body: 'reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae'
    },
    {
        userId: 2,
        id: 16,
        title: 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio',
        body: 'suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta'
    },
    {
        userId: 2,
        id: 17,
        title: 'fugit voluptas sed molestias voluptatem provident',
        body: 'eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo'
    },
    {
        userId: 2,
        id: 18,
        title: 'voluptate et itaque vero tempora molestiae',
        body: 'eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam'
    },
    {
        userId: 2,
        id: 19,
        title: 'adipisci placeat illum aut reiciendis qui',
        body: 'illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas'
    },
    {
        userId: 2,
        id: 20,
        title: 'doloribus ad provident suscipit at',
        body: 'qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo'
    },
    {
        userId: 3,
        id: 21,
        title: 'asperiores ea ipsam voluptatibus modi minima quia sint',
        body: 'repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt'
    },
    {
        userId: 3,
        id: 22,
        title: 'dolor sint quo a velit explicabo quia nam',
        body: 'eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse'
    },
    {
        userId: 3,
        id: 23,
        title: 'maxime id vitae nihil numquam',
        body: 'veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis'
    },
    {
        userId: 3,
        id: 24,
        title: 'autem hic labore sunt dolores incidunt',
        body: 'enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt'
    },
    {
        userId: 3,
        id: 25,
        title: 'rem alias distinctio quo quis',
        body: 'ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio'
    },
    {
        userId: 3,
        id: 26,
        title: 'est et quae odit qui non',
        body: 'similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero'
    }
];

const paginationObj = {
    url: 'https://jsonplaceholder.typicode.com/posts', // ''
    mockArray: data,
    select: {
        showSelect: true,
        class: '.pagination__select',
        options: '.pagination__button' // <li data-item="10" class="pagination__button">10</li>
    },
    arrows: {
        showArrows: true,
        class: '.pagination__arrows',
        prev: '.pagination__prev',
        next: '.pagination__next'
    },
    content: {
        class: '.pagination__content',
        defaultItems: 11
    },
    pages: {
        showPages: false,
        class: '.pagination__pages'
    },
    loading: ''
};

function pagination(paginationObj) {
    const pagination__select = document.querySelector(paginationObj.select.class);
    const pagination__buttons = document.querySelectorAll(paginationObj.select.options);
    const pagination__content = document.querySelector(paginationObj.content.class);
    const pagination__pages = document.querySelector(paginationObj.pages.showPages);
    const pagination__arrows = document.querySelector(paginationObj.arrows.class);
    const pagePrev = document.querySelector(paginationObj.arrows.prev);
    const pageNext = document.querySelector(paginationObj.arrows.next);

    let currentOffset = 0;

    let arrayFromServer = [];
    let defaultItemsArray = [];
    let defaultSelectNumber = paginationObj.content.defaultItems;
    let contentArray = [];
    let defaultPages = [];

    // Здесь мы загружаем либо статические данные либо подключаемся к серверу
    async function getPosts(array) {
        const formula = Math.ceil(arrayFromServer.length / defaultSelectNumber);

        if (paginationObj.url) {
            const response = await fetch(paginationObj.url);
            arrayFromServer = await response.json();
        } else {
            arrayFromServer = paginationObj.mockArray;
        }

        contentArray = array && array.length ? array : arrayFromServer;

        pagination__content.innerHTML = '';

        if (array && array.length) {
            defaultItemsArray = array;
        } else {
            defaultItemsArray = arrayFromServer.filter(
                item => item.id < paginationObj.content.defaultItems
            );
        }

        if (defaultSelectNumber !== 0) {
            paginationContent(defaultItemsArray);
        } else {
            paginationContent(contentArray);
        }

        // for (let index = 0; index < formula; index++) {
        //     const element = arrayFromServer[index];
        //     if (element) {
        //         defaultPages.push(element);
        //     }
        // }

        // paginationPages(defaultPages);
    }

    // pagination__pages.addEventListener('click', function (e) {
    //     if (e.target && e.target.matches('a.pagination__page')) {
    //         let number = Number(e.target.textContent);
    //         // console.log(pageNumber);

    //         const result = arrayFromServer.slice(paginationObj.content.defaultItems - 1, paginationObj.content.defaultItems + 9);
    //         paginationObj.content.defaultItems += 10;

    //         defaultItemsArray.length = 0;
    //         defaultItemsArray.push(...result);

    //         getPosts(defaultItemsArray);

    //         if (number == 1) {
    //             paginationObj.content.defaultItems = 11;
    //         }
    //     }
    // });

    // кнопкa pagePrev
    pagePrev.addEventListener('click', () => {
        if (currentOffset + paginationObj.content.defaultItems < arrayFromServer.length) {
            currentOffset += paginationObj.content.defaultItems;
            updateBlock();
        }
    });

    // кнопкa pagePrev
    pageNext.addEventListener('click', () => {
        if (currentOffset > 0) {
            currentOffset = Math.max(0, currentOffset - paginationObj.content.defaultItems); // ======= Изменено: сброс в 0, если вычитание приводит к отрицательному значению =======
            updateBlock();
        }
    });

    // кнопки селекта
    pagination__buttons.forEach(pagination__button => {
        pagination__button.addEventListener('click', () => {
            if (+pagination__button.textContent != '' && arrayFromServer.length > 0) {
                const newLimit = +pagination__button.textContent;
                paginationObj.content.defaultItems = newLimit;
                const selectArray = arrayFromServer.slice(currentOffset, currentOffset + newLimit);
                getPosts(selectArray);
            }
        });
    });

    function updateBlock() {
        const start = currentOffset;
        const end = start + paginationObj.content.defaultItems;
        const result = arrayFromServer.slice(start, end);
        getPosts(result);
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

    // Делаем селект в пагинации
    function paginationSelect(pagination__select) {
        const paginationSelectTop = document.querySelector('.pagination__top');
        const paginationSelectText = document.querySelector('.pagination__number');
        const paginationSelectArrow = document.querySelector('.pagination__selectArrow');
        const paginationSelectMenu = document.querySelector('.pagination__menu');
        const paginationSelectItems = document.querySelectorAll('.pagination__button');

        paginationSelectTop.addEventListener('click', () => {
            paginationSelectMenu.classList.toggle('active');
            paginationSelectArrow.classList.toggle('active');
        });

        if (paginationSelectMenu.offsetHeight < 150) {
            paginationSelectMenu.style.overflow = 'auto';
        }

        paginationSelectItems.forEach(paginationSelectItem => {
            paginationSelectItem.addEventListener('click', () => {
                paginationSelectText.innerHTML = paginationSelectItem.textContent;
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
    }

    pagination__select.classList.toggle('active', !paginationObj.select.showSelect);
    pagination__arrows.classList.toggle('active', !paginationObj.arrows.showArrows);

    document.querySelector('.pagination__number').textContent =
        paginationObj.content.defaultItems - 1;

    paginationSelect(pagination__select);
    getPosts();
}

pagination(paginationObj);

window.addEventListener('load', () => {
    // const fondyBtn = document.querySelector('.fondyBtn');
    // var button = $ipsp.get('button');
    // button.setMerchantId(1396424);
    // button.setAmount('200', 'USD');
    // button.setHost('api.fondy.eu');
    // fondyBtn.addEventListener('click', function() {
    //     location.href = button.getUrl();
    //   });
});
