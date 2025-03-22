export function animation() {
  console.log("animation works");

  const animationItems = document.querySelectorAll(".animation-item");
  // animations
  if (animationItems.length > 0) {
    window.addEventListener("scroll", animationOnScroll);

    function animationOnScroll() {
      for (let index = 0; index < animationItems.length; index++) {
        const animationItem = animationItems[index];
        const animationItemHeight = animationItem.offsetHeight;
        const animationOffset = offset(animationItem).top;
        const animationStart = 4;

        let animationItemPoint =
          window.innerHeight - animationItemHeight / animationStart;

        if (animationItemHeight > window.innerHeight) {
          animationItemPoint =
            window.innerHeight - window.innerHeight / animationStart;
        }

        if (
          (pageYOffset > animationOffset - animationItemPoint) &&
          pageYOffset < (animationOffset + animationItemHeight)
        ) {
          animationItem.classList.add("active");
        } else {
          if (!animationItem.classList.contains("animation-item-noHide")) {
            animationItem.classList.remove("active");
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect();
      const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    animationOnScroll();
  }
}
