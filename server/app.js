// server packages/
const express = require('express');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const OpenTok = require('opentok');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const config = require('./config');
const { TOKEN } = config;
const { API_KEY } = config;

const authRoutes = require('./routes/auth-routes');

// mock data for front end
const userobject = require('./mockuserdata/object');
/* Utilites */
// Database
const {
  createUser,
  getUsers,
  getUserById,
  addSound,
  getSoundsById,
  addSession,
  getSessionInfoById,
  changeSession,
  createDjSongSession,
  getDjSongById,
  changeDjSong,
} = require('./database');
// hidden keys
const {
  Youtube,
  ClientID,
  ClientSecret,
  RedirectURL,
} = require('./config.js');
//  api methods
const {
  playlist,
  playlistIDs,
  videoIDArray,
  searchDetails,
  searchDetailsArray,
  getSoundBoard,
} = require('./util.js');
// middlewares
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: ['qwerty'],
}));


app.use(passport.initialize());
app.use(passport.session());
const mill = cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: ['qwerty'],
});
io.use((socket, next) => {
  mill(socket.request, {}, next);
});
app.use('/auth', authRoutes);
app.use(mill);
app.use(express.static('dist/sound-mob'));

app.get('/test', (req, res) => {
  const key = req.session.accessToken;
  let body;
  getSoundBoard(key)
    .then((data) => {
      body = data;
      res.send(body);
    });
});
app.get('/tester', (req, res) => {
  res.json(userobject);
});
// if we want to keep track of users in room
const users = [];
// keeping track of djs
const djs = [];
// keeping track of what time playlist starts
let songStartTime = '';
// keeping track of what time a listener joins
let listenerStartTime = '';
// keeping track of difference between playlist start and listener start
let timeInPlaylist = '';
// keeping track of song duration
let songDuration;

