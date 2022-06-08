//Import mongoose
const mongoose = require('mongoose')

const ExampleSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required'], //sets wether or not it's required to put in the db
        minlength: [3, 'Name must be at least 3 characters']
    },
    example2:{
        type: Number,
        min: [0, 'Must be positive'],
        max: [5, '5 is the max']
    }
})
module.exports.Model = mongoose.model('ExampleModel', ExampleSchema)