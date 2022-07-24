
export default function Counter(...rest) {
  var valor = 0


   addEventListener('DOMContentLoaded', () => {
    const componentDOM = document.querySelector(`${rest[0]}`) 
    componentDOM.addEventListener('click', (e) => {     
      if(e.target.id === "mais"){ valor ++ }
      if(e.target.id === "menos"){valor -- }        
      componentDOM.innerHTML = componet(valor) 
     })   

  })
       

   function componet(){ 
    return `
      <h1>Couter: ${valor}</h1>
      <button id="mais" type="button" >Click</button> 
      <button id="menos" type="button">Click</button>
        `}

  
        
  return componet()



}