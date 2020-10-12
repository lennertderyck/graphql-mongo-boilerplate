const playlistsData = require('../data/playlists');
const pubsub = require('./pubsub');
const { Example, Song } = require('../mongo/models');

module.exports = {
    Mutation: {
        addExample: async (parent, { example }, context) => {
            console.log(example);
            try {
                pubsub.publish('EXAMPLE_ADDED', { exampleAdded: example });

                await Example.create({ ...example });
                return await Example.find();
            } catch (error) {
                console.log('it went tits up', error);
            }
        },
    },
};
