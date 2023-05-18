
const virtualKeyboard = {
        label: "College",
        toolip: "Only the essential",
        styles: ".digit { background: blue; color: white }",
        rows: [
        [
            {
                class: "keycap",
                latex: "\\sin",
                insert: "$$sin(#0)$$"
            },
            {
                class: "keycap tex",
                label: "<i>x</i>",
                insert: "x"
            },
            {
                class: "separator w5"
            },
            {
                class: "keycap",
                latex: "7"
            },
            {
                class: "keycap",
                latex: "8"
            },
            {
                class: "keycap",
                latex: "9"
            },
            {
                class: "keycap",
                latex: "\\div"
            },
            {
                class: "separator w5"
            },
            {
                class: "keycap tex",
                insert: "$$#@^{2}$$",
                latex: "{#0}^{2}"
            },
            {
                class: "keycap tex",
                insert: "$$#@^{3}$$",
                latex: "{#0}^{3}"
            },
            {
                class: "keycap tex",
                insert: "$$#@^{#0}$$",
                //label: "<span><i>x</i><sup>&thinsp;<i>n</i></sup></span>"
                latex: "{#0}^{#0}"
            }
        ],
        [
            {
                class: "keycap",
                latex: "\\cos",
                insert: "$$cos(#0)$$"
            },
            {
                class: "keycap tex",
                label: "<i>y</i>",
                insert: "y"
            },
            {
                class: "separator w5"
            },

            {
                class: "keycap",
                latex: "4"
            },
            {
                class: "keycap",
                latex: "5"
            },
            {
                class: "keycap",
                latex: "6"
            },
            {
                class: "keycap",
                insert: "$$*$$",
                latex: "\\times"
            },
            {
                class: "separator w5"
            },
            {
                class: "keycap small",
                latex: "\\frac{#0}{#0}",
                insert: "\\frac{{#0}}{#0}"
            },
            {
                class: "keycap",
                latex: "\\ln",
                insert: "$$ln(#0)$$"
            },
            {
                class: "keycap small",
                latex: "\\sqrt{#0}",
                insert: "\\sqrt{#0}"
            }
        ],
        [
            {
                class: "keycap",
                latex: "\\tan",
                insert: "$$tan(#0)$$"
            },
            {
                class: "keycap tex digit",
                label: "<i>z</i>",
                insert: "$$z$$"
            },
            {
                class: "separator w5"
            },

            {
                class: "keycap",
                latex: "1"
            },
            {
                class: "keycap",
                latex: "2"
            },
            {
                class: "keycap",
                latex: "3"
            },
            {
                class: "keycap",
                latex: "-"
            },
            {
                class: "separator w5"
            },
            {
                class: "keycap small",
                label: "atan",
                insert: "$$arctan(#0)$$"
            },
            {
                class: "keycap",
                latex: "\\ln",
                insert: "$$ln(#0)$$"
            },
            {
                class: "keycap",
                latex: "\\exponentialE^",
                insert: "e"
            }
        ],
        [
            {
                class: "keycap tex",
                label: "("
            },
            {
                class: "keycap tex",
                label: ")"
            },

            {
                class: "separator w5"
            },
            {
                class: "keycap",
                latex: "0"
            },
            {
                class: "keycap",
                latex: ","
            },
            {
                class: "keycap tex",
                latex: "\\pi"
            },
            {
                class: "keycap",
                latex: "+"
            },
            {
                class: "separator w5"
            },
            {
                class: "action",
                command: ["performWithFeedback", "moveToPreviousChar"],
                label: "<svg><use xlink:href='#svg-arrow-left' /></svg>"
            },
            {
                class: "action",
                command: ["performWithFeedback", "moveToNextChar"],
                label: "<svg><use xlink:href='#svg-arrow-right' /></svg>"
            },
            {
                class: "action font-glyph bottom right",
                command: ["performWithFeedback", "deleteBackward"],
                label: "&#x232b;"
            }
        ]
    ]
}

export { virtualKeyboard }