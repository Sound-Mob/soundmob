const router = require('express').Router();
const passport = require('passport');

router.get('/',
  passport.authenticate('google', { scope: 
  [ 'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/youtube.force-ssl' ]  }
  ));

router.get( '/google/callback', 
  passport.authenticate('google',{
    successRedirect:'http://localhost:8080/posts',
    failureRedirect:'/auth'
  }) );
module.exports = router;