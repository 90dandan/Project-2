const User = require('../models/user');
const Album = require('../models/user');
const Comment = require('../models/comment');

module.exports = {
  show,
  addAlbum,
  delAlbum,
  index,
  newAlbum,
}

function addAlbum(req, res, next) {
  User.findById(req.user._id, function (err, user) {
    user.albums.push(req.body)
    user.save(function (err) {
      res.redirect('/albums');
    });
  });
}

function delAlbum(req, res) {
  User.findById(req.user._id, function (err, user) {
    user.albums.splice(req.params.idx, 1);
    user.save(function (err) {
      res.redirect('/albums');
    })
  });
}

function show(req, res) {
  let album = req.user.albums.id(req.params.id);
  Comment.find({
    album: album._id
  }, function (err, comments) {
    res.render('albums/details', {
      album,
      comments
    });
  });
}

function index(req, res) {
  res.render('albums/index', {
    title: "All Albums",
    user: req.user
  })
  User.findById(req.user._id, function (err, user) {
    res.render('albums/index', {
      title: 'All Albums',
      user
    });
  });
}

function newAlbum(req, res) {
  res.render('albums/new')
}