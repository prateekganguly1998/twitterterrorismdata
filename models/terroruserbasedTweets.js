const mongoose = require('mongoose');
const Schema=mongoose.Schema
const tweetSchema=new Schema({
    
    username:{
        type: String,
        required:true
    },
   
    tweets:[{
        type: String,
        required:true
    }]


});




module.exports=mongoose.model("Tweet3",tweetSchema);