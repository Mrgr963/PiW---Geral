let controller_users = require("../controllers/users.controller.js")
let controller_auth = require("../controllers/auth.controller.js")

module.exports = function(app) {
    app.post("/users", controller_users.insertUser)
    app.post("/users/signin", controller_auth.login)
    app.use("/users",controller_auth.check)
    app.delete("/users/:id", controller_users.deleteUser)
    app.get("/users",controller_users.listUsers)
}