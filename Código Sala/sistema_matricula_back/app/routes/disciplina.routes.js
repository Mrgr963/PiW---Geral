let controller_disciplinas = require("../controllers/disciplinas.controller");
let controller_auth = require("../controllers/auth.controller");

module.exports = function(app){
    app.use('/disciplinas', controller_auth.checar);
    app.get('/disciplinas', controller_disciplinas.listarDisciplinas);
    app.post('/disciplinas', controller_disciplinas.inserirDisciplina);
} 