import { pool } from "../config/db.js"


export const commentstAll = async (req, res) => {
    try {
        const commentAll = await pool.execute('SELECT * FROM comment')
        res.status(200).json(commentAll[0]);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}