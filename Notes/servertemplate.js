//1. import all dependencies
const express = require('express')
const cors = require('cors')
const app = express()

//2. Configure express, cors, mongoose
// require("./configs/mongoose.config")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//3. routes and logic
// require("./routes/(name of route goes here)") -> do controller and routes first

//4. listen to port
app.listen(8000, ()=> console.log("Listening on port 8000"))
