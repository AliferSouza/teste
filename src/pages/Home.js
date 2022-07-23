import Colaboradores from "../componentes/COLABORADORES.js"
import Card from "../componentes/CARD.js"
import Banner from "../componentes/BANNER.js"
import Text from "../componentes/TEXT.js"
import textSimples from "../componentes/TEXTSIMPLES.js"
import Menu from "../componentes/MENU.js"
import Slider from "../componentes/SLIDER01.js"


export default function homeComponent() {


    return `
   
        ${Menu()}

  

        ${Banner()}
       <div class="container">
        ${Text()}
      
        ${Colaboradores()}
      

        ${textSimples({ text: 'Massagens' })}
        ${Card()}
        ${textSimples({ text: 'Massagens' })}
        ${Card()}
        ${textSimples({ text: 'Limpeza de pele e outros serviços' })}
        ${Card()}
        ${Text()}
    </div>


  
  



  
 
    `


}