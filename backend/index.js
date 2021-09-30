const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const user = require('./api/user.js')


app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .then('./persistence')
    .into(app)

app.listen(8000, () => {
    console.log('Backend executando....')
})

