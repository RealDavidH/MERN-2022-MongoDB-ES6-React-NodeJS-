const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/team_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(`Something went wrong. Error: ${err}`))