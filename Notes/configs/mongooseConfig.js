//1. import mongoose
const mongoose = require("mongoose")

//2. configure
mongoose.connect('mongodb://localhost/(Name of data base)',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connection to DB'))
    .catch(err => console.log(`Something went wrong. Error: ${err}`))