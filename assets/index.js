import derivativeAndDisplay from "./js-module/derivativeAndDisplay.js"
import derivativeAndDisplayNonsimplify from "./js-module/derivativeAndDisplayNonsimplify.js";
import { virtualKeyboard } from "./js-module/virtualKeyboard.js";



const bt = document.getElementById("button");
bt.addEventListener("click",derivativeAndDisplay);

const bt2 = document.getElementById("button-nonsimplify");
bt2.addEventListener("click",derivativeAndDisplayNonsimplify);

mathVirtualKeyboard.layouts = [virtualKeyboard];



