const db = require('../configs/db')

module.exports = {
    createNilai: (data) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO nilai SET ?', data)
            db.query('SELECT * FROM nilai', data, (err, result) => {
                if (err) reject(new (Error)())
                resolve(result)
            })
        })
    },
    updateNilai: (data, id_mahasiswa) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE nilai SET ? WHERE id_mahasiswa = ?', [data, id_mahasiswa])
            db.query('SELECT * FROM nilai', (err, result) => {
                if (err) reject(new (Error)())
                resolve(result)
            })
        })
    },
    deleteNilai: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM nilai WHERE id_mahasiswa = ?', id)
            db.query('SELECT * FROM nilai', (err, result) => {
                if (err) reject(new (Error)())
                resolve(result)
            })
        })
    },
    get1: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT ms.id, ms.nama, mk.nama_matkul, n.nilai FROM mahasiswa ms INNER JOIN mata_kuliah mk ON ms.id = mk.id_mahasiswa INNER JOIN nilai n ON n.id_mahasiswa = ms.id AND n.id_mata_kuliah = mk.id', (err, result) => {
                if (err) reject(new Error(err))
                resolve(result)
            })
        })
    },
    checkIdMhs: (id_mahasiswa) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM nilai WHERE id_mahasiswa = ?', id_mahasiswa, (err, result) => {
                if (err) reject(new Error(err))
                resolve(result)
            })
        })
    }
}
