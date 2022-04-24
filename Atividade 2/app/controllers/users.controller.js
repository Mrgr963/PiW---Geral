let User = require ("../models/user.model.js")
let view_user = require ("../views/user.view.js")



module.exports.insertUser = function(req,res) {
    let user = req.body
    let promise = User.create(user)

    promise.then(
        function(user) {
            res.status(201).json(user)
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

//Listagens de Users do ID está dando um resultado incorreto.
// está pegando outro elemento que não é o objeto.
module.exports.findUser = function(req,res) {
    let id = req.params.id
    let promise = User.findById(id).exec()

    promise.then(
        function(user) {
            res.status(200).json(view_user.render(user));
        }
    ).catch(
        function(error){
            res.status(404). json(error);
        }
    )
}