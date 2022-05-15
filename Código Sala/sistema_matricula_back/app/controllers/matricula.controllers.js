let Matricula = require("../models/matricula.model");
let view_matricula = require("../views/matriculas.view");
let jwt = require("jsonwebtoken");

// POST /matricula
module.exports.inserirMatricula = function(req, res){
    let id_disciplina = req.body.disciplina;
    let codigo = req.body.codigo;

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_aluno = payload.id_aluno;

    let matricula = {
        disciplina: id_disciplina,
        aluno: id_aluno,
        codigo: codigo
    }
    
    let promise = Matricula.create(matricula);
    promise.then(
        function(matricula){
            res.status(201).json(view_matricula.render(matricula));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

// GET /matriculas
module.exports.listarMatriculas = function(req, res){
    let token = req.headers.token;
    let id_aluno = jwt.decode(token).id_aluno;

    let promise = Matricula.find({"aluno": id_aluno})
                           .populate("disciplina")
                           .populate("aluno")
                           .exec();
    promise.then(
        function(matriculas){
            res.status(200).json(view_matricula.renderMany(matriculas));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

// GET /matriculas/:id
module.exports.obter_matricula_por_id = function(req, res){
    let id_matricula = req.params.id;
    
    let token = req.headers.token;
    let id_aluno = jwt.decode(token).id_aluno;

    let promise = Matricula.findById(id_matricula)
                            .populate('disciplina')
                            .populate('aluno')
                            .exec();
    promise.then(
        function(matricula){
            if(matricula.aluno._id == id_aluno){
                res.status(200).json(view_matricula.render(matricula));
            }else{
                res.status(401).send("Operação não autorizada");
            }
        }
    ).catch(
        function(error){
            res.status(400).json(error);
        }
    )
}