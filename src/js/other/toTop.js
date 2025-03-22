export function toTop() {
  console.log("toTop works");
  const toTop = document.querySelector(".toTop");

  window.addEventListener("scroll", function () {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 10) { // header height or block height
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  });
}
