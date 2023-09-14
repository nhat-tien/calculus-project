
export default function handleTexToExpr( tex ) {
            tex = tex.split("\\").join("");
            tex = tex.replaceAll(/left/g,"").replaceAll(/right/g,"");
            tex = tex.replaceAll("{","(").replaceAll("}",")");
            tex = tex.replaceAll(/frac/g,"");
            tex = tex.replaceAll(")(",")/(");
            tex = tex.replaceAll(/ln/g,"log");
            tex = tex.replaceAll(/exponentialE/g,"e");
            tex = tex.replaceAll(/xy/g,"x*y");
            tex = tex.replaceAll(/yx/g,"y*x");
            tex = tex.replaceAll(/yz/g,"y*z");
            tex = tex.replaceAll(/zy/g,"z*y");
            tex = tex.replaceAll(/xz/g,"x*z");
            tex = tex.replaceAll(/zx/g,"z*x");
            tex = tex.replaceAll(/arctan/g,"atan");
            //replace sqrtN 
            const indexOfSqrtN = tex.indexOf("sqrt[");
            if(indexOfSqrtN) {
                tex = tex.replaceAll(/sqrt\[.*\]/g,"cbrt");
            }
    return tex;
}