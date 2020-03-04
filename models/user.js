const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    content: String,
    rating: {type: Number, min:1, max: 5}
})

const albumSchema = new Schema({
    title: String,
    tracks: Number,
    releaseYear: Number,
    rating: Number,
    comments: [commentsSchema]
}, {
    timestamps: true
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    albums: [albumSchema],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);``