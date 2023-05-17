let dark;

setDarkMode = () => {
    dark = !dark;
    
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    localStorage.setItem("dark", dark);
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

// Don't smoothly animate on first pageload
setTimeout(() => {
    document.body.style.transition = "all 300ms ease-in-out";
    Array.from(document.getElementsByClassName("themed-image-img")).forEach((el) => el.style.transition = "300ms ease-in-out");
    Array.from(document.getElementsByClassName("toggle-dark-icon")).forEach((el) => el.style.transition = "300ms ease-in-out");
}, 300);