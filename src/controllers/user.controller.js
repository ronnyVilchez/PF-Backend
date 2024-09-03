import { pool } from "../config/db.js"


export const usersAll = async (req, res) => {
    try {
        const userAll = await pool.execute('SELECT * FROM users')
        res.status(200).json(userAll[0]);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}