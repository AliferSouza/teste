import Pages from '../pages/Pages.js'
const page = Pages()


function Select(props){  
    const Selecionado = window.document.querySelector(`${props}`)
    return Selecionado
}

function Render(event){     
   const valorDoEvento  = event.target.innerHTML 
   page[valorDoEvento] ?  RouterDom(page[valorDoEvento]) : RouterDom(page.Home)

}


function router(props) {     
    const pathname = window.location.hash

    if (props.URL) {
        console.log("ALifer")      
    } else if (localStorage.hasOwnProperty("admIndetidadeEConfiguracao")) {
        console.log("Oliveira")   
    }
        console.log("Souza")   
  
    page[pathname] ?  RouterDom(page[pathname]) : RouterDom(page.Home)
}


function RouterDom (rendeComponente) {    
    const root = document.body
    root.innerHTML = rendeComponente()
}



function bancoLocal(props){  
    const admIndetidadeEConfiguracao = JSON.parse(localStorage.getItem('admIndetidadeEConfiguracao') || "[]")  
    const intesProdutosEOutros = JSON.parse(localStorage.getItem('intesProdutosEOutros') || "[]") 


    if (!localStorage.hasOwnProperty("DB")) {  
        localStorage.setItem("admIndetidadeEConfiguracao", JSON.stringify(props))   
    }   
      
        intesProdutosEOutros.push(props)
        localStorage.setItem("intesProdutosEOutros", JSON.stringify(intesProdutosEOutros))   
     
    const resultadoDoBanco = {
        admIndetidadeEConfiguracao,
        ...intesProdutosEOutros
    }
    return resultadoDoBanco
   
}



function on(props){
    const Selecionado = document.addEventListener(`${props}`, (e) => {
        return console.log(e)
    })
}


function rederChenger(event){      
     const valorDoEvento  = event.target.id || "#Home"
     page[valorDoEvento] ? RouterDom(page[valorDoEvento]) : RouterDom(page.Home)
}


export { router,
         RouterDom,       
         bancoLocal,
         Select,
         Render,
         on,
         rederChenger
    }