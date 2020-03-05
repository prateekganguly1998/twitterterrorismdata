const mongoose = require('mongoose');
const Schema=mongoose.Schema
const tweetSchema=new Schema({
    user_id:{type:Number,required:true},
    text:{type:String,required:true},
    hashId:{type:Schema.Types.ObjectId,ref:"tweet1"},
   

   
});
module.exports=mongoose.model("Trends",tweetSchema);