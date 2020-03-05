var express = require('express');
var router = express.Router();
const usersCtrl = require('../controller/users');


/* GET users listing. */
router.get('/users', isLoggedIn, usersCtrl.index);
// router.post('/albums', isLoggedIn, usersCtrl.addAlbum);
// router.delete('/albums/:id', usersCtrl.delAlbum);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
