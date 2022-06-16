const darkMode = "darkMode"
const body = document.body;
const h1 = document.getElementById("container_text")
const btn = document.getElementById("container_btn")

changeMode = () => {
    changeClasses();
    changeText();
}

btn.addEventListener("click", changeMode)

changeClasses = () => {
    body.classList.toggle(darkMode);
    btn.classList.toggle(darkMode);
}

changeText = () => {
    const light = "Light Mode"
    const dark = "Dark Mode"

    if (body.classList.contains(darkMode)) {
        btn.innerHTML = light;
        h1.innerHTML = dark + " ON"
            return;
    }
        btn.innerHTML = dark;
        h1.innerHTML = light + " ON"
}

