//NPM packages
var express = require('express');
var router = express.Router();


//Controllers
var videoCtrls = require('./controllers/videoCtrls');
var playlistCtrls = require('./controllers/playlistCtrls');



router.post('/saveVideos',videoCtrls.saveVideos);
router.get('/fetchVideo/:id',videoCtrls.fetchVideo);
router.delete('/deleteVideo/:id',videoCtrls.deleteVideo);


router.post('/savePlaylist',playlistCtrls.savePlaylist);
router.get('/fetchPlaylist/:id',playlistCtrls.fetchPlaylist);
router.delete('/deletePlaylist/:id',playlistCtrls.deletePlaylist);
router.post('/shufflePlaylist/:id',playlistCtrls.shufflePlaylist);



module.exports = router;
