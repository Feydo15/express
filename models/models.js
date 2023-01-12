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




const genreSchema = new Schema({
    title: {
        type: String,
        required: false 
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artist"
    }
},{});
const Genre = mongoose.model('Genre', genreSchema);



module.exports = {Artist, Genre};