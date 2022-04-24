let controller = require("../controllers/posts.js");

module.exports = function (app){
    app.get("/posts",controller.listaPosts);
    app.get("/posts/:id",controller.getPosts)
    app.post("/posts", controller.inserirPost)
    app.delete("/posts/:id",controller.deletePosts)
}