import { pool } from "../config/db.js";

export class UserModel {

    static async userAll() {
        const userAll = await pool.execute('SELECT * FROM users')
        return userAll[0]
    }
    static async userId(id) {
        const userAll = await pool.execute('SELECT * FROM users WHERE userId=?',[id])
        return userAll[0]
    }
}