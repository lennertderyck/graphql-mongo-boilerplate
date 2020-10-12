const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

module.exports = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'This will represent a date',
        parseValue: (value) => {
            return new Date(value);
        },
        serialize: () => {
            return value.getTime();
        },
        parseLiteral: () => {
            if (ast.kind == Kind.INT) return new Date(parseInt(ast.value));
        }, // time naar Int
    }),
};
