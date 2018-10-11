const pgp = require('pg-promise')();

// define db params
const cn = {
  host: 'elmer.db.elephantsql.com', // server name or IP address;
  port: 5432,
  database: 'rvihxahs',
  user: 'rvihxahs',
  password: 'z9JNsx_qotALE0eELndojuSGuvDF-R6s'
};


const db = pgp(cn); // database instance;
// database methods
/* TODO's
* a function to save playlist
* refactor function for checking users/ creating users
*/
module.exports = {
  // adds a user to the user database
  createUser: (googleid, firstname, lastname, bio, followercount, followingcount, useractive, djactive) => {
    return db.any('INSERT INTO users (googleid, firstname, lastname, bio, followercount, followingcount, useractive, djactive) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [googleid, firstname, lastname, bio, followercount, followingcount, useractive, djactive]);
  },
  // adds a sound to samples collection
  addSound: (sample, id) => {
    return db.any('INSERT INTO soundsamples (binarydata, ownerid) VALUES ($1, $2)', [sample, id]);
  },
  // select and return users
  getUsers: () => {
  return  db.any('SELECT * FROM users')
      .then(user => {
        console.log(user); // print user name;
      })
      .catch(error => {
        console.log(error); // print the error;
      });
  },
  getUserById: id => db.any('SELECT * FROM users WHERE googleid = $1', id),

  getSoundsById: (id) => {
    return db.any(`SELECT * FROM soundsamples WHERE ownerid = $1`, id)
  }
};