//server packages/
const express = require('express');
const path = require('path');
const session = require('express-session');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const rp = ('request-promise');
const app = express();
const cookieSession = require('cookie-session')

const router = express.Router();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const bodyParser = require('body-parser');
// mock data for front end
const userobject = require('./mockuserdata/object');
//Utilites
const { createUser, getUsers, getUserById, addSound, getSoundsById } = require('./database');
const { Youtube, ClientID, ClientSecret, RedirectURL} = require('./config.js');
const { playlist } = require('./util.js');
// middlewares
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ 
  maxAge: 24 * 60 * 60 * 1000,
  keys:['qwerty']
  }))
app.use(passport.initialize());
app.use(passport.session())

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
// if we want to keep track of users in room
// var users = [];

//sockets
io.on('connection', function (socket) {
  console.log('a user connected');

  // listen for room id
  socket.on('roomroute', (room) => {
    // socket joins that room
    socket.join(room, ()=>{
      // reassign socket room at id to room arg
      socket.rooms[socket.id] = socket.rooms[room];
      // if we want to keep track of users in room
      // if (socket.name){
      //   users.push(socket.name);
      //   console.log(users);
      // }
    }); 
  });

  // listen for username
  socket.on('userid', (name) => {
    // socket joins that room
    socket.name = name;
  });

  // listen for chat message
  socket.on('chat message', function (msg) {
    let room = socket.rooms[socket.id];
    io.sockets.in(room).emit('chat message', {msg: msg, name: socket.name});
  });
  
  socket.on('disconnect', function (socket) {
    io.emit('disconnect', 'a user has disconnected');
  });

  // tell socket to listen for a 'sample' event
  socket.on('sample', function (stream) {
    // console.log(stream.blob);
    
    // save sound to 
    addSound(stream.blob, 3)
      .then(data => {
        // console.log(data); // print data;
      })
      .catch(error => {
        console.log(error); // print the error;
      });
    // get sound from database
    getSoundsById(3)
    .then((sound) => {
      // console.log(sound);
      // emit voice stream data to all sockets
      // socket.emit('voice', sounds[0]);
      socket.emit('voice', stream.blob);
    }).catch(err => console.error(err));
    // emit voice stream data to all sockets
   
  });
});
//session serializatoin
passport.serializeUser((user, done) => {

  done(null, user.googleid); 
  // where is this user.id going? Are we supposed to access this anywhere?
});

passport.deserializeUser((id, done)=> {

getUserById(id).then((user) => {
  done(null,user[0])
}).catch( err => console.error(err,'here'))
 });

  //session entry
  passport.use(new GoogleStrategy({
    clientID:     ClientID,
    clientSecret: ClientSecret,
  callbackURL: "http://localhost:3000/auth/google/callback",
  passReqToCallback   : true
},
(req, accessToken, refreshToken, profile, done) =>{
  console.log(accessToken);
  req.session.accessToken = accessToken;

  const { id } = profile;
  const { name } = profile;
  const { givenName } = name;
  const { familyName } = name;
  const bio = 'Loray NC';
  const samples = 'binary';
  const savedplaylists = 'urls';
  const followercount = 12;
  const followingcount = 2;
  getUserById(profile.id).then(user => {
    if(user) {
    done(null, user[0])
    }
  }).catch(err=> console.error(err));
    }
));

app.get('/login',
  passport.authenticate('google', { scope: 
  [ 'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/youtube.force-ssl' ]  }
  ));

app.get( '/auth/google/callback', 
  passport.authenticate('google',{
    successRedirect:'/api',
    failureRedirect:'/login'
  }) );

app.listen(3000, ()=>{
  console.log('listening on 3000 ')
})
app.get('/api',(req, res) => {
  console.log(req.session, req.user);
  res.end();
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
//
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
