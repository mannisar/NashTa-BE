const express = require('express')
const Route = express.Router()

// check token.
// const { middleware } = require('../auth')

const {
    createNilai,
    updateNilai,
    deleteNilai,
} = require('../controllers/api')

Route
    .post('/nilai', createNilai)
    .put('/nilai', updateNilai)
    .delete('/nilai/:id', deleteNilai)

module.exports = Route
