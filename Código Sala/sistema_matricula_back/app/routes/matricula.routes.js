let controller_matricula = require("../controllers/matricula.controllers");

module.exports = function(app){
    app.post("/matriculas", controller_matricula.inserirMatricula);
    app.get("/matriculas", controller_matricula.listarMatriculas);
}