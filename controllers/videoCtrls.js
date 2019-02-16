//Package Imports
var mongoose = require('mongoose');

//Model Imports
var videos = require('../models/videos');

exports.saveVideos = async function(req,res){
    try{
      let video = new videos(req.body.video);
      await video.save();
      res.json({success:true,data:video});
    }
    catch(e){
        console.log(e);
        res.json({success:false,data:{}});
    }
}

exports.fetchVideo = async function(req,res){
    try{
      let video = await videos.findOne({_id:mongoose.Types.ObjectId(req.params.id)}).lean();
      res.json({success:true,data:video});
    }
    catch(e){
        console.log(e);
        res.json({success:false,data:{}});
    }
}


exports.deleteVideo = async function(req,res){
      try{
        let video = await videos.deleteOne({_id:mongoose.Types.ObjectId(req.params.id)}).lean();
        res.json({success:true,data:video});
      }
      catch(e){
          console.log(e);
          res.json({success:false,data:{}});
      } 
}