const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const { createUser, getUsers } = require('./database');
const morgan = require('morgan');
// initialize app variable
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const { Youtube, ClientID, ClientSecret, RedirectURL } = require('./config.js');
const session = require('express-session'); 
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');

});

io.on('connection', function (socket) {
  // once a client has connected, we expect to get a ping from them saying what room they want to join
  socket.on('room', function (room) {
    socket.join(room);
  });
  console.log('a user connected');
  socket.on('disconnect', function (socket) {
    io.emit('disconnect', 'a user has disconnected');
  });
});

io.on('connection', function (socket) {
  socket.on('voice', function (stream) {
    io.emit('voice', stream);
  });
  // send a message to just the clients in a given room
  room = 'abc123';
  
  socket.on('chat message', function (msg) {
    io.sockets.in(room).emit('chat message', msg + 'what is going on, party people?');
    // io.emit('chat message', msg);
  });
});

http.listen(4567, function () {
  console.log('listening on 4567');
});

// register the session with its secret id
// app.use(session({ secret: 'test' }));

// // routes
// app.post('/login', (req, res) => {
//   req.session.email = req.body.email;
//   res.end('done');
// });

// app.get('/logged', (req, res) => {
//   if (req.session.email) {
//     res.write('<h1>logged</h1>')
//     res.end();
//   }
// });
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
  const { id } = profile;
  const { name } = profile;
  const { givenName } = name;
  const { familyName } = name;
  const bio = 'austin tx';
  const samples = 'binary';
  const savedplaylists = 'urls';
  const followercount = 12;
  const followingcount = 2;
  createUser(id.toString(), givenName, familyName, bio, samples, savedplaylists, followercount, followingcount)
    .then(data => {
      console.log(data); // print data;
      done();
    })
    .catch(error => {
      console.log(error); // print the error;
      done();
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
  res.send('it works')
})
