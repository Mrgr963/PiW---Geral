let controller = require("../controllers/users.js");

module.exports = function (app){
    app.get("/users",controller.listaUsers);
    app.get("/users/:id",controller.getUsers)
    app.post("/users", controller.inserirUser)
    app.delete("/users/:id",controller.deleteUser)
}