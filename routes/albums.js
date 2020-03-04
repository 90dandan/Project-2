const express = require('express');
const router = express.Router();
const albumsCtrl = require('../controller/albums');

router.get('/', albumsCtrl.index)
router.post('/add', albumsCtrl.addAlbum);
router.get('/new', albumsCtrl.newAlbum);
router.get('/:id', albumsCtrl.show);
//router.post('/', albumsCtrl.create);

module.exports = router;