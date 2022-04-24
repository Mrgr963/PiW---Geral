const users = require("../routes/users")

let Users =[

    {
        id: 0,
        nome: "User_Test",
        email: "Thi",
        senha: "123",
    }

]

module.exports.list_users = function(req, res) {
    let users_all = [...Users]

    res.json(users_all)
}

module.exports.obter_user = function(req, res){
    let id = req.params.id;
    let user = null;

    for(let i=0; i<Users.length; i++){
        if(Users[i].id == id){
            user = Users[i];
        }
    }
    if(user != null){
        res.json(user);
    }
    else{
        res.status(404).send("Usuário não encontrado");
    }
}

module.exports.add_user = function(req, res) {
    Users.push(req.body)
    res.status(200).send(req.body)
}

module.exports.delete_user = function(req, res) {
    let id = req.params.id

    Users.splice(id-1, 1)
    res.status(200).send(req.body)
}