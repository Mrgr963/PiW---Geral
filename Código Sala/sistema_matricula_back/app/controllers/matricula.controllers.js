let Matricula = require("../models/matricula.model")
let view_matricula = require("../views/matriculas.view")

// POST /matricula
module.exports.inserirMatricula = function(req, res){
    let matricula = req.body;
    let promise = Matricula.create(matricula);
    promise.then(
        function(matricula){
            res.status(201).json(matricula);
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

// GET /matriculas
module.exports.listarMatriculas = function(req, res){
    let promise = Matricula.find()
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