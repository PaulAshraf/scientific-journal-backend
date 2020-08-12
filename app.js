const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const config = require('./config')
const { connectMongo } = require('./loaders/mongo')
const journal = require('./api/journal')
const home = require('./api/home')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())

connectMongo()

app.use('/',home)
app.use('/journal',journal)

const port = config.port || 3000
app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})