export function form() {
  console.log('form works');
  const form = document.querySelector(".form");

  if(form) {
    form.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }

}