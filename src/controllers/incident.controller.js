import { pool } from "../config/db.js"


export const incidentAll = async (req, res) => {
    try {
        const incdAll = await pool.execute('SELECT * FROM incident')
        res.status(200).json(incdAll[0]);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}