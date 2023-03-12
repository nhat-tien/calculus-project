import handleTexToExpr from "./handleTexToExpr.js";

export default function derivativeAndDisplay() {
    const mf = document.getElementById("formula");
    const expr = handleTexToExpr(mf.value);

    console.log(mf.value);
    console.log(expr);

    const nodeY = math.derivative(expr,"y");
    const nodeX = math.derivative(expr,"x");

    const answerX = document.getElementById("derivativeX");
    const answerY = document.getElementById("derivativeY");

    answerX.innerText = `\\(${nodeX.toTex()}\\)`;
    answerY.innerText = `\\(${nodeY.toTex()}\\)`;

    MathJax.typeset();
}