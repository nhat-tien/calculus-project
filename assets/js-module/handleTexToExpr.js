
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
            let str = this.tex;
            let index = str.indexOf(")(");
            if(index > 0) {
                let strAfter = str.slice(0,index+1) + "/" + str.slice(index+1);
                this.tex = strAfter;
            }
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
            let str = this.tex;
            let index = str.indexOf("xy");
            if(index < 0) {
                index = str.indexOf("yx");
            }
            if(index > 0) {
                let strAfter = str.slice(0,index+1) + "*" + str.slice(index+1);
                this.tex = strAfter;
            }
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

    return str.tex;
}