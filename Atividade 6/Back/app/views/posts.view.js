function render (post) {
    return {
        id: post._id,
        texto: post.texto,
        likes: post.likes
    }
}

module.exports.render = render

module.exports.renderMany = function(posts){
    return posts.map(render)
}