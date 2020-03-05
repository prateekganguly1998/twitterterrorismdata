var Twit=require('twit')
var config=require('../config');
var twitter=new Twit(config);
var fs=require('fs-extra');

const TrendingTweets=require('../models/TrendingTweets')
var TrendingTags=require('../models/TrendingTags');
var TerrorTweets=require('../models/TerrorTweets');
var TerrorUserBasedTweets=require('../models/terroruserbasedTweets');

var mongoose=require('mongoose');
const xlsx=require('xlsx');

const saveTags=()=>
{
 
  twitter.get('trends/place',{id:'1'}).then(result=>
    {
      
      var tagdata;
       var tags=result.data[0].trends;
    
       tags.forEach(tag=>
      {
        tagdata =new TrendingTags({name:tag.name,url:tag.url,tweet_volume:tag.tweet_volume}) ;
        tagdata.save().then(result=>
          {
             console.log("tag saved");
          })
  
      })
      

      
    }
    );

}

const saveTrendingTweets=()=>
{
  var tweetobject;
 var temptweet;
 TrendingTags.find()
 .then(tags=>
  {
    tags.forEach(tag=>
      {
        twitter.get('search/tweets',{q:tag.name,count:1},(err,data,response)=>
        {
          console.log(data);
          
          tweetobject=data.statuses[0];
          if(data.statuses.length!=0)
          {
            temptweet=new TrendingTweets({user_id:tweetobject.id,
              text:tweetobject.text,
              hashId:tag._id})
              temptweet.save().then(result=>
                {
                  console.log("tweets saved");
                })
          }
          
        })
      })

  })
 

 
   

   
}



exports.trendingtags=(req,res,next)=>
{
  setTimeout(()=>
  {
    saveTags(); 
    saveTrendingTweets();
  },2000)


TrendingTweets.find()
.then(result=>
  {
    res.send(result);
  })
 
}


exports.terrortweets= (req,res,next)=>
{
 // var wb=xlsx.readFile("./dataset/tweetsterror.xlsx",{cellDates:true});
 // var ws=wb.Sheets["Sheet1"];
 // var data=xlsx.utils.sheet_to_json(ws);
 // // console.log(data[0]);
 
 // data.forEach(tweet=>
 //   {
 //     var terrorTweets=new TerrorTweets({
 //       name:tweet.name,
 //       username:tweet.username,
 //       description:tweet.description,
 //       location:tweet.location,
 //       followers:tweet.followers,
 //       numberstatuses:tweet.numberstatuses,
 //       tweets:tweet.tweets});
      
    
 //     //Storing the tweets related to terrorism//

 //       terrorTweets.save().then(result=>
 //           {
 //             console.log('terror tweets saved');
 //           })

 //   })

   var tweet;
   TerrorTweets.find()
   .then(result=>
     {
       res.send(result);
     })

    
}





exports.terrorusers=(req,res,next)=>
{
  // var terrorusertweets=[];
  // TerrorTweets.find().distinct('username',(err,names)=>
  // {
  //   if(err)
  //   {
  //     return console.log(err);
  //   }

  //   names.forEach(name=>
  //     {
  //       terrorusertweets=[];
  //       TerrorTweets.findOne({username:`${name}`})
  //       .then(tweet=>
  //         {
  //            terrorusertweets.push(tweet.tweets);
  //            var newUser=new TerrorUserBasedTweets({username:name,tweets:terrorusertweets});
  //            newUser.save().then(result=>
  //             {
  //               console.log('User saved with tweets');
  //             })
  //         })
  //     })

    
  // })

  
   TerrorUserBasedTweets.find().then(result=>
  {
    res.send(result);
  })


}

