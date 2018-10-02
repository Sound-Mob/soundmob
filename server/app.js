const express = require('express');
const path = require('path');
const { createUser, getUsers, getUserById } = require('./database');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require('passport');
const { Youtube, ClientID, ClientSecret, RedirectURL} = require('./config.js');
const app = express();
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user.id); 
 // where is this user.id going? Are we supposed to access this anywhere?
});

passport.deserializeUser((id, done)=> {
getUserById(id).then((res, user) => {
  done(null,user)
}).catch( err => console.error(err))
 });
// passport.serializeUser( (user, done) => {
//   var sessionUser = { _id: user._id, name: user.name, email: user.email, roles: user.roles }
//   done(null, sessionUser)
// })

// passport.deserializeUser( (sessionUser, done) => {
//   // The sessionUser object is different from the user mongoose collection
//   // it's actually req.session.passport.user and comes from the session collection
//   done(null, sessionUser)
// })
passport.use(new GoogleStrategy({
  clientID:     ClientID,
  clientSecret: ClientSecret,
  callbackURL: "http://localhost:3000/auth/google/callback",
  passReqToCallback   : true
},
function(request, accessToken, refreshToken, profile, done) {
  // console.log(accessToken,'token', refreshToken,'refresh')
  // console.log(request);
done(null, profile);

}

));


// used to deserialize the user




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
  res.send('it works')
})
