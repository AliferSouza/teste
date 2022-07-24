

import { Update } from "../src/lib/lib.js"

export default function compoProxy() {
    var valor = 0

    window.addEventListener("click", e => {    
        e.stopPropagation()
        if (e.target.id == "clickMais") {
            valor++
        }
        if (e.target.id == "clickMenos") {
            if (valor == 0) {

            } else {
                valor--
            }

        }
        Update("[couter]", valor)
    }, true)

    return `
       <h1> Couter</h1>
       <h2 couter> 0 <h2>
       <button style="padding: 5rem font-size: bold 20px" id="clickMais">+</button>
       <button style="padding: 5rem font-size: bold 20px" id="clickMenos">-</button>
       `

}