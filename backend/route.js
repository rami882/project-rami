const { /* addMovie ,*/ getMovies , editMovies, deleteMovie , } = require("./controler/movie ctrl")
const Router = require("express").Router()
//Router.post("/add",addMovie)
Router.get("/get",getMovies)
Router.put("/edit/:id", editMovies)
Router.delete("/delete/:id",deleteMovie)



module.exports = Router