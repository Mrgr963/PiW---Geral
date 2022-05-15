let Comment = require("../models/comentario.model.js")
let view_comentario = require ("../views/comentario.view.js")

module.exports.insertComment = function(req,res) {
    let comment = req.body
    let promise = Comment.create(comment)

    promise.then(
        function(comment) {
            res.status(201).json(view_comentario.render(comment))
        }
    ).catch(
        function(error){
            res.status(500).json(error)
        }
    )
        
}

module.exports.listComments = function(req,res) {
    let promise = Comment.find().exec()

    promise.then(
        function(comment) {
            res.status(200).json(view_comentario.renderMany(comment))
        }
    ).catch(
        res.status(500).json(error)
    )
}

module.exports.deleteComment = function(req,res) {
    let id = req.params.id
    let promise = Comment.findByIdAndDelete(id).exec()

    promise.then(
        console.log("Comentário Deletado")
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    )
}