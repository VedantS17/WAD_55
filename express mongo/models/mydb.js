const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type:String,
        required: true
    },
    sub: {
        type: String,
        
        
    }

})

module.exports = mongoose.model('User', userSchema)