
export default function Counter(...rest) {
  var valor = 0


  function Render(prop){   
   var componentDOM = ""
    addEventListener('DOMContentLoaded', () => {
    var componentDOM = document.querySelector(`${rest[0]}`)  
     
    prop(componentDOM, )
  })

  console.log(componentDOM)

  }  

  const a = Render(fucionalidadess)




  function fucionalidadess(componentDOM, estadoApp){   
       
    componentDOM.addEventListener('click', (e) => {     
        if(e.target.id === "mais"){ valor ++ }
        if(e.target.id === "menos"){valor -- }        
  
       if(!estadoApp){  
        console.log("b")  
        componentDOM.innerHTML = componet(valor) 
       }else{
        console.log("a")
        componentDOM.innerHTML += componet(valor) 
       }    
              
    });
  

 }




  
   function componet(){ 
    return `
      <h1>Couter: ${valor}</h1>
      <button id="mais" type="button" >Click</button> 
      <button id="menos" type="button">Click</button>
        `}

  
        
  return componet()



}