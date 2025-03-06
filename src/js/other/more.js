export function more() {
  console.log("more works");

  const mores = document.querySelectorAll(".more");
  mores.forEach((more) => {
    const moreText = more.querySelector(".more__text");
    const moreBottom = more.querySelector(".more__bottom");
    const moreButton = more.querySelector(".more__button");

    moreButton.addEventListener("click", () => {
      if (!moreText.classList.contains("active")) {
        moreText.classList.add("active");
        moreBottom.classList.add("active");
        moreButton.innerHTML = "Скрыть";
      } else {
        moreText.classList.remove("active");
        moreBottom.classList.remove("active");
        moreButton.innerHTML = "Показать еще";
      }
    });
  });
}
