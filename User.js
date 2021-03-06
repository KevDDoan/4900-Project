const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        //required: true
    },
    password: {
        type: String,
        //required: true
    },
    fileName: {
        type: String,
        //required: true
    },
    dateUploaded: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;