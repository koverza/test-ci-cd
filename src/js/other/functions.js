// Перевірка мобільного браузера
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

// Додавання класу touch для HTML, якщо браузер мобільний
export function addTouchClass() {
    if (isMobile.any()) document.documentElement.classList.add('touch'); // _touch
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

// Допоміжні модулі блокування прокручування та стрибка
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

// "Ripple effect"
export function rippleEffect() {
    document.addEventListener('click', function (e) {
        const targetItem = e.target;
        if (targetItem.closest('[data-ripple]')) {
            const button = targetItem.closest('[data-ripple]');
            const ripple = document.createElement('span');
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;

            ripple.style.width = ripple.style.height = `${diameter}px`;
            ripple.style.left = `${e.pageX - (button.getBoundingClientRect().left + scrollX) - radius}px`;
            ripple.style.top = `${e.pageY - (button.getBoundingClientRect().top + scrollY) - radius}px`;
            ripple.classList.add('ripple');

            button.dataset.ripple === 'once' && button.querySelector('.ripple')
                ? button.querySelector('.ripple').remove()
                : null;

            button.appendChild(ripple);

            const timeOut = getAnimationDuration(ripple);

            setTimeout(() => {
                ripple ? ripple.remove() : null;
            }, timeOut);

            function getAnimationDuration() {
                const aDuration = window.getComputedStyle(ripple).animationDuration;
                return aDuration.includes('ms')
                    ? aDuration.replace('ms', '')
                    : aDuration.replace('s', '') * 1000;
            }
        }
    });
}

// "Сustom сursor"
export function customCursor(isShadowTrue) {
    const wrapper = document.querySelector('[data-custom-cursor]')
        ? document.querySelector('[data-custom-cursor]')
        : document.documentElement;
    if (wrapper && !isMobile.any()) {
        const cursor = document.createElement('div');
        cursor.classList.add('cursor');
        cursor.style.opacity = 0;
        cursor.insertAdjacentHTML('beforeend', `<span class="cursor__pointer"></span>`);
        isShadowTrue
            ? cursor.insertAdjacentHTML('beforeend', `<span class="cursor__shadow"></span>`)
            : null;
        wrapper.append(cursor);

        const cursorPointer = document.querySelector('.cursor__pointer');
        const cursorPointerStyle = {
            width: cursorPointer.offsetWidth,
            height: cursorPointer.offsetHeight
        };
        let cursorShadow, cursorShadowStyle;
        if (isShadowTrue) {
            cursorShadow = document.querySelector('.cursor__shadow');
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

// Обробка медіа запитів з атрибутів
export function dataMediaQueries(array, dataSetValue) {
    const media = Array.from(array).filter(function (item, index, self) {
        if (item.dataset[dataSetValue]) {
            return item.dataset[dataSetValue].split(',')[0];
        }
    });
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
        let mdQueries = breakpointsArray.map(function (item) {
            return (
                '(' + item.type + '-width: ' + item.value + 'px),' + item.value + ',' + item.type
            );
        });
        mdQueries = uniqArray(mdQueries);
        const mdQueriesArray = [];

        if (mdQueries.length) {
            mdQueries.forEach(breakpoint => {
                const paramsArray = breakpoint.split(',');
                const mediaBreakpoint = paramsArray[1];
                const mediaType = paramsArray[2];
                const matchMedia = window.matchMedia(paramsArray[0]);
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
