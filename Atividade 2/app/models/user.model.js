let mongoose = require("mongoose")

module.exports = function() {
    let schema = mongoose.Schema({
        // Provavelmente a inserção do ID é pra ser String
        id: {
            type: Number,
            required: true
        },

        nome: {
            type:String,
            required: true
        },

        email: {
            type:String,
            required: true
        },

        senha: {
            type:String,
            required: true
        }
    })
    return mongoose.model('User', schema);
}()