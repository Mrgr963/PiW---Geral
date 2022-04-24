let controller_posts = require("../controllers/posts.js")

module.exports = function(app) {
    app.get("/posts", controller_posts.list_posts)

    app.post("/posts", controller_posts.add_post)
    
    app.get("/posts/:id", controller_posts.obter_post)

    app.delete("/posts/:id", controller_posts.delete_post)
}