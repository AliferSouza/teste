import App from '../src/index.js'
var valor = {value: 0}
export default function compoProxy(){



    const state = new Proxy(valor, {

        get: function(target, porpKey) {
            return target[porpKey];
          
        },
        set: function (target, porpKey, value) {
           return target[porpKey] = value || "0"
        }
    })
    
  

    window.Mais = () => {    
        state.value ++
        App()
    }

    window.Menos = () => {
        if(valor.value == 0){
        }else{      
            state.value --
            App()
     
        }
              
    }   

 function render(props){ 

    return  `
       <h1> Couter ${props}</h1>
       <h2 id="Valor"></h2> <h2>
       <button style="padding: 5rem font-size: bold 20px" onclick="Mais()">+</button>
       <button style="padding: 5rem font-size: bold 20px" onclick="Menos()">-</button>
       `
      
}
    
return render(state.value)
   

}