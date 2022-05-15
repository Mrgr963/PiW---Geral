let controller_alunos = require("../controllers/alunos.js");
let controller_auth = require("../controllers/auth.controller");

module.exports = function(app){
    app.post("/alunos/signin", controller_auth.logar);
    app.post("/alunos", controller_alunos.inserir_aluno);
    
    app.use("/alunos", controller_auth.checar);
    app.get("/alunos", controller_alunos.listar_alunos);
    // endpoint GET /alunos/2673782 -> retorna o aluno com id 2673782
    app.get("/alunos/:id", controller_alunos.obter_aluno); 

}

