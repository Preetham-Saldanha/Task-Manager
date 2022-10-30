const mongoose = require("mongoose");

const TaskSchemaUser = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'must provide a title '],
        trim: true,
        maxlength: [20, 'title cannot be more than 20 characters ']
    },
    completed: {
        type: Boolean,
        default: false
    }
   
})

module.exports = mongoose.model('users', TaskSchemaUser);