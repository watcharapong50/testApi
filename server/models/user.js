var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: { type: String, lowercase: true, required: true, unique: true},
    firstname: { type: String, lowercase: true, required: true},
    lastname: { type: String, lowercase: true, required: true},
    password: { type: String, required: true},
    email: { type: String, required: true, lowercase: true, unique: true },
    room: {type: String, required: true},
    permission: { type: String, required: false,default: "genaral" },
    Maddr:{ type: String, required: false,default: "Don't Have" },
    date:{ type: String, required: false,default: Date() }
});

module.exports = mongoose.model('user', UserSchema);