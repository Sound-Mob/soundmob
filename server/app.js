const express = require('express');
const path = require('path');
const { createUser, getUsers } = require('./database');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const app = express();
const passport = require('passport');
const { Youtube, ClientID, ClientSecret, RedirectURL} = require('./config.js');
passport.use(new GoogleStrategy({
  clientID:     ClientID,
  clientSecret: ClientSecret,
  callbackURL: "http://localhost:3000/auth/google/callback",
  passReqToCallback   : true
},
function(request, accessToken, refreshToken, profile, done) {
  console.log(profile);
  createUser.findOrCreate({ googleId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));

app.get('/',
passport.authenticate('google', { scope: 
  [ 'https://www.googleapis.com/auth/plus.login',

    'https://www.googleapis.com/auth/youtube',
   'https://www.googleapis.com/auth/plus.me',
   'https://www.googleapis.com/auth/userinfo.email' ]  }
));

app.get( '/auth/google/callback', 
  passport.authenticate( 'google', { 
      successRedirect: '/api',
      failureRedirect: '/auth/google/failure'
}));
app.listen(3000, ()=>{
  console.log('listening on 3000 ')
})
app.get('/api', (req, res) => {
  getUsers();
  res.send('it works')
})