export function select() {
  console.log('select works');

  // Для корректного отображения в IE
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  // Select
  const selects = document.querySelectorAll('.select');

  selects.forEach(select => {
    const selectTop = select.querySelector('.select-top');
    const selectText = select.querySelector('.select-top__text');
    const selectArrow = select.querySelector('.select-top__arrow');
    const selectMenu = select.querySelector('.select-menu');
    const selectItems = select.querySelectorAll('.select-menu__item');

    selectTop.addEventListener('click', () => {
      selectMenu.classList.toggle('active');
      selectArrow.classList.toggle('active');
    });

    if (selectMenu.offsetHeight < 150) {
      selectMenu.style.overflow = 'auto';
    }

    selectItems.forEach(selectItem => {
      selectItem.addEventListener('click', () => {
        selectText.innerHTML = selectItem.getAttribute('data-item');
        selectMenu.classList.remove('active');
        selectArrow.classList.toggle('active');
      });
    });

    document.addEventListener('click', e => {
      const select__Click = e.composedPath().includes(select);
      if (!select__Click) {
        selectMenu.classList.remove('active');
        selectArrow.classList.remove('active');
      }
    });
  });
}
