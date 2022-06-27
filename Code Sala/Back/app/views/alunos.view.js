
function render(aluno){
    return {
        id: aluno._id,
        nome: aluno.nome,
        ira: aluno.ira,
        matricula: aluno.matricula
    }
}
module.exports.render = render;

module.exports.renderMany = function(alunos){
    return alunos.map(render);
}