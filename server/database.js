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
  // adds session info to session collection
  addSession: (sessionid, sessiontoken, googleid) => {
    return db.any('INSERT INTO sessions (sessionid, sessiontoken, googleid) VALUES ($1, $2, $3)', [sessionid, sessiontoken, googleid]);
  },
  // adds a dj song session to the djsong database
  createDjSongSession: (songid, starttime, duration, googleid) => {
    return db.any('INSERT INTO djsonginfo (songid, starttime, duration, googleid) VALUES ($1, $2, $3, $4)', [songid, starttime, duration, googleid]);
  },
  // get dj song session in the djsong database
  getDjSongById: id => db.any('SELECT * FROM djsonginfo WHERE googleid = $1', id),
  // update dj song
  changeDjSong: (songid, starttime, duration, googleid) => {
    return db.any('UPDATE djsonginfo SET songid = ($1), starttime = ($2), duration = ($3) WHERE googleid = ($4)', [songid, starttime, duration, googleid]);
  },
  // update tok session info for listener
  changeSession: (sessionid, sessiontoken, googleid) => {
    return db.any('UPDATE sessions SET sessionid = ($1), sessiontoken = ($2) WHERE googleid = ($3)', [sessionid, sessiontoken, googleid]);
  },
  // fetch tok session info of listener
  getSessionInfoById: id => db.any('SELECT * FROM sessions WHERE googleid = $1', id),
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