const posts = require("../routes/posts.js")

let Posts = [
    {
        id: 1,
        texto: "haaaaaaaaaaaaa",
        likes: "1.5",
    }
];

module.exports.listaPosts = function(req, res){
    res.json(Posts);
 };
 
module.exports.getPosts = function(req, res){
    let id = req.params.id
    let posts = Posts.find(posts => (posts.id==id))

    if(posts){
        res.json(posts);
    }else{
        res.status(404).send('post não encontrado');
    }

} 

module.exports.inserirPost = function(req, res) {
    Posts.push(req.body)
    res.status(200).send(req.body)
}
 
module.exports.deletePosts = function(req, res){
    let id = req.params.id

    Posts.splice(id-1, 1)
    res.status(200).send(req.body)
}