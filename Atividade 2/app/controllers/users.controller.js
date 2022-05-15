let User = require ("../models/user.model.js")
let view_user = require ("../views/user.view.js")


// Falta implementar por completo o GetPostsByUser
module.exports.insertUser = function(req,res) {
    let user = req.body
    let promise = User.create(user)

    promise.then(
        function(user) {
            res.status(201).json(view_user.render(user))
        }
    ).catch(
        function(error){
            res.status(500).json(error)
        }
    )
        
}

module.exports.listUsers = function(req,res) {
    let promise = User.find().exec()

    promise.then(
        function(users) {
            res.status(200).json(view_user.renderMany(users));
        }
    ).catch (
        function(error) {
            res.status(500).json(error);
        }
    )
}

module.exports.findUser = function(req,res) {
    let id = req.params.id
    let promise = User.findById(id).exec()

    promise.then(
        function(user) {
            res.status(200).json(view_user.render(user));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.deleteUser = function (req,res) {
    let id = req.params.id
    let promise = User.findByIdAndDelete(id).exec()

    promise.then(
        function(user) {
            res.status(200).json('Usuário removido!')
        }
    ).catch(
        function(error){
            res.status(500).json(error)
        }
    )
}

// Falta implementar por completo o GetPostsByUser
module.exports.getPostsbyUser = function(req,res) {
    let id = req.params.id
    let promise = User.findById(id).exec()

    promise.then(
        function(user) {
            res.status(200).json(view_post.renderMany(user))
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}