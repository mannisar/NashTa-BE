const model = require('../models/api')
const response = require('../helpers/response')

module.exports = {
    createNilai: async (req, res) => {
        try {
            const name = req.body.name
            const data = { name }

            const result = await model.createNilai(data)
            response.success(res, 200, result)
        } catch (err) {
            response.error(res, 404, 'Failed!')
        }
    },
    updateNilai: async (req, res) => {
        try {
            const id = req.params.id
            const name = req.body.name
            const data = { name }

            const result = await model.updateNilai(data, id)
            response.success(res, 200, result)
        } catch (err) {
            response.error(res, 404, 'Failed!')
        }
    },
    deleteNilai: async (req, res) => {
        try {
            const id = req.params.id

            const result = await model.deleteNilai(id)
            response.success(res, 200, result)
        } catch (err) {
            response.error(res, 404, 'Failed!')
        }
    }
}
