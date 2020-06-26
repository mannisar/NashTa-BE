const express = require('express')
const Route = express.Router()

// check token.
// const { middleware } = require('../auth')

const {
    createNilai,
    updateNilai,
    deleteNilai,
    get1,
} = require('../controllers/api')

Route
    .post('/nilai', createNilai)
    .put('/nilai', updateNilai)
    .delete('/nilai/:id', deleteNilai)
    .get('/get1', get1)

module.exports = Route
