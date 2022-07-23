export default function textSimples(props) {    
    return `   
    <div style=
    "
    width: 100;
    display:flex;
    margin:50px; 

    "
    
    >
        <h1 style=" background: " class="container-texte-home-04">${props.text || ""}</h1>
    </div>
        `

}