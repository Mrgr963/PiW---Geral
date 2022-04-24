const posts = require("../routes/posts.js")

let Posts = [
    {
        id: 0,
        texto: "Hello World",
        likes: "6",
    }
]

module.exports.list_posts = function(req,res) {
    let posts_all = [...Posts]

    res.json(posts_all)
}

module.exports.add_post = function(req,res) {
    Posts.push(req.body)
    res.status(200).send(req.body)
}

module.exports.obter_post = function(req, res){
    let id = req.params.id;
    let post = null;

    for(let i=0; i<Posts.length; i++){
        if(Posts[i].id == id){
            post = Posts[i];
        }
    }
    if(post != null){
        res.json(post);
    }
    else{
        res.status(404).send("Post não encontrado");
    }
}

module.exports.delete_post = function(req, res) {
    let id = req.params.id

    Posts.splice(id-1, 1)
    res.status(200).send(req.body)
}