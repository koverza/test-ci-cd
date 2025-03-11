export function dragDrop() {
    console.log('dragDrop works');

    const dragItem = document.getElementById('dragItem');
    const dropZone = document.getElementById('dropZone');
    const dropZoneText = document.querySelector('.dropZoneText');

    dragItem.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text/plain', event.target.id);
        console.log('Данные установлены:', event.dataTransfer.getData('text/plain'));
    });

    dragItem.addEventListener('drag', event => {
        console.log(event.target.id, 'элемент перетаскивается');
    });

    dropZone.addEventListener('dragover', event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    });

    dropZone.addEventListener('dragenter', event => {
        event.preventDefault();
        if (event.currentTarget.classList.contains('dropZone')) {
            dropZoneText.style.display = 'none';
            dropZone.style.border = '2px dashed grey';
            dropZone.style.backgroundColor = 'transparent';
        }
    });

    dropZone.addEventListener('dragleave', event => {
        event.preventDefault();
        dropZone.style.border = '1px solid rgb(137, 137, 137)';
        dropZone.style.backgroundColor = 'rgb(236, 233, 233)';
    });

    dropZone.addEventListener('drop', event => {
        event.preventDefault();
        let id = event.dataTransfer.getData('text/plain');
        console.log('Получен элемент:', id);

        const files = event.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            dropZoneText.style.display = 'block';
            dropZoneText.textContent = `${file.name} (${file.size})`;

            const reader = new FileReader();
            reader.readAsText(file); // или readAsDataURL(file) для изображений, и т.д.

            // console.log(`Файл загружен в dataTransfer: ${file.name} (${file.size})`);
            reader.onload = e => {
                console.log('Содержимое файла загружено:', e.target.result.slice(0, 100)); // вывод первых 100 символов
            };
        }

        const element = document.getElementById(id);
        if (element) {
            dropZone.appendChild(element);
        }
        dropZone.style.border = '1px solid rgb(137, 137, 137)';
        dropZone.style.backgroundColor = 'rgb(236, 233, 233)';
    });
}
