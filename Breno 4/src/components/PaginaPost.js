
import NavegadorSuperior from "./NavegadorSuperior";
import LinhaDoTempo from "./LinhaDoTempo";
import './PaginaPost.css'
import "./LinhaDoTempo.css"
import ComponentePost from "./ComponentePost"


function PaginaPost() {

    let texto = ""

    function Pegartweet(t){
        texto = t
   
        
    }

    function EnviarTweet(){
        console.log(texto)
    }

 


    return(
        <div className="EFundo2">
            <div className="fundochat">
                <NavegadorSuperior/>
        
                <div></div>
                <h2><i>FAÇA UM POST:</i></h2>
                <input type="text" onChange={(e) => Pegartweet(e.target.value)}></input>
                <button onClick={EnviarTweet}>Enviar!</button>
            
            </div>
    
           
       
            
        </div>
    )
}

export default PaginaPost;