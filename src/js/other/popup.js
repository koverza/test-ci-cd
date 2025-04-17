export function popup() {
    console.log('popup works');

    const popup = document.querySelector('.popup');
    const popupTitle = popup.querySelector('.popup-top__title');
    const popupContent = popup.querySelector('.popup__block');
    const popupCloseBtn = popup.querySelector('.popup-top__cross');
    const openButtons = document.querySelectorAll('.popupOpen');

    const popupInfo = [
        { id: 1, title: 'popup title 1', content: 'popup content 1' },
        { id: 2, title: 'popup title 2', content: 'popup content 2' },
        { id: 3, title: 'popup title 3', content: 'popup content 3' }
    ];

    // Открытие по кнопке
    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = +button.dataset.number;
            const info = popupInfo.find(p => p.id === id);

            if (info) {
                popupTitle.textContent = info.title;
                popupContent.textContent = info.content;
                popup.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Закрытие
    popupCloseBtn.addEventListener('click', () => {
        popup.classList.remove('active');
        document.body.style.overflow = '';
    });
}
