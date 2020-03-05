var express=require('express');
var router=express.Router();
var tweetController=require('../controllers/tweetcontroller');

router.get('/trendingtags',tweetController.trendingtags);
router.get('/twproisis',tweetController.terrortweets);
router.get('/terrorusers',tweetController.terrorusers);





module.exports=router;