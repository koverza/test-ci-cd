/* Перевірка мобільного браузера */
export let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

/* Додавання класу touch для HTML, якщо браузер мобільний */
export function addTouchClass() {
    // Додавання класу _touch для HTML, якщо браузер мобільний
    if (isMobile.any()) document.documentElement.classList.add('touch');
}

// Отримання хешу на адресі сайту
export function getHash() {
    if (location.hash) {
        return location.hash.replace('#', '');
    }
}

// Вказівка хеша на адресу сайту
export function setHash(hash) {
    hash = hash ? `#${hash}` : window.location.href.split('#')[0];
    history.pushState('', '', hash);
}

// Облік плаваючої панелі на мобільних пристроях при 100vh
export function fullVHfix() {
    const fullScreens = document.querySelectorAll('[data-fullscreen]');
    if (fullScreens.length && isMobile.any()) {
        window.addEventListener('resize', fixHeight);
        function fixHeight() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        fixHeight();
    }
}
//
// Допоміжні модулі плавного розкриття та закриття об'єкта ======================================================================================================================================================================
export let _slideUp = (target, duration = 500, showmore = 0) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = `${target.offsetHeight}px`;
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = showmore ? `${showmore}px` : `0px`;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.hidden = !showmore ? true : false;
            !showmore ? target.style.removeProperty('height') : null;
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            !showmore ? target.style.removeProperty('overflow') : null;
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
            // Створюємо подію
            document.dispatchEvent(
                new CustomEvent('slideUpDone', {
                    detail: {
                        target: target
                    }
                })
            );
        }, duration);
    }
};
export let _slideDown = (target, duration = 500, showmore = 0) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        target.hidden = target.hidden ? false : null;
        showmore ? target.style.removeProperty('height') : null;
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = showmore ? `${showmore}px` : `0px`;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
            // Створюємо подію
            document.dispatchEvent(
                new CustomEvent('slideDownDone', {
                    detail: {
                        target: target
                    }
                })
            );
        }, duration);
    }
};
export let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
        return _slideDown(target, duration);
    } else {
        return _slideUp(target, duration);
    }
};

// Допоміжні модулі блокування прокручування та стрибка ====================================================================================================================================================================================================================================================================================
export let bodyLockStatus = true;
export let bodyLockToggle = (delay = 500) => {
    if (document.documentElement.classList.contains('lock')) {
        bodyUnlock(delay);
    } else {
        bodyLock(delay);
    }
};
export let bodyUnlock = (delay = 500) => {
    let body = document.querySelector('body');
    if (bodyLockStatus) {
        let lock_padding = document.querySelectorAll('[data-lp]');
        setTimeout(() => {
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px';
            document.documentElement.classList.remove('lock');
        }, delay);
        bodyLockStatus = false;
        setTimeout(function () {
            bodyLockStatus = true;
        }, delay);
    }
};
export let bodyLock = (delay = 500) => {
    let body = document.querySelector('body');
    if (bodyLockStatus) {
        let lock_padding = document.querySelectorAll('[data-lp]');
        for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight =
                window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        }
        body.style.paddingRight =
            window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        document.documentElement.classList.add('lock');

        bodyLockStatus = false;
        setTimeout(function () {
            bodyLockStatus = true;
        }, delay);
    }
};

// Модуль "Ripple effect" =======================================================================================================================================================================================================================
export function rippleEffect() {
    // Подія кліку на кнопці
    document.addEventListener('click', function (e) {
        const targetItem = e.target;
        if (targetItem.closest('[data-ripple]')) {
            // Константи
            const button = targetItem.closest('[data-ripple]');
            const ripple = document.createElement('span');
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;

            // Формування елементу
            ripple.style.width = ripple.style.height = `${diameter}px`;
            ripple.style.left = `${e.pageX - (button.getBoundingClientRect().left + scrollX) - radius}px`;
            ripple.style.top = `${e.pageY - (button.getBoundingClientRect().top + scrollY) - radius}px`;
            ripple.classList.add('ripple');

            // Видалення існуючого елементу (опціонально)
            button.dataset.ripple === 'once' && button.querySelector('.ripple')
                ? button.querySelector('.ripple').remove()
                : null;

            // Додавання елементу
            button.appendChild(ripple);

            // Отримання часу дії анімації
            const timeOut = getAnimationDuration(ripple);

            // Видалення елементу
            setTimeout(() => {
                ripple ? ripple.remove() : null;
            }, timeOut);

            // Функтія отримання часу дії анімації
            function getAnimationDuration() {
                const aDuration = window.getComputedStyle(ripple).animationDuration;
                return aDuration.includes('ms')
                    ? aDuration.replace('ms', '')
                    : aDuration.replace('s', '') * 1000;
            }
        }
    });
}

