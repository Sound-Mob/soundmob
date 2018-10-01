const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const { createUser } = require('./database');
const morgan = require('morgan');
// initialize app variable
const app = express();
const socket = require('socket.io');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const { Youtube, ClientID, ClientSecret, RedirectURL } = require('./config.js');

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes
// app.get('/api', (req, res) => {
//   res.json({
//     message: 'welcome to sound mob'
//   });
//   // res.send('it works');
// });

const verifyToken = (req, res, next) => {
  // get auth header val
  const bearerHeader = req.headers['authorization'];
  // check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // split at the space
    console.log(bearerHeader);
    const bearer = bearerHeader.split(' ');
    // get token from array
    const bearerToken = bearer[1];
    // set token
    req.token = bearerToken;
    // next middleware
    next();
  } else {
    // forbidden
    res.sendStatus(403);
  }
};

app.post('/api/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData)=>{
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'post created...',
        authData
      });
    }
  });
  
});

app.post('/api/login', (req, res) => {
  // mock user
  const user = {
    id: 1,
    username: 'joey',
    email: 'jldela@gmail.com'
  };
  jwt.sign({user}, 'secretkey', { expiresIn: '30s'}, (err, token)=>{
    res.json({
      token
    });
  });
});

// format of token
// Authorization: Bearer <access_token>




app.listen(3000, ()=>{
  console.log('listening on 3000');
});



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


const oauth2Client = new google.auth.OAuth2(
  ClientID,
  ClientSecret,
  'http://localhost:3000/api'
);
const scopes = [
  'https://www.googleapis.com/auth/youtube',
];
 
const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',
 
  // If you only need one scope you can pass it as a string
  scope: scopes
});

console.log(url);


app.get('/api', (req, res) => {
  console.log(req.query);
  const { code } = req.query;
  const start = async function() {
  const {tokens} = await oauth2Client.getToken(code);
  console.log(tokens);
  }
  start();
// oauth2Client.setCredentials(tokens)
res.send('it works');
})
app.post('/api', (req, res) => {
  console.log(req.body);
  res.end();
})

