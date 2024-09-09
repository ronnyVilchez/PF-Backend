import { pool } from '../config/db.js'

export class IncidentModel {
  static async incdAll () {
    const incdAll = await pool.execute('SELECT * FROM incident')
    return incdAll[0]
  }

  static async incdId (id) {
    const incdAll = await pool.execute('SELECT * FROM incident WHERE id= ?', [id])
    return incdAll[0]
  }

  static async incdCreate ({ userId, title, description, ubication, type, imagens, status, date }) {
    const sql = ['userId,title,description,ubication,type,status,date']
    const values = [userId, title, description, ubication, type, status, date]
    const insert = ['?,?,?,?,?,?,?']

    if (imagens) {
      sql.push('imagens')
      values.push(imagens)
      insert.push('?')
    }

    const stsql = sql.join(',')
    const stins = insert.join(',')

    const incdNew = await pool.execute(`INSERT INTO incident (${stsql}) values (${stins})`, values)
    return incdNew[0]
  }

  static async incdUpdate ({ title, description, ubication, type, imagens, status, date, id }) {
    const sql = []
    const values = []

    if (title) {
      sql.push('title=?')
      values.push(title)
    }

    if (description) {
      sql.push('description=?')
      values.push(description)
    }

    if (ubication) {
      sql.push('ubication=?')
      values.push(ubication)
    }

    if (type) {
      sql.push('type=?')
      values.push(type)
    }

    if (imagens) {
      sql.push('imagens=?')
      values.push(imagens)
    }

    if (status) {
      sql.push('status=?')
      values.push(status)
    }

    if (date) {
      sql.push('date=?')
      values.push(date)
    }
    if (id) {
      values.push(id)
    }

    const stsql = sql.join(',')

    const incdUp = await pool.execute(`UPDATE incident SET ${stsql} WHERE id = ?`, values)
    return incdUp[0]
  }

  static async incdFrUs (id) {
    const incdUs = await pool.execute('SELECT * FROM incident WHERE userId=?', [id])
    return incdUs[0]
  }

  static async incdDel (id) {
    const incDel = await pool.execute('DELETE FROM incident WHERE id= ?', [id])
    return incDel[0]
  }
}
