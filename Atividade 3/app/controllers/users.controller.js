let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken");
let User = require("../models/users.model.js")
let view_user = require("../views/users.view.js")

module.exports.insertUser = function(req,res) {
    let user = new User({
        nome: req.body.nome,
        email: req.body.email,
        senha:bcrypt.hashSync(req.body.senha, 10)
    })

    let promise = User.create(user)

    promise.then(
        function(user){
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
        function(users){
        res.status(200).json(view_user.renderMany(users))}
    ).catch (
        function(error) {
            res.status(500).json(error)
        }
    )
}

// Ainda falta ajustar a negação do comando. /DELETE está chegando no "Operação não autorizada" mas ainda está realizando o código. problema está provavelmente no promise.
module.exports.deleteUser = function(req,res){
    let id = req.params.id;

    let token = req.headers.token
    let id_user = jwt.decode(token).id_user

    let promise = User.findByIdAndDelete(id).exec()

    console.log(id)
    console.log(id_user)

    promise.then(
        function(user){
            if(id == id_user){
                res.status(200).json(view_user.render(user))
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