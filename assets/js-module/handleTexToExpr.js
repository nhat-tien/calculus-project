
export default function handleTexToExpr( tex ) {
    class TexString {
        constructor(tex) {
            this.tex = tex; 
        }
        removeBackslash() {
            this.tex = this.tex.split("\\").join("");
            return this;
        }
        removeLeftAndRight() {
            this.tex = this.tex.replaceAll(/left/g,"").replaceAll(/right/g,"");
            return this;
        }
        removeCurlyBrackets() {
            this.tex = this.tex.replaceAll("{","(").replaceAll("}",")");
            return this;
        }
        removeFrac() {
            this.tex = this.tex.replaceAll(/frac/g,"");
            return this;
        }
        addDivide() {
            this.tex = this.tex.replaceAll(")(",")/(");
            return this;
        }
        replaceLn() {
            this.tex = this.tex.replaceAll(/ln/g,"log");
            return this;
        } 
        replaceExponentialE() {
            this.tex = this.tex.replaceAll(/exponentialE/g,"e");
            return this;
        }
        //*
        addAsterick() {
            this.tex = this.tex.replaceAll(/xy/g,"x*y");
            this.tex = this.tex.replaceAll(/yx/g,"x*y");
            return this;
        }
        replaceArctan() {
            this.tex = this.tex.replaceAll(/arctan/g,"atan");
            return this;
        }

    }
    
    const texString = new TexString(tex);
    const str = texString
                .removeBackslash()
                .removeLeftAndRight()
                .removeCurlyBrackets()
                .removeFrac()
                .addDivide()
                .replaceLn()
                .replaceExponentialE()
                .addAsterick()
                .replaceArctan()

    return str.tex;
}