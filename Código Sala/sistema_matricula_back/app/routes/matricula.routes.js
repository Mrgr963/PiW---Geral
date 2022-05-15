let controller_matricula = require("../controllers/matricula.controllers");
let controller_auth = require("../controllers/auth.controller");

module.exports = function(app){
    app.use("/matriculas", controller_auth.checar);
    app.post("/matriculas", controller_matricula.inserirMatricula);
    app.get("/matriculas", controller_matricula.listarMatriculas);
    app.get("/matriculas/:id", controller_matricula.obter_matricula_por_id);
}