const { Player } = require('./../model/player.model')

//Get all
module.exports.allPlayer= (req, res) =>{
    Player.find({})
        .then(players => res.json(players))
        .catch(err => res.status(400).json(err))
}

//Get one
module.exports.onePlayer= (req, res) =>{
    Player.findOne({_id: req.params.id })
        .then(Player=> res.json(player))
        .catch(err => res.status(400).json(err))
}

//Create
module.exports.createPlayer= (req, res) =>{
    Player.create(req.body)
    .then(player=> res.json(player))
    .catch(err => res.status(400).json(err))
}

//Update
module.exports.updatePlayer= (req, res) =>{
    Player.findOneAndUpdate({_id: req.params.id}, 
        req.body,
        {new: true, runValidators: true})
        .then(player=> res.json(player))
        .catch(err => res.status(400).json(err))
}

//Delete
module.exports.deletePlayer= (req, res) =>{
    Player.findOneAndDelete({_id: req.params.id})
    .then(player => res.json(player))
    .catch(err => res.status(400).json(err))
}