// on connection
io.on('connection', (socket) => {
  const { photo } = socket.request.session;
  const { value } = photo;
  const { name } = socket.request.session;
  const { user } = socket.request.session.passport;
  const { givenName } = name;
  const { familyName } = name;
  const { accessToken} = socket.request.session; 
  // console.log({ accessToken });
  // MAKE ROOM LISTENER -- listen for new room
  socket.on('newroom', (room) => {
    socket.admin = true;
    
    io.sockets.emit('starttokbox');
    
    // sending dj room to client
    io.sockets.emit('activeDj', socket.rooms[socket.id]);
    // keep track of users in room
    // if (socket.name) {
    //   users.push(socket.name);
    //   io.sockets.in(room).emit('new_user', { users: users, name: socket.name });
    // }
    
    // make tok session
    opentok = new OpenTok(API_KEY, 'd32d357fe3e5776a240d0a32cbb9edf5765f7405');
    
    var sessionId;
    opentok.createSession({ mediaMode: "routed" }, (error, session) => {
      if (error) {
        console.log("Error creating session:", error)
      } else {
        sessionId = session.sessionId;
        let songIds = ['JryGDi6SVQQ', 'KgtizhlbIOQ', 'KgtizhlbIOQ', 'KgtizhlbIOQ'];
        let token = opentok.generateToken(sessionId);
        io.sockets.emit('tokSession', sessionId, token);
        // add new dj to active dj list
        djs.push({ name, id: socket.id, photo: value, tokSession: sessionId, tokToken: token });
      }
    });
  });
  
 // choose playlist listener
 socket.on('djSelectsPlaylist', (playlistId) => {
   console.log(playlistId, " playlistId");
   let songIds = ['x38ildLdUeM', 'vF1RPI6j7b0', 'x38ildLdUeM', 'KgtizhlbIOQ'];
   io.sockets.emit('songList', songIds);
 })

  // const token = 'ya29.GlwwBhsv4pbb6v08L1piVywT_GUP0naa1rlxFbKbXfDFXqnLEvXReMCCc_yjC3sBsvYqUG6ZsHERviQu8KtfeOoM5CsF4ztoQmJVH9oJnyVsFqmHWl_UJMHiPJGxtw';
  // START CAST LISTENER -- listen for startCast
  socket.on('startCast', (id) => {
    // console.log(id, " id in startCast before get details from youtube")
    searchDetails(accessToken, id).then(({ items }) => {
      console.log(items[0].contentDetails.duration, "duration")
      const durationArray = items[0].contentDetails.duration.split('');
      if (durationArray.length <= 4) {
        songDuration = (Number(durationArray[2]));
      } else if (durationArray.length === 5) {
        songDuration = (Number(durationArray[2] + durationArray[3]));
      } else {
        songDuration = (Number(durationArray[2]) * 60) + (Number(durationArray[4]) + Number(durationArray[5]));
      }
      // calculate playlist start time
      songStartTime += new Date();
      songStartTime = songStartTime.split('');
      songStartTime = songStartTime.splice(16, 8);
      const minsInSeconds = Number(songStartTime[3] + songStartTime[4]) * 60;
      const seconds = Number(songStartTime[6] + songStartTime[7]);
      songStartTime = minsInSeconds + seconds;
      getDjSongById(socket.rooms[socket.id]).then((songinfo) => {
        console.log(songinfo);
        if (!songinfo.length) {
          createDjSongSession(id, songStartTime, songDuration, socket.rooms[socket.id])
            .then(() => console.log("added"))
            .catch(error => console.log(error));
        } else {
          changeDjSong(id, songStartTime, songDuration, socket.rooms[socket.id])
            .then(() => console.log("changed"))
            .catch(err => console.log(err));
        }
      }).catch((er)=> console.log(er)); 
      io.sockets.emit('castOn', {songStartTime, songDuration });
    }).catch((err) => { console.log(err); });
  });
  // NEW LISTENER LISTENER -- listen for room id
  socket.on('roomroute', (djInfo) => {
    let room = djInfo[0]
    let tokSession = djInfo[1]
    let tokToken = djInfo[2]
    let songIds = ['KgtizhlbIOQ', 'KgtizhlbIOQ', 'KgtizhlbIOQ', 'KgtizhlbIOQ'];
    console.log(user, "  google id of listener");
    // getUserById(user).then(userArr => addSession(tokSession, tokToken, userArr[0].googleid)
    // .then(()=>console.log("added")))
    // .catch(error => console.log(error))


    getSessionInfoById(user).then((session) => {
      if (!session.length) {
        addSession(tokSession, tokToken, user)
        .then(()=>console.log("added"))
        .catch(error => console.log(error));
      } else {
        changeSession(tokSession, tokToken, user)
        .then(()=>console.log("changed"))
        .catch(err => console.log(err));
      }
    }).catch((error)=>console.log(error, " in get session"));
    socket.tokToken = tokToken
    socket.tokSession = tokSession


    console.log(socket.tokToken,'this.tokToken')
    function getStartTime() {
      // calculate listener start time
      listenerStartTime += new Date();
      listenerStartTime = listenerStartTime.split('');
      listenerStartTime = listenerStartTime.splice(16, 8);
      const minsInSeconds = Number(listenerStartTime[3] + listenerStartTime[4]) * 60;
      const seconds = Number(listenerStartTime[6] + listenerStartTime[7]);
      // calculate difference between listener start and playlist start
      listenerStartTime = minsInSeconds + seconds;
      timeInPlaylist = listenerStartTime - songStartTime;
      // io.sockets.emit('startlistener', {timeInPlaylist, tokSession, tokToken});
    }

    getStartTime();
    // socket joins that room
    socket.join(room, ()=>{
      socket.rooms[socket.id] = room;
      // grab dj song info
      
    });
    // if we want to keep track of users in room
    // if (socket.name) {
    //   users.push(socket.name);
    //   console.log(room, 'in join room');
    //   io.sockets.in(room).emit('new_user', { users: users, name: socket.name });
    // }
  // });
  });

  // listen for listener request of current song
  socket.on('listenerGetCurrentSong', ()=>{
    console.log(socket.rooms[socket.id], " in get current song")
    getDjSongById(socket.rooms[socket.id]).then((songinfo) => {
      console.log(songinfo, " in listener grab")
      io.sockets.emit('currentSong', { songinfo, listenerStartTime });
    }).catch((error) => console.log(error));
  })
  // listen for username
  socket.on('userid', (name) => {
    // socket joins that room
    socket.name = name;
  });

  // listen for djInfo
  socket.on('getDjInfo', () => {
    getSessionInfoById(user).then((sessionInfo)=>{
      // sends dj info to chat service
      io.sockets.emit('startlistener', sessionInfo);
    });
    
  });

  // listen for chat message
  socket.on('chat message',  (msg) => {
    const room = socket.rooms[socket.id];
    io.sockets.in(room).emit('chat message', { message: msg, userName: givenName, lastName: familyName, id: user});
  });

  // listen for active DJs request
  socket.on('djListReq', () =>{
    io.sockets.emit('djList', {djs});
  })

  // listen for users to leave
  socket.on('disconnect',  (data) => {
    // remove user from users array
    users.splice(users.indexOf(socket.name), 1);
    // emit disconnection
    io.emit('disconnect', { users: users, name: socket.name });
  });

  
  // tell socket to listen for a 'sample' event
  socket.on('sample', (stream) => {
    // console.log(stream.blob);     // save sound to
    addSound(stream.blob, 3)
      .then((data) => {
        // console.log(data); // print data;
      })
      .catch((error) => {
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
// session serializatoin
passport.serializeUser((user, done) => {
  // console.log(user, done)
  done(null, user.googleid);
  // where is this user.id going? Are we supposed to access this anywhere?
});

passport.deserializeUser((id, done) => {
  // console.log(id);
  getUserById(id).then((user) => {
    done(null, user);
  }).catch(err => console.error(err));
});
// session entry
passport.use(new GoogleStrategy({
  clientID: ClientID,
  clientSecret: ClientSecret,
  callbackURL: '/auth/google/callback',
  passReqToCallback: true,
},
(req, accessToken, refreshToken, profile, done) => {
  // console.log(accessToken)
  req.session.accessToken = accessToken;
  req.session.name = profile.name;
  req.session.photo = profile.photos[0];
// console.log(accessToken);
  const { id } = profile;
  const { name } = profile;
  const { givenName } = name;
  const { familyName } = name;
  const bio = 'Loray NC';
  const samples = 'binary';
  const savedplaylists = 'urls';
  const followercount = 12;
  const followingcount = 2;
  getUserById(profile.id).then((user) => {
    if (user.length === 1) {
      user[0].name = profile.name;
      done(null, user[0]);
    } else {
      createUser(id, givenName, familyName, bio, followercount, followingcount, true, false)
        .then((newUser) => {
          console.log(newUser);
          done(null, newUser);
        }).catch(err => console.error(err));
    }
  }).catch(err => console.error(err, 'this should hit'));
}));

server.listen(3000, () => {
  console.log('on 3000');
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