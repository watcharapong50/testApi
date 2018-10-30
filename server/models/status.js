var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    Maddr:{ type: String, required: true, unique: true},
    timeDelay: { type: String, required: false,default: "5" },
    shortCircuit: { type: String, required: false, default: "off" },
    status: { type: String, required: false, default: "NoOwner" },
    date:{ type: String, required: false,default: Date() }
});

module.exports = mongoose.model('status', UserSchema);