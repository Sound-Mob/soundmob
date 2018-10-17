const router = require('express').Router();
const {
  createPlaylist,
  searchSong,
  playlist,
  insertSong,
  searchDetailsArray,
} = require('../util');
const { getUserById } = require('../database');

router.get('/', (req, res) => {
  const id = req.session.passport.user;
  getUserById(id).then((data) => {
    const body = data[0];
    body.photo = req.session.photo;
    res.send(body);
  });
});
// get dj's playlists from youtube
router.get('/playlist', (req, res) => {
  const id = req.session.accessToken;
  playlist(id).then((playlistInfo) => {
    // console.log({playlistInfo})
    res.send(playlistInfo);
  });
  // res.sendStatus(200);
});
router.post('/nameCast', (req, res) => {
  // console.log(req.body);
  createPlaylist(req.session.accessToken, req.body).then((data) => {
    // console.log(data);
    res.send(data);
  });
});
router.post('/searchSong', (req, res) => {
  // console.log(req.body);
  searchSong(req.session.accessToken, req.body.song).then((data) => {
    // console.log(data);
    res.send(data);
  });
});
router.post('/insertSong', (req, res) => { 
  insertSong(req.session.accessToken, req.body)
    .then((data) => {
      res.send(data);
    }).catch((error) => {
      console.error(error);
    });
});
router.post('/songDetails', (req, res) => {
  searchDetailsArray(req.body.songs, req.session.accessToken)
    .then(({ items }) => {
      const castInfo = items.map((song) => {
        const { snippet } = song;
        return { name: snippet.title, photo: snippet.thumbnails.medium.url };
      });
      res.send(castInfo);
    });
});

module.exports = router;
