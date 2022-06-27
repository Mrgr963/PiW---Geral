import "./ComponentePost.css"

function ComponentePost({nome,texto,qtdLikes}){

    let posts = ["posts"]

    return(
        <div className="msgCard">

            <div className="cardSup">
                <div className="userName">

                <p className="userCardName">
                    <div>
                        <img className="imgHeader" src="https://external-preview.redd.it/857aq6Jb7SnQv5v0QcTPsJ5UlkXC9JaPF9xoI2rzje8.jpg?auto=webp&s=86be4c4a49af01bf51a4dfc3b7c006fc1ee5a591"></img>
                    </div>
                    {nome}
                </p>
            </div>

            <div className="userMsg">
                {texto}
            </div>

            <div className="userData">
                <div className="qtdLikes">
                    Curtidas: {qtdLikes}
                </div>
                <button className="like">CURTIR!</button>
            </div>
            </div>
            <div className="cardInf">
                <div className="formsSpace">
                    <form className="form">
                        <div className="formContent">
                            <input className="formInput" name="texto" value="Insira um comentário..." background-color="black"></input>
                            <div className="buttonSubmit">
                                 <input className="submitComent" type="submit"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

function Comment(nome, texto) {
    let comments = ["comments"]

    return(
        <div className="commentCard">
            <div className="commentName">
                <p className="commentCardName">
                    {nome}
                </p>
            </div>

            <div className="commentText">
                {texto}
            </div>

        </div>
    )
}

// Problema está aqui. Não consegui fazer.
function Post(){
    let infoPosts = [
        {
            id:1, 
            "nome":"Joao", 
            "texto":"Menino, tá quente demais hoje",
            "qtdLikes":"1"
        },


        {
            id:2, 
            "nome":"Joao", 
            "texto":"Menino, tá quente demais hoje",
            "qtdLikes":"1"
        }
    ]

    let infoComments = [
        {
            id:1,
            "nome":"Robson",
            "texto":"Num é que tá?",
        },
        {
            id:2,
            "nome":"Luana",
            "texto":"Armaria! Num aguento mais!",
        }
    ]

    let posts = []
    let comments =[]

    for (let infoposts of infoPosts) {
        posts.push(<ComponentePost nome={infoposts.nome} texto={infoposts.texto} qtdLikes={infoposts.qtdLikes}></ComponentePost>)
    }

    for (let infocomments of infoComments) {
        comments.push(<Comment nome={infocomments.nome} texto={infoPosts.texto}></Comment>)
    }

    return(
        <div className="geralBg">
            <div className="timelineBg">
            <div className="msg">
                <div className="chat">
                    <div className="feed">
                        {posts}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Post