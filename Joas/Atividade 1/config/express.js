const express = require('express');
let userRouters = require("../app/routes/users.js")
let postsRouters = require("../app/routes/posts.js")

module.exports = function() {
   var app = express()
   app.set("port", 3000)
   app.use(express.static('./public'))
   app.use(express.json())
   app.use(express.urlencoded({ extended: false }))
   userRouters(app)
   postsRouters(app)
   return app
};
