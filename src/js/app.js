import { swipe, formTelegram, i18n, sendServer } from './$/index.js';
// import {} from './other/index.js';
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
// zoom,

window.addEventListener('load', () => {
    // formTelegram()




    
    document.getElementById('telegramForm').addEventListener('submit', async function (e) {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        // Сбор данных формы
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            // Отправка POST-запроса на сервер
            const response = await fetch('http://localhost:3002/send-email', {
                // send
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorText = await response.text();
                document.getElementById('result').innerText = 'Ошибка: ' + errorText;
                return;
            }

            const result = await response.json();
            document.getElementById('result').innerText = result.message;
        } catch (error) {
            document.getElementById('result').innerText = 'Ошибка сервера: ' + error.message;
        }
    });
});
