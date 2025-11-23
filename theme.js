let theme = localStorage.getItem('light-mode')
const themeSwitch = document.getElementById('theme-switch')

const enableLightMode = () => {
    document.body.classList.add('light-mode')
    localStorage.setItem('light-mode', 'active')
}

const disableLightMode = () => {
    document.body.classList.remove('light-mode')
    localStorage.setItem('light-mode', 'null')
}

if(theme === 'active') enableLightMode()

themeSwitch.addEventListener("click", () => {
    theme = localStorage.getItem('light-mode')
    if (theme !== "active"){
        enableLightMode()
    }
    else {
        disableLightMode()
    }
})