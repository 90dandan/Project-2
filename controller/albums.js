const Album = require('../models/album');

module.exports = {
  };

 const Album = require('../config/data');

 module.exports = {
    addAlbum,
    delAlbum
 }

 function addAlbum(req, res, next) {
    req.user.albums.push(req.body);
    req.user.save(function(err) {
      res.redirect('/users');
  });
}

function delAlbum(req, res) {
    
}