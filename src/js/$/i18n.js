import i18next from 'i18next';

export function i18n() {
    console.log('i18n works!');
    // <h1 data-i18n="welcome">Добро пожаловать!</h1>
    i18next.init(
        {
            lng: 'en', // активный язык
            fallbackLng: 'ru',
            resources: {
                en: {
                    translation: {
                        welcome: 'Welcome!',
                        description: 'This is an example of translating text using i18next.'
                    }
                },
                ru: {
                    translation: {
                        welcome: 'Добро пожаловать!',
                        description: 'Это пример перевода текста с помощью i18next.'
                    }
                }
            }
        },
        function (err, t) {
            if (err) return console.error(err);
            updateContent();
        }
    );

    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            const key = element.getAttribute('data-i18n');
            element.textContent = i18next.t(key);
        });
    }
}
