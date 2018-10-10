const rp = require('request-promise');

/*
housing for utility functions

*/

/* a function to make calls for playlist create and playlist retreive
* a function to  pull the playlist into the room
*
*/
module.exports = {
// TODO make the token dynamic
  playlist: (token) => {
    const options = {
      uri: 'https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true',
      headers: {
        'User-Agent': 'Request-Promise',
        Authorization: `Bearer ${token}`,
      },
      json: true, // Automatically parses the JSON string in the response
    };
    return rp(options);
  },
  createPlaylist: (token, obj) => {
    const options = {
      method: 'POST',
      uri: 'https://www.googleapis.com/youtube/v3/playlists?part=snippet',
      body: {
        snippet: {
          title: 'New playlist',
          description: 'Sample playlist for Data API',
        },
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: true,
    };
    return rp(options);
  },
  searchSong: (token, song) => {
    const options = {
      uri: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${song}&type=video`,
      headers: {
        'User-Agent': 'Request-Promise',
        Authorization: `Bearer ${token}`,
      },
      json: true,
    };
    return rp(options);
  },
  searchDetails: (token, id) => {
    console.log({ id });
    // id = '9bZkp7q19f0';
    const options = {
      uri: `https://www.googleapis.com/youtube/v3/videos?id=${id}&part=contentDetails`,
      headers: {
        'User-Agent': 'Request-Promise',
        Authorization: `Bearer ${token}`,
      },
      json: true,
    };
    return rp(options);
  },
  insertSong: (token, song) => {
    const options = {
      method: 'POST',
      uri: 'https://www.googleapis.com/youtube/v3/playlists?part=snippet',
      body: {
        snippet: {
          playlistId: 'PLR4epTa34lZwzBUMi10kEArbGLhwJ9fv6',
          resourceId: {
            kind: 'youtube#video',
            videoId: '74pZUgCOJoE',
          },
        },
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: true,
    };
    return rp(options);
  },
  playlistIDs: (token) => {
    const options = {
      uri:`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLR4epTa34lZzzIbqRVWGRdtbpB_UlvMdl`,
      headers: {
        'User-Agent': 'Request-Promise',
        Authorization: `Bearer ${token}`,
      },
      json: true,
    };
    return rp(options);
  },
  videoIDArray: (array) => {
    return array.map((item) => {
      const { contentDetails } = item;
      const { videoId } = contentDetails;
      return videoId;
    });
  },
  searchDetailsArray: (array, token) => {
    const options = {
      uri: 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=',
      headers: {
        'User-Agent': 'Request-Promise',
        Authorization: `Bearer ${token}`,
      },
      json: true,
    };
    array.forEach((id) => {
      options.uri += `${id}`;
    });
    return rp(options);
  },
  getSoundBoard: (token) => {
    const options = {
      uri: 'https://www.googleapis.com/storage/v1/b/djtannertestbucket/o',
      headers: {
        'User-Agent': 'Request-Promise',
        Authorization: `Bearer ${token}`,
      },
      json: true,
    };
    return rp(options);

  }

  }
