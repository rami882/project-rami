const express = require("express")
const app = express()
const Router = require("./route")
const configDB = require("./config/configDB")



require('dotenv').config({ path: './config/.env' })

//const Movie = require("./modal/modal")


configDB()
app.use(express.json())
app.use("/",Router)

const PORT = process.env.PORT || 5000

app.listen(PORT,err => err ? console.error(err) : console.log(`Server is running on port ${PORT}`))