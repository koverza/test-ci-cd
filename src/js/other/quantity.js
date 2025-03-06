export function quantity() {
  console.log("quantity works");

  const quantities = document.querySelectorAll(".quantity");
  quantities.forEach((quantity) => {
    const quantityMinus = quantity.querySelector(".quantity__minus");
    const quantityNumber = quantity.querySelector(".quantity__number");
    const quantityPlus = quantity.querySelector(".quantity__plus");
    let number = 0;

    quantityMinus.addEventListener("click", () => {
      if (quantityNumber.innerText > 0) {
        number--;
        quantityNumber.innerText = number;
      }
    });

    quantityPlus.addEventListener("click", () => {
      number++;
      quantityNumber.innerText = number;
    });
  });
}
