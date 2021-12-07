const Movie = require("../modal/modal")
const fetchMovie = async(req,res) =>{
    const newmovie = new Movie(req.body)
    try{
    const addedmovie = await newmovie.save()
    res.status(200).send(addedmovie)
    }
    catch(err){
        res.status(500).send(err.message)
    }
}
const fetchMovies = async(req,res )=>{
    try{
    const movies = await Movie.find()
    res.status(200).send(movies)

    }
    catch(err){
        res.status(500).send(err.message)
    }
}
const setLoading = async(req,res)=>{
    const id = req.params.id 
    try{
        const editedMovie = await Movie.findByIdAndUpdate(id,{...req.body},{new:true})
        res.status(200).send(editedMovie)
    }
    catch(err){
        res.status(500).send(err.message)
    }
} 
const searchMovie = async (req,res) => {
        const id = req.params.id 
        try {
            const deletedMovie = await Movie.findByIdAndDelete(id)
            res.status(200).send(deletedMovie)
        }
        catch (error) {
            res.status(500).send(error.message)
        }
}
module.exports = {fetchMovie,fetchMovies,setLoading, searchMovie}