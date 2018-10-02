const pgp = require('pg-promise')();

// define db params
const cn = {
  host: 'localhost', // server name or IP address;
  port: 5432,
  database: 'soundmob',
  user: 'josephdelahoussaye'
};
const db = pgp(cn); // database instance;
// database methods
module.exports = {
  // adds a user to the user database
  createUser: (googleid, firstname, lastname, bio, samples, savedplaylists, followercount, followingcount) =>
    db.any('INSERT INTO users (googleid, firstname, lastname, bio, samples, savedplaylists, followercount, followingcount) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [googleid, firstname, lastname, bio, samples, savedplaylists, followercount, followingcount])
      .then(data => {
        console.log(data); // print data;
      })
      .catch(error => {
        console.log(error); // print the error;
      }),
  // select and return users
  getUsers: ()=>
    db.any('SELECT name FROM users')
      .then(user => {
        console.log(user); // print user name;
      })
      .catch(error => {
        console.log(error); // print the error;
      }),
};