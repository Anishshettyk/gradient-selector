const css = document.querySelector(".value");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const button = document.querySelector("button");

const setGradient = () => {
  body.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.value = body.style.background + ";";
};

const randomRGB = () => {
  let rgbValues = [];
  for (let i = 0; i < 3; i++) {
    rgbValues.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]})`;
};

const setRandom = () => {
  body.style.background =
    "linear-gradient(to right, " + randomRGB() + ", " + randomRGB() + ")";
  css.value = body.style.background + ";";
};

const copyField = () => {
  var copyText = document.getElementById("copyField");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = copyText.value;
};

const outFunc = () => {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
};

window.onload = setGradient;

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandom);
