
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({


    user_id: {
        type: Number,
        // required: true
    },
    email: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },



})

module.exports = mongoose.model('User', userSchema);