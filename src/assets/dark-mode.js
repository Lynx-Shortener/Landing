let dark;

setDarkMode = () => {
    dark = !dark;
    
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
}


if (localStorage.getItem("dark") !== null) {
    dark = localStorage.getItem("dark") === "true";
} else {
    dark = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) || false;
}

if (dark) document.documentElement.classList.add("dark");
else document.documentElement.classList.remove("dark");

const toggle = document.getElementById("toggle-dark");
toggle.addEventListener("click", setDarkMode);