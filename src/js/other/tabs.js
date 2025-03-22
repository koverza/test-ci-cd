export function tabs() {
  console.log("tabs works");
  const tabs = document.querySelectorAll(".tabs");

tabs.forEach((tab) => {
  const tabButtons = tab.querySelectorAll(".tabs__button");
  const tabTexts = tab.querySelectorAll(".tabs__text");

  tabButtons.forEach((button) => {
    const buttonAttr = button.getAttribute("data-number");
    tabTexts.forEach((text) => {
      const textAttr = text.getAttribute("data-number");
      button.addEventListener("click", () => {
        if (!button.classList.contains("active")) {
          tabButtons.forEach((button) => {
            button.classList.remove("active");
          });
          tabTexts.forEach((text) => {
            text.classList.remove("active");
          });
        }
        if (buttonAttr == textAttr) {
          button.classList.add("active");
          text.classList.add("active");
        }
      });
    });
  });
  tab.querySelector(".tabs__button:nth-child(1)").click();
});
}
