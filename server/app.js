const express = require('express');
const path = require('path');
const { createUser, getUsers } = require('./database');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const app = express();
const bodyParser = ('body-parser');

const passport = require('passport');
const { Youtube, ClientID, ClientSecret, RedirectURL} = require('./config.js');

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// register the session with its secret id
app.use(session({ secret: 'test' }));

// routes
app.post('/login', (req, res) => {
  req.session.email = req.body.email;
  // console.log(req.session);
  res.end('done');
});

// main view
app.get('/', (req, res) => {
  const googleid = 12234;
  const firstname = 'joey';
  const lastname = 'delahoussaye';
  const bio = 'austin tx';
  const samples = 'binary';
  const savedplaylists = 'urls';
  const followercount = 12;
  const followingcount = 2;

  createUser(googleid, firstname, lastname, bio, samples, savedplaylists, followercount, followingcount);
  // if(req.session.email) {
  //   res.redirect('/logged')
  // } else {
  //   res.render('index')
  // }
  res.end();
})

app.get('/logged', (req, res) => {
  if (req.session.email) {
    res.write('<h1>logged</h1>')
    res.end();
  }
});
// app.get('/api', (req, res) => {
//   res.json({
//     message: 'welcome to sound mob'
//   });
//   // res.send('it works');
// });

// const verifyToken = (req, res, next) => {
//   // get auth header val
//   const bearerHeader = req.headers['authorization'];
//   // check if bearer is undefined
//   if (typeof bearerHeader !== 'undefined') {
//     // split at the space
//     console.log(bearerHeader);
//     const bearer = bearerHeader.split(' ');
//     // get token from array
//     const bearerToken = bearer[1];
//     // set token
//     req.token = bearerToken;
//     // next middleware
//     next();
//   } else {
//     // forbidden
//     res.sendStatus(403);
//   }
// };

// app.post('/api/posts', verifyToken, (req, res) => {
//   jwt.verify(req.token, 'secretkey', (err, authData)=>{
//     if (err) {
//       res.sendStatus(403);
//     } else {
//       res.json({
//         message: 'post created...',
//         authData
//       });
//     }
//   });

// });

// app.post('/api/login', (req, res) => {
//   // mock user
//   const user = {
//     id: 1,
//     username: 'joey',
//     email: 'jldela@gmail.com'
//   };
//   jwt.sign({user}, 'secretkey', { expiresIn: '30s'}, (err, token)=>{
//     res.json({
//       token
//     });
//   });
// });

// format of token
// Authorization: Bearer <access_token>

passport.use(new GoogleStrategy({
  clientID:     ClientID,
  clientSecret: ClientSecret,
  callbackURL: "http://localhost:3000/auth/google/callback",
  passReqToCallback   : true
},
function(request, accessToken, refreshToken, profile, done) {
  console.log(profile);
  done();

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
  res.send('it works')
})
