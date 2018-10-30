var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var date = new Date();

var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var week = date.getDay();

var time = { fullTime: Date(), subTime: { day: day, month: month, year: year, hours: hours, minutes: minutes, seconds: seconds, week: week } };

var UserSchema = new Schema({
    Maddr: { type: String, required: true },//, unique: true
    LineVoltage: { type: String, required: true },
    Frequency: { type: String, required: true },
    LineCurrent: { type: String, required: true },//, lowercase: true
    ActiveEnergy: { type: String, required: true },//,default: "genaral"
    date: { type: Object, required: false, default: time }
});

module.exports = mongoose.model('eleMeter', UserSchema);