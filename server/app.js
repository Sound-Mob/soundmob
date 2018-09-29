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
app.post('/api/posts', (req, res) => {
  res.json({
    message: 'post created...'
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

app.listen(3000, ()=>{
  console.log('listening on 3000');
});

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});