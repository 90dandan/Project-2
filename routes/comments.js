const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controller/comments');

router.post('/albums/:id/comments', commentsCtrl.create);

module.exports = router;