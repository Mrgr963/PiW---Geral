let Aluno = require("../models/aluno.model");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
const { JsonWebTokenError } = require("jsonwebtoken");

// POST /alunos/signin
module.exports.logar = function(req, res){
    let matricula = req.body.matricula;
    let senha_requisicao = req.body.senha;
    let promise = Aluno.findOne({"matricula": matricula});
    promise.then(
        function (aluno){
            if(bcrypt.compareSync(senha_requisicao, aluno.senha)){
                let token = jwt.sign({
                    id_aluno: aluno._id,
                    matricula: aluno.matricula
                }, "piw2022.1");
                res.status(200).json({token: token});
            }else{
                res.status(401).send("Credenciais inválidas");
            }
        }
    ).catch(
        function(error){
            res.status(401).send("Credenciais inválidas");
        }
    )
}

module.exports.checar = function(req, res, next){
    let token = req.headers.token;
    jwt.verify(token, "piw2022.1", function(err, decoded){
        if(err){
            res.status(401).json({mensagem:"Credencial inválida!"});
        }else{
            next();
        }
    });
}