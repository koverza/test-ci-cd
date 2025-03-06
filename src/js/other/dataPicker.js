import AirDatepicker from 'air-datepicker';

export function dataPicker() {
    console.log('dataPicker works');

    const datepicker = new AirDatepicker('.input', {
        autoClose: true, // Закрывать календарь после выбора
        isMobile: false, // Включить мобильную версию
        minDate: new Date(), // Минимальная дата (сегодня)
        maxDate: new Date(2025, 11, 31), // Максимальная дата (31 декабря 2025)
        dateFormat: 'yyyy-MM-dd', // Формат даты
        timepicker: true, // Включить выбор времени
        onlyTimepicker: false, // Только время без даты
        multipleDates: true, // Позволяет выбрать несколько дат
        multipleDatesSeparator: ' % ', // Разделитель между датами
        range: true, // Включает выбор диапазона дат
        minutesStep: 5, // Шаг выбора минут
        classes: 'custom-calendar', // Добавляем CSS-класс
        todayButton: false, // Кнопка "Сегодня"

        onSelect({ date, formattedDate }) {
            console.log('Выбрали дату:', formattedDate);
        },
        onShow() {
            console.log('Календарь открыт');
        },
        onHide() {
            console.log('Календарь закрыт');
        }
    });

    // Закрывать по кнопке
    // document.querySelector('#openBtn').addEventListener('click', () => {
    //     datepicker.show();
    // });

    // document.querySelector('#closeBtn').addEventListener('click', () => {
    //     datepicker.hide();
    // });
}
