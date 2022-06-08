const {Model} = require('./../models/modelTemplate')

module.exports.testApi = (req, res) => {
    res.json({message: "test message"})
}