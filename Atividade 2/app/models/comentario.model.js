let mongoose = require("mongoose")

module.exports = function() {
    let schema = mongoose.Schema({
        texto: {
            type: String,
            required: true
        },

        id_post: {
            type: String,
            required: true
        },

        id_usuario: {
            type: String,
            required:true
        }
    })
    return mongoose.model('Comment', schema);
}()