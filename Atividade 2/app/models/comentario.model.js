let mongoose = require("mongoose")

module.exports = function(){
    let schema = mongoose.Schema({
        // Provavelmente a inserção do ID é pra ser String
        id: {
            type: Number,
            required: true
        },
        
        texto: {
            type: String,
            required: true
        },
        
        id_post: {
            type: Number,
            required:true
        },

        id_usuario: {
            type: Number,
            required:true
        }
    })
    return mongoose.model('Comentario', schema);
}