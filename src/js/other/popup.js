export function popup() {
  console.log("popup works");

  // Popup without Info
  const popupOpen = document.querySelector(".btn");
  const popups = document.querySelectorAll(".popup");

  popups.forEach((popup) => {
    const popupCross = popup.querySelector(".popup-top__cross");

    // popupOpen.addEventListener('click', () => {
    //   popup.classList.add('active')
    //   document.body.style.overflowY = 'hidden'
    // })

    // popupCross.addEventListener("click", () => {
    //   popup.classList.remove("active");
    //   document.body.style.overflowY = "visible";
    // });
  });

  // Popup with Info
  // const popup = document.querySelector('.popup')
  // const blockButtons = document.querySelectorAll(".test__button");
  // const popupInfo = [
  //   { id: 1, title: 'popup title 1', content: 'popup content 1' },
  //   { id: 2, title: 'popup title 2', content: 'popup content 2' },
  //   { id: 3, title: 'popup title 3', content: 'popup content 3' },
  // ]

  // blockButtons.forEach(blockButton => {
  //   let blockButtonAttr = +blockButton.getAttribute("data-number");
  //   blockButton.addEventListener('click', () => {
  //     popupInfo.forEach(info => {
  //       if (blockButtonAttr === info.id) {
  //         popup.innerHTML = `
  //         <div class="popup__content">
  //           <div class="popup-top">
  //             <h2 class="popup-top__title">${info.title}</h2>
  //             <button type="button" class="popup-top__cross" data-number="${info.id}"></button>
  //           </div>
  //           <p class="popup__block">${info.content}</p>
  //         </div>
  //         `
  //         popup.classList.add('active')
  //         if (popup.classList.contains('active')) {
  //           const popupCrosses = document.querySelectorAll('.popup-top__cross')
  //           popupCrosses.forEach(popupCross => {
  //             popupCross.addEventListener('click', () => {
  //               popup.classList.remove('active')
  //             })
  //           })
  //         }
  //       }
  //     })
  //   })
  // })
}
