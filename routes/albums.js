const express = require('express');
const router = express.Router();
const albumsCtrl = require('../controller/albums');

router.get('/', albumsCtrl.index)
router.post('/album', albumsCtrl.addAlbum);
router.delete('/albums/:id', albumsCtrl.delAlbum);

module.exports = router;