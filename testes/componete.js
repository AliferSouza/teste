import HomeStyles from "../styles/Home.js"
import { stylesComponets, Update } from "../lib/lib.js"


export default function Home() {
  const styles = stylesComponets(HomeStyles)
  Update("#styles", styles)
  var valor = 0
  addEventListener('click', () => {
    valor++ 
    valorComponets()
  })

 const valorComponets = function renderizar() {  
    render(valor)
    return `
    <h1>Couter${valor}</h1>
    <button type="button">Click</button> 
    `
  }

    function render(props) {
      const containerComponent = document.querySelector('#containerComponent')
      containerComponent.innerHTML =+ props
    }

    return`
    <h1 class="home">HOME </h1>
    ${valorComponets}    
    
    `


  


}