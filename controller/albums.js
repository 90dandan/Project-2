const User = require('../models/user'); 


module.exports = {
  show, 
  addAlbum,
  delAlbum,
  index,
  newAlbum
}

function addAlbum(req, res, next) {
   User.findById(req.user._id, function(err, user){
     user.albums.push(req.body)
     user.save(function(err) {
       res.redirect('/albums');
   });
   });
}

function delAlbum(req, res) {
    
}

function show(req, res) {

}

function index(req, res) {
  User.findById(req.user._id, function(err, user) {
    res.render('albums/index', { title: 'All Albums', user });
  });
}

function newAlbum(req, res) {
  res.render('albums/new')
}