/* Theme Toggle Script ver 1.0
 * Author: Jagger Walraven
 * Purpose: Allows website to toggle between light and dark themes
 * Date Last Updated: 12/09/2025
 */

/* Changelog:
 * 12/09/2025 ver 1.0: Initial script
 */

const root = document.documentElement; //get the document element
const toggleButton = document.getElementById("contrast-button"); //get the contrast button
const toggleButtonSvg = document.getElementById("theme-svg")

//load the saved theme
const savedTheme = localStorage.getItem("theme");

let transitionEnabled = false;

//if the saved theme is light mode, add the corresponding class to the root
if (savedTheme == "light") {
    root.classList.add("light-mode");
    toggleSVG(true);
}

//add toggle theme listener to toggle button
toggleButton.addEventListener("click", () => {

    //transition between light and dark
    if (!transitionEnabled) {
        root.classList.add("enable-theme-transitions");
        transitionEnabled = true;
    }

    root.classList.toggle("light-mode"); //toggle the light mode on or off

    if (root.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light"); //save light mode to local storage
        toggleSVG(true);
    }
    else {
        localStorage.setItem("theme", "dark"); //save dark mode to local storage
        toggleSVG(false);
    }
})

function toggleSVG(light) {

    if (light) {
        toggleButtonSvg.src = "/images/svgs/moon.svg";
        toggleButtonSvg.classList.remove("svg-theme-button");
        toggleButtonSvg.classList.add("svg-theme-button-light");
    }
    else {
        toggleButtonSvg.src = "/images/svgs/sun.svg";
        toggleButtonSvg.classList.remove("svg-theme-button-light");
        toggleButtonSvg.classList.add("svg-theme-button");
    }
}