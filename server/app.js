const express = require('express');
const path = require('path');
const { createUser } = require('./database');
const app = express();



app.get('/api', (req, res) => {
<<<<<<< HEAD
res.send('it works');
})
module.exports = app.listen(3000, ()=>{
  console.log('listening on 3000 ')
})
=======
  res.send('it works');
});

app.listen(3000, ()=>{
  console.log('listening on 3000');
});
>>>>>>> 2e5f15bfeb2e0be26e98d0b21ee36dc91816932f
