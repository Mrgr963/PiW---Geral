function render(user) {
    return{
        id: user._id,
        nome: user.nome,
        email: user.email,
    }
}

module.exports.render = render

module.exports.renderMany = function(users) {
    return users.map(render)
}