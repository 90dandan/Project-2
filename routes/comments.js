const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controller/comments');

router.post('/:id/comments', isLoggedIn, commentsCtrl.create);
router.delete('/:id/comments/:cid', isLoggedIn, commentsCtrl.delete);
router.put('/:id/comments/:cid', isLoggedIn, commentsCtrl.update);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;