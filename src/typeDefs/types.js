const { gql } = require('apollo-server');

module.exports = gql`
    scalar Date

    type Example {
        id: ID!
        title: String
        addedOn: String
        editedOn: String
    }

    type AnotherExample {
        id: ID
        title: String
        url: String
    }
`;
