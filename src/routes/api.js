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
    .post('/', createNilai)
    .patch('/:id', updateNilai)
    .delete('/:id', deleteNilai)

module.exports = Route
