import "./ComponentePost.css"

function ComponentePost({nome,texto,qtdLikes}){

    let posts = ["posts"]

    return(
        <div className="msgCard">

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
    )
}

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
            "nome":"Tiago",
            "texto":"Num aguento mais essa quintura",
            "qtdLikes":"3"
        },
        {
            id:2, 
            "nome":"Samara",
            "texto":"Oi meu nome é Samara, tenho 14 anos (Teria se estivesse viva), morri aos 13 em Cascavel-PR. Eu andava de bicicleta Quando não pude desviar de um arame farpado. O pior foi que o dono do lote não quis me ajudar, riu bastante mim após agonizar por 2 horas enroscada no arame eu faleci, através dessa mensagem eu peço que façam com que eu possa descançar em paz. Envie isso para 20 comunidades e minha alma estara sendo salva por você e pelos outros 20 que receberão. Caso não repasse essa mensagem vou visitar-lhe hoje a noite assim vc poderá conhecer o tal arame bem de pertinho. Dia 15 de Julho Mariana resolveu rir dessa mensagem, uma noite depois ela sumiu sem deixar vestigios. O mesmo aconteceu com Kare dia 18 de Outubro. Não Quebre essa corrente por favor, a não ser que queira sentir a minha presença",
            "qtdLikes":"666"
        },
    ]

    let posts = []

    for (let infoposts of infoPosts) {
        posts.push(<ComponentePost nome={infoposts.nome} texto={infoposts.texto} qtdLikes={infoposts.qtdLikes}></ComponentePost>)
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