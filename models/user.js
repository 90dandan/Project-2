const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const albumSchema = new Schema({
    title: String,
    tracks: Number,
    releaseYear: Number,
    rating: Number,
}, {
    timestamps: true
});
module.exports = mongoose.model('Album', albumSchema);
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    albums: [albumSchema],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
