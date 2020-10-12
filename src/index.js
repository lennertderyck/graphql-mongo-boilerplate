/**
 * Importing some libraries
 */
require('dotenv/config');
const { MONGO_USER, MONGO_PWD, MONGO_DBNAME, MONGO_CLUSTER } = process.env;

const { ApolloServer } = require('apollo-server');
const { GraphQLScalarType, Kind } = require('graphql');
const mongoose = require('mongoose');

mongoose.connect(
    `mongodb+srv://${MONGO_USER}:${MONGO_PWD}@c${MONGO_CLUSTER}.gcp.mongodb.net/${MONGO_DBNAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

/**
 * Importing some other things
 */

// const resolvers = [queryResolvers, mutationResolvers];
const resolvers = require('./resolvers');

// const typeDefs = [types, queries, inputs, mutations];
const typeDefs = require('./typeDefs');

/**
 * Start ApolloServer (Am I working for NASA now??)
 */

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true, // ttps://graphql.org/learn/introspection/
    playground: true,
    context: ({ req }) => {
        // console.log(req);
        return { userAllowed: true };
    },
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected!');
    server
        .listen({
            port: process.env.PORT || 4000,
        })
        .then(({ url }) => {
            console.log(`Server started at ${url}`);
        });
});
