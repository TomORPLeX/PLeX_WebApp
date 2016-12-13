var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', isLoggedIn, function(req, res, next) {
    res.render('otd', { title: 'On The Day' });
});

var temp = 0;
function isLoggedIn(req,res,next) {
    //query user database to see if
    //if(req.userID is in user table) {
    if(temp==1) {
        console.log('temp =1');
        return next();
    } else {
        console.log('temp =0');
        res.redirect('/');
    }
}

module.exports = router;