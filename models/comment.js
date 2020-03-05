const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    content: String,
    rating: {type: Number, min:1, max: 5},
    album:  {type: Schema.Types.ObjectId, ref: 'Album'}

})

module.exports = mongoose.model('Comment', commentsSchema);``