const users = require("../routes/users.js")

let Users = [
    {
        id: 1,
        nome: "fulano",
        email: "asdfmovie@boll.com",
        senha: "asdf12345"
    }
];

module.exports.listaUsers = function(req, res){
    res.json(Users);
 };
 
module.exports.getUsers = function(req, res){
    let id = req.params.id
    let user = Users.find(user => (user.id==id))

    if(user){
        res.json(user);
    }else{
        res.status(404).send('User não encontrado');
    }

} 

module.exports.inserirUser = function(req, res) {
    Users.push(req.body)
    res.status(200).send(req.body)
}
 
module.exports.deleteUser = function(req, res){
    let id = req.params.id

    Users.splice(id-1, 1)
    res.status(200).send(req.body)
}