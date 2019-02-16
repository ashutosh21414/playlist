"use strict";
var mongoose = require('mongoose');

var videoSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    thumbnailUrl:{
        type: String,
        trim: true
    },
    videoUrl:{
        type: String,
        trim: true
    },
    duration:{
        type: Number,
        trim: true
    },
}, { versionKey: false });

var video = mongoose.model('Videos', videoSchema);

module.exports = video;


