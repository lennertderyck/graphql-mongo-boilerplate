const { Schema, Mongoose } = require('mongoose');

module.exports = new Schema({
    title: String,
    addedOn: String,
    editedOn: String,
});
