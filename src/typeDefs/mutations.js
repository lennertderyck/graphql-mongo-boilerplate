const { gql } = require('apollo-server');

module.exports = gql`
    type Mutation {
        addExample(example: ExampleInput): [Example]
    }
`;
