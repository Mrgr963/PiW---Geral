let controller_comments = require("../controllers/comentarios.controller.js")

module.exports = function(app) {
    app.post("/comments", controller_comments.insertComment)
    app.get ("/comments", controller_comments.listComments)
    app.delete("/comments/:id", controller_comments.deleteComment)
}