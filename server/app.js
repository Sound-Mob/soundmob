//server packages/
const express = require('express');
const path = require('path');
const session = require('express-session');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const bodyParser = require('body-parser');
//Utilites
const { createUser, getUsers, getUserById } = require('./database');
const { Youtube, ClientID, ClientSecret, RedirectURL} = require('./config.js');
// middlewares
const allowed = ['http://localhost:3000', 'http://localhost:4200']
// app.use(cors({
//   origin: function(origin, callback) {
//     if(!origin) {
//       return callback(null, true)
//     }
//     if(allowed.indexOf(origin === -1)) {
//       return callback(new Error(),false);
//     }
//     return callback(null, true);
//   }
// }));
app.use(cors({origin:'http://localhost:4200'}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(session({ secret: 'keyboard cat' }))
app.use(passport.initialize());
app.use(passport.session())
// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// // });
// var corsOptions = {
  //   origin: 'http://localhost:4200',
  //   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  // }
  // cors(corsOptions),
  const options = { origin: 'http://localhost:4200' }
app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//sockets
io.on('connection', function (socket) {
  socket.join('rikkirikki');
  console.log('a user connected');
  socket.on('disconnect', function (socket) {
    io.emit('disconnect', 'a user has disconnected');
  });
});
//session serializatoin
passport.serializeUser((user, done) => {
  done(null, user.id); 
  // where is this user.id going? Are we supposed to access this anywhere?
});

passport.deserializeUser((id, done)=> {

getUserById(id).then((user) => {
  done(user)
}).catch( err => console.error(err))
 });

io.on('connection', function (socket) {
  socket.on('voice', function (stream) {
    io.emit('voice', stream);
  });
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
  });
});



  //session entry
  passport.use(new GoogleStrategy({
    clientID:     ClientID,
    clientSecret: ClientSecret,
  callbackURL: "http://localhost:3000/auth/google/callback",
  passReqToCallback   : true
},
function(req, accessToken, refreshToken, profile, done) {
  console.log(accessToken)
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
      console.log(user.row[0]);
    done(null, user.row[0])
    }
  }).catch(err=> {
    createUser(id.toString(), givenName, familyName, bio, samples, savedplaylists, followercount, followingcount)
    .then(data => {
      // console.log(data); // print data;
      done(null, profile);
    })
    .catch(error => {
      console.log(error); // print the error;
      done();
    });
  })

}

));


app.get('/test', cors(options),function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' })
})


app.get('/login', passport.authenticate('google', { scope: 
  [ 'https://www.googleapis.com/auth/plus.login',
  'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/youtube.force-ssl' ]
  }
));

    app.get( '/auth/google/callback', cors(options),
    passport.authenticate('google',{ successRedirect: '/posts',
    failureRedirect: '/api' }));

    app.listen(3000, cors(), ()=>{
      console.log('listening on 3000 ')
    })
    app.get('/api',cors(),(req, res) => {
      res.send(req.session);
    });
    http.listen(4567, cors(),function () {
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
