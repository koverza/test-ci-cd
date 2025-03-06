export function darkTheme() {
    console.log("darkTheme works");

    const themeToggles = document.querySelectorAll('.themeToggle')

    themeToggles.forEach(themeToggle => {
        const themeToggle__input = themeToggle.querySelector('.themeToggle__input')
        const themeToggle__label = themeToggle.querySelector('.themeToggle__label')

        themeToggle__label.addEventListener("click", (event) => {
            event.preventDefault();
            if (localStorage.getItem("theme") === "dark") {
                localStorage.removeItem("theme");
                themeToggle__input.checked = true
            } else {
                localStorage.setItem("theme", "dark");
                themeToggle__input.checked = false
            }
            addDarkClassToHTML();
        });
    
        function addDarkClassToHTML() {
            try {
                if (localStorage.getItem("theme") === "dark") {
                    document.querySelector("html").classList.add("dark");
                    themeToggle__input.checked = true
                } else {
                    document.querySelector("html").classList.remove("dark");
                    themeToggle__input.checked = false
                }
            } catch (err) { }
        }
    
        addDarkClassToHTML();
    })

}
