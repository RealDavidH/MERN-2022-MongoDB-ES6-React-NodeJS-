const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minlength: [3, "Name must be at least 3 characters"]
    },
    position: {
        type: String,
        required: [true, 'Position is required'],
        minlength: [3, 'Position must be at least 3 characters']
    },
    games: {
        type: Array,
        default: [0,0,0]
    }
})

module.exports.Player = mongoose.model('Player', PlayerSchema )