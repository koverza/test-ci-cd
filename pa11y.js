// validate-pa11y-all.js

import { sync as globSync } from 'glob';
import { exec } from 'child_process';
import path from 'path';
import process from 'process';

console.log('Запуск скрипта validate-pa11y-all.js');
console.log('Текущая рабочая директория:', process.cwd());

// Используем синхронную версию glob для получения списка файлов
const files = globSync('dist/**/*.html');

if (!files || files.length === 0) {
    console.log('Файлы не найдены в папке dist.');
    process.exit(0);
}

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
            console.log(`✅ Проверка ${fileName} завершена. Результаты сохранены в ${outputFile}`);
        }
    });
});
