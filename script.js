let theme = localStorage.getItem('light-mode')
const themeSwitch = document.getElementById('theme-switch')
var coll = document.getElementsByClassName("collapsible");

// open all by default
for (let i = 0; i < coll.length; i++) {
  let content = coll[i].nextElementSibling;
  content.style.maxHeight = content.scrollHeight + "px";
}

// toggle behavior
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;   // collapse
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // expand
    }
  });
}


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