const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const { createUser } = require('./database');
// initialize app variable
const app = express();
const socket = require('socket.io');
const bodyParser = require('body-parser');


app.get('/api', (req, res) => {
  res.json({
    message: 'welcome to sound mob'
  });
  // res.send('it works');
});

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
  jwt.sign({user}, 'secretkey', (err, token)=>{
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

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});