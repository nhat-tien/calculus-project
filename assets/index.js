import derivativeAndDisplay from "./js-module/derivativeAndDisplay.js"
import { virtualKeyboard } from "./js-module/virtualKeyboard.js";

const bt = document.getElementById("button");
bt.addEventListener("click",derivativeAndDisplay);

const mf = document.getElementById("formula");
mf.setOptions({
    ...virtualKeyboard
});