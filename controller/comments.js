const Album = require('../models/user');

module.exports = {
    create
};

function create(req, res) {
    Album.findById(req.params.id, function(err, album) {
        album.comments.push(req.body);
        album.save(function(err) {
            res.redirect(`/albums/${album.id}`);
        });
    });
}