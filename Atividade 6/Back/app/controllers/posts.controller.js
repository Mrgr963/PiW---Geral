let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken");
let Post = require("../models/posts.model.js")
let view_posts = require("../views/posts.view.js")

module.exports.insertPost = function(req,res) {
    let token = req.headers.token
    let payload = jwt.decode(token)
    let id_user = payload.id_user

    let post = new Post ({
        texto: req.body.texto,
        likes: req.body.likes,
        id_user: id_user
    })


    let promise = Post.create(post)
    promise.then(
        function(post){
            res.status(201).json(view_posts.render(post))
        }
    ).catch(
        function(error){
            res.status(500).json(error)
        }
    )
}

module.exports.listPosts = function(req,res){
    let promise = Post.find().exec()

    promise.then(
        function(posts){
            res.status(200).json(view_posts.renderMany(posts))
        }
    ).catch(
        function(error){
            res.status(500).json(error)
        }
    )
}

// Ainda falta ajustar a negação do comando. /DELETE está chegando no "Operação não autorizada" mas ainda está realizando o código. problema está provavelmente no promise.
module.exports.deletePost = function(req,res){
    let id = req.params.id
    let token = req.headers.token
    let payload = jwt.decode(token)
    let id_user = payload.id_user
    let promise = Post.findByIdAndDelete(id).exec()

    promise.then(
        function(post){
            if (id == id_user) {
                res.status(200).json(view_posts.render(post))
            } else {
                res.status(401).send("Operação não autorizada")
            }
        }
    ).catch(
        function(error) {
            res.status(400).json(error)
        }
    )
}