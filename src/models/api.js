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
    updateNilai: (data, id) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE nilai SET ? WHERE id = ?', [data, id])
            db.query('SELECT * FROM nilai', (err, result) => {
                if (err) reject(new (Error)())
                resolve(result)
            })
        })
    },
    deleteNilai: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM nilai', (err, result) => {
                if (err) reject(new (Error)())
                resolve(result)
            })
        })
    }
}
