const express = require('express');
const path = require('path');

const app = express();


app.get('/api', (req, res) => {
res.send('it works');
})
app.listen(3000, ()=>{
  console.log('listening on 3000 ')
})