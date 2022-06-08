const {Jokes} = require('./../models/jokes.model')


//Get all
module.exports.allJoke = (req, res) =>{
    Jokes.find({})
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err))
}

//Get one
module.exports.oneJoke = (req, res) =>{
    Jokes.findOne({_id: req.params.id })
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

//Create
module.exports.createJoke = (req, res) =>{
    Jokes.create(req.body)
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
}

//Update
module.exports.updateJoke = (req, res) =>{
    Jokes.findOneAndUpdate({_id: req.params.id}, 
        req.body,
        {new: true, runValidators: true})
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

//Delete
module.exports.deleteJoke = (req, res) =>{
    Jokes.findOneAndDelete({_id: req.params.id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
}