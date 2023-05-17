let dark;

document.documentElement.removeAttribute("nonscript");

setDarkMode = () => {
    dark = !dark;
    
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    localStorage.setItem("dark", dark);
}

getVersion = async () => {
    const request = await fetch("https://raw.githubusercontent.com/Lynx-Shortener/Lynx/main/VERSION");
    if (request.status === 200) {
        let version = await request.text();
        
        const matches = version.trim().match(/^[vV]?(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(\-(0|[1-9][0-9]*|[0-9]*[A-Za-z-][0-9A-Za-z-]*)(\.(0|[1-9][0-9]*|[0-9]*[A-Za-z-][0-9A-Za-z-]*))*)?(\+[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*)?$/g);
        if (matches.length > 0) {
            version = matches[0];
            const versionElement = document.getElementById("version");
            versionElement.innerText = version;
        }
    }
}

getVersion()

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
    document.getElementById("header").style.transition = "background-color 300ms ease-in-out";
    Array.from(document.getElementsByClassName("themed-image-img")).forEach((el) => el.style.transition = "300ms ease-in-out");
    Array.from(document.getElementsByClassName("toggle-dark-icon")).forEach((el) => el.style.transition = "300ms ease-in-out");
}, 300);