let Aluno = require('../models/aluno.model.js');
let view_aluno = require("../views/alunos.view");

// GET /alunos
module.exports.listar_alunos = function(req, res){
    let promise = Aluno.find().exec();
    promise.then(
        // alunos recebe o resultado da consulta - a lista de alunos
        function(alunos){
            res.json(view_aluno.renderMany(alunos));
        }
    ).catch(
        // error recebe o objeto que representa o erro da consulta
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.obter_aluno = function(req, res){
    let id = req.params.id;
    let promise = Aluno.findById(id).exec();
    promise.then(
        function(aluno){
            res.status(200).json(view_aluno.render(aluno));
        }
    ).catch(
        function(error){
            res.status(500). json(error);
        }
    )  
}

module.exports.inserir_aluno = function(req, res){
    // req.body é um objeto json
    // req.body.id -> id
    // req.body.nome -> nome
    // req.body -> aluno
    let aluno = req.body;
    let promise = Aluno.create(aluno);
    promise.then(
        function(aluno){
            res.status(201).json(aluno);
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}