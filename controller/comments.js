const Album = require('../models/album');
const Comment = require('../models/comment');
module.exports = {
    create,
    update,
    delete: deleteOne
};
function create(req, res) {
    req.body.album = req.params.id;
    Comment.create(req.body, function (err, comment) {
        console.log(comment)
        res.redirect(`/albums/${req.params.id}`)
    })
}
function deleteOne(req, res) {
    Comment.findByIdAndDelete(req.params.cid, function(err, comment) {
        res.redirect(`/albums/${req.params.id}`)
    })
}
function update(req, res) {
    Comment.findByIdAndUpdate(req.params.cid, req.body, function(err, comment) {
        res.redirect(`/albums/${req.params.id}`)
    })
}