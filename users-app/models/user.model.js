const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    username: String,
    email : String,
    password: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userschema);