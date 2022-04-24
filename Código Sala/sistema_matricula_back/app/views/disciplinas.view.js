function render(disciplina){
    return {
        id: disciplina.id,
        codigo: disciplina.codigo,
        nome: disciplina.nome
    }
}

module.exports.render = render;

module.exports.renderMany = function(disciplinas){
    return disciplinas.map(render);
}