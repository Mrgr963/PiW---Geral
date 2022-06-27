let express = require("express")
let routes_users = require("../app/routes/users.routes.js")
let routes_posts = require("../app/routes/posts.routes.js")
let routes_comments = require("../app/routes/comments.routes.js")


function setup(){
    let app = express();
    app.set("port", 3100);
    app.use(express.static('./public'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    routes_users(app)
    routes_posts(app)
    routes_comments(app)
    return app;
}

module.exports.setup = setup;