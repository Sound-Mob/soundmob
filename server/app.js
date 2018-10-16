// server packages/
const express = require('express');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const path = require('path');
const OpenTok = require('opentok');
const http = require('http');

const app = express();


const server = http.createServer(app);
const io = require('socket.io')(server);

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
  TOKEN,
  API_KEY,
} = require('./config.js');
//  api methods
const {
  playlist,
  playlistIDs,
  videoIDArray,
  searchDetails,
  searchDetailsArray,
  getSoundBoard,
  createPlaylist,
  searchSong,
  insertSong,
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

const port = process.env.PORT || 3000;
app.use(morgan('tiny'));

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

// create dj routes
app.get('/djView', (req, res) => {
  const id = req.session.passport.user;
  getUserById(id).then((data) => {
    const body = data[0];
    body.photo = req.session.photo;
    res.send(body);
  });
});

// get dj's playlists from youtube
app.get('/djView/playlist', (req, res) => {
  const id = req.session.accessToken;
  console.log({ id });
  playlist(id).then((playlistInfo) => {
    // console.log({playlistInfo})
    res.send(playlistInfo);
  });
  // res.sendStatus(200);
});

app.post('/djView/nameCast', (req, res) => {
  // console.log(req.body);
  createPlaylist(req.session.accessToken, req.body).then((data) => {
    // console.log(data);
    res.send(data);
  });
});
app.post('/djView/searchSong', (req, res) => {
  // console.log(req.body);
  searchSong(req.session.accessToken, req.body.song).then((data) => {
    // console.log(data);
    res.send(data);
  });
});
app.post('/djView/insertSong', (req, res) => {
  insertSong(req.session.accessToken, req.body)
    .then((data) => {
      res.send(data);
    }).catch((error) => {
      console.log(error);
    });
});

app.get('/test', (req, res) => {
  const key = req.session.accessToken;
  let body;
  getSoundBoard(key)
    .then((data) => {
      body = data;
      res.send(body);
    });
});
app.get('/feature', (req, res) => {
  res.render(path.join(__dirname, '../dist/sound-mob/app-featured-featured-module'));
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
let startAt;
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
  const { accessToken } = socket.request.session;

  // MAKE ROOM LISTENER -- listen for new room
  socket.on('newroom', (room) => {
    // socket.admin = true;

    // io.sockets.emit('starttokbox');

    // sending dj room to client
    // io.sockets.emit('activeDj', socket.rooms[socket.id]);
    // keep track of users in room
    // if (socket.name) {
    //   users.push(socket.name);
    //   io.sockets.in(room).emit('new_user', { users: users, name: socket.name });
    // }

    // make tok session
    opentok = new OpenTok(API_KEY, 'd32d357fe3e5776a240d0a32cbb9edf5765f7405');

    let sessionId;
    opentok.createSession({ mediaMode: 'routed' }, (error, session) => {
      if (error) {
        // console.log("Error creating session:", error)
      } else {
        sessionId = session.sessionId;
        const songIds = ['AE005nZeF-A', 'KgtizhlbIOQ', 'KgtizhlbIOQ', 'KgtizhlbIOQ'];
        const token = opentok.generateToken(sessionId);
        // make this just go to particular dj
        io.sockets.emit('tokSession', sessionId, token);
        // add new dj to active dj list
        djs.push({
          name, id: socket.id, photo: value, tokSession: sessionId, tokToken: token,
        });
      }
    });
  });

  // choose playlist listener
  socket.on('djSelectsPlaylist', (playlistId) => {
    console.log(playlistId, ' playlistId');
    playlistIDs(accessToken, playlistId).then((data) => {
      const songIds = videoIDArray(data.items);
      console.log({ songIds });
      io.sockets.emit('songList', songIds);
    }).catch((error) => {
      console.log(error);
    });
    //  let songIds = ['AE005nZeF-A', 'vF1RPI6j7b0', 'x38ildLdUeM', 'KgtizhlbIOQ'];
  });

  // listen for sound request
  socket.on('soundEmit', (data) => {
    io.sockets.emit('soundRelay', data);
  });

  // START CAST LISTENER -- listen for startCast
  socket.on('startCast', (id) => {
    // console.log(id, " id in startCast before get details from youtube")
    searchDetails(accessToken, id).then(({ items }) => {
      console.log(items, 'duration');
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
      io.sockets.emit('castOn', { songStartTime, songDuration });

      getDjSongById(socket.rooms[socket.id]).then((songinfo) => {
        // console.log(songinfo, " in get songs by id in start cast");
        if (!songinfo.length) {
          createDjSongSession(id, songStartTime, songDuration, socket.rooms[socket.id])
            .then(() => console.log('added in dj song'))
            .catch(error => console.log(error));
        } else {
          changeDjSong(id, songStartTime, songDuration, socket.rooms[socket.id])
            .then(() => {
              songinfo[0].songid = id;
              console.log(songinfo, 'changed in dj song');
              io.sockets.emit('currentSong', { songinfo, listenerStartTime: songStartTime });
            })
            .catch(err => console.log(err));
        }
      }).catch(er => console.log(er));
    }).catch((err) => { console.log(err); });
  });
  function getStartTime() {
    // calculate listener start time
    listenerStartTime += new Date();
    listenerStartTime = listenerStartTime.split('');
    listenerStartTime = listenerStartTime.splice(16, 8);
    const minsInSeconds = Number(listenerStartTime[3] + listenerStartTime[4]) * 60;
    const seconds = Number(listenerStartTime[6] + listenerStartTime[7]);
    // calculate difference between listener start and playlist start
    listenerStartTime = minsInSeconds + seconds;
    startAt = listenerStartTime - songStartTime;
    // io.sockets.emit('startlistener', {timeInPlaylist, tokSession, tokToken});
  }

  // NEW LISTENER LISTENER -- listen for room id
  socket.on('roomroute', (djInfo) => {
    const room = djInfo[0];
    const tokSession = djInfo[1];
    const tokToken = djInfo[2];
    const songIds = ['KgtizhlbIOQ', 'KgtizhlbIOQ', 'KgtizhlbIOQ', 'KgtizhlbIOQ'];

    getSessionInfoById(user).then((session) => {
      if (!session.length) {
        addSession(tokSession, tokToken, user)
          .then(() => console.log('added in tok session'))
          .catch(error => console.log(error));
      } else {
        changeSession(tokSession, tokToken, user)
          .then(() => console.log('changed in tok session'))
          .catch(err => console.log(err));
      }
    }).catch(error => console.log(error, ' in get session'));
    socket.tokToken = tokToken;
    socket.tokSession = tokSession;
    // socket joins that room
    socket.join(room, () => {
      socket.rooms[socket.id] = room;
    });
  });

  // listen for listener request of current song
  socket.on('listenerGetCurrentSong', () => {
    getStartTime();
    // console.log(socket.rooms[socket.id], " in get current song")
    getDjSongById(socket.rooms[socket.id]).then((songinfo) => {
      // console.log({ songinfo, listenerStartTime }, " in listener grab")
      io.sockets.emit('currentSong', { songinfo, listenerStartTime, startAt });
    }).catch(error => console.log(error));
  });
  // listen for username
  socket.on('userid', (name) => {
    // socket joins that room
    socket.name = name;
  });

  // listen for djInfo
  socket.on('getDjInfo', () => {
    getSessionInfoById(user).then((sessionInfo) => {
      // sends dj info to chat service
      io.sockets.emit('startlistener', sessionInfo);
    });
  });

  // listen for gjinfo in the listner profile component
  socket.on('djInfoReq', () => {
    // get info on selected dj

    // send info on selected dj
  });

  // listen for chat message
  socket.on('chat message', (msg) => {
    const room = socket.rooms[socket.id];
    io.sockets.in(room).emit('chat message', {
      message: msg, userName: givenName, lastName: familyName, id: user,
    });
  });

  // listen for active DJs request
  socket.on('djListReq', () => {
    io.sockets.emit('djList', { djs });
  });

  socket.on('soundEmit', (data) => {
    io.sockets.emit('soundRelay', data);
  });

  // listen for users to leave
  socket.on('disconnect', (data) => {
    // remove user from users array
    users.splice(users.indexOf(socket.name), 1);
    // emit disconnection
    io.emit('disconnect', { users, name: socket.name });
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
  getUserById(id).then((user) => {
    done(null, user);
  }).catch(err => console.error(err));
});

const googleCallbackURL = '/auth/google/callback';

// session entry
passport.use(new GoogleStrategy({
  clientID: ClientID,
  clientSecret: ClientSecret,
  callbackURL: googleCallbackURL,
  passReqToCallback: true,
},
  (req, accessToken, refreshToken, profile, done) => {
    req.session.accessToken = accessToken;
    req.session.name = profile.name;
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
    getUserById(profile.id).then((user) => {
      if (user.length === 1) {
        user[0].name = profile.name;
        done(null, user[0]);
      } else {
        createUser(id, givenName, familyName, bio, followercount, followingcount, true, false)
          .then((newUser) => {
            // console.log(newUser);
            done(null, newUser);
          }).catch(err => console.error(err));
      }
    }).catch(err => console.error(err, 'this should hit'));
  }));

server.listen(port, () => {
  console.log(`running on ${port}`);
});
