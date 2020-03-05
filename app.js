var express=require('express');
var app=express();


var twitterRoutes=require('./routes/tweetRoutes')
var mongoose=require('mongoose');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(twitterRoutes);
 
 


  mongoose.connect('mongodb+srv://prateek_2016bcs1188:Sunny4321@cluster0-dec2c.mongodb.net/finalProject').then(result=>
  {
    app.listen(3000)

  })






