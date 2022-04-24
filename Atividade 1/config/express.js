const express = require('express');
let routes_users = require("../app/routes/users.js")
let routes_posts = require("../app/routes/posts")

module.exports = function() {
   var app = express()
   app.set("port", 3000)
   app.use(express.static('./public'))
   app.use(express.json())
   app.use(express.urlencoded({ extended: false }))
   routes_users(app)
   routes_posts(app)
   return app
};
