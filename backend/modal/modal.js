const mongoose = require("mongoose")
const movieSchema = new mongoose.Schema({
    moviename : {
        type : String,
        required :true
    },
    rating: {
        type:Number,
        required:true
    },
    type: {
        type:String,
        required:true
    },
    year: {
        type:Number,
        required:true
    },
    imdbRating:{
        type:Number,
        required:true
    },
    Director:{
        type:String,
        required:true
    },
    Writer:{
        type:String,
        required:true
    },
    Actors:{
        type:String,
        required:true
    },
    Plot:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Movie",movieSchema)