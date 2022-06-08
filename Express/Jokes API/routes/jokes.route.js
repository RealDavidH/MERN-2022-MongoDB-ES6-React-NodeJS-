const JokesController = require('./../controllers/jokes.controller')


module.exports = (app) =>{
    app.get('/api/alljokes', JokesController.allJoke)
    app.get('/api/joke/:id', JokesController.oneJoke)
    app.post('/api/createjoke', JokesController.createJoke)
    app.put('/api/updatejoke/:id', JokesController.updateJoke)
    app.delete('/api/deletejoke/:id', JokesController.deleteJoke)
}