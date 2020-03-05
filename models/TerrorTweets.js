const mongoose = require('mongoose');
const Schema=mongoose.Schema
const tweetSchema=new Schema({
    name:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    description:{
        type: String
    },
    location:{
        type: String
    },
    followers:{
        type: Number,
        required:true
    },
    numberstatuses:{
        type: Number,
        required:true
    },
    tweets:{
        type: String,
        required:true
    }


});




module.exports=mongoose.model("Tweet2",tweetSchema);