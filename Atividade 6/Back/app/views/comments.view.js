function render(comment) {
    return {
        id: comment._id,
        texto: comment.texto,
        id_post: comment.id_user
    }
}

module.exports.render = render

module.exports.renderMany = function(comment){
    return comment.map(render)
}