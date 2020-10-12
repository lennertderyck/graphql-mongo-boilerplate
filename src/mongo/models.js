const { model } = require('mongoose');

const ExampleSchema = require('./schemas/example');

const Example = model('Example', ExampleSchema);

module.exports = {
    Example,
};
