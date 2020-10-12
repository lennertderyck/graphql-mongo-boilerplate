const playlists = require('../data/playlists');
const songsData = require('../data/songs');

module.exports = {
    Query: {
        example: () => playlists,
    },

    // edit specific values from query default resolver
};
