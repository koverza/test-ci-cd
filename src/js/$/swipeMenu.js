export function swipe() {
    console.log("swipe works");

    const header__nav = document.querySelector('.header__nav') // тут подключить то что нужно свайпнуть

    document.body.addEventListener("touchstart", swipeStart, false);
    document.body.addEventListener("touchmove", swipeMove, false);
    let x1 = null;
    let y1 = null;

    function swipeStart(event) {
        const firstTouch = event.touches[0];
        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;
    }

    function swipeMove(event) {
        if (!x1 || !y1) {
            return false;
        }

        let x2 = event.touches[0].clientX;
        let y2 = event.touches[0].clientY;

        let xDiff = x2 - x1;
        let yDiff = y2 - y1;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                // раскрыть меню вправо
                header__nav.classList.add('active')
                if(header__nav.classList.contains("active")) {
                    // document.body.style.backgroundColor = '#D7EAF2'; // если надо, то поставить цвет фона
                    document.addEventListener('click', (e) => {
                        if(!header__nav.contains(e.target)) {
                            header__nav.classList.remove('active')
                            // document.body.style.backgroundColor = 'transparent'; // если надо, то убрать цвет фона
                        }
                    })
                }
            } else {
                // свернуть меню влево
                header__nav.classList.remove('active')
                // document.body.style.backgroundColor = 'transparent'; // если надо, то убрать цвет фона
            }
        }
        x1 = null;
        y1 = null;
    }
}
