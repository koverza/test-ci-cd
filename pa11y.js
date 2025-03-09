// validate-pa11y-all.js

import { glob } from 'glob';
import { exec } from 'child_process';
import path from 'path';
import process from 'process';

console.log("Запуск скрипта validate-pa11y-all.js");
console.log("Текущая рабочая директория:", process.cwd());

// Ищем все HTML-файлы во всех поддиректориях папки dist
const files = glob.sync('dist/**/*.html');

if (!files || files.length === 0) {
  console.log("Файлы не найдены в папке dist.");
  process.exit(0);
}

console.log("Найденные файлы:", files);

files.forEach(file => {
  const absolutePath = path.resolve(file);
  // Формируем URL с использованием file:// и кодируем его для корректного отображения не-ASCII символов
  const fileUrl = `file://${encodeURI(absolutePath)}`;
  const fileName = path.basename(file);
  // Чтобы избежать двойного расширения, отсекаем исходное расширение и добавляем .html
  const outputFile = `pa11y-${path.basename(file, path.extname(file))}.html`;
  // Команда запуска Pa11y; для теста можно временно изменить команду, чтобы вызвать ошибку
  const cmd = `pa11y "${fileUrl}" --output html --output-path "${outputFile}" --chrome-flags="--headless"`;
  
  console.log(`Проверяется файл: ${fileName}`);
  
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Ошибка при проверке ${fileName}:`, error.message);
      if (stderr) {
        console.error(`Детали ошибки: ${stderr}`);
      }
    } else {
      console.log(`✅ Проверка ${fileName} завершена. Результаты сохранены в ${outputFile}`);
      console.log(stdout);
    }
  });
});
