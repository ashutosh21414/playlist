//NPM packages
var express = require('express');
var router = express.Router();


//Controllers
var videoCtrls = require('./controllers/videoCtrls');
// var playlistCtrls = require('./controllers/playlistCtrls');



router.post('/saveVideos',videoCtrls.saveVideos);
router.get('/fetchVideo/:id',videoCtrls.fetchVideo);
router.delete('/deleteVideo/:id',videoCtrls.deleteVideo);



module.exports = router;
