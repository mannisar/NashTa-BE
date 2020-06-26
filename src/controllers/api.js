const model = require('../models/api')
const response = require('../helpers/response')

module.exports = {
    createNilai: async (req, res) => {
        try {
            const id_mahasiswa = req.body.id_mahasiswa
            const id_mata_kuliah = req.body.id_mata_kuliah
            const nilai = req.body.nilai
            const keterangan = req.body.keterangan
            const data = { id_mahasiswa, id_mata_kuliah, nilai, keterangan }

            const result = await model.createNilai(data)
            response.success(res, 200, result)
        } catch (err) {
            response.error(res, 404, 'Failed!')
        }
    },
    updateNilai: async (req, res) => {
        const check = await model.checkIdMhs(req.body.id_mahasiswa)
        const dataNilai = check[0]
        const id_mahasiswa = req.body.id_mahasiswa
        const id_mata_kuliah = req.body.id_mata_kuliah
        const nilai = req.body.nilai
        const keterangan = req.body.keterangan
        const data = { id_mahasiswa, id_mata_kuliah, nilai, keterangan }

        const result = await model.updateNilai(data, dataNilai.id_mahasiswa)
        response.success(res, 200, result)
        try {
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
    },
    get1: async (req, res) => {
        try {
            const result = await model.get1()
            response.success(res, 200, result)
        } catch (err) {
            response.error(res, 404, 'Failed!')
        }
    },
}
