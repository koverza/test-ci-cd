// Основной модуль
import gulp from 'gulp';
// Импорт путей
import { path } from './gulp/config/path.js';
// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

// Передаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
};

// Импорт задач
const { copy } = await import('./gulp/tasks/copy.js');
const { reset } = await import('./gulp/tasks/reset.js');
const { html } = await import('./gulp/tasks/html.js');
const { server } = await import('./gulp/tasks/server.js');
const { scss } = await import('./gulp/tasks/scss.js');
const { js } = await import('./gulp/tasks/js.js');
const { images } = await import('./gulp/tasks/images.js');
const { otfToTtf, ttfToWoff, fontsStyle } = await import('./gulp/tasks/fonts.js');
const { svgSpriteTask } = await import('./gulp/tasks/svg-sprite.js');
const { zip } = await import('./gulp/tasks/zip.js');
const { ftp } = await import('./gulp/tasks/ftp.js');

// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html); //gulp.series(html, ftp)
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

// Последовательная обработака шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images, svgSpriteTask));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// Выполнение сценария по умолчанию
gulp.task('default', dev);

// Экспорт сценариев
export { svgSpriteTask, dev, build, deployZIP, deployFTP };
