const express = require('express');
const router = express.Router();
const albumsCtrl = require('../controller/albums');


router.post('/albums', isLoggedIn, albumsCtrl.addAlbum);
router.delete('/albums/:id', albumsCtrl.delAlbum);