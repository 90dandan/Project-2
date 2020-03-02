const mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
    name: String,
    tracks: Number,
    yearRealeased: Date 
}, {
    timestamps: true
});

module.exports = mongoose.model('Album', albumSchema);``