let controller_posts = require("../controllers/posts.controller.js")
let controller_auth = require("../controllers/auth.controller.js")

module.exports = function(app) {
    app.use("/posts",controller_auth.check)
    app.post("/posts",controller_posts.insertPost)
    app.get("/posts", controller_posts.listPosts)
    app.delete("/posts/:id",controller_posts.deletePost)
}