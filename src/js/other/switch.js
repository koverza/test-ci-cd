export function switchButton() {
  console.log("switch works");

  const switches = document.querySelectorAll(".switch");
  switches.forEach((switchItem) => {
    const switchLabel = switchItem.querySelector(".switch__label");
    const switchInput = switchItem.querySelector(".switch__input[type=checkbox]");
    switchLabel.addEventListener("click", () => {
      if (switchInput.checked) {
        // false
      } else {
        // true
      }
    });
  });

}
