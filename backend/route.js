const {  fetchMovie , fetchMovies , setLoading, searchMovie ,search } = require("./controler/movie ctrl")
const Router = require("express").Router()
Router.post("/add",fetchMovie)
Router.get("/get",fetchMovies)
Router.put("/edit/:id", setLoading)
Router.delete("/delete/:id",searchMovie)
Router.post("/search",search)


module.exports = Router