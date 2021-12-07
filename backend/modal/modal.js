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
    }
})

module.exports = mongoose.model("Movie",movieSchema)