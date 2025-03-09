// validate-pa11y-all.js

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

    console.log('Начинаем проверку всех HTML-файлов в папке dist:');
    console.log('Найденные файлы:', files);

    files.forEach(file => {
        const absolutePath = path.resolve(file);
        const fileUrl = `file://${encodeURI(absolutePath)}`;
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
