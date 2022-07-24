import { Select} from "../src/lib/lib.js"

export default function Couter() {
    var valor = 0
    window.Mais = () => {
       
        Select("#Valor").innerHTML = valor    
    }

    window.Menos = () => {
        if(valor == 0){
        }else{         
            Select("#Valor").innerHTML = valor   
        }
              
    }   


    return  `
       <h1> Couter </h1>
       <h2 id="Valor"> 0 <h2>
       <button style="padding: 5rem font-size: bold 20px" onclick="Mais(valor ++)">+</button>
       <button style="padding: 5rem font-size: bold 20px" onclick="Menos(valor --)">-</button>
       `
      

}