let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken");
const { find } = require("../models/comments.model.js");
let Comment = require("../models/comments.model.js")
let view_comment = require("../views/comments.view.js")

module.exports.insertPost = function(req,res) {
    let token = req.headers.token
    let payload = jwt.decode(token)
    let id_user = payload.id_user

    let comment = new Comment({
        texto: req.body.texto,
        id_post: req.body.id_post,
        id_user: id_user
    })

    let promise = Comment.create(comment)
    promise.then(
        function(post){
            res.status(201).json(view_comment.render(comment))
        }
    ).catch(
        function(error){
            res.status(500).json(error)
        }
    )
}

module.exports.listComments = function(req,res){
    let promise = Comment.find().exec()

    promise.then(
        function(comments){
            res.status(200).json(view_comment.renderMany(comments))
        }
    ).catch(
        function(error){
            res.status(500).json(error)
        }
    )

}

// Ainda falta ajustar a negação do comando. /DELETE está chegando no "Operação não autorizada" mas ainda está realizando o código. problema está provavelmente no promise.
module.exports.deleteComment = function(req,res){
    let id = req.params.id
    let token = req.headers.token
    let payload = jwt.decode(token)
    let id_user = payload.id_user
    let promise = Comment.findByIdAndDelete(id).exec()

    promise.then(
        function(comment){
            if(id == id_user){
                res.status(200).json(view_comment.render(comment))
            } else{
                res.status(401).send("Operação não autorizada")
            }
        }
    ).catch(
        function(error){
            res.status(400).json(error)
        }
    )
}