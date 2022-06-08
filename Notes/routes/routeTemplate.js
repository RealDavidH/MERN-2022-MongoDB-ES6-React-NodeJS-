const controller = require('../controllers/controllerTemplate')

module.exports = (app) =>{
    app.get("/test", controller.testApi)
}