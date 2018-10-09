//server packages/
const express = require('express');
const path = require('path');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session')
const authRoutes = require('./routes/auth-routes')
const app = express();
const server = require('http').createServer(app);  
const io = require('socket.io')(server);
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// mock data for front end
const userobject = require('./mockuserdata/object');
//Utilites
const { createUser, getUsers, getUserById, addSound, getSoundsById } = require('./database');
const { Youtube, ClientID, ClientSecret, RedirectURL} = require('./config.js');
const { playlist , playlistIDs, videoIDArray, searchDetails} = require('./util.js');
// middlewares
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ 
  maxAge: 24 * 60 * 60 * 1000,
  keys:['qwerty']
  }))
app.use(passport.initialize());
app.use(passport.session())
app.use('/auth', authRoutes)
const mill = cookieSession({ 
  maxAge: 24 * 60 * 60 * 1000,
  keys:['qwerty']
  })
io.use(function(socket, next) {
  mill(socket.request, {}, next);
});
app.use(mill);



// ///test handlers
app.get('/', function (req, res) { 
  res.sendFile(__dirname + '/index.html');
});
app.get('/test', (req, res) => {
  console.log(req.session)
  const key = req.session.accessToken;
  let body;
  playlistIDs(key).then(({ items })=> {
    const array = videoIDArray(items); 
    searchDetails(array,key).then( ({items}) => {
      body = items.map((durs)=> {
        const { contentDetails } = durs;
        const { duration } = contentDetails;
        return duration;
      });
      console.log(body);
    })
  })
  
  res.end();
})
// if we want to keep track of users in room
var users = [];
// keeping track of what time playlist starts
var playlistStartTime = '';
// keeping track of what time a listener joins
var listenerStartTime = '';
// keeping track of difference between playlist start and listener start
var timeInPlaylist = '';
// keeping track of song duration
var songDuration;

// on connection
io.on('connection', function (socket) {

  // console.log(socket.request.session);

  console.log("hahahahhaha");
  // NEW LISTENER LISTENER -- listen for room id
  socket.on('roomroute', (room) => {
    // calculate listener start time
    listenerStartTime += new Date();
    console.log(listenerStartTime)
    listenerStartTime = listenerStartTime.split("");
    console.log(listenerStartTime);
    listenerStartTime = listenerStartTime.splice(16, 8);
    console.log(listenerStartTime);
    let minsInSeconds = Number(listenerStartTime[3] + listenerStartTime[4]) * 60;
    let seconds = Number(listenerStartTime[6] + listenerStartTime[7])
    // calculate difference between listener start and playlist start
    listenerStartTime = minsInSeconds + seconds;
    timeInPlaylist = listenerStartTime - playlistStartTime;
    // io.sockets.emit('startlistener', timeInPlaylist);
    console.log({listenerStartTime}, "in join roomroute")
    console.log({ timeInPlaylist }, "in join roomroute")
    
    io.sockets.to(`${socket.id}`).emit('startlistener', timeInPlaylist);
    
    // console.log(listenerStartTime, "listen start time")
    // socket joins that room
    socket.join(room, ()=>{
      socket.admin = false;
      // reassign socket room at id to room arg
      socket.rooms[socket.id] = socket.rooms[room];
      // if we want to keep track of users in room
      if (socket.name){
        users.push(socket.name);
        console.log(room, "in join room")
        io.sockets.in(room).emit('new_user', {users: users, name: socket.name});
      }
    }); 
  });

  // listen for username
  socket.on('userid', (name) => {
    // socket joins that room
    socket.name = name;
  });

  socket.on('chatter', (msg)=>{
    console.log(msg)
  });

  // listen for chat message
  socket.on('chat message', function (msg) {
    let room = socket.rooms[socket.id];
    console.log(room, "in chat")
    io.sockets.in(room).emit('chat message', { message: msg, userName: socket.name});
    // io.sockets.emit('chat message', {message: msg, userName: socket.name});
  });
  
  // listen for users to leave
  socket.on('disconnect', function (data) {
    // console.log(users, socket.name);
    // remove user from users array 
    users.splice(users.indexOf(socket.name), 1);
    // emit disconnection
    io.emit('disconnect', { users: users, name: socket.name });
  });

  // MAKE ROOM LISTENER -- listen for new room
  socket.on('newroom', function (room) {
    console.log('room bay bayyy')
    socket.join(room, () => {
      socket.admin = true;
      // console.log(playlistStartTime, 'in newroom')
      io.sockets.emit('starttokbox');
      // reassign socket room at id to room arg
      socket.rooms[socket.id] = socket.rooms[room];
      // if we want to keep track of users in room

      if (socket.name) {
        users.push(socket.name);
        
        io.sockets.in(room).emit('new_user', { users: users, name: socket.name });
      }
    }); 

  });
  var token = 'ya29.GlwxBk9Wzd4Vyi41k9wa72YB0WlqcGSaPj0eROY6MWV6ACw1yemnQY-rjF7Xcg38cQVuSE0osJV7HxpO_fGl4Mv3djrbb4mm7TxUpF6t3qCeq7svK9FnzW0MBQA-pA';
  // START CAST LISTENER -- listen for startCast
  socket.on('startCast', (id) => {
    // console.log(id);
    searchDetails(token, id).then(({items})=>{ 
      console.log(items);
      let durationArray = items[0].contentDetails.duration.split(""); 
      if (durationArray.length <= 4){
        songDuration = (Number(durationArray[2]));
      } else {
        songDuration = (Number(durationArray[2]) * 60) + (Number(durationArray[4]) + Number(durationArray[5]));
      }
      
      
      // calculate playlist start time
      playlistStartTime += new Date();
      playlistStartTime = playlistStartTime.split("");
      playlistStartTime = playlistStartTime.splice(16, 8)
      let minsInSeconds = Number(playlistStartTime[3] + playlistStartTime[4]) * 60;
      let seconds = Number(playlistStartTime[6] + playlistStartTime[7])
      playlistStartTime = minsInSeconds + seconds;
      console.log({playlistStartTime})
      // console.log({ playlistStartTime });
      io.sockets.to(`${socket.id}`).emit('castOn', playlistStartTime, songDuration);
    }).catch((err)=>{ console.log(err); });
    
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
  done(null,user)
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
  // console.log(accessToken)
  req.session.accessToken = accessToken;
req.session.name = profile.name
req.session.photo = profile.photos[0];

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
    if(user.length === 1) {
        user[0].name = profile.name
    done(null, user[0])
    } else {
      createUser(id, givenName, familyName, bio, followercount, followingcount, true, false).then(user=> {
        console.log(user);
        done(null, user);
      }).catch(err =>console.error(err));
    }
  }).catch(err=> console.error(err,'this should hit'));
    }
));
app.get('/api/tester', (req, res)=>{
  res.json(userobject)
})




server.listen(3000, ()=>{
  console.log('on 3000')
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