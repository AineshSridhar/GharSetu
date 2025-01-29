const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    google_id: {type: String, unique:true, required: false},
    google_email:{type: String, required: false},
    google_name: {type: String, required: false},
    email: {type: String, required: true, unique: false},
    password:{ type: String, required: false},
    role:{type: String, default: 'tenant'},
    status: {type: String, default: 'active'},
    authentication_type:{type: String, enum:['google', 'email/password'], default: 'email/password'},
    date_of_joining: {type: Date, default: Date.now},
    profile_picture: {type: String},
});

const User = mongoose.model('User', userSchema);
module.exports = User;