const express = require('express');
const path = require('path');
const { createUser } = require('./database');
const app = express();



app.get('/api', (req, res) => {
res.send('it works');
})
module.exports = app.listen(3000, ()=>{
  console.log('listening on 3000 ')
})
