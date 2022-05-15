let controller_comments = require("../controllers/comments.controller.js")
let controller_auth = require("../controllers/auth.controller.js")

module.exports = function (app) {
    app.use("/comments", controller_auth.check)
    app.post("/comments",controller_comments.insertPost)
    app.get("/comments",controller_comments.listComments)
    app.delete("/comments/:id",controller_comments.deleteComment)
}