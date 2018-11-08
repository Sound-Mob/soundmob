// server packages/
require('dotenv').config();
const express = require('express');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const OpenTok = require('opentok');
const http = require('http');

const app = express();

const server = http.createServer(app);
const io = require('socket.io')(server);

const authRoutes = require('./routes/auth-routes');
const djViewRoutes = require('./routes/dj-routes');

// mock data for front end
const userobject = require('./mockuserdata/object');
/* Utilites */
// Database
const {
  createUser,
  getUserById,
  addSound,
  getSoundsById,
  addSession,
  getSessionInfoById,
  changeSession,
  getDjSongById,
} = require('./database');
// hidden keys
const {
  ClientID,
  ClientSecret,
  API_KEY,
} = require('./config.js');

//  api methods
const {
  playlistIDs,
  videoIDArray,
  getSoundBoard,
  listenerInfo,
} = require('./util.js');
// middlewares
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  name: 'SoundMob',
  maxAge: 24 * 60 * 60 * 1000,
  keys: ['qwerty'],
  httpOnly: false,
}));

const port = process.env.PORT || 3000;
// app.use(morgan('tiny'));

app.use(passport.initialize());
app.use(passport.session());
const mill = cookieSession({
  name: 'SoundMob',
  maxAge: 24 * 60 * 60 * 1000,
  keys: ['qwerty'],
});
io.use((socket, next) => {
  mill(socket.request, {}, next);
});
app.use('/auth', authRoutes);
app.use('/djView', djViewRoutes);
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

const djs = [];

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
  socket.on('newroom', () => {
  
    const opentok = new OpenTok(API_KEY, 'd32d357fe3e5776a240d0a32cbb9edf5765f7405');
    opentok.createSession({ mediaMode: 'routed' }, (error, session) => {
      if (error) {
        // console.log("Error creating session:", error)
      } else {
        const { sessionId } = session;
        const token = opentok.generateToken(sessionId);
        io.sockets.emit('tokSession', sessionId, token);
        // add new dj to active dj list
        if (djs.length === 0) {
          djs.push({
            name,
            id: socket.id,
            photo: value,
            tokSession: sessionId,
            tokToken: token,
            googleid: user,
          });
        }
        djs.forEach((dj) => {
          if (dj.googleid !== user) {
            djs.push({
              name, id: socket.id, photo: value, tokSession: sessionId, tokToken: token, googleid: user,
            });
          }
        });
      }
    });
  });

  // listen for volume change
  socket.on('changeVolume', (volume) => {
    io.sockets.emit('changeVolume', volume);
  });

  // choose playlist listener
  socket.on('djSelectsPlaylist', (playlistId) => {
    playlistIDs(accessToken, playlistId).then((data) => {
      const songIds = videoIDArray(data.items);
      io.sockets.emit('songList', songIds);
    }).catch((error) => {
      console.log(error);
    });
  });

  // listen for song pausing
  socket.on('paused', (pauseInfo) => {
    io.sockets.emit('pauseRelay', pauseInfo);
  });
  // listen for song resuming
  socket.on('unpause', (resumeInfo) => {
    // make youtube call for song title and picture and add to pauseInfo object
    listenerInfo(accessToken, resumeInfo.songId)
      .then(({ items }) => {
        const snippet = items[0].snippet;
        resumeInfo.name = snippet.title;
        resumeInfo.photo = snippet.thumbnails.high.url;
        io.sockets.emit('resumeRelay', resumeInfo);
      });
  });

  // listen for sound request
  socket.on('soundEmit', (data) => {
    io.sockets.emit('soundRelay', data);
  });

  // NEW LISTENER LISTENER -- listen for room id
  socket.on('roomroute', (djInfo) => {
    const room = djInfo[0];
    const tokSession = djInfo[1];
    const tokToken = djInfo[2];
    const googleID = djInfo[3];
    getSessionInfoById(user).then((session) => {
      if (!session.length) {
        addSession(tokSession, tokToken, user)
          .then(() => console.log('added in tok session'))
          .catch(error => console.log(error));
      } else {
        changeSession(tokSession, tokToken, user)
          .then(() => console.log('changed in tok session'))
          .then(() => {
            getUserById(googleID).then((data) => {
              io.sockets.emit('info4Listener', data);
            }).catch(err => console.error(err));
          })
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

  socket.on('songStatus', (songInfo) => {
    listenerInfo(accessToken, songInfo.songId)
      .then(({ items }) => {
        const snippet = items[0].snippet;
        songInfo.name = snippet.title;
        songInfo.photo = snippet.thumbnails.high.url;
        io.sockets.emit('songStatusToListener', songInfo);
      });
  });

  // // listen for listener request of current song
  socket.on('listenerGetCurrentSong', () => {
    io.sockets.emit('songStatusRequest', { test: 'hello' });
    getDjSongById(socket.rooms[socket.id]).then((songinfo) => {
      io.sockets.emit('currentSong', { songinfo });
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

  socket.on('discon', () => {
    djs.forEach((dj, i) => {
      if (dj.googleid === user) {
        djs.splice(i, 1);
      }
    });
  })

  // listen for users to leave
  socket.on('disconnect', () => {
    djs.forEach((dj, i) => {
      if (dj.googleid === user) { 
        djs.splice(i, 1);
      }
    });
  });


  // tell socket to listen for a 'sample' event
  socket.on('sample', (stream) => {
    // console.log(stream.blob);     // save sound to
    addSound(stream.blob, 3)
      .then(() => {
        // console.log(data); // print data;
      })
      .catch((error) => {
        console.log(error); // print the error;
      });
    // get sound from database
    getSoundsById(3)
      .then(() => {
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
  const followercount = 12;
  const followingcount = 2;
  getUserById(profile.id).then((user) => {
    if (user.length === 1) {
      user[0].name = profile.name;
      done(null, user[0]);
    } else {
      createUser(id, givenName, familyName, bio, followercount, followingcount, true, false)
        .then(() => {
          getUserById(profile.id)
            .then((user) => {
              user[0].name = profile.name;
              done(null, user[0]);
            }).catch(err => console.error(err));
        }).catch(err => console.error(err));
    }
  }).catch(err => console.error(err, 'this should hit'));
}));

server.listen(port, () => {
  console.log(`running on ${port}`);
});
