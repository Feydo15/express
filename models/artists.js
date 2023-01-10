const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const awardsSchema = new Schema({
    awardName: String,
    awardNum: Number
},{})

const artistSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false 
    },
    awards:{
        type: [awardsSchema],
        required: false 
    },
    followers:{
        type: Number,
        required: false
    }
},{});
const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;