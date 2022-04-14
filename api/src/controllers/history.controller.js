const pool = require('../config/db.connection')

exports.getHistory = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM history ORDER BY date DESC")
        res.status(200).json({ status: "OK", response: result.rows })
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "ERROR", response: "Error interno al obtener el historial" })
    }
}

exports.createHistory = async (req, res) => {
    try {
        const {date, status} = req.body
        const result = await pool.query("INSERT INTO history(date, status) VALUES($1,$2)", [date, status])
        res.status(200).json({ status: "OK", response: "El historial se ha guardado correctamente." })
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "ERROR", response: "Error interno al guardar el historial" })
    }
}