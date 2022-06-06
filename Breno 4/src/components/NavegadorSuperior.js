import App from "../App";
import "./NavegadorSuperior.css"


function NavegadorSuperior(){







    return(
        <div className="Navegador">
        <div className="logo"><img src="https://upload.wikimedia.org/wikipedia/pt/thumb/3/3d/Twitter_logo_2012.svg/172px-Twitter_logo_2012.svg.png?20140722042039" ></img>
        <h2><i>Twitter</i></h2>
        </div>
        <div className="botoes">
            <a className="botao" href="/"><p className="botaolinha">Linha do Tempo</p></a>
            <a className="botao" href="/postar"><p className="botaopostar">Postar</p></a>
            <p className="nomeusuario">Breno</p>
        </div>
    
        
        </div>
    )
}

export default NavegadorSuperior;

