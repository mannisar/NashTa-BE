const express = require('express')
const Route = express.Router()

const apiRouter = require('./api')

Route
    .use('/api', apiRouter)

module.exports = Route