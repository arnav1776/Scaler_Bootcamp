const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

const ColorChanger = (element, Color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = Color;
    });
};

ColorChanger(red, getBGColor(red));
ColorChanger(cyan, getBGColor(cyan));
ColorChanger(violet, getBGColor(violet));
ColorChanger(orange, getBGColor(orange));
ColorChanger(pink, getBGColor(pink));


