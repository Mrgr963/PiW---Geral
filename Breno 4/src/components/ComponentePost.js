
import { BsFillPersonFill } from "react-icons/bs";

import "./Componente.css"

function Twetts({nome,mensagem,n_likes}) {

    let tweets =  ["tweets"]



    return(
        <div className="mensagem-real">
                        <div className="nomeusuario">
                            
                            <p className="cimausuario"><div><BsFillPersonFill size="20px"/></div> {nome}</p></div>
                        <div className="mensagemusuario">
                         {mensagem}</div>
                        <div className="dadosusuario">
                        <div className="like">Numero de Likes: {n_likes}</div>
                        <button className="botaolike">DAR LIKE</button>
        </div>
        </div>

    )
}




function Post(){
    
    let infoPosts = [
        {
        id: 1,
        nome:"Joao",
        texto:"Menino, tá quente demais hoje",
        qtdLikes:1
        },
        {
        id: 2,
        nome:"Tiago",
        texto:"Num aguento mais essa quintura",
        qtdLikes:3
        },
        {
        id: 3,
        nome:"Ezequias",
        texto:"Estou na chuva aaaaaaaaa",
        qtdLikes:10
        },
        {
            id: 2,
            nome:"Tiago",
            texto:"Num aguento mais essa quintura",
            qtdLikes:5
            }
   
    ]

    let tweets = [];

    for(let infopost of infoPosts){
        tweets.push(<Twetts nome={infopost.nome} mensagem={infopost.texto} n_likes={infopost.qtdLikes}></Twetts>)
    }


    return(
        <div className="fundochat">
         
            <div className="mensagens2">
            <div className="chat">
                <div className="galeria-tweets">{tweets}</div>
                </div>
                
            </div>
            

        </div>
    )
}

export default Post;

