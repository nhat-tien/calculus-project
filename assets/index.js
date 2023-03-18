import derivativeAndDisplay from "./js-module/derivativeAndDisplay.js"
import { virtualKeyboard } from "./js-module/virtualKeyboard.js";


document.querySelector("#app").innerHTML = `
<main class="app">
    <div class="header">
        <img class="header__icon" src="assets/images/icon-calculator.svg" alt="icon-calculator" />
        <h3 class="header__title">Máy tính đạo hàm</h3>
    </div>
    <div class="user-input">
        <span>\\(f(x,y)=\\)</span>
        <div class="math-field">
            <math-field id="formula" virtual-keyboard-mode="onfocus">\\sin(x+\\pi)</math-field>
        </div>
    </div>
    <button id="button" class="btn-primary">Click me to đạo hàm!</button>
    <div id="answer" class="answer-area">
        <div class="flex-box container">
            <span style="display:flex;align-items:center;">\\(\\frac{\\partial f}{\\partial x}=\\)</span>
            <div id="derivativeX" class="derivative__answer"></div>
        </div>
        <div class="flex-box container">
            <span style="display:flex;align-items:center;">\\(\\frac{\\partial f}{\\partial y}=\\)</span>
            <div id="derivativeY" class="derivative__answer"></div>
        </div>
    </div>
</main>
`;

MathJax.typeset();

const bt = document.getElementById("button");
bt.addEventListener("click",derivativeAndDisplay);

const mf = document.getElementById("formula");
mf.setOptions({
    ...virtualKeyboard
});

