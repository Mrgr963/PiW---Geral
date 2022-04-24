let view_aluno = require("../views/alunos.view");
let view_disciplina = require("../views/disciplinas.view");

function render(matricula){
    return {
        id: matricula._id,
        aluno: view_aluno.render(matricula.aluno),
        disciplina: view_disciplina.render(matricula.disciplina),
        codigo: matricula.codigo
    }
}

module.exports.render = render;

module.exports.renderMany = function(matriculas){
    return matriculas.map(render);
}
