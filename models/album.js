const mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
    name: String,
    tracks: Number,
    yearRealeased: Date,
    rating: Number 
}, {
    timestamps: true
});

module.exports = mongoose.model('Album', albumSchema);