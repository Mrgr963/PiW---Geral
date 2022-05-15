let Post = require ("../models/post.model.js")
let view_post = require ("../views/post.view")

module.exports.insertPost = function(req,res) {
    let post = req.body
    let promise = Post.create(post)

    promise.then(
        function(post) {
            res.status(201).json(post)
        }
    ).catch(
        function(error){
            res.status(500).json(error)
        }
    )
}

module.exports.listPosts = function(req,res) {
    let promise = Post.find().exec()

    promise.then(
        function(posts) {
            res.status(200).json(view_post.renderMany(posts));
        }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    )
}

module.exports.findPost = function(req,res) {
    let id = req.params.id
    let promise = Post.findById(id).exec()

    promise.then(
        function(post) {
            res.status(200).json(view_post.render(post));
        }
    ).catch(
        function(error){
            res.status(404).json(error);
        }
    )
}

module.exports.deletePost = function(req,res) {
    let id = req.params.id
    let promise = Post.findByIdAndDelete(id).exec()

    promise.then(
        console.log("Post Deletado")
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    )
}