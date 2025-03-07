export function formTelegram() {
    console.log("formTelegram works");

    document.getElementById('telegramForm').addEventListener('submit', async function (e) {
        e.preventDefault(); // предотвратить перезагрузку страницы

        // Сбор данных из формы
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('http://localhost:3002/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                document.getElementById('result').innerText = 'Сообщение отправлено!';
            } else {
                document.getElementById('result').innerText = 'Ошибка отправки!';
            }
        } catch (error) {
            document.getElementById('result').innerText = 'Ошибка сервера!';
            console.error('Ошибка:', error);
        }
    });
}

