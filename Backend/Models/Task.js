const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'must provide a title '],
        trim: true,
        maxlength: [20, 'title cannot be more than 20 characters ']
    },
    completed: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        default: " No description"
    },
    date:{
        type: Date
    }

})

module.exports = mongoose.model('Task', TaskSchema);
