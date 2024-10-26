const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema

const cardSchema = new Schema({
   
    title:{
      type: String,
      required: true
    },

    description:{
        type: String,
        required: true
    },

    due_date:{
        type: Date,
        required: true
    },
    
    label:{
        type: String,
        required: true
    },

    attachment:{
        type: String
    },

    userId:{
        type: Number,
        ref: User
    }

})

module.exports = mongoose.model('Card',cardSchema);