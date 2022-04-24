let controller_users = require("../controllers/users.js")

module.exports = function(app) {
    app.get("/users", controller_users.list_users)

    app.get("/users/:id", controller_users.obter_user)

    app.post("/users", controller_users.add_user)

    app.delete("/users/:id", controller_users.delete_user)
}