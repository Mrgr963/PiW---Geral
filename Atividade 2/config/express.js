let express = require("express")
let routesUsers = require("../app/routes/users.routes.js")
let routesPosts = require("../app/routes/posts.routes.js")
let routesComments = require("../app/routes/comentarios.routes.js")

function setup(){
    let app = express();
    app.set("port", 3000);
    app.use(express.static('./public'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    routesUsers(app)
    routesPosts(app)
    routesComments(app)
    
    return app;
}

module.exports.setup = setup;   