function render(user) {
    return{
        id: user.id,
        nome: user.nome,
        email: user.email,
        senha: user.senha
    }
}

module.exports.render = render

module.exports.renderMany = function(users) {
    return users.map(render)
}