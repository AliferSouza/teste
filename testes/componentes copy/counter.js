export default function Counter(...rest) {
  var valor = 0


  function Render(estadodoaplicao){

    addEventListener('DOMContentLoaded', () => {
    const componentDOM = document.querySelectorAll("counter")   
    console.log(componentDOM)
    fucionalidadess(componentDOM, estadodoaplicao)

  })

  }  

  function fucionalidades(componentDOM, comp, estadodoaplicao){ 
    componentDOM.addEventListener('click', (e) => { 
      console.log(componentDOM)
      if(e.target.id === "mais"){
        valor ++
      }
      if(e.target.id === "menos"){
        valor --
      }          

     if(!estadodoaplicao){
      componentDOM.innerHTML = comp(valor) 
     }else{
      componentDOM.innerHTML += compo(valor) 
     }     
   })

  }


  function fucionalidadess(componentDOM, comp, estadodoaplicao){ 
    

    componentDOM.forEach(element => {
      
      element.addEventListener('click', (e) => {     
        if(e.target.id === "mais"){ valor ++ }
        if(e.target.id === "menos"){valor -- }        
  
       if(!estadodoaplicao){    
        element.innerHTML = comp(valor) 
       }else{
        element.innerHTML += comp(valor) 
       }    
      
     });

      
    });
  

 }

  Render(componet,)

  
   function componet(){ 
    return `
      <h1>Couter: ${valor}</h1>
      <button id="mais" type="button" >Click</button> 
      <button id="menos" type="button">Click</button>
        `}

  
        
  return componet()



}