const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema for data object structure
const locationSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Location = mongoose.model('location', locationSchema);

module.exports = Location;