let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let User = require("../models/users.model.js")
const { JsonWebTokenError } = require("jsonwebtoken");

module.exports.login = function(req,res){
    let email = req.body.email
    let passwordReq = req.body.senha

    let promise = User.findOne({"email":email})
    promise.then(
        function(user){
            if(bcrypt.compareSync(passwordReq, user.senha)){
                let token = jwt.sign({
                    id_user: user._id,
                    email: user.email
                }, "atv3")
                res.status(200).json({token: token})
            } else{
                res.status(401).send("Credenciais Inválidas")
            }
        }
    ) .catch(
        function(error){
            res.status(401).send("Credenciais Inválidas")
        }
    )
}

module.exports.check = function(req, res, next){
    let token = req.headers.token;
    jwt.verify(token, "atv3", function(err, decoded){
        if(err){
            res.status(401).json({mensagem:"Credencial inválida!"});
        }else{
            next();
        }
    });
}