import handleTexToExpr from "./handleTexToExpr.js";

export default function derivativeAndDisplayNonsimplify() {
    const mf = document.getElementById("formula");
    const expr = handleTexToExpr(mf.value);

    const nodeY = math.derivative(expr,"y", {simplify: false});
    const nodeX = math.derivative(expr,"x", {simplify: false});
    const nodeZ = math.derivative(expr,"z", {simplify: false});

    const answerX = document.getElementById("derivativeX");
    const answerY = document.getElementById("derivativeY");
    const answerZ = document.getElementById("derivativeZ");

    answerX.innerText = `\\(${nodeX.toTex()}\\)`;
    answerY.innerText = `\\(${nodeY.toTex()}\\)`;
    answerZ.innerText = `\\(${nodeZ.toTex()}\\)`;

    MathJax.typeset();
}