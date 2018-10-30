var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/STEM', function (err) {
    if (err) {
        console.log("Not connected to the database : " + err);
    } else {
        console.log("Successfully connected to MongoDB");
    }
});