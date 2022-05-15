let mongoose = require("mongoose")

module.exports = function() {
    let schema = mongoose.Schema({
        texto:{
            type: String,
            required: true
        },
        id_post:{
            type: String,
            required:true
        },

        id_user:{
            type: String,
            required:false
        }
    })
    return mongoose.model('Comment', schema);
}()