const express = require('express');
const path = require('path');
const { createUser } = require('./database');
const { google } = require('googleapis');
const app = express();
const { Youtube, ClientID, ClientSecret, RedirectURL} = require('./config.js');

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
module.exports = app.listen(3000, ()=>{
  console.log('listening on 3000 ')
})
