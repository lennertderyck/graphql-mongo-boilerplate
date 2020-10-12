const mutation = require('./mutation'),
    query = require('./query'),
    scalars = require('./scalars'),
    subscription = require('./subscription');

module.exports = [mutation, query, scalars, subscription];