// Модуль "Сustom сursor" =======================================================================================================================================================================================================================
export function customCursor(isShadowTrue) {
    const wrapper = document.querySelector('[data-custom-cursor]')
        ? document.querySelector('[data-custom-cursor]')
        : document.documentElement;
    if (wrapper && !isMobile.any()) {
        // Створюємо та додаємо об'єкт курсору
        const cursor = document.createElement('div');
        cursor.classList.add('fls-cursor');
        cursor.style.opacity = 0;
        cursor.insertAdjacentHTML('beforeend', `<span class="fls-cursor__pointer"></span>`);
        isShadowTrue
            ? cursor.insertAdjacentHTML('beforeend', `<span class="fls-cursor__shadow"></span>`)
            : null;
        wrapper.append(cursor);

        const cursorPointer = document.querySelector('.fls-cursor__pointer');
        const cursorPointerStyle = {
            width: cursorPointer.offsetWidth,
            height: cursorPointer.offsetHeight
        };
        let cursorShadow, cursorShadowStyle;
        if (isShadowTrue) {
            cursorShadow = document.querySelector('.fls-cursor__shadow');
            cursorShadowStyle = {
                width: cursorShadow.offsetWidth,
                height: cursorShadow.offsetHeight
            };
        }
        function mouseActions(e) {
            if (e.type === 'mouseout') {
                cursor.style.opacity = 0;
            } else if (e.type === 'mousemove') {
                cursor.style.removeProperty('opacity');
                if (
                    e.target.closest('button') ||
                    e.target.closest('a') ||
                    e.target.closest('input') ||
                    (window.getComputedStyle(e.target).cursor !== 'none' &&
                        window.getComputedStyle(e.target).cursor !== 'default')
                ) {
                    cursor.classList.add('_hover');
                } else {
                    cursor.classList.remove('_hover');
                }
            } else if (e.type === 'mousedown') {
                cursor.classList.add('_active');
            } else if (e.type === 'mouseup') {
                cursor.classList.remove('_active');
            }
            cursorPointer
                ? (cursorPointer.style.transform = `translate3d(${e.clientX - cursorPointerStyle.width / 2}px, ${e.clientY - cursorPointerStyle.height / 2}px, 0)`)
                : null;
            cursorShadow
                ? (cursorShadow.style.transform = `translate3d(${e.clientX - cursorShadowStyle.width / 2}px, ${e.clientY - cursorShadowStyle.height / 2}px, 0)`)
                : null;
        }

        window.addEventListener('mouseup', mouseActions);
        window.addEventListener('mousedown', mouseActions);
        window.addEventListener('mousemove', mouseActions);
        window.addEventListener('mouseout', mouseActions);
    }
}

//================================================================================================================================================================================================================================================================================================================
export function FLS(message) {
    setTimeout(() => {
        if (window.FLS) {
            console.log(message);
        }
    }, 0);
}

// Отримати цифри з рядка
export function getDigFromString(item) {
    return parseInt(item.replace(/[^\d]/g, ''));
}

// Форматування цифр типу 100 000 000
export function getDigFormat(item) {
    return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

// Прибрати клас з усіх елементів масиву
export function removeClasses(array, className) {
    for (var i = 0; i < array.length; i++) {
        array[i].classList.remove(className);
    }
}

// Унікалізація масиву
export function uniqArray(array) {
    return array.filter(function (item, index, self) {
        return self.indexOf(item) === index;
    });
}

// Функція отримання індексу всередині батьківського елемента
export function indexInParent(parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
}

// Функція перевіряє чи об'єкт видимий
export function isHidden(el) {
    return el.offsetParent === null;
}

// Обробка медіа запитів з атрибутів
export function dataMediaQueries(array, dataSetValue) {
    // Отримання об'єктів з медіа-запитами
    const media = Array.from(array).filter(function (item, index, self) {
        if (item.dataset[dataSetValue]) {
            return item.dataset[dataSetValue].split(',')[0];
        }
    });
    // Ініціалізація об'єктів з медіа-запитами
    if (media.length) {
        const breakpointsArray = [];
        media.forEach(item => {
            const params = item.dataset[dataSetValue];
            const breakpoint = {};
            const paramsArray = params.split(',');
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max';
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });
        // Отримуємо унікальні брейкпоінти
        let mdQueries = breakpointsArray.map(function (item) {
            return (
                '(' + item.type + '-width: ' + item.value + 'px),' + item.value + ',' + item.type
            );
        });
        mdQueries = uniqArray(mdQueries);
        const mdQueriesArray = [];

        if (mdQueries.length) {
            // Працюємо з кожним брейкпоінтом
            mdQueries.forEach(breakpoint => {
                const paramsArray = breakpoint.split(',');
                const mediaBreakpoint = paramsArray[1];
                const mediaType = paramsArray[2];
                const matchMedia = window.matchMedia(paramsArray[0]);
                // Об'єкти з потрібними умовами
                const itemsArray = breakpointsArray.filter(function (item) {
                    if (item.value === mediaBreakpoint && item.type === mediaType) {
                        return true;
                    }
                });
                mdQueriesArray.push({
                    itemsArray,
                    matchMedia
                });
            });
            return mdQueriesArray;
        }
    }
}
