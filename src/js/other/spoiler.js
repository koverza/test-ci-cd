export function spoiler() {
  console.log('spoiler works');

  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach(accordion => {
    const titles = accordion.querySelectorAll(".accordion__title");

    titles.forEach(title => {

      title.addEventListener('click', (e) => {
        {
          let content = title.nextElementSibling
          const contentAttr = content.getAttribute("data-number");

          if (content.style.maxHeight) {
            document.querySelectorAll(".accordion__content").forEach(content => content.style.maxHeight = null)
          } else {
            document.querySelectorAll(".accordion__content").forEach(content => content.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px'
          }
          if (content.scrollHeight > 0) {

            document.querySelectorAll(".accordion__icon").forEach(icon => {
              const iconAttr = icon.getAttribute("data-number");
              if (iconAttr === contentAttr) {
                icon.classList.toggle("active")
              } else {
                icon.classList.remove("active")
              }
            })
          }
        }
      })
    })
  })
}
