const pubsub = require('./pubsub');

module.exports = {
    Subscription: {
        exampleAdded: {
            subscribe: () => pubsub.asyncIterator('EXAMPLE_ADDED'),
        },
    },
};
