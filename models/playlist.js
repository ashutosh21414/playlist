"use strict";
var mongoose = require('mongoose');

var playlistSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    websiteUrl:{
        type: String,
        trim: true
    },
    videos:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video',
        }
    ]
}, { versionKey: false });

var playlist = mongoose.model('Playlist', playlistSchema);

module.exports = playlist;


