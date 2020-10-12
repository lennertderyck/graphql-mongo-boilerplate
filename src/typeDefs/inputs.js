const { gql } = require('apollo-server');

module.exports = gql`
    input ExampleInput {
        id: ID!
        title: String
        addedOn: String
        editedOn: String
    }

    input AnotherExampleInput {
        id: ID
        title: String
        url: String
    }
`;
