const playerController = require('./../controller/player.controller')

module.exports = (app) => {
    app.get('/api/all/players', playerController.allPlayer)
    app.get('/api/player/:id', playerController.onePlayer)
    app.post('/api/create/player', playerController.createPlayer)
    app.put('/api/update/player/:id', playerController.updatePlayer)
    app.delete('/api/delete/player/:id', playerController.deletePlayer)
}