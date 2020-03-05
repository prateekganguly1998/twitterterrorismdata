const mongoose = require('mongoose');
const Schema=mongoose.Schema
const tweetSchema=new Schema({
    name:{
        type: String,
        required:"Name is required"
        
    },
    url:{        
        type: String,
        required:"URL is required"
    },
    tweet_volume:{type:Schema.Types.Number}

   
});
module.exports=mongoose.model("Tweet1",tweetSchema);