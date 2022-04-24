let Disciplina = require("../models/disciplina.model");
let view_disciplina = require("../views/disciplinas.view");

// GET /disciplinas
module.exports.listarDisciplinas = function(req, res){
    let promise = Disciplina.find().exec();
    promise.then(
        function(disciplinas){
            res.status(200).json(view_disciplina.renderMany(disciplinas));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

// POST /disciplinas
module.exports.inserirDisciplina = function(req, res){
    let disciplina = req.body;
    let promise = Disciplina.create(disciplina);
    promise.then(
        function(disciplina){
            res.status(201).json(disciplina);
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}