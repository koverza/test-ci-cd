export function burger() {
  console.log("burger works");
  const burger = document.querySelector(".burger-wrapper");
  burger.addEventListener("click", () => {
    document.querySelector(".burger__line:first-child").classList.toggle("active");
    document.querySelector(".burger__line:nth-child(2)").classList.toggle("active");
    document.querySelector(".burger__line:last-child").classList.toggle("active");
  });
}
