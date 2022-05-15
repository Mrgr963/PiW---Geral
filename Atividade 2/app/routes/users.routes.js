let controller_users = require("../controllers/users.controller.js")

module.exports = function(app) {
    app.get("/users", controller_users.listUsers)
    app.post("/users", controller_users.insertUser)
    app.get("/users/:id", controller_users.findUser)
    app.delete("/users/:id", controller_users.deleteUser)
    app.get("/users/:id/posts", controller_users.getPostsbyUser)
}