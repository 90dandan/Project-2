var express = require('express');
var router = express.Router();
const usersCtrl = require('../controller/users');

router.get('/users', isLoggedIn, usersCtrl.index);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;