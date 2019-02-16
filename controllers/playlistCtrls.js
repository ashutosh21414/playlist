//Package Imports
var mongoose = require('mongoose');

//Model Imports
var playlist = require('../models/playlist');

exports.savePlaylist = async function(req,res){
    try{
      let pl = new playlist(req.body.playlist);
      await pl.save();
      res.json({success:true,data:pl});
    }
    catch(e){
        console.log(e);
        res.json({success:false,data:{}});
    }
}

exports.fetchPlaylist = async function(req,res){
    try{
      let pl = await playlist.findOne({_id:mongoose.Types.ObjectId(req.params.id)}).lean();
      res.json({success:true,data:(pl?pl:'not found')});
    }
    catch(e){
        console.log(e);
        res.json({success:false,data:{}});
    }
}


exports.deletePlaylist = async function(req,res){
      try{
        let pl = await playlist.deleteOne({_id:mongoose.Types.ObjectId(req.params.id)}).lean();
        res.json({success:true,data:pl});
      }
      catch(e){
          console.log(e);
          res.json({success:false,data:{}});
      } 
}


exports.shufflePlaylist = async function(req,res){
    try{
      let pl = await playlist.findOne({_id:mongoose.Types.ObjectId(req.params.id)});
      pl.videos = shuffle(pl.videos);
      await pl.save()
      res.json({success:true,data:(pl?pl:'not found')});
    }
    catch(e){
        console.log(e);
        res.json({success:false,data:{}});
    } 
}



function shuffle(arr){
        for(let i=0;i<arr.length;i++){
           let rndInd = Math.trunc(Math.random() * arr.length);
           let temp = arr[rndInd];
           arr[rndInd] = arr[i];
           arr[i] = temp;
          
           if(i == (arr.length - 1))
           {
            return arr;
           }
        }
}

