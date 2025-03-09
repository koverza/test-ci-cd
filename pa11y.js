import { glob } from 'glob';
import { exec } from 'child_process';
import path from 'path';
import process from 'process';

glob('dist/**/*.html', (err, files) => {
    if (err) {
        console.error('Ошибка поиска файлов:', err);
        process.exit(1);
    }

    if (files.length === 0) {
        console.log('Файлы не найдены в папке dist.');
        process.exit(0);
    }

    files.forEach(file => {
        // Получаем абсолютный путь к файлу
        const absolutePath = path.resolve(file);
        // Формируем URL с префиксом file:// и кодируем его
        const fileUrl = `file://${encodeURI(absolutePath)}`;
        // Получаем имя файла (без пути)
        const fileName = path.basename(file);
        // Формируем имя файла для отчёта
        const outputFile = `pa11y-${fileName}.html`;
        // Команда для запуска pa11y с нужными параметрами
        const cmd = `pa11y "${fileUrl}" --output html --output-path "${outputFile}" --chrome-flags="--headless"`;

        // Выводим имя файла, который проверяется
        console.log(`Проверяется файл: ${fileName}`);

        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`❌ Ошибка при проверке ${fileName}:`, error.message);
            } else {
                console.log(
                    `✅ Проверка ${fileName} завершена. Результаты сохранены в ${outputFile}`
                );
            }
        });
    });
});
