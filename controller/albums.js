const Album = require('../models/album'); 
//const Album = require('../config/data');

module.exports = {
  show, 
  addAlbum,
  delAlbum,
  index
}

function addAlbum(req, res, next) {
   req.user.albums.push(req.body);
   req.user.save(function(err) {
     res.redirect('/albums');
 });
}

function delAlbum(req, res) {
    
}

function show(req, res) {

}

function index(req, res) {
  Album.find({}, function(err, albums) {
    res.render('albums/index', { title: 'All Albums', albums });
  });
}