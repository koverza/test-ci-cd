import { glob } from 'glob';
import { exec } from 'child_process';
import path from 'path';
import process from 'process';

console.log('Запуск скрипта pa11y.js');

// Поиск всех HTML-файлов в папке dist и ее поддиректориях
glob('dist/**/*.html', (err, files) => {
    if (err) {
        console.error('Ошибка поиска файлов:', err);
        process.exit(1);
    }

    // Выводим список найденных файлов, чтобы убедиться, что glob работает
    console.log('Glob запустился, найденные файлы:', files);

    if (files.length === 0) {
        console.log('Файлы не найдены в папке dist.');
        process.exit(0);
    }

    files.forEach(file => {
        const absolutePath = path.resolve(file);
        // Формируем корректный URL для локального файла, кодируя путь (если в пути есть не-ASCII символы)
        const fileUrl = `file://${absolutePath}`;
        const fileName = path.basename(file);
        const outputFile = `pa11y-${fileName}.html`;
        const cmd = `pa11y "${fileUrl}" --output html --output-path "${outputFile}" --chrome-flags="--headless"`;

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
