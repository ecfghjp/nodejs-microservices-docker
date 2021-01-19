const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    status: String,
    username:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);