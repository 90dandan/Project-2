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

function update(req, res) {
    User.findOne({
        'comments._id': req.params.id
    }, function (err, user) {
        const commentSubdoc = album.comments.is(req.params.id);
        commentSubdoc.text = req.body.text;
        user.save(function (err) {
            res.redirect(`/details/${album.id}`)
        })
    })
}

function deleteOne(req, res) {
    User.findOne({
        'comments._id': req.params.id
    }, function (err, user) {
        const commentSubdoc = user.comments.id(req.params.id);
        commentSubdoc.remove();
        user.save(function (err) {
            res.redirect(`/albums/${album.id}`);
        })
    })
}