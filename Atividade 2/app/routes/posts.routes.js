let controller_posts = require("../controllers/posts.controller.js")

module.exports = function(app) {
    app.get("/posts", controller_posts.listPosts)
    app.post("/posts", controller_posts.insertPost)
    app.get("/posts/:id",controller_posts.findPost)
    app.delete("/posts/:id", controller_posts.deletePost)
}