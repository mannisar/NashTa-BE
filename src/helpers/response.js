module.exports = {
    success: (res, status, data) => {
        const result = {}

        result.status = status || 200
        result.result = data

        return res.status(result.status).json(result)
    },
    error: (res, status, msg) => {
        const result = {}

        result.status = status || 400
        result.msg = msg

        return res.status(result.status).json(result)
    }
}
