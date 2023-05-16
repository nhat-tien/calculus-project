import handleTexToExpr from "./handleTexToExpr.js";

export default function derivativeAndDisplay() {
    const mf = document.getElementById("formula");
    const expr = handleTexToExpr(mf.value);
   

    const nodeY = math.derivative(expr,"y");
    const nodeX = math.derivative(expr,"x");
    const nodeZ = math.derivative(expr,"z");

    const answerX = document.getElementById("derivativeX");
    const answerY = document.getElementById("derivativeY");
    const answerZ = document.getElementById("derivativeZ");

    answerX.innerText = `\\(${nodeX.toTex()}\\)`;
    answerY.innerText = `\\(${nodeY.toTex()}\\)`;
    answerZ.innerText = `\\(${nodeZ.toTex()}\\)`;

    MathJax.typeset();
}