import Pages from '../src/pages/Pages.js'
const page = Pages()


function Select(props){  
    const Selecionado = document.querySelector(`${props}`)
    return Selecionado
}






function Render(event){ 
   const valorDoEvento  = event.target.innerHTML 
   page[valorDoEvento] ?  RouterDom(page[valorDoEvento]) : RouterDom(page.Home)

}

function Router() {
    const path = window.location.pathname.replace("/", '') 
    page[path] ?  RouterDom(page[path]) : RouterDom(page.Home)
}

function RouterHash(){
    window.location.href = "http://localhost:3000/#Home" 
    window.addEventListener('hashchange', () => {
    const valorUrlHash = location.hash.replace("#", '')
    page[valorUrlHash] ? RouterDom(page[valorUrlHash]) : RouterDom(page.Home)
})

}


function RouterDom (rendeComponente) {
    const root = document.querySelector('#root')
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
        return console.log(e.target)
    })
}





export { Router,
         RouterDom,       
         bancoLocal,
         Select,
         Render,
         on,
         RouterHash,
              
    }