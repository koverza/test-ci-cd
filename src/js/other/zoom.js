export function zoom() {
    console.log('zoom works');

    function imageZoom(imgID, resultID) {
        const img = document.getElementById(imgID);
        const result = document.getElementById(resultID);
        if (!img || !result) return;

        const lens = document.createElement('div');
        lens.className = 'zoom__image';
        img.parentElement.insertBefore(lens, img);

        const cx = result.offsetWidth / lens.offsetWidth;
        const cy = result.offsetHeight / lens.offsetHeight;
        result.style.backgroundImage = `url('${img.src}')`;
        result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

        const moveLens = e => {
            e.preventDefault();
            const pos = getCursorPos(e);
            const x = Math.max(
                0,
                Math.min(pos.x - lens.offsetWidth / 2, img.width - lens.offsetWidth)
            );
            const y = Math.max(
                0,
                Math.min(pos.y - lens.offsetHeight / 2, img.height - lens.offsetHeight)
            );
            lens.style.left = `${x}px`;
            lens.style.top = `${y}px`;
            result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
        };

        const getCursorPos = e => {
            const rect = img.getBoundingClientRect();
            return {
                x: e.pageX - rect.left - window.pageXOffset,
                y: e.pageY - rect.top - window.pageYOffset
            };
        };

        const showZoom = () => {
            lens.style.display = 'block';
            result.style.display = 'block';
        };

        const hideZoom = () => {
            lens.style.display = 'none';
            result.style.display = 'none';
        };

        lens.style.display = 'none';
        result.style.display = 'none';

        img.addEventListener('mouseenter', showZoom);
        img.addEventListener('mouseleave', hideZoom);
        lens.addEventListener('mouseenter', showZoom);
        lens.addEventListener('mouseleave', hideZoom);

        ['mousemove', 'touchmove'].forEach(evt => {
            lens.addEventListener(evt, moveLens);
            img.addEventListener(evt, moveLens);
        });
    }

    imageZoom('myImage', 'myResult');
}
