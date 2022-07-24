import { Select } from '../src/lib/lib.js'


export default function Menu(props) {

 
  window.myFunction = () => {
    Select("#myDropdown").classList.toggle("show");
  }

  window.onclick = function (event) {
     if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }

  }


  return `
          ${props.Titulo}
         <div class="dropdown">       
            <button onclick="myFunction()" class="dropbtn">Dropdown  Teste Component</button>
            <div id="myDropdown" class="dropdown-content">
                <a  href="/" data-link>  Home</a>
                <a  href="/Login" data-link>  Login</a>
                <a  href="/Criar" data-link> Criar</a>
            
               
            </div>
          </div>
   
    `

}