const pgp = require('pg-promise')();

const cn = {
  host: 'localhost', // server name or IP address;
  port: 5432,
  database: 'soundmob',
  user: 'josephdelahoussaye'
};
const db = pgp(cn); // database instance;
// adds a user to the user database
// db.any('INSERT INTO users (name) VALUES (joey)');
module.exports = {
  createUser: () =>
    db.any('INSERT INTO users (name) VALUES ($1)', ['jan']),
  // select and return user name from id:
  getUsers: ()=>
    db.any('SELECT name FROM users')
      .then(user => {
        console.log(user); // print user name;
      })
      .catch(error => {
        console.log(error); // print the error;
      }),
